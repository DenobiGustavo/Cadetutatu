import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import prisma from "../config/prisma.js"

export async function register(req, res) {
    const { name, email, password } = req.body

    const adminExists = await prisma.admin.findUnique({
        where: { email }
    })

    if (adminExists) {
        return res.status(400).json({ message: "Admin já cadastrado" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const admin = await prisma.admin.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })

    res.status(201).json({
        id: admin.id,
        name: admin.name,
        email: admin.email
    })
}

export async function login(req, res) {
    const { email, password } = req.body

    const admin = await prisma.admin.findUnique({
        where: { email }
    })

    if (!admin) {
        return res.status(401).json({ message: "Email ou senha inválidos" })
    }

    const passwordMatch = await bcrypt.compare(password, admin.password)

    if (!passwordMatch) {
        return res.status(401).json({ message: "Email ou senha inválidos" })
    }

    const token = jwt.sign({ id: admin.id, email: admin.email },
        process.env.JWT_SECRET, { expiresIn: "1d" }
    )

    res.json({
        token,
        admin: {
            id: admin.id,
            name: admin.name,
            email: admin.email
        }
    })
}