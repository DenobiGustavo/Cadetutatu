import prisma from "../config/prisma.js";

export async function createSubmission(req, res) {
  try {
    const { animalName, description, authorName, authorEmail } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : req.body.imageUrl;

    if (!animalName || !imageUrl) {
      return res.status(400).json({ message: "Nome do animal e imagem sao obrigatorios" });
    }

    const submission = await prisma.photoSubmission.create({
      data: {
        animalName,
        description,
        authorName,
        authorEmail,
        imageUrl,
        userId: req.user?.id,
      },
    });

    res.status(201).json(submission);
  } catch (error) {
    res.status(500).json({ message: "Erro ao enviar foto" });
  }
}

export async function getPendingSubmissions(req, res) {
  try {
    const submissions = await prisma.photoSubmission.findMany({
      where: { status: "PENDING" },
      orderBy: { createdAt: "desc" },
    });

    res.json(submissions);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar fotos pendentes" });
  }
}

export async function approveSubmission(req, res) {
  try {
    const submission = await prisma.photoSubmission.update({
      where: { id: req.params.id },
      data: { status: "APPROVED" },
    });

    res.json(submission);
  } catch (error) {
    res.status(500).json({ message: "Erro ao aprovar foto" });
  }
}

export async function rejectSubmission(req, res) {
  try {
    const submission = await prisma.photoSubmission.update({
      where: { id: req.params.id },
      data: { status: "REJECTED" },
    });

    res.json(submission);
  } catch (error) {
    res.status(500).json({ message: "Erro ao rejeitar foto" });
  }
}
