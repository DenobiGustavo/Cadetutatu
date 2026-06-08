import prisma from "../config/prisma.js"

export async function getSpecies(req, res) {
    const species = await prisma.species.findMany({
        orderBy: { name: "asc" }
    })

    res.json(species)
}

export async function getSpeciesById(req, res) {
    const { id } = req.params

    const species = await prisma.species.findUnique({
        where: { id }
    })

    if (!species) {
        return res.status(404).json({ message: "Espécie não encontrada" })
    }

    res.json(species)
}

export async function createSpecies(req, res) {
    const species = await prisma.species.create({
        data: req.body
    })

    res.status(201).json(species)
}

export async function updateSpecies(req, res) {
    const { id } = req.params

    const species = await prisma.species.update({
        where: { id },
        data: req.body
    })

    res.json(species)
}

export async function deleteSpecies(req, res) {
    const { id } = req.params

    await prisma.species.delete({
        where: { id }
    })

    res.json({ message: "Espécie removida com sucesso" })
}