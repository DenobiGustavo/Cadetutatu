import fs from 'fs';
import path from 'path';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando o seeding de dados...");

  // Lendo dados2.jsx
  const dadosPath = path.resolve(import.meta.dirname, '../../src/pages/Dados/dados2.jsx');
  const fileContent = fs.readFileSync(dadosPath, 'utf-8');
  const arrayString = fileContent.substring(fileContent.indexOf('['), fileContent.lastIndexOf(']') + 1);
  const dados2 = eval(`(${arrayString})`);

  // Lendo imageresolver.jsx
  const resolverPath = path.resolve(import.meta.dirname, '../../src/pages/Dados/imageresolver.jsx');
  const resolverContent = fs.readFileSync(resolverPath, 'utf-8');
  const imagesObjStr = resolverContent.substring(resolverContent.indexOf('const images = ') + 15, resolverContent.lastIndexOf('};') + 1);
  const imagesObj = eval(`(${imagesObjStr})`);

  let count = 0;

  for (const item of dados2) {
    const sp = item.specie;
    const category = (sp.division === 'Plantae') ? 'PLANTA' : 'ANIMAL';
    let animalType = null;
    
    if (category === 'ANIMAL') {
      animalType = (Number(sp.division) === 1) ? 'VERTEBRADO' : 'INVERTEBRADO';
    }

    const cleanName = sp.name ? sp.name.trim().replace(/\.$/, "") : "";
    const imgResolved = imagesObj[cleanName] || "";
    const finalImageUrl = imgResolved || sp.image_url || null;

    try {
      await prisma.species.create({
        data: {
          id: item.id,
          coordinates: item.coordinates ? JSON.stringify(item.coordinates) : null,
          iconColor: item.icon_color,
          name: sp.name || "Sem Nome",
          scientificName: sp.scientific_name,
          knownNames: sp.known_names,
          family: sp.family,
          food: sp.food,
          geographicDistribution: sp.geographic_distribution,
          habitat: sp.habitat,
          habits: sp.habits,
          orderName: sp.order,
          curiosities: sp.curiosities,
          imageUrl: finalImageUrl,
          reference: sp.reference,
          category: category,
          animalType: animalType
        }
      });
      count++;
      console.log(`[+] Adicionado: ${sp.name} (${category})`);
    } catch (err) {
      console.error(`Erro ao adicionar ${sp.name}: `, err.message);
    }
  }
  
  console.log(`\nSeed concluído com sucesso! Total inserido: ${count}`);
}

main()
  .catch(e => {
    console.error("Erro fatal no seed: ", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
