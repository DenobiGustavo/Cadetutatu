import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../config/prisma.js";

export async function registerUser(req, res) {
  try {
    const { name, email, password, profession } = req.body;

    const userExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      return res.status(400).json({ message: "Usuario ja cadastrado" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        profession,
      },
    });

    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      profession: user.profession,
    });
  } catch (error) {
    res.status(500).json({ message: "Erro ao cadastrar usuario" });
  }
}

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ message: "Email ou senha invalidos" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Email ou senha invalidos" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, type: "user" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        profession: user.profession,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Erro ao fazer login" });
  }
}

export async function getUserProfile(req, res) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        profession: true,
        address: true,
        bio: true,
        institution: true,
        specialty: true,
        profileImageUrl: true,
        createdAt: true,
        submissions: {
          orderBy: { createdAt: "desc" },
        },
      },
    });

    if (!user) {
      return res.status(404).json({ message: "Usuario nao encontrado" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar perfil do usuario" });
  }
}

export async function updateUserProfile(req, res) {
  try {
    const { name, profession, bio, institution, specialty } = req.body;

    const updateData = {};
    if (name) updateData.name = name;
    if (profession !== undefined) updateData.profession = profession;
    if (bio !== undefined) updateData.bio = bio;
    if (institution !== undefined) updateData.institution = institution;
    if (specialty !== undefined) updateData.specialty = specialty;
    if (req.file) updateData.profileImageUrl = `/uploads/${req.file.filename}`;

    const user = await prisma.user.update({
      where: { id: req.user.id },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        profession: true,
        address: true,
        bio: true,
        institution: true,
        specialty: true,
        profileImageUrl: true,
      },
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar perfil do usuario" });
  }
}
