import prisma from "../config/prisma.js";

export async function getSpecies(req, res) {
  try {
    const species = await prisma.species.findMany({
      orderBy: { name: "asc" },
    });

    res.json(species);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar especies" });
  }
}

export async function createSpecies(req, res) {
  try {
    const species = await prisma.species.create({
      data: req.body,
    });

    res.status(201).json(species);
  } catch (error) {
    res.status(500).json({ message: "Erro ao cadastrar especie" });
  }
}

export async function updateSpecies(req, res) {
  try {
    const species = await prisma.species.update({
      where: { id: req.params.id },
      data: req.body,
    });

    res.json(species);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar especie" });
  }
}

export async function deleteSpecies(req, res) {
  try {
    await prisma.species.delete({
      where: { id: req.params.id },
    });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Erro ao remover especie" });
  }
}
