import bcrypt from "bcryptjs";
import prisma from "../config/prisma.js";

const publicUserFields = {
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
  updatedAt: true,
};

export async function getAdminOverview(req, res) {
  try {
    const [researchers, pendingSubmissions, approvedSubmissions] = await Promise.all([
      prisma.user.count(),
      prisma.photoSubmission.count({ where: { status: "PENDING" } }),
      prisma.photoSubmission.count({ where: { status: "APPROVED" } }),
    ]);

    res.json({ researchers, pendingSubmissions, approvedSubmissions });
  } catch (error) {
    res.status(500).json({ message: "Erro ao carregar resumo administrativo" });
  }
}

export async function listResearchers(req, res) {
  try {
    const researchers = await prisma.user.findMany({
      select: {
        ...publicUserFields,
        _count: { select: { submissions: true } },
      },
      orderBy: { name: "asc" },
    });

    res.json(researchers);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar pesquisadores" });
  }
}

export async function createResearcher(req, res) {
  try {
    const { name, email, password, profession, address, bio, institution, specialty } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Nome, email e senha sao obrigatorios" });
    }

    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) {
      return res.status(400).json({ message: "Email ja cadastrado" });
    }

    const researcher = await prisma.user.create({
      data: {
        name,
        email,
        password: await bcrypt.hash(password, 10),
        profession: profession || "Pesquisador",
        address,
        bio,
        institution,
        specialty,
      },
      select: publicUserFields,
    });

    res.status(201).json(researcher);
  } catch (error) {
    res.status(500).json({ message: "Erro ao cadastrar pesquisador" });
  }
}

export async function updateResearcher(req, res) {
  try {
    const { name, email, password, profession, address, bio, institution, specialty } = req.body;
    const data = { name, email, profession, address, bio, institution, specialty };

    Object.keys(data).forEach((key) => {
      if (data[key] === undefined) delete data[key];
    });

    if (password) data.password = await bcrypt.hash(password, 10);

    const researcher = await prisma.user.update({
      where: { id: req.params.id },
      data,
      select: publicUserFields,
    });

    res.json(researcher);
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(400).json({ message: "Email ja cadastrado" });
    }
    res.status(500).json({ message: "Erro ao atualizar pesquisador" });
  }
}

export async function deleteResearcher(req, res) {
  try {
    await prisma.user.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Erro ao excluir pesquisador" });
  }
}

export async function listAllSubmissions(req, res) {
  try {
    const submissions = await prisma.photoSubmission.findMany({
      include: {
        user: {
          select: { id: true, name: true, email: true, profileImageUrl: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    res.json(submissions);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar envios" });
  }
}
