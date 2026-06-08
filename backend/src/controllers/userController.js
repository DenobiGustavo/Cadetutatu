import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import prisma from "../config/prisma.js"

export async function registerUser(req, res) {
    const { name, email, password, profession } = req.body

    const userExists = await prisma.user.findUnique({
        where: { email }
    })

    if (userExists) {
        return res.status(400).json({ message: "Usuário já cadastrado" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            profession
        }
    })

    res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        profession: user.profession
    })
}

export async function loginUser(req, res) {
    const { email, password } = req.body

    const user = await prisma.user.findUnique({
        where: { email }
    })

    if (!user) {
        return res.status(401).json({ message: "Email ou senha inválidos" })
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
        return res.status(401).json({ message: "Email ou senha inválidos" })
    }

    const token = jwt.sign({ id: user.id, email: user.email, type: "user" },
        process.env.JWT_SECRET, { expiresIn: "1d" }
    )

    res.json({
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            profession: user.profession
        }
    })
}

export async function getUserProfile(req, res) {
    try {
        const user = await prisma.user.findUnique({
            where: { id: req.user.id },
            select: { id: true, name: true, email: true, profession: true, createdAt: true }
        })

        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" })
        }

        res.json(user)
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar perfil do usuário" })
    }
}

export async function updateUserProfile(req, res) {
    try {
        const { name, password, profession } = req.body

        const updateData = {}
        if (name) updateData.name = name
        if (profession) updateData.profession = profession
        if (password) {
            updateData.password = await bcrypt.hash(password, 10)
        }

        const user = await prisma.user.update({
            where: { id: req.user.id },
            data: updateData,
            select: { id: true, name: true, email: true, profession: true }
        })

        res.json(user)
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar perfil do usuário" })
    }
}