import prisma from "../config/prisma.js"

export async function createSubmission(req, res) {
    const { animalName, description, authorName, authorEmail } = req.body

    if (!req.file) {
        return res.status(400).json({ message: "Imagem obrigatória" })
    }

    if (!animalName) {
        return res.status(400).json({ message: "Nome do animal obrigatório" })
    }

    const imageUrl = `/uploads/${req.file.filename}`

    const submission = await prisma.photoSubmission.create({
        data: {
            animalName,
            description,
            authorName,
            authorEmail,
            imageUrl,
            userId: req.user.id
        }
    })

    res.status(201).json({
        message: "Foto enviada e aguardando aprovação",
        submission
    })
}

export async function getApprovedSubmissions(req, res) {
    const submissions = await prisma.photoSubmission.findMany({
        where: {
            status: "APPROVED"
        },
        orderBy: {
            createdAt: "desc"
        }
    })

    res.json(submissions)
}

export async function getPendingSubmissions(req, res) {
    const submissions = await prisma.photoSubmission.findMany({
        where: {
            status: "PENDING"
        },
        orderBy: {
            createdAt: "desc"
        }
    })

    res.json(submissions)
}

export async function approveSubmission(req, res) {
    const { id } = req.params

    const submission = await prisma.photoSubmission.update({
        where: { id },
        data: {
            status: "APPROVED"
        }
    })

    res.json({
        message: "Foto aprovada com sucesso",
        submission
    })
}

export async function rejectSubmission(req, res) {
    const { id } = req.params

    const submission = await prisma.photoSubmission.update({
        where: { id },
        data: {
            status: "REJECTED"
        }
    })

    res.json({
        message: "Foto rejeitada com sucesso",
        submission
    })
}

export async function deleteSubmission(req, res) {
    const { id } = req.params

    await prisma.photoSubmission.delete({
        where: { id }
    })

    res.json({ message: "Envio removido com sucesso" })
}