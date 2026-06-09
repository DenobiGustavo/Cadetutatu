import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../config/prisma.js";

export async function loginAdmin(req, res) {
  try {
    const { email, password } = req.body;

    const admin = await prisma.admin.findUnique({
      where: { email },
    });

    if (!admin) {
      return res.status(401).json({ message: "Email ou senha invalidos" });
    }

    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Email ou senha invalidos" });
    }

    const token = jwt.sign(
      { id: admin.id, email: admin.email, type: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Erro ao fazer login" });
  }
}

export async function getAdminProfile(req, res) {
  try {
    const admin = await prisma.admin.findUnique({
      where: { id: req.admin.id },
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
      },
    });

    if (!admin) {
      return res.status(404).json({ message: "Administrador nao encontrado" });
    }

    res.json(admin);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar perfil administrativo" });
  }
}

export async function updateAdminProfile(req, res) {
  try {
    const { name, profession, address, bio, institution, specialty } = req.body;
    const data = { name, profession, address, bio, institution, specialty };

    Object.keys(data).forEach((key) => {
      if (data[key] === undefined) delete data[key];
    });

    if (req.file) data.profileImageUrl = `/uploads/${req.file.filename}`;

    const admin = await prisma.admin.update({
      where: { id: req.admin.id },
      data,
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

    res.json(admin);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar perfil administrativo" });
  }
}
