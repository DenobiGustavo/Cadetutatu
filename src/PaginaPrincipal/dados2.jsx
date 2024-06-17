import React from 'react';
import Dados from './dados'; // Caminho atualizado e correção de capitalização
import Header from './header';
import Titulo from './titulo';

const data = [
  {
    id: "5dca7f1a-3027-466c-a1da-727d8e9b4d32",
    coordinates: [-22.89323333333333, -49.65025555555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Hylidae",
      food: "Invertebrados pequenos como insetos, aranhas, ácaros e opiliões.",
      geographic_distribution:
        "Espécie distribuída em região neotropical, do Norte da Argentina e Uruguai até o Sul do México.",
      habitat:
        "Ocorrem em poças temporárias permanentes, se localizam em áreas abertas, em brejos associados à florestas e áreas abertas naturais e antrópicas",
      habits: "Noturno",
      order: "Anura",
      curiosities:
        "São anuros arborícolas, os machos desta espécie formam arenas de exibição e vocalizam\nna vegetação marginal dos corpos d’água, geralmente em gramíneas e arbustos até 40 cm\nde altura. As fêmeas depositam ovos agrupados aderidos a plantas aquáticas.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FPerereca-do-brejo1.png?alt=media&token=d40fbce4-b816-438a-89bf-94824dd7b85b",
      name: "Perereca-do-brejo",
      known_names: "Pererequinha-do-brejo",
      scientific_name: "Dendropsophus nanus",
      division: "Invertebrado",
      reference:
        "VAZ-SILVA, W. et al. Guia de identificação das espécies de anfíbios (Anura e Gymnophiona) do estado de Goiás e do Distrito Federal, Brasil Central. Sociedade Brasileira de Zoologia, 2020.\nANTONIAZZI, C. E. et al. Alimentación de dos especies de anfibios (Anura: Hylidae) en la estación de bajas temperaturas y su relación con la acumulación de energía en Santa Fe, Argentina. Revista de biología tropical, v. 61, n. 2, p. 875-886, 2013."
    }
  },
  {
    id: "1d010691-7c4d-4711-941b-ae594b764a28",
    coordinates: [-22.89232222222222, -49.64035555555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Cuculidae",
      food: "Se alimenta preferencialmente de invertebrados e de pequenos vertebrados, eventualmente pode se alimentar de frutas e sementes em épocas de seca, e quando há escassez de recursos pode se alimentar de artrópodes.",
      geographic_distribution:
        "Ocorre do sudeste do Amapá e do estuário amazônico à Bolívia, Argentina e Uruguai.",
      habitat: "Campos, lavouras e ambientes mais abertos.",
      habits:
        "Gosta de tomar sol e banhar-se na poeira, muitas vezes adquire plumagem fortemente tingida com a cor da terra do local.",
      order: "Cuculiformes",
      curiosities: "Se aglomeram em bandos para se esquentar, formando uma fileira de indivíduos.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FAnu-branco1.png?alt=media&token=ce81cbe2-97a0-4b90-9ce7-370f682d37c8",
      name: "Anu-branco",
      known_names: "rabo-de-palha, alma-de-gato, quiriru, pelincho",
      scientific_name: "Guira guira",
      division: "Invertebrado",
      reference:
        "GHERARD, B. Maciel, R. Guia de Aves. Fundação Ezequiel \nDias. Belo Horizonte: Imprensa Oficial, 2015. 64p. p. 8"
    }
  },
  {
    id: "84b1a98d-b387-4654-943f-08248488b68e",
    coordinates: [-22.89361111111111, -49.64055555555555],
    icon_color: "#1d4ed8",
    specie: {
      family: "Formicidae",
      food: "São animais onívoros, possuem hábitos de comer lixo e até carniça, é comum na mata ver um corpo de um animal morto coberto por Cephalotes.",
      geographic_distribution:
        "Possui uma ampla distribuição na Ámerica do Sul até países na Ámerica central.",
      habitat:
        "Normalmente são encontradas em árvores de grande porte, principalmente nas fendas das cascas.",
      habits: "Posuem hábitos diurnos. ",
      order: "Hymenoptera",
      curiosities:
        "Possuem um sistema de defesa do ninho  interessante, elas fecham a entrada do ninho colocando sua cabeça de lado onde possui espinhos de defesa.\n\nAs formigas possuem metamorfose completa.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/Formiga-tartaruga.1.png?alt=media&token=135bcb3e-fd7c-4967-bfb9-7bb361613a20",
      name: "Formiga-tartaruga.",
      known_names: "**",
      scientific_name: "Cephalotes sp.",
      division: "Vertebrado",
      reference:
        "Baccaro, Fabricio & Feitosa, Rodrigo & Fernández, Fernando & Fernandes, Itanna & Izzo, Thiago & Souza, Jorge & Solar, Ricardo. (2015). Guia para os gêneros de formigas do Brasil. 10.5281/zenodo.32912. "
    }
  },
  {
    id: "ec8df615-dc60-4ebe-be19-191903c3075f",
    coordinates: [-22.891944444444444, -49.640277777777776],
    icon_color: "#b91c1c",
    specie: {
      family: "Fringillidae",
      food: "Frugívoro.",
      geographic_distribution: "Ocorre em todas as regiões do Brasil.",
      habitat:
        "Habita a mata baixa e rala, o cerrado, a caatinga, cocais e matas serranas (região Sudeste).",
      habits:
        "Visita as áreas de vegetação mais densa na procura de insetos e frutos, sempre na parte alta da árvore ou arbustos maiores, costuma movimentar-se no meio da folhagem das copas, não se aproximando do chão na parte interna da ramagem.",
      order: "Passeriformes",
      curiosities:
        "As sementes ingeridas passam intactas pelo tubo digestivo e, quando eliminadas junto com as fezes, muitas vezes aderem a um tronco de árvore ou caem no solo onde germinam, dessa forma, são considerados excelentes dispersores de sementes. ",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FFim-fim1.png?alt=media&token=a14b59b4-39c5-4cad-b5b5-3aba689d299f",
      name: "Fim-fim",
      known_names: "**",
      scientific_name: "Euphonia chlorotica",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "1e4db909-0a4c-4fb3-9e9b-29a557c7b208",
    coordinates: [-22.889474444444442, -49.63774477777778],
    icon_color: "#b91c1c",
    specie: {
      family: "Fringillidae",
      food: "Alimenta-se de sementes, principalmente sementes de flores e pequenos frutos secos, de revestimento duro.\n\n",
      geographic_distribution:
        "Ocorre em praticamente em todo o Brasil, com exceção da Região Amazônica e Nordeste, também nos países Colômbia, Equador, Peru, Bolívia, Paraguai, Argentina e Uruguai.",
      habitat:
        "Vive em mata secundária aberta, árvores em plantações e quintais, pinhais e cerrados.",
      habits:
        "Nidifica tanto nas copas das araucárias mais altas como em cafeeiros, a fêmea constrói o ninho em forma de pequena tigela, com raízes finas, sem revestimento ou forrado de penas e crinas, na forquilha de árvores ou de arbustos, a pouca altura do solo, os ovos são brancos, com pouco azul-celeste, às vezes com algumas pintas pardas, a incubação também é tarefa da fêmea, podendo o macho alimentá-la durante este período",
      order: "Passeriformes",
      curiosities:
        "Essa ave canora tornou-se um pássaro raro, devido principalmente à intensa perseguição do comércio clandestino de aves silvestres.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FPintassilgo1.png?alt=media&token=f56c9b87-583c-4862-aed6-8c3bf21435a7",
      name: "Pintassilgo",
      known_names: "**",
      scientific_name: "Spinus magellanicus",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "7840cec6-db10-4cda-a202-039e8ee04839",
    coordinates: [-22.891388888888887, 50.35944444444445],
    icon_color: "#b91c1c",
    specie: {
      family: "Picidae",
      food: "Insetívoro.",
      geographic_distribution:
        "Ocorre da margem setentrional do baixo Amazonas ao Rio Grande do Sul, Paraguai e Argentina.",
      habitat:
        "Vive na Mata Atlântica, matas mesófilas, matas secas, matas de araucária, matas de galeria, caatinga, cerrados, eucaliptais, parques e zonas rurais arborizadas.",
      habits: "Encontrado geralmente em casais ou em grupos familiares de 3 a 4 indivíduos.",
      order: "Piciformes",
      curiosities:
        "Constrói seu ninho em cavidades escavadas em formigueiros arborícolas e em árvores secas, o macho incuba e cuida dos filhotes também.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FPica-pau-de-cabe%C3%A7a-amarela1.png?alt=media&token=cbc6bb4c-1165-46a0-9d9b-601a4d9ecb36",
      name: "Pica-pau-de-cabeça-amarela",
      known_names: "**",
      scientific_name: "Celeus flavescens",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "a53475d4-3dd0-43bf-99db-82a8bfc4abd4",
    coordinates: [-22.892312222222223, -49.64051455555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Picidae",
      food: "Insetívoro.",
      geographic_distribution:
        "Encontrado desde o nordeste do Brasil ao Uruguai, podendo ser avistado também no Paraguai, na Bolívia, na Argentina e no baixo Amazonas.",
      habitat: "Habita campos e cerrados, vive em casais e, às vezes em pequenos grupos.",
      habits:
        "Vivem aos pares ou em pequenos bandos. Costuma capturar insetos no solo, mas ao se sentir ameaçado procura árvores ou grandes pedras para se proteger.",
      order: "Piciformes",
      curiosities: "",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FPica-pau-do-campo1.png?alt=media&token=c7cad15e-2e08-4489-b3ea-5665299af618",
      name: "Pica-pau-do-campo",
      known_names: "**",
      scientific_name: "Colaptes campestris ",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "b5e47f1f-5f61-4e9b-ad9f-f6908f747d04",
    coordinates: [-22.88949144444444, -49.63779177777778],
    icon_color: "#b91c1c",
    specie: {
      family: "Trochilidae",
      food: "Se alimenta do néctar das flores, mas come também pequenos artrópodes.",
      geographic_distribution:
        "Encontrado em algumas partes do Brasil, também no Uruguai, Paraguai, Bolívia e Argentina.",
      habitat: "Florestas subtropicais ou tropicais úmidas de baixa altitude e savanas áridas.",
      habits:
        "Vive no interior e bordas das matas e cerradões, também acostumando-se a frequentar jardins e áreas arborizadas de cidades.",
      order: "Apodiformes",
      curiosities: "",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FBeija-flor-dourado1.png?alt=media&token=55e1a7aa-4764-40b7-b8b2-872a70af1e0d",
      name: "Beija-flor-dourado",
      known_names: "**",
      scientific_name: "Amazilia chrysura",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "492f6515-07ea-445c-af66-5cb48d28c32e",
    coordinates: [-22.889440244444444, -49.6425021],
    icon_color: "#b91c1c",
    specie: {
      family: "Tyrannidae",
      food: "Se alimenta principalmente de insetos capturados em voos curtos, mas também consome pequenos frutos.",
      geographic_distribution:
        "Ocorre da foz do Amazonas ao Paraná e Mato Grosso, com alguns registros em Santa Catarina.",
      habitat:
        "É típica de áreas campestres, passa a maior parte do tempo imóvel, pousada em árvores isoladas na paisagem, em postes de eletricidade ou mourões de cerca, habita o campo.",
      habits:
        "Vive solitária ou aos casais, sendo pouco notada por seu canto, dificilmente emitido. De dia é silenciosa, surpreende de madrugada com seu canto intenso.",
      order: "Passeriformes",
      curiosities: "É migratória. ",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FNoivinha-branca1.png?alt=media&token=87251935-1e46-490f-95c1-e200c02d2ce4",
      name: "Noivinha-branca",
      known_names: "**",
      scientific_name: "Xolmis irupero",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "97866182-e1d0-4d1f-bf86-af4c1702788c",
    coordinates: [-22.89363333333333, -49.65065555555556],
    icon_color: "#b91c1c",
    specie: {
      family: "Hylidae",
      food: "Artrópodes de pequeno porte. ",
      geographic_distribution:
        "Sua área de distribuição é ampla, ocorrendo desde as áreas baixas à leste dos Andes da Colômbia, passando pela Venezuela e Trindade, indo em direção ao Sul, através do Equador, Peru e Brasil até a Bolívia, Uruguai e Argentina.  ",
      habitat:
        " Podem ser encontrados em diversos ambientes como, mata de galeria, brejos associados às florestas e áreas\nabertas naturais e antropizadas, podendo se adaptar facilmente aos ambientes alterados.",
      habits: "Noturno",
      order: "Anura",
      curiosities:
        "Os machos começam a vocalizar ocupando ramos de vegetação marginal, arbustos, gramíneas, no chão, ou nas partes emersas de vegetação aquática no interior de lagoas ou poças, a alturas variadas de 0,2 a 1,0 m. Os machos podem ser encontrados vocalizando durante todo o ano, mas principalmente de outubro a janeiro (estação chuvosa). O coro é complexo e combates físicos entre machos são frequentes. As desovas são depositadas diretamente em corpos d’água lênticos onde os girinos se desenvolvem.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FPerereca-de-ampulheta1.png?alt=media&token=0ef1ff78-33ab-4219-a102-1d3f07bbfe9d",
      name: "Perereca-de-ampulheta",
      known_names: "Pererequinha-do-brejo",
      scientific_name: "Dendropsophus minutus",
      division: "Invertebrado",
      reference:
        "VAZ-SILVA, W. et al. Guia de identificação das espécies de anfíbios (Anura e Gymnophiona) do estado de Goiás e do Distrito Federal, Brasil Central. Sociedade Brasileira de Zoologia, 2020.\nLEIVAS, P. T. et al. Trophic niche of Dendropsophus minutus (Anura: Hylidae) in southern Brazil. Phyllomedusa: Journal of Herpetology, v. 17, n. 2, p. 267-272, 2018."
    }
  },
  {
    id: "41f7d726-1490-4f2a-b393-76220b0983d8",
    coordinates: [-22.89333333333333, -49.650555555555556],
    icon_color: "#b91c1c",
    specie: {
      family: "Hylidae ",
      food: "Consomem principalmente aracnídeos e insetos, como por exemplo borboletas e besouros.",
      geographic_distribution:
        "Amplamente distribuída na América do Sul, ocorrendo no nordeste da Argentina, norte do Uruguai, leste da Bolívia e leste do Paraguai.",
      habitat:
        "A espécie se adapta bem a ambientes antrópicos, podem ser vistos sobre o solo,  lages emersas e pedras marginais ou parcialmente ocultos sobre a vegetação\nherbácea e arbustiva ao longo das margens de riachos permanentes ou temporários com fundo\npedregoso ou arenoso, brejos ou poças permanentes.",
      habits: "Noturno",
      order: "Anura ",
      curiosities:
        "Essa espécie se diferencia por apresentar pequenas arredondas amareladas no região posterior da coxa. ",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FPerereca-cabrinha1.png?alt=media&token=98b9afc7-da8e-4ecc-8f0f-9b6dce0b2b15",
      name: "Perereca-cabrinha",
      known_names: "Perereca ",
      scientific_name: "Boana albopunctata",
      division: "Invertebrado",
      reference:
        "VAZ-SILVA, W. et al. Guia de identificação das espécies de anfíbios (Anura e Gymnophiona) do estado de Goiás e do Distrito Federal, Brasil Central. Sociedade Brasileira de Zoologia, 2020.\nPACHECO, E. O. et al. Diet of Boana albopunctata (Anura: Hylidae) in an Atlantic Forest fragment of southeastern Brazil. Phyllomedusa: Journal of Herpetology, v. 16, n. 1, p. 57-62, 2017."
    }
  },
  {
    id: "a69768c2-af97-4fb9-af1d-867af1c092dc",
    coordinates: [-22.891944444444444, -49.6475],
    icon_color: "#b91c1c",
    specie: {
      family: "Phyllomedusidae",
      food: "A alimentação geralmente é constituída de artrópodes. ",
      geographic_distribution: "Região sudeste e sul do Brasil, Argentina e Paraguai ",
      habitat: "Áreas florestadas, florestas secundárias e pastagens",
      habits:
        "É uma espécie arborícola com hábitos noturnos périodo no qual saem em busca de alimento e de se reproduzir.Possuem um comportamento de tanatose, um mecanismo de defesa no qual o animal se finge de morto permanecendo imóvel, essa estratégia de defesa desse animal faz com que ele sobreviva a ataque de predadores que preferem presas vivas.",
      order: "Anura ",
      curiosities:
        "Seu período de reprodução é associada a estações chuvosas, onde encontramos machos vocalizando (coaxando) em busca de atrair fêmeas para corte. São territorialistas ao disputar uma fêmea, depois da corte quando realizam o amplexo (abraço nupcial) podemos observar em alguns casos, vários machos tentando abraçar a mesma fêmea. Encontramos a desova em folhas enroladas  em formato de funil ficando pendentes em margens de lagoas, os ovos irão cair na água e se desenvolverão até a fase adulta. Sua toxina concentrada nas glândulas paratóides possuem um potencial farmacêutico ainda não explorado",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FPerereca-de-folhagem1.png?alt=media&token=822fe3ea-3dfb-4b0b-bdec-9000088ded66",
      name: "Perereca-de-folhagem",
      known_names: "Perereca-macaco, Perereca ",
      scientific_name: "Phyllomedusa tetraploidea",
      division: "Invertebrado",
      reference:
        "FISCH, F.; PORT, D. Localidades de ocorrência de Phyllomedusa tetraploidea Pombal & Haddad, 1992 (Anura: Hylidae: Phyllomedusinae) e novo registro para Santa Catarina, Brasil. Boletim do Museu de Biologia Mello Leitão (N. Sér.), v. 32, p. 13-28, 2013.\nPREUSS, J. F.; TOZETTI, A. M. Predation of Phyllomedusa tetraploidea (Anura, Hylidae) by Thamnodynastes strigatus (Serpentes, Dipsadidae). Herpetology Notes, v. 11, p. 945-947, 2018."
    }
  },
  {
    id: "6ae1a095-5384-47cb-aefc-58af544baa47",
    coordinates: [-22.89222222222222, -49.64055555555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Cuculidae",
      food: "São carnívoros se alimentam de invertebrados e pequenos vertebrados",
      geographic_distribution:
        "Ocorrem na porção leste da Ámerica do Sul e no sudoeste dos Estados Unidos.",
      habitat:
        "Paisagens abertas com moitas, jardins, pastos, lavouras e também são vistos em rodovias.",
      habits:
        "Fazem caças em bandos fazendo um semicírculo ficando afastados um dos outros. Se aglomeram em filas apertadas para se esquentar á noite e para se reproduzir.",
      order: "Cuculiformes",
      curiosities:
        "Possuem vocalizações diferentes, com pios de alarme quando estão em situação de perigo, e emitem um som baixo que da impressão de imitar outras aves. E são aves sem dimorfismo sexual. ",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FAnu-preto1.png?alt=media&token=287ee788-c8a2-46ce-8bf0-8f6d5ebac6b7",
      name: "Anu-preto",
      known_names: "coró-coró, anum e anu-pequeno",
      scientific_name: "Crothophaga ani",
      division: "Invertebrado",
      reference:
        "GHERARD, B. Maciel, R. Guia de Aves. Fundação Ezequiel\nDias. Belo Horizonte: Imprensa Oficial, 2015 64p. p. 19"
    }
  },
  {
    id: "982add06-54a7-4d7d-82a7-2610f5dfcb97",
    coordinates: [-22.89136111111111, -49.64036555555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Teiidae",
      food: "Sua alimentação é variada por conta de ser onívoro. Na natureza, se alimenta de frutas, ovos, larvas,  insetos, pequenos vertebrados e até carniça.",
      geographic_distribution:
        "São encontrados no sul da Amazônia ao norte da Patagônia, a leste dos Andes. No Brasil, está presente nos biomas Caatinga, Cerrado, Mata Atlântica e Amazônia, sendo que também foi introduzido em algumas ilhas.",
      habitat: "Áreas abertas e bordas de mata.",
      habits:
        "É terrestre e tem, atividade diurna e são ectotérmicos (expõe-se ao sol para elevar a temperatura corporal). Procura seu alimento ativamente no chão, com o auxílio da língua bífida, que capta partículas de cheiro do ar.",
      order: "Squamata (Escamados)",
      curiosities:
        "O teiú também solta a cauda quando e agarrado por algum predador, esse processo se chama autonomia. Sua reprodução ocorre depois da seca tendo uma ninhada em média de 12 a 35 ovos e seu filhotes são esverdeados.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FTei%C3%BA1.png?alt=media&token=b4378720-1f5f-461e-b62c-1b08c0c959dc",
      name: "Teiú",
      known_names: "Teju, Lagarto-marau, Tegu.",
      scientific_name: "Salvator merianae",
      division: "Invertebrado",
      reference:
        "Guia de répteis do Parque Estadual de Dois Irmãos / Ednilza\n Maranhão dos Santos, Jozelia Maria de Sousa Correia, Vanessa do Nascimento Barbosa (orgs.)"
    }
  },
  {
    id: "a4f5fbaa-1433-4db5-b923-290660e3e401",
    coordinates: [-22.89232222222222, -49.64035555555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Strigidae",
      food: "Insetos e pequenos vertebrados.",
      geographic_distribution: "Reside no Brasil e na América do Sul.",
      habitat: "Campos e áreas urbanas.",
      habits:
        "Vive em ambientes abertos, terrícola, tem hábitos diurnos e noturnos, mas é ativa, principalmente durante o crepúsculo.",
      order: "Strigiformes",
      curiosities:
        "Nidifica no solo (forma ninho), abrindo buracos, onde colocam de 7 a 9 ovos. Os filhotes atingem maturidade de entre 49 a 56 dias.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/Coruja-Buraqueira1.png?alt=media&token=ebe41837-a394-4911-af0c-5fdc8935c941",
      name: "Coruja-Buraqueira",
      known_names: "caburé, caburé-do-campo, coruja-do-campo, coruja-mineira, entre outros.",
      scientific_name: "Athene cunicularia",
      division: "Invertebrado",
      reference:
        "Menq, W. (2018) Coruja-buraqueira (Athene cunicularia) - Aves de Rapina Brasil. Disponível em: < http://www.avesderapinabrasil.com/athene_cunicularia.htm © Aves de Rapina Brasil"
    }
  },
  {
    id: "522d0509-7653-4d25-9e44-6624a95a80c2",
    coordinates: [-22.892877777777777, -49.64121111111111],
    icon_color: "#1d4ed8",
    specie: {
      family: "Melyridae",
      food: "Se alimentam de pólen das plantas, como o girassol por exemplo.",
      geographic_distribution:
        "Ocorre em vários países da Ámerica do Sul como Brasil, Paraguai e Argentina.",
      habitat: "Esse pequeno inseto pode ser encontrado sobre flores se alimentando de pólen.",
      habits:
        "São assíduos sempre visitam flores de plantas silvestres e cultivadas. Como algodoeiro, milho e sorgo acarretando danos aos órgãos florais.",
      order: "Coleoptera",
      curiosities:
        "Seu período larval é longo, podem durar até um ano, em período de pupa pode durar de 9 a 16 dias.\n\nAs larvas desse inseto conhecido popularmente como larva-angorá, são pragas de milho, possuem hábitos fossorias e se alimentam de sementes prejudicando o cultivo.  ",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FVaquinha1.png?alt=media&token=ace0b5f0-ea85-446a-8e60-455a76339e4b",
      name: "Vaquinha",
      known_names: "Besouro-polenófago,  larva-angorá, peludinha",
      scientific_name: "Astylus variegatus",
      division: "Vertebrado",
      reference:
        "BRUSCA, Ricardo C.; MOORE, Wendy; SHUSTER, Stephen M. Invertebrados, 3ª edição. Grupo GEN, 2018. E-book. ISBN 9788527733458. p. 795 - 839"
    }
  },
  {
    id: "bf8e34e8-c7fe-423b-a631-978832c8fa6c",
    coordinates: [-22.89222222222222, -49.64805555555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Procyonidae",
      food: "Possuem uma dieta bem variada sendo animais onívorso se alimentam de frutos e invertebrados que é a base de sua dieta , e em ambientes antrópicos podem se alimentar de restos orgânicos de lixeiras e comedouros. ",
      geographic_distribution:
        "Ampla distribuição geográfica na América do Sul, partindo da Colômbia e Venezuela ao Urugauai até o Norte da Argentina. ",
      habitat:
        "Florestas decíduas,semi-decíduas, ombrófilas, florestas nebulares, chaco xericó, cerrado e florestas secas.",
      habits: "Diurnos , terrestres e arborícolas.",
      order: "Carnivora",
      curiosities:
        "Esse animais tem um papel importante na manutenção dos processos ecológicos , possuindo interações de mutualismo e associação com diversas espécies de aves. ",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FQuati1.png?alt=media&token=1dbdea78-0374-41eb-aee4-0c1b9181c977",
      name: "Quati",
      known_names: " coati, mundé, quatimundé",
      scientific_name: "Nasua nasua",
      division: "Invertebrado",
      reference:
        "Emmons, L. & Helgen, K. 2016. Nasua nasua. The IUCN Red List of Threatened Species 2016: e.T41684A45216227. http://dx.doi.org/10.2305/IUCN.UK.20161.RLTS.T41684A45216227.en"
    }
  },
  {
    id: "0e2ed97e-ba74-4c45-933c-52e0f1749c13",
    coordinates: [-22.89152111111111, -49.64582123333333],
    icon_color: "#b91c1c",
    specie: {
      family: "Thraupídae",
      food: "Sua principal alimentação são sementes de gramíneas, porém também se alimenta de insetos.",
      geographic_distribution: "Presente em todo o Brasil e em todos os países da Ámerica do sul.",
      habitat: "Geralmente são vistos em áreas desprovidas de vegetação.",
      habits:
        "Possui o hábito de saltar enquanto canta. Na época reprodutiva reúne-se em bandos, e se misturam com outras espécies de aves que também se alimentam de sementes.",
      order: "Passeríformes",
      curiosities:
        "Possuem dimorfismo sexual, a fêmea é marrom-olívia na parte superior do corpo e amarelo-amarronzado na parte inferior, o macho possuem a plumagem preto-azulado.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/Tiziu1.png?alt=media&token=f5ff9e48-8ba5-4469-a1bd-2cf7f44f8682",
      name: "Tiziu",
      known_names: "tizirro, saltador, veludinho ",
      scientific_name: "Volatinia jacarina",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "aeaffd17-6e6f-40dc-8a6d-49c07774bd5b",
    coordinates: [-22.89221222222222, -49.64054255555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Tyrannídae",
      food: "Alimentam-se essencialmente de insetos mas também se alimentam de frutos principalmente no período de migração.",
      geographic_distribution: "Brasil, Argentina e Paraguai.",
      habitat: "Áreas abertas, cerrados, ambientes urbanos e pastagens.",
      habits:
        "Possuem o hábito de forragamento que é comum em aves da família tyrannídae. Migram em grupos, e costumam pousar em postes, fios e árvores isoladas.",
      order: "Passeríformes",
      curiosities:
        "Existe um dimorfismo sexual que só e visível quando as aves estão proximas, o macho possue um prolongameto maior nas duas caudas externas.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FTesourinha1.png?alt=media&token=d5786897-f079-4d4b-a700-d8887b04c7cf",
      name: "Tesourinha",
      known_names: "tesoura, tesoureira e tesourinha-do-campo.",
      scientific_name: "Tyrannus savana",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "588ac637-f6a4-4d4a-bff4-79f974c51ccc",
    coordinates: [-22.89222222222222, -49.64055555555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Psittacidae",
      food: "São generalistas se alimentam de néctar, cascas de árvores e ampla variedade se sementes e frutos.",
      geographic_distribution:
        "Amplamente distribuído na América do Sul, sendo abundante nas regiões secas do Brasil.",
      habitat:
        "Campos de vegetação baixa, ilhas de matas intercaladas, matas ciliares, cerrados e cerradões.",
      habits: "Desloca-se em bandos de numerosos indivíduos.",
      order: "Psittaciformes",
      curiosities:
        "Possui um papel ecológico variado, como polinizadores e também predador de sementes.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/Periquito-de-encontro-amarelo1.png?alt=media&token=4f41e1d5-7887-4aa9-ad7d-2a9b35f04898",
      name: "Periquito-de-encontro-amarelo",
      known_names: "periquito-de-asa-amarela",
      scientific_name: "Brotogeris chiriri",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "c2f44bcc-6185-457f-ac88-8dff827f6d14",
    coordinates: [-22.89222222222222, -49.64055555555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Charadriidae",
      food: "Se alimenta de invertebrados aquáticos e peixinhos que encontra na lama, também se alimenta de artrópodes e moluscos terrestres.\n\n",
      geographic_distribution:
        "É uma ave típica da América do Sul, sendo encontrado desde a Argentina e leste da Bolívia até a margem direita do baixo Amazonas, no Brasil.",
      habitat: "Grandes campinas úmidas, espraiados dos rios e lagoas e pastagens.",
      habits:
        "O quero-quero é sempre o primeiro a dar o alarme quando algum intruso invade seus domínios. É uma ave briguenta que provoca rixa com qualquer outra espécie habitante da mesma campina. ",
      order: "Charadriiformes",
      curiosities:
        "Como o quero-quero sempre dá alarme quando aparece intrusos, as capivaras tiram bom proveito da convivência com o quero-quero, pois, conforme a entonação, o grito dessa ave pode significar perigo, então os grandes roedores procuram refúgio na água.\nEssa característica faz do quero-quero um excelente animal de guarda, sendo utilizado por algumas empresas que possuem seu parque fabril populado por estas aves.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FQuero-quero1.png?alt=media&token=d7e2b8d7-d5fb-46c1-b34e-b6c29e9b533a",
      name: "Quero-quero",
      known_names: "**",
      scientific_name: "Vanellus chilensis",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "6883779f-e7c4-4b01-b4b0-327a335156b5",
    coordinates: [-22.889533444444442, -49.63768877777778],
    icon_color: "#b91c1c",
    specie: {
      family: "Mimidae",
      food: "São onívoros, alimentam-se principalmente de invertebrados e frutos. Dentre os invertebrados, os insetos (formigas, cupins, besouros) constituem a maior parte das presas; Os frutos podem ser silvestres (neste caso de pequeno tamanho, engolidos inteiros) ou cultivados, como laranja e abacate. As sementes não são digeridas, e atravessam intactas o tubo digestivo. A ave atua, assim, como dispersora das sementes dos frutos que ingere.",
      geographic_distribution:
        "Regiões campestres do baixo Amazonas, através do Brasil central, Nordeste, Leste e Sul até o Uruguai, Paraguai, Argentina e Bolívia.",
      habitat: "Vive nas copas das árvores ou passando a maior parte do tempo no chão.",
      habits: "São de habitos diurnos, andando pelo chão atrás de alimento.",
      order: "Passeriformes",
      curiosities:
        "Anda pelos campos e cerrados ou parques e terrenos baldios de cidades geralmente em bandos, que podem ter até 13 integrantes. Na porção sul de sua distribuição não forma bandos, e costuma viver em casais. Possui o hábito de erguer as asas semiabertas de tempos em tempos enquanto anda pelo chão, numa exibição denominada “lampejo de asas”, cuja finalidade não é entendida e que é observada também em outras espécies do gênero. O lampejo pode ser executado também quando a ave se depara com uma ameaça em potencial (humanos próximos demais, serpentes). É um dos melhores imitadores de outras aves na natureza. Alguns indivíduos repetem o canto de até 6 espécies diferentes. Além dessas imitações, usadas na época reprodutiva (julho a dezembro), possui um canto próprio, onde lança mão dos chamados mais graves e agudos característicos, iniciando ou terminando a imitação. ",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FSabi%C3%A1-do-campo1.png?alt=media&token=4ce4099e-04b1-4c19-81a1-718ff03bcfa3",
      name: "Sabiá-do-campo",
      known_names: "**",
      scientific_name: "Mimus saturninus",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "cab88192-c4fe-43aa-9d23-dd3eec1bd8b8",
    coordinates: [-22.89105111111111, -49.64131981888889],
    icon_color: "#b91c1c",
    specie: {
      family: "Accipitridae",
      food: "Carnívoro, normalmente capturam pequenas aves.",
      geographic_distribution:
        "Sul dos Estados Unidos, México, Argentina, Paraguai, e em todo o Brasil.",
      habitat:
        "Habita campos com árvores, áreas florestadas permeadas de vegetação aberta e áreas urbanas.",
      habits:
        "Normalmente é encontrado sozinho, ocasionalmente aos pares. Tende a passar despercebido devido ao fato de passar a maior parte do dia planando a grande altitude.",
      order: "Accipitriformes",
      curiosities:
        "Há exibições aéreas do macho, acompanhadas de vocalizações, os ovos geralmente são manchados de cor muito variável. O período de incubação é de 32 a 39 dias. Muitas vezes desenvolve-se apenas um filhote, e permanecem no ninho por um período em torno de 5 semanas.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FGavi%C3%A3o-de-cauda-curta1.png?alt=media&token=b32fdf0b-ba1f-4df4-a568-09f844c473fc",
      name: "Gavião-de-cauda-curta",
      known_names: "**",
      scientific_name: "Buteo brachyurus",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "7c022125-5f6b-40e8-bb1b-c921dc142bbc",
    coordinates: [-22.89212222222222, -49.64045555555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Accipitridae",
      food: "Carnívoro, se alimenta geralmente de aves, ratos e lagartos. ",
      geographic_distribution: "Ocorre do México à Argentina e em todo o Brasil.",
      habitat:
        "O gavião-carijó vive em casais e constroem um ninho de gravetos revestido por folhas com cerca de meio metro de diâmetro, geralmente no topo de uma árvore grande.",
      habits:
        "Costuma voar em casais, fazendo movimentos circulares enquanto os dois vocalizam em dueto. Possui o hábito de utilizar o mesmo poleiro de caça por longo tempo.",
      order: "Accipitriformes",
      curiosities:
        "Passou a se tornar mais comum nos centros urbanos, adaptando-se com sucesso a este ambiente, pois nas cidades a oferta de presas é maior e os seus predadores são escassos.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FGavi%C3%A3o-carij%C3%B31.png?alt=media&token=85712c2e-349d-4c7b-99db-28fe4db50435",
      name: "Gavião-carijó",
      known_names: "**",
      scientific_name: "Rupornis magnirostris",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "7929a2f9-4798-4766-a8a1-198758c49e0e",
    coordinates: [-22.89110211111111, -49.64084343333333],
    icon_color: "#b91c1c",
    specie: {
      family: "Alcedinidae",
      food: "Onívoro, alimentam-se principalmente de peixes.",
      geographic_distribution: "Ocorre do México à Argentina, todo o Brasil.",
      habitat:
        "Grandes rios, lagos, manguezais, e a beira-mar quando houver barrancos ou rochas onde possa nidificar",
      habits:
        "Voa rente ao espelho d’água. Frequenta águas interiores, rios e lagos grandes, sendo pouco comum na orla marinha.",
      order: "Coraciiformes",
      curiosities:
        "Na época de reprodução, o macho oferece alimento à fêmea durante a corte e levanta as asas acima das costas como saudação. O macho e a fêmea escavam o ninho num barranco que margeia um curso d`água ou próximo a ele. Os ninhos podem ser reutilizados por vários anos consecutivos, principalmente se escavados em bancos rochosos. O casal, frequentemente, permanece junto durante anos.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FMartim-pescador-verde1.png?alt=media&token=9b53867d-c439-4a2b-9c26-f5c5f7432269",
      name: "Martim-pescador-verde",
      known_names: "**",
      scientific_name: "Chloroceryle amazona",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "44a0d7b5-f5e6-4bcb-b0ba-f52c43b7bd39",
    coordinates: [-22.89121111111111, -49.64583333333333],
    icon_color: "#b91c1c",
    specie: {
      family: "Anatidae",
      food: "Granívoro, alimentam-se de plantas submersas e gramíneas nas margens dos lagos, mas também come invertebrados aquáticos, pequenos peixes e girinos. ",
      geographic_distribution:
        "Presente em todo o Brasil, África,  Madagascar e nas Ilhas Comores.",
      habitat: "É encontrado em quase qualquer corpo d'água ao longo de sua ampla distribuição.",
      habits:
        "É mais ativo nos crepúsculos e à noite. Chega a formar bandos de várias dezenas de indivíduos, principalmente durante as migrações sazonais que realiza no sul do país.",
      order: "Anseriformes",
      curiosities:
        "O ninho é construído no chão. A fêmea bota de 8 a 14 ovos, sendo que o macho pode ajudar a chocar. Ambos cuidam dos filhotes.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FIrer%C3%AA1.png?alt=media&token=add2beb7-c1a7-4a49-b69a-230ed94dd564",
      name: "Irerê",
      known_names: "**",
      scientific_name: "Dendrocygna viduata ",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "e882b554-f4f7-4d61-abff-482c01d2ca24",
    coordinates: [-22.892677777777777, -49.64194444444444],
    icon_color: "#b91c1c",
    specie: {
      family: "Ardeidae",
      food: "Insetívoro.",
      geographic_distribution:
        "Ocorre da Venezuela e Colômbia ao Brasil, Paraguai, Bolívia e Argentina, com duas populações distintas, separadas pela bacia amazônica. ",
      habitat:
        "Habita campos, pampas, plantações, cerrados, savanas de cupins e varjões. No Sudeste, aparece próximo à orla marítima, nos campos litorâneos e nas fazendas.",
      habits:
        "Desloca-se para dormir pousada em árvores altas, geralmente em terreno seco. No início da manhã seguinte retorna ao local de alimentação, onde permanece no solo a maior parte do tempo, caçando os insetos em caminhadas lentas. ",
      order: "Pelecaniformes",
      curiosities:
        "Na época da reprodução, o macho tem um voo de exibição, que exibe na frente da fêmea, que envolve voar para frente e para trás e deslizar em círculos. A época reprodutiva é muito extensa e variável. Os casais permanecem juntos a maior parte do tempo, mantendo contato em voo com um chamado especial e longo.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FMaria-faceira1.png?alt=media&token=753d9a3d-29d0-408f-9c02-02aff30a77e1",
      name: "Maria-faceira",
      known_names: "**",
      scientific_name: "Syrigma sibilatrix",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "07ef1d2b-d6c1-41b4-9d1d-fa2de54e4514",
    coordinates: [-22.89141111111111, -49.64581133333333],
    icon_color: "#b91c1c",
    specie: {
      family: "Cathartidae",
      food: "Detritívoro.",
      geographic_distribution: "Ocorre desde o sul do Canadá até a América do Sul.",
      habitat: "Habita campos, matas e bosques.",
      habits:
        "À noite, dirige-se para pousos tradicionais, seja nas árvores da mata ribeirinha, seja em capões nos campos. Esses pousos são comunais, ocasionalmente com 20 ou 30 urubus de várias espécies.",
      order: "Cathartiformes",
      curiosities:
        "No Brasil é proibido por lei matar algum urubu ou criá-lo em cativeiro sem o consentimento do IBAMA. Os urubus não vocalizam.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FUrubu-de-cabe%C3%A7a-vermelha1.png?alt=media&token=a925267d-bd4f-449e-9015-4524662a206c",
      name: "Urubu-de-cabeça-vermelha",
      known_names: "**",
      scientific_name: "Cathartes aura",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "2f70e816-ee29-48d0-bd50-6041a4043130",
    coordinates: [-22.89231522222222, -49.64049555555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Columbidae",
      food: "Granívoro, alimenta-se de grãos silvestres e de brotos de plantações.",
      geographic_distribution: "Ocorre em todo o Brasil.",
      habitat:
        "Originalmente ave campestre típica da caatinga, cerrado e campos, atualmente vem aumentando significativamente sua distribuição, beneficiada pelo desmatamento, e nas ultimas décadas conquistou efetivamente o ambiente urbano, chegando até mesmo a grandes metrópoles como São Paulo, onde sua população vem aumentando a cada ano.",
      habits:
        "Migratória no nordeste do Brasil, sua população no interior de São Paulo e Paraná explodiu a partir de 1970, ao adaptar-se aos ambientes criados pela agricultura e pecuária. ",
      order: "Columbiformes",
      curiosities:
        "É muito prolífica. Em alguns locais pode construir seu ninho diretamente no chão, mas é mais comum que o construa em arbustos, palmeiras ou até mesmo no forro de telhados. O ninho é um amontoado de gravetos tão ralo que às vezes é possível ver os ovos através dele. Não é de se estranhar que tantos ovos e filhotes caiam derrubados pelo vento ou pela chuva. podem aproveitar ninhos de asa-branca quando estes são feitos em muros.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FAvoante1.png?alt=media&token=50934eb3-f9d1-4df4-a70e-57775a1a0e1f",
      name: "Avoante",
      known_names: "**",
      scientific_name: "Zenaida auriculata",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "2a5c7180-4a6d-4849-b7c8-0b5e12231f7d",
    coordinates: [-22.891671666666667, -49.64667166666667],
    icon_color: "#b91c1c",
    specie: {
      family: "Cuculidae",
      food: "Alimenta-se basicamente de insetos, principalmente lagartas, que captura ao examinar as folhas, inclusive em suas partes inferiores.",
      geographic_distribution:
        "Ocorre em todo o Brasil e tem uma vasta distribuição na América Latina.",
      habitat:
        "Ocorre em matas ciliares, matas secundárias, parques e bairros arborizados até mesmo das maiores cidades brasileiras. Habita os estratos médio e superior dessas matas, deslocando-se através da copa das árvores e arbustos, quase nunca descendo ao solo.",
      habits:
        "lembra muito os esquilos pelo modo como pula entre as ramagens com sua longa cauda. Costuma imitar o chamado de alerta ou perigo de algumas aves como o bem-te-vi (Pitangus sulphuratus) e Maria-cavaleira (Myiarchus ferox) para poder capturar insetos que se desprendem da ramaria, consequência dos movimentos provocados pela movimentação de outras aves. Anda sozinho ou aos pares.",
      order: "Cuculiformes",
      curiosities:
        "É uma ave que gosta de planar e, para isso, apresenta duas caudas, uma interna e outra externa. Para voar abre a interna (que é a listrada) e a cauda parece aumentar. Isso ajuda a ave a planar com facilidade.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FAlma-de-gato1.png?alt=media&token=223cd31c-c016-4054-9472-34f80a153c13",
      name: "Alma-de-gato",
      known_names: "**",
      scientific_name: "Piaya cayana",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "1b35a92a-3506-4947-af5f-facd5df244e6",
    coordinates: [-22.89292222222222, -49.64095555555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Dendrocolaptidae",
      food: "Insetívoro, come principalmente, formigas, besouros e lagartas de borboletas, além de aranhas, escorpiões, etc.\n",
      geographic_distribution:
        "Pode ser encontrado nas savanas do Suriname, Uruguai, Argentina, Paraguai e Bolívia. No Brasil distribui-se de Marajó ao restante do país extra-amazônico.",
      habitat: "Vive no cerrado, na caatinga e em lugares abertos, com árvores esparsas.",
      habits:
        "Tem o hábito de subir pelos troncos das árvores, agarrado pelos pés, enquanto enfia o bico em fendas e por baixo das cascas, chegando numa certa altura, voa para baixo e pousa na base de outra árvore, recomeçando a escalar. Vive sozinho ou em casais.",
      order: "Passeriformes",
      curiosities:
        "Nidifica em árvores velhas, usando em geral ocos abandonados por pica-paus. Reveste a cavidade com folhas e cascas de árvores, e aí põe dois ovos branco-puros.\n",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FArapa%C3%A7u-de-cerrado1.png?alt=media&token=54ef534c-13f3-4d39-94f4-e43aaa8fca19",
      name: "Arapaçu-de-cerrado",
      known_names: "**",
      scientific_name: "Lepidocolaptes angustirostris",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "66658b88-4832-452a-8986-53eeebda42ce",
    coordinates: [-22.891388888888887, -49.64055335555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Estrildidae",
      food: "Granívoro, alimentam-se de sementes, principalmente as de gramíneas africanas, como capim-colonião, capim-elefante e capim-gordura, eventualmente, pode capturar pequenos insetos.",
      geographic_distribution: "Praticamente todo o território brasileiro.",
      habitat: "É comum em campos e terrenos baldios nas cidades. ",
      habits:
        "Vive em bandos de cerca de 6 indivíduos. Comumente, pode ser encontrado voando em bandos em áreas urbanas de passagem, indo para locais onde há terrenos baldios na cidade, em dias de sol, se reúnem em bandos de 20 a 40 indivíduos para tomar banho em poças de água que ficam acumuladas em lajes, aproveitam fontes artificiais de água. Vive perto de plantas aquáticas ou na beira de rios.",
      order: "Passeriformes",
      curiosities:
        "Originário da África, o bico-de-lacre foi trazido para o Brasil em navios negreiros para servir como pássaro de estimação, durante o reinado de D. Pedro I. Tendo escapado das gaiolas, inicialmente no Rio de Janeiro, espalhou-se por diversas regiões brasileiras.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FBico-de-lacre1.png?alt=media&token=4bb9368c-73a0-43a4-858a-ec4de1d3558f",
      name: "Bico-de-lacre",
      known_names: "**",
      scientific_name: "Estrilda astrild",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "0dcb2386-d8cd-4363-a300-1924bfe6681d",
    coordinates: [-22.89231222222222, -49.64057555555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Falconidae",
      food: "Onívoro, alimenta-se de quase tudo o que acha, de animais vivos ou mortos até o lixo produzido pelos humanos, tanto nas áreas rurais quanto urbanas.",
      geographic_distribution: "Argentina até o sul dos Estados Unidos.",
      habitat: "Áreas abertas, como savanas, campos e banhados. ",
      habits:
        "Vive solitário, aos pares ou em grupos, beneficiando-se da conversão da floresta em áreas de pastagem, pousa em árvores ou cercas, sendo frequentemente observado no chão, junto a queimadas e ao longo de estradas. Durante a noite ou nas horas mais quentes do dia, costuma ficar pousado nos galhos mais altos, sob a copa de árvores isoladas ou nas matas ribeirinhas.",
      order: "Falconiformes",
      curiosities:
        "Para avisar os outros carcarás de seu território ou comunicação entre o casal, possui um chamado que origina o seu nome comum, “carcará”, nesse chamado, dobra o pescoço e mantém a cabeça sobre as costas, enquanto emite o som.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FCarcar%C3%A11.png?alt=media&token=43d14af8-f9dd-4ae5-b92d-f34027ce702e",
      name: "Carcará",
      known_names: "**",
      scientific_name: "Caracara plancus",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "b80e6c4e-f875-4d91-b824-26ff68c293b9",
    coordinates: [-22.88861111111111, -49.6425],
    icon_color: "#b91c1c",
    specie: {
      family: "Falconidae",
      food: "Come insetos, também cupins em revoada, lagartixas, morcegos e ocasionalmente pássaros e até cobras peçonhentas como a jararaca.",
      geographic_distribution: "Ocorre dos Estados Unidos à todo o Brasil.",
      habitat:
        "Espécie campestre, ocorre em áreas abertas como campos, cerrados, cerradões, bosques abertos, áreas agricolas e urbanas. ",
      habits:
        "Costuma pousar sobre árvores baixas, mourões de cerca e cupinzeiros, de onde procura suas presas, e pode ser encontrado em áreas urbanas.",
      order: "Falconiformes",
      curiosities:
        "Não constroem ninhos, pois ocupam os já feitos por outras aves ou coloca seus ovos em ocos e cavidades de arvores.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FFalc%C3%A3o-de-coleira1.png?alt=media&token=a50cc163-5c47-40c7-918b-b68c1e0f3b3d",
      name: "Falcão-de-coleira",
      known_names: "**",
      scientific_name: "Falco femoralis",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "1b03b7a9-99b9-4568-bfac-2232a9aab584",
    coordinates: [-22.89313333333333, -49.64813333333333],
    icon_color: "#b91c1c",
    specie: {
      family: "Falconidae",
      food: "Alimenta-se de lagartos e grandes insetos; ocasionalmente, apanha roedores, pequenas cobras, morcegos e pequenas aves.",
      geographic_distribution:
        "Desde o Alasca e norte do Canadá até a ponta sul da América do Sul, e em todo o Brasil, exceto em florestas.",
      habitat:
        "Ocupa áreas semiurbanizadas, margens de estradas e ambientes abertos, produzidos pela atividade humana, nas áreas naturais, está na região de campos e de cerrados, evitando as matas, cerradões e formações de vegetação adensada.",
      habits:
        "Caça a partir de poleiros fixos, naturais ou artificiais, mesmo em ambientes urbanos, durante a caça voa a pouca altura do solo, o que facilita a observação desta ave; além de apanhar a presa a partir do poleiro, também costuma “peneirar”.",
      order: "Falconiformes",
      curiosities:
        "Nidifica em ocos de árvores, cavidades feitas por pica-paus, buracos em barrancos e até em cupinzeiros.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FQuiriquiri1.png?alt=media&token=109e909b-9a69-4a7a-96db-de65587a7ee8",
      name: "Quiriquiri",
      known_names: "**",
      scientific_name: "Falco sparverius ",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "ed64df57-7273-4d97-9e01-f4e110268429",
    coordinates: [-22.89210222222222, -49.64041555555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Furnariidae",
      food: "Formigas, içás, cupins, larvas, aranhas e outros artrópodes., dificilmente se alimenta de sementes, também se alimenta de outros invertebrados.",
      geographic_distribution:
        "Ocorre nas regiões Sul, Sudeste e Centro-oeste, estados de Goiás, Piauí, Pernambuco e Alagoas, encontrado também na Argentina, Paraguai, Uruguai e Bolívia.\n\n",
      habitat:
        "Comum em paisagens abertas, como campos, cerrados, pastagens, ao longo de rodovias, bairros arborizados e em jardins. ",
      habits:
        "Caminha pelo chão em busca de insetos, frequentemente pousando em postes, cercas, galhos isolados e outros pontos que permitam uma boa visão dos arredores. Vive geralmente aos casais. Canta em dueto (macho e fêmea juntos) os arredores do ninho, em postura altiva e tremulando as asas, com um canto extremamente estridente. ",
      order: "Passeriformes",
      curiosities:
        "Há várias lendas sobre esta espécie e a mais famosa diz que: se o macho for traído ele pode trancar a fêmea no ninho até que ela morra; tal comportamento nunca foi registrado cientificamente. ",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FJo%C3%A3o-de-barro1.png?alt=media&token=b60a7af2-042e-4e6a-9ea7-66e1cc84ce0c",
      name: "João-de-barro",
      known_names: "**",
      scientific_name: "Furnarius rufus",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "3738f8d8-f7ac-4439-be0f-0b8355b50180",
    coordinates: [-22.89221122222222, -49.64054255555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Hirundinidae",
      food: "Formigas e cupins alados, forma bandos de dezenas de indivíduos nas áreas dos formigueiros e cupinzeiros.",
      geographic_distribution:
        "Distribuição mais ampla na América Latina, ocorrendo desde a Costa Rica até a Terra do Fogo, assim como desde o nível do mar até os Andes.",
      habitat: "É encontrada em cidades, áreas rurais e áreas mais abertas.",
      habits:
        "Passa a maior parte do dia voando, só pousando em árvores, antenas e fios de eletricidade para descansar ou quando o tempo está ruim.\nÉ migratória, especialmente nos locais mais frios, mas ao contrário de outras espécies de andorinhas não realiza migrações muito longas.",
      order: "Passeriformes",
      curiosities: "Tem grande afinidade pelas habitações humanas.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FAndorinha-pequena-de-casa1.png?alt=media&token=b8b9735a-fb2a-47ec-a09d-b86ba0b47dfd",
      name: "Andorinha-pequena-de-casa",
      known_names: "**",
      scientific_name: "Pygochelidon cyanoleuca",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "c6e1b234-9675-45a2-983f-f1b549fa560b",
    coordinates: [-22.89111111111111, -49.64083333333333],
    icon_color: "#b91c1c",
    specie: {
      family: "Icteridae",
      food: "Larvas, insetos e várias sementes.\n\n",
      geographic_distribution: "Quase todo o Brasil extra-amazônico.",
      habitat:
        "Prefere zonas úmidas e palustres, sendo facilmente encontrado em plantações de arroz.",
      habits:
        "Tem hábito de levantar-se em voo na vertical sobre o ninho, cantando, como fazem as cotovias.",
      order: "Passeriformes",
      curiosities:
        "Nidifica no chão, principalmente nos campos em moitas de capim, pondo de 3 a 5 ovos, tem hábito de levantar-se em voo na vertical sobre o ninho, cantando, como fazem as cotovias. Possuem dimorfismo sexual.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FPol%C3%ADcia-inglesa-do-sul1.png?alt=media&token=b3e92afd-5563-4340-ad9e-d4f84a34340e",
      name: "Polícia-inglesa-do-sul",
      known_names: "**",
      scientific_name: "Leistes superciliaris",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "0008e4a0-c203-4084-9d38-3e60d2d34764",
    coordinates: [-22.89131111111111, -49.64584433333333],
    icon_color: "#b91c1c",
    specie: {
      family: "Icteridae",
      food: "Alimenta-se de grãos e sementes.",
      geographic_distribution:
        "Ocorre no sul do Mato Grosso, Mato Grosso do Sul, Goiás, Distrito Federal, São Paulo, Paraná, Santa Catarina, Rio Grande do Sul, Rio de Janeiro e no estado de Minas Gerais.",
      habitat: "Vivem nos brejos, nas várzeas com capim alto, quase sempre em bandos.",
      habits: "É frequente alguns indivíduos cantarem juntinhos, pousados próximos uns dos outros.",
      order: "Passeriformes",
      curiosities:
        "A nidificação ocorre geralmente em colônias, em áreas úmidas e ocorre com maior frequência duas vezes por temporada de reprodução, a fêmea constrói o ninho, este é colocada a baixa altura, pendurado em plantas ou ramos baixos. ",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FChupim-do-brejo1.png?alt=media&token=f54304b4-7341-46df-b956-8c7894f75f02",
      name: "Chupim-do-brejo",
      known_names: "**",
      scientific_name: "Pseudoleistes guirahuro",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "ba3779b1-58f5-426d-9bbe-98d60a1a2523",
    coordinates: [-22.889252444444445, -49.63797177777778],
    icon_color: "#b91c1c",
    specie: {
      family: "Nyctibiidae",
      food: "Insetívoro, se alimenta de insetos noturnos.",
      geographic_distribution:
        "Encontrado em todo o Brasil e também da Costa Rica à Bolívia, Argentina e Uruguai.",
      habitat: "Comum em bordas de florestas, campos com árvores e cerrados. ",
      habits:
        "Tem o hábito de pousar em locais abertos, permanece disfarçado, sendo facilmente confundido com um galho e também tem o hábito de cantar à noite.",
      order: "Nyctibiiformes",
      curiosities: "O nome urutau é tupi e significa “ave fantasma”. ",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FUrutau1.png?alt=media&token=4a646a4e-c88d-4309-b671-9e0ddb5c4559",
      name: "Urutau",
      known_names: "**",
      scientific_name: "Nyctibius griséus",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "21a7026c-cad5-43d0-9c86-4523ab573b21",
    coordinates: [-22.889486444444444, -49.63778677777778],
    icon_color: "#b91c1c",
    specie: {
      family: "Parulidae",
      food: "Insetívoro.",
      geographic_distribution:
        "Encontrada em alguns estados brasileiros, também do sul dos Estados Unidos à Bolívia, Paraguai, Argentina e Uruguai.\n\n",
      habitat:
        "Habita a copa das árvores mais altas da mata seca e cerradões e ocasionalmente desce a estratos mais baixos nas regiões de borda e clareiras, evita planícies úmidas.",
      habits:
        "Vive em casais ou solitária, acompanhando bandos mistos na copa ou caçando por conta própria; tem um comportamento bastante inquieto e canta incansavelmente, inclusive nas horas mais quentes do dia.",
      order: "Passeriformes",
      curiosities:
        "Apesar de suas cores vibrantes, pode passar despercebida no meio das galhadas altas. O seu canto serve como contato para os membros do casal.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FMariquita1.png?alt=media&token=4af866a6-b953-4064-8903-03b7410dab61",
      name: "Mariquita",
      known_names: "**",
      scientific_name: "Setophaga pitiayumi",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "b2408ec7-566f-4c81-b4e4-dee45caad908",
    coordinates: [-22.891386988888886, -49.64055395555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Passerellidae",
      food: "Se alimenta de sementes, mas também apanha pequenos insetos.",
      geographic_distribution:
        "Encontrado em todo o Brasil e nos demais países da América do Sul, exceto Equador e Chile.\n\n",
      habitat:
        "Vive em campos secos com gramíneas, cerrados, terrenos cultivados e locais com moitas de capim alto.",
      habits:
        "Corre e pula silenciosamente por entre as gramíneas, o que justifica seu outro nome popular tico-tico-rato. Na época de reprodução forma casais que estabelecem um território muito bem defendido, devido aos seus hábitos campestres esta espécie vem aumentando sua distribuição espacial.",
      order: "Passeriformes",
      curiosities:
        "Quando assustado, muitas vezes corre pelo chão entre as folhas e não voa, parecendo um ratinho, dando origem ao nome comum mais difundido no país, se perseguido, voa para logo pousar novamente entre as gramíneas, fora da vista.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FTico-tico-do-campo1.png?alt=media&token=0ffec810-bb06-4be4-af00-da0437540de6",
      name: "Tico-tico-do-campo",
      known_names: "tico-tico-rato",
      scientific_name: "Ammodramus humeralis",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "30506cf9-5a1c-4830-a8fe-5f5bf85d414f",
    coordinates: [-22.892877777777777, -49.64184444444444],
    icon_color: "#b91c1c",
    specie: {
      family: "Passerellidae",
      food: "Alimenta-se de sementes, brotos, frutas e insetos. ",
      geographic_distribution:
        "Todas as regiões do País, com exceção das áreas florestadas da Amazônia, também México, Panamá e na maior parte da América do Sul.",
      habitat:
        "É comum em paisagens abertas, plantações, jardins, pátios e coberturas ajardinadas de edifícios, abundante em regiões de clima temperado e também em cumes altos expostos a ventos frios e fortes. ",
      habits:
        "Vive em casais isolados, sendo que o macho ataca tico-ticos vizinhos que invadam seu território.",
      order: "Passeriformes",
      curiosities:
        "Tem uma técnica de esgravatar alimento no solo por meio de pequenos pulos, para remover a camada superficial de folhas ou terra solta que recubra o alimento. ",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FTico-tico1.png?alt=media&token=e8e02edc-946e-4cde-ab1d-1bcc59d92121",
      name: "Tico-tico",
      known_names: "**",
      scientific_name: "Zonotrichia capensis",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },

  {
    id: "364b6885-6239-4aca-81d6-a0ad43cc3f59",
    coordinates: [-22.889314444444445, -49.63769777777778],
    icon_color: "#b91c1c",
    specie: {
      family: "Picidae",
      food: "Insetívoro.",
      geographic_distribution:
        "Ocorre desde o Amazonas (ilha de Marajó) até o Rio Grande do Sul, e para oeste até o Mato Grosso, também encontrado no Paraguai, Argentina e Uruguai.",
      habitat:
        "Vive em matas de galeria, cerrados, cerradões, caatingas, campos com árvores e na borda de florestas, e está cada vez mais comum nas áreas urbanas.",
      habits:
        "No período reprodutivo (a partir de julho), os machos iniciam a temporada de canto territorial, uma vocalização intensa e contínua, especialmente nos períodos matinais, nessas ocasiões, escolhe alguns pousos tradicionais em galhos altos, vários expostos, pode cantar durante dias (às vezes semanas) no mesmo lugar, emitindo uma risada alta e parecida com a do pica-pau-do-campo.",
      order: "Piciformes",
      curiosities:
        "Para demarcar território, advertindo rivais, e como meio de comunicação entre machos e fêmeas, executa tamborilações, que consistem em bater com o bico em paus secos, cascas salientes, troncos ocos e até em chapas de aço, simplesmente para produzir rumor. ",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FPica-pau-verde-barrado1.png?alt=media&token=029e1870-3328-42b1-9a91-84c0abc43b7b",
      name: "Pica-pau-verde-barrado",
      known_names: "**",
      scientific_name: "Colaptes melanochloros",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "e54eeb79-7105-4d7e-93f3-ad8b10c2e0c3",
    coordinates: [-22.891389988888886, -49.64055445555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Picidae",
      food: "Insetívoro.",
      geographic_distribution:
        "Presente em todo o Brasil e também do México à Bolívia, Paraguai e Argentina.",
      habitat:
        "Habita o interior e as bordas de florestas altas, capoeiras, cerrados, campos e plantações com árvores esparsas.",
      habits:
        "Vive solitário ou aos pares, arrancando a casca e “martelando” troncos e galhos maiores em busca de insetos, tanto em árvores vivas como mortas. Recolhem-se cedo para dormir.",
      order: "Piciformes",
      curiosities: "",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FPica-pau-de-banda-branca1.png?alt=media&token=8060f87f-4412-4086-8b9d-0b65557a2863",
      name: "Pica-pau-de-banda-branca",
      known_names: "**",
      scientific_name: "Dryocopus lineatus",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "7ee3aec9-07f4-4d05-a4bc-da562c02de84",
    coordinates: [-22.889294444444445, -49.63791777777778],
    icon_color: "#b91c1c",
    specie: {
      family: "Picidae",
      food: "Alimenta-se de insetos e suas larvas, sementes, frutos.",
      geographic_distribution:
        "Estende-se para as regiões campestres de todo o Brasil, encontrado também no Suriname, Bolívia, Argentina, Paraguai e Uruguai.",
      habitat:
        "Vive em áreas campestres, pastos, eucaliptais, capoeiras ralas, buritizais, plantações, áreas rurais, em cidades, parques, jardins, pomares, bordas de brejos arborizados e no Pantanal.",
      habits:
        "Encontrado em grupos de 6 a 10 indivíduos, podendo chegar a 20, às vezes associado a outros tipos de aves campestres gregárias, o grupo todo dorme junto, no oco de uma árvore, às vezes com várias entradas. ",
      order: "Piciformes",
      curiosities:
        "Diferente da maioria dos pica-paus brasileiros, esta espécie costuma voar em grandes alturas, muito acima da copa das árvores, à procura de novos ambientes.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FPica-pau-branco1.png?alt=media&token=51334467-8185-4698-9b37-28d9847dc6ee",
      name: "Pica-pau-branco",
      known_names: "**",
      scientific_name: "Melanerpes candidus",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "bcded3a1-3c11-4e48-aec2-1557c5477c38",
    coordinates: [-22.891381988888888, -49.64054545555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Picidae",
      food: "Insetívoro.",
      geographic_distribution: "Encontrado em alguns estados brasileiros.",
      habitat:
        "Ocorre em todos os ambientes com árvores e arbustos, mais frequente nas matas ciliares dos rios, cerradões e matas. Anda tanto nos arbustos baixos, como na parte alta da copa.",
      habits:
        "Acompanha bandos mistos, quando aves de várias espécies deslocam-se e caçam em grupo.\n\n",
      order: "Piciformes",
      curiosities:
        "Ao contrário dos outros pica-paus, a cauda possui as penas sem o enrijecimento central. Empoleiram tanto na vertical como na horizontal, movimentando-se aos saltos e alternando o pé de apoio.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FPica-pau-an%C3%A3o-escamado1.png?alt=media&token=862dd88f-0a0d-4063-99e6-e2a8decfefe5",
      name: "Pica-pau-anão-escamado",
      known_names: "Picapauzinho-escamoso",
      scientific_name: "Picumnus albosquamatus",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "2cf3870d-9e3f-43ac-9c4b-6efd71627509",
    coordinates: [-22.891399888888888, -49.64056655555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Picidae",
      food: "Insetívoro.",
      geographic_distribution: "Ocorre da Venezuela à Bolívia, Paraguai e Brasil.",
      habitat:
        "Vive em áreas abertas, clareiras e bordas de matas secas, caatingas, cerrados, matas de galeria, de várzea e de terra firme, também encontrado em mata secundária, mata ripária, mangues e zonas rurais.",
      habits:
        "Encontrado solitário, aos pares ou em grupos familiares. São muito ariscos, movimentam-se rapidamente pelas copas ao perceberem qualquer movimento estranho.",
      order: "Piciformes",
      curiosities: "",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FPica-pau-pequeno1.png?alt=media&token=9783055a-9204-4112-8ba1-8d30e1e38200",
      name: "Pica-pau-pequeno",
      known_names: "**",
      scientific_name: "Veniliornis passerinus",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "18b16ac0-9cf5-445e-8511-68db5d69626c",
    coordinates: [-22.891389988888886, -49.64055445555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Psittacidae",
      food: "Se alimenta de sementes e frutos.",
      geographic_distribution:
        "Encontrado no interior da América do Sul, do nordeste do Brasil, leste da Bolívia, Paraguai, até o norte de Argentina. ",
      habitat:
        "Habita florestas úmidas, savanas, floresta de galeria, áreas cultivadas com árvores e matas com palmeiras.",
      habits: "Comum em casais ou bandos. ",
      order: "Psittaciformes",
      curiosities:
        "Devido ao “dom da fala”, o papagaio-verdadeiro é muito procurado pelos homens, para servir de ave de estimação, centenas deles são capturados e comercializados clandestinamente em feiras e mercados.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FPapagaio-verdadeiro1.png?alt=media&token=8e174a20-1e0d-40f0-83da-78ae239a5768",
      name: "Papagaio-verdadeiro",
      known_names: "**",
      scientific_name: "Amazona aestiva",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "20ca4d4c-6449-402b-98e1-4f7131133fbe",
    coordinates: [-22.89220122222222, -49.64066655555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Psittacidae",
      food: "se alimenta de frutos e sementes.",
      geographic_distribution:
        "Ocorre em quase todo o Brasil, sendo encontrado desde em florestas até cidades, encontrado a leste dos Andes, estendendo-se até o litoral, e desde a Colômbia e Venezuela até o norte da Argentina e Uruguai.",
      habitat:
        "Habita florestas úmidas, semi-úmidas, pântanos, florestas de galeria e palmares de buriti nas planícies, não frequenta regiões com rios de águas escuras, em geral encontra-se em terras baixas.",
      habits: "Voa em bandos de 5 a 40 indivíduos. Dorme coletivamente em variados lugares. ",
      order: "Psittaciformes",
      curiosities:
        "É uma ave adaptável a ambientes alterados pelo homem e em alguns locais pode ser considerada uma espécie sinantrópica.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FPeriquit%C3%A3o1.png?alt=media&token=13f5f08e-7632-49d7-81e2-99353efd4de3",
      name: "Periquitão",
      known_names: "Periquitão-maracanã",
      scientific_name: "Psittacara leucophthalmus",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "3fa2a8b4-4e82-44ec-9726-0b0773a1c4f4",
    coordinates: [-22.889400444444444, -49.63770077777778],
    icon_color: "#b91c1c",
    specie: {
      family: "Rhynchocyclidae",
      food: "Insetívoro.",
      geographic_distribution:
        "Ocorre desde o sul do México até a Argentina, sendo ausente apenas na Amazônia florestal.\n\n",
      habitat:
        "Característico de ambientes mais abertos, não ocorre em áreas extensamente florestadas, sendo muito comum em cidades.",
      habits:
        "Vive escondido no meio da vegetação baixa e apresenta comportamento característico de movimentar a cauda lateralmente. O casal responde um ao outro, também aproximando-se de uma gravação do canto.",
      order: "Passeriformes",
      curiosities:
        "O canto origina o nome comum, parecendo com um relógio de mesa quando se dá corda, canta o ano inteiro, bem como nas horas quentes do dia.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FFerreirinho-rel%C3%B3gio1.png?alt=media&token=3ae5e4ce-3301-4cf4-be85-b7e88cff0517",
      name: "Ferreirinho-relógio",
      known_names: "**",
      scientific_name: "Todirostrum cinereum",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "e7c62171-afad-45c9-bb37-3d4e0f5323e5",
    coordinates: [-22.889466444444444, -49.63776667777778],
    icon_color: "#b91c1c",
    specie: {
      family: "Thamnophilidae",
      food: "Insetívoro.",
      geographic_distribution:
        "Presente desde o extremo norte do País até o estado do Paraná, também encontrado no México ao Panamá e em praticamente toda a América do Sul, com exceção do Chile.",
      habitat:
        "Presente nas matas ciliares dos rios, corixos e baías, bem como nos cerradões, cambarazais e matas secas.",
      habits:
        "Demarca o território com um canto de notas graves, um pouco afastadas entre si no início e aceleradas do meio para o final. Macho e fêmea emitem o canto, respondendo entre si e até a uma imitação razoável do chamado. ",
      order: "Passeriformes",
      curiosities: "",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FChor%C3%B3-boi1.png?alt=media&token=4883c28e-02f7-4822-b7db-964198493be5",
      name: "Choró-boi",
      known_names: "**",
      scientific_name: "Taraba major",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "67083754-5409-4439-8c8a-c51ae67d52e3",
    coordinates: [-22.891655666666665, -49.64665566666667],
    icon_color: "#b91c1c",
    specie: {
      family: "Thamnophilidae",
      food: "Insetívoro.",
      geographic_distribution:
        "Ocorre na maior parte do Brasil, estando ausente apenas no Nordeste, e em certas partes da Amazônia Central.",
      habitat:
        "Costuma frequentar as capoeiras, bordas da mata ciliar, cerradões e matas secas, raramente entrando alguns metros na vegetação mais alta.",
      habits: "Se aproxima do ser humano, não é arisca e se adapta a áreas alteradas.",
      order: "Passeriformes",
      curiosities:
        "No fim da década de 80 sua aparição em áreas urbanas foi até motivo para publicações em periódicos ornitológicos, mas hoje em dia sua presença em nossas cidades já não é mais novidade e já foi encontrada até mesmo em parques próximos ao centro de metrópoles.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FChoca-barrada1.png?alt=media&token=49805de3-2f6a-4c43-a778-2fab93fd8f6a",
      name: "Choca-barrada",
      known_names: "**",
      scientific_name: "Thamnophilus doliatus",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "75dce6f5-bf31-408d-af52-858c3c7a79d3",
    coordinates: [-22.889444444444443, -49.63787777777778],
    icon_color: "#b91c1c",
    specie: {
      family: "Thraupidae",
      food: "Se alimenta de néctar, frutas e artrópodes. ",
      geographic_distribution:
        "Ocorre em quase todas as regiões do país, podendo estar ausente nas regiões extensivamente florestadas, como no oeste e centro da Amazônia. É encontrada desde o México, América Central e Caribe e em todos os países da América do Sul, com exceção do Chile e Uruguai. ",
      habitat:
        "Tem uma grande variedade de hábitats abertos e semiabertos, arborizados, onde existam flores, inclusive em quintais, podendo se acostumar com a presença humana. ",
      habits:
        "Vive solitária ou aos pares e é bastante ativa, mas também pode ser vista em pequenos bandos. Toma banho muitas vezes, por causa do contato com o néctar pegajoso.",
      order: "Passeriformes",
      curiosities:
        "Seu canto é relativamente forte, simples e monótono, e emitido incansavelmente, canta a qualquer hora do dia e em qualquer época do ano, a fêmea também canta, mas pouco. Para amedrontar um rival, põe-se de pé, estica o corpo e vibra as asas. São muito briguentas, chegando a cair engalfinhadas no solo, onde continuam a luta.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FCambacica1.png?alt=media&token=e3cac652-9ba0-4859-8fb5-7e12189fa526",
      name: "Cambacica",
      known_names: "**",
      scientific_name: "Coereba flaveola",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "7f19fffe-fc03-4ccd-aa87-f2a504fae6df",
    coordinates: [-22.89137988888889, -49.64051055555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Thraupidae",
      food: "Se alimenta de sementes, brotos, frutas, insetos.",
      geographic_distribution:
        "Presente no Brasil no Leste do Pará, Mato Grosso, Goiás ao oeste de Minas Gerais, Rio de Janeiro, São Paulo, Paraná, Santa Catarina e Rio Grande do Sul.",
      habitat:
        "Vive em bordas de matas secundárias, cerrados, campos, cafezais e pomares, geralmente em locais sombreados, capoeiras ralas e baixas.",
      habits:
        "Seu comportamento é discreto e solitário, o macho só exibe completamente seu belo topete quando está excitado ou ao cantar.",
      order: "Passeriformes",
      curiosities: "Eventualmente é capturado e criado como ave de cativeiro. ",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FTico-tico-rei1.png?alt=media&token=a2816737-4f9a-49ca-8bd9-ef70a32eef9b",
      name: "Tico-tico-rei",
      known_names: "**",
      scientific_name: "Coryphospingus cucullatus",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "8e5e6c6e-58eb-4a32-82d6-b35f48a874de",
    coordinates: [-22.894266666666667, -49.63926666666667],
    icon_color: "#b91c1c",
    specie: {
      family: "Thraupidae",
      food: "Se alimenta de frutinhas das árvores e arbustos ou de epífitas que neles vegetam, frutinhas de cipós e pedaços de frutas maiores e seu suco, folhas, botões e néctar.",
      geographic_distribution:
        "Ocorre em praticamente todo o Brasil, exceto o extremo sul e o noroeste do estado do Amazonas, também é encontrada nas Guianas, Venezuela, Bolívia, Paraguai e Argentina.",
      habitat: "Vive em regiões com vegetação arbórea rala como caatinga, cerrado etc.",
      habits: "Macho e fêmea costumam andar juntos, raramente em grupos ou com outras aves.",
      order: "Passeriformes",
      curiosities: "",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FSa%C3%ADra-de-chap%C3%A9u-preto1.png?alt=media&token=3a6a8633-9e9d-44ad-b263-d2e3798e5599",
      name: "Saíra-de-chapéu-preto",
      known_names: "**",
      scientific_name: "Nemosia pileata",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "aae069c5-e64c-40bd-a092-445999a9c9b7",
    coordinates: [-22.89211222222222, -49.64066555555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Thraupidae",
      food: "Se alimenta de sementes no chão, predominantemente granívora.",
      geographic_distribution:
        "Está presente do Maranhão até o Rio Grande do Sul e a oeste até o Mato Grosso, também encontrado nas Guianas, Venezuela, Colômbia, Equador, Peru, Bolívia, Paraguai, Uruguai e Argentina.",
      habitat:
        "Vive em campos secos, campos de cultura e caatinga, bordas de matas, áreas de cerrado, campos naturais, pastagens abandonadas, plantações e jardins gramados.",
      habits:
        "Costuma ficar em bandos quando não está em período de acasalamento, às vezes de dezenas de indivíduos. O macho tem um canto de madrugada bem extenso e áspero, diferente do canto diurno. ",
      order: "Passeriformes",
      curiosities: "",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FCan%C3%A1rio-da-terra1.png?alt=media&token=9ad3e176-270e-4283-bff0-d4b8b9935189",
      name: "Canário-da-terra",
      known_names: "**",
      scientific_name: "Sicalis flaveola",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "51cab57f-4bc5-4609-ae1a-4ed1c6f4963f",
    coordinates: [-22.891833444444444, -49.64038877777777],
    icon_color: "#b91c1c",
    specie: {
      family: "Thraupidae",
      food: "Granívoro.",
      geographic_distribution:
        "Encontra-se em todo o Brasil, com exceção da parte florestal da Região Amazônica, ocorrendo também em áreas urbanas.",
      habitat: "Campos abertos e capinzais.",
      habits:
        "Fora do período reprodutivo, é uma ave de comportamento gregário, vivendo em grupos de 6 a 20 indivíduos, inclusive às vezes formando grupos mistos com outras espécies de papa-capins e tizius.",
      order: "Passeriformes",
      curiosities:
        "O coleirinho foi beneficiado pela introdução de algumas gramíneas africanas, que parece ser a base de sua alimentação em áreas alteradas pelo homem. ",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FColeirinho1.png?alt=media&token=59f033bb-eed1-4d3b-b7d2-5eb647cbdaee",
      name: "Coleirinho",
      known_names: "**",
      scientific_name: "Sporophila caerulescens",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "0fc025a2-1025-4687-955a-432d8971992b",
    coordinates: [-22.89233222222222, -49.64033555555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Thraupidae",
      food: "Se alimenta de frutos, folhas, brotos, flores de eucaliptos e insetos.",
      geographic_distribution:
        "Ocorre nas regiões tropicais e subtropicais ao sul da Amazônia e a leste dos Andes.",
      habitat:
        "Habita matas abertas, capões, matas ciliares, zonas de cultivo, matas degradadas ou em recuperação, e até mesmo jardins e parques urbanos, tolerando climas de úmidos a semiáridos, vive na copa ou entre as árvores à busca de alimentos. ",
      habits:
        "Anda quase sempre em casais ou pequenos bandos, também é visto junto com outra espécie de sua família. É bem ativo e costuma ter medo de humanos. Quando um macho apronta-se para agredir outro, seu canto torna-se rouco e monótono. ",
      order: "Passeriformes",
      curiosities: "",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FSanha%C3%A7o-cinzento1.png?alt=media&token=b3f14bc3-5690-4ce0-aaea-e11840e261ad",
      name: "Sanhaço-cinzento",
      known_names: "**",
      scientific_name: "Thraupis sayaca",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "4bd545c7-26eb-4e0a-8c01-374cf2e4d19d",
    coordinates: [-22.89343333333333, -49.64843333333333],
    icon_color: "#b91c1c",
    specie: {
      family: "Threskiornithidae",
      food: "Tem alimentação variada, composta por artrópodes entre outros invertebrados.",
      geographic_distribution:
        "Presente em grande parte do Brasil, também no Paraguai, norte de Argentina, norte de Uruguai e parte da Bolívia. ",
      habitat: "Habita campos secos, alagados e pastagens.",
      habits:
        "Vive geralmente em bandos pequenos ou solitária, procurando alimento, é diurna e crepuscular. Anda em pequenos grupos, que à noite se empoleiram nas árvores. Gosta de planar a grandes alturas.",
      order: "Pelecaniformes",
      curiosities:
        "Seu bico é longo e curvo, adaptado para extrair larvas de besouros e outros insetos da terra fofa.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FCuricaca1.png?alt=media&token=d0adc3a9-96f0-4072-b8b8-c806f31951f1",
      name: "Curicaca",
      known_names: "**",
      scientific_name: "Theristicus caudatus",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "c0974151-10e1-40a9-b6d4-d0e93130731a",
    coordinates: [-22.891388888888887, -49.64055555555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Trochilidae",
      food: "Se alimenta do néctar das flores.",
      geographic_distribution:
        "Encontrado no sudeste da Venezuela, na Bolívia, Peru, e no sudoeste da Amazônia brasileira e na região central e sul do Brasil.",
      habitat: "Bem adaptado a áreas urbanas, frequentando os bebedouros com água açucarada.",
      habits:
        "Gosta muito das áreas urbanas, frequentando assiduamente o malvavisco e outras plantas atrativas e também os bebedouros com água açucarada.",
      order: "Apodiformes",
      curiosities:
        "É relativamente frequente os beija-flores capturarem pequenos insetos presos em teias de aranhas, neste processo, já foi observado um jovem Chionomesa lactea imobilizado pelos fios de seda da teia da aranha Nephilengys cruentata.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FBeija-flor-de-peito-azul1.png?alt=media&token=5337d289-0423-4e52-b7c6-ee88cf70a8cf",
      name: "Beija-flor-de-peito-azul",
      known_names: "**",
      scientific_name: "Chionomesa lactea",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "19f28952-f286-4ded-930e-30c98c59e317",
    coordinates: [-22.891389188888887, -49.64053635555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Trochilidae",
      food: "Se alimenta quase que exclusivamente em voo e é adaptado para sugar o néctar das flores, também come insetos e aranhas.",
      geographic_distribution:
        "Pode ser encontrado no Nordeste e do Espírito Santo ao Rio Grande do Sul.",
      habitat:
        "Vive em jardins e quintais floridos, capoeiras ralas, áreas abertas e matas de candeias floridas.",
      habits:
        "Tem necessidade de limpar-se frequentemente devido ao constante contato com o líquido viscoso das flores. Gosta de tomar banho de sol e se espreguiça após o descanso. Pousa abertamente em galhos finos para dormir.",
      order: "Apodiformes",
      curiosities: "Durante as horas da sua maior atividade é muito agressivo.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FBesourinho-de-bico-vermelho1.png?alt=media&token=ff3811db-388b-4fc8-a9ea-d31e7430fe6b",
      name: "Besourinho-de-bico-vermelho",
      known_names: "**",
      scientific_name: "Chlorostilbon lucidus",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "d33c3f4c-3b03-4f7c-86b1-dd51d58626c6",
    coordinates: [-22.89262222222222, -49.64065555555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Trochilidae",
      food: "Se alimenta basicamente de néctar de flores, mas também caça pequenos insetos.",
      geographic_distribution:
        "Ocorre das Guiana à Bolívia e Paraguai, todo o Brasil, exceto certas regiões da Amazônia.",
      habitat:
        "Vive em áreas semiabertas, bordas de florestas, capoeiras, parques e jardins, sendo comum até em grandes metrópoles.",
      habits:
        "Não costuma ter medo do ser humano, aproximando-se das pessoas para se alimentar nas garrafas com água e açúcar ou nas flores de seus jardins. É territorialista e extremamente agressivo, principalmente na época da reprodução, quando é capaz de atacar outros pássaros muito maiores e pequenos mamíferos.",
      order: "Apodiformes",
      curiosities:
        "Em algumas épocas do ano, quando há menos disponibilidade de néctar, adota uma única árvore, que pode ser um mulungu ou um ipê.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FBeija-flor-tesoura1.png?alt=media&token=4d4f9ca7-1402-4607-af88-07b9ad48c3cf",
      name: "Beija-flor-tesoura",
      known_names: "**",
      scientific_name: "Eupetomena macroura",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "580df10b-2fae-4df2-8b16-eaf35bb2aa24",
    coordinates: [-22.889444444444443, -49.63777777777778],
    icon_color: "#b91c1c",
    specie: {
      family: "Turdidae",
      food: "Se alimenta de invertebrados e pequenos frutos, principalmente no solo.",
      geographic_distribution:
        "Ocorrência dessa espécie em quase todos os estados do Brasil e na Argentina. ",
      habitat:
        "Espécie semiflorestal, adapta-se também a áreas urbanas muito arborizadas, também é visto em bordas de matas e clareiras.",
      habits:
        "Pousado ou no chão, possuem o característico hábito de balançar a cauda rapidamente na vertical. Só canta na época de reprodução, fora isso só emite chamados fora dessa época.",
      order: "Passeriformes",
      curiosities: "Seu período migratório vai dos meses de maio a agosto.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FSabi%C3%A1-poca1.png?alt=media&token=c2fea407-af4b-4ebf-87e2-02dda7aaf64b",
      name: "Sabiá-poca",
      known_names: "**",
      scientific_name: "Turdus amaurochalinus",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "b7a35c5f-cf7d-49e4-8547-d2801640ba34",
    coordinates: [-22.89222222222222, -49.64055555555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Turdidae",
      food: "Se alimenta basicamente de minhocas e artrópodes, revira as folhas caídas em busca de pequenos invertebrados e também se alimenta de pequenos frutos.",
      geographic_distribution: "Encontrado em todo o Brasil.",
      habitat:
        "Comum em todas as matas ciliares, matas de galeria, matas secas, cambarazais e cerradões, acostuma-se com ambientes criados pela ação humana, como jardins, pomares e áreas urbanas bem arborizadas.",
      habits:
        "Canta somente na primavera, época em que acasala. Adapta-se a diferentes ambientes e também é muito visto em parques urbanos com muita vegetação.\n\n",
      order: "Passeriformes",
      curiosities:
        "Sua voz é múltipla, com um canto contínuo, menos forte do que o de sabiá-laranjeira (Turdus rufiventris), durante o resto do ano só emite vocalizações de alerta, especialmente ao entardecer, quando disputa os melhores poleiros para passar a noite. Costuma ser o pássaro que emite o alerta mais forte, denunciando às outras aves a presença de um predador ou ameaça em potencial. ",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FSabi%C3%A1-barranco1.png?alt=media&token=509a525d-5e57-40e6-ab58-40b15853069b",
      name: "Sabiá-barranco",
      known_names: "**",
      scientific_name: "Turdus leucomelas",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "0d0884f3-6e98-4620-b1de-90b673cd9efb",
    coordinates: [-22.889421444444444, -49.63771177777778],
    icon_color: "#b91c1c",
    specie: {
      family: "Tyrannidae",
      food: "Se alimenta de invertebrados e alimenta-se de frutos.",
      geographic_distribution:
        "Ocorre em todo o Brasil, também na América Central desde a Costa Rica e demais países Sul Americanos, exceto o Chile, até o centro da Argentina.",
      habitat:
        "Ocorre desde a floresta amazônica até áreas de campos com arbustos de todo o país, adaptando-se a ambientes urbanos com alguma arborização.",
      habits:
        "Desconfiado, está sempre movimentando-se bastante, desde a copa das árvores mais destacadas até próximo ao chão. Além do tamanho e comportamento, sua característica marcante é o canto, a forma mais chamativa é uma sequência de notas agudas, altas, descendentes e que parecem uma risada, canta desde o amanhecer até o escurecer.",
      order: "Passeriformes",
      curiosities: "Apresenta um período reprodutivo que vai de julho a dezembro.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FRisadinha1.png?alt=media&token=a4dcb13c-b993-4cec-8338-7dfd888d9c19",
      name: "Risadinha",
      known_names: "**",
      scientific_name: "Camptostoma obsoletum",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "d082272b-a1cd-42ac-b8b0-900afa24daee",
    coordinates: [-22.891657666666667, -49.64665766666667],
    icon_color: "#b91c1c",
    specie: {
      family: "Tyrannidae",
      food: "Captura insetos em voos curtos.",
      geographic_distribution:
        "Praticamente todo o Brasil e também nos demais países da América do Sul, com exceção do Chile e Uruguai.\n\n",
      habitat:
        "É comum no sub-bosque de florestas baixas, bordas de florestas, florestas de galeria, capoeiras arbustivas, arbustos e na vegetação arbórea baixa em ilhas fluviais. ",
      habits: "Seu comportamento é muito calmo e pouco visível.",
      order: "Passeriformes",
      curiosities:
        "Esse pássaro é muito arisco, ao perceber um intruso nas proximidades do ninho voa para longe e só retorna depois que o intruso desaparece.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FGuaracavu%C3%A7u1.png?alt=media&token=ff10eb3c-056a-4024-8576-5bc55f173365",
      name: "Guaracavuçu",
      known_names: "**",
      scientific_name: "Cnemotriccus fuscatus",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "7890a19d-73e7-4f2f-9ebb-3102814f55de",
    coordinates: [-22.89140088888889, -49.64050055555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Tyrannidae",
      food: "Sua dieta é essencialmente frugívora.",
      geographic_distribution:
        "Encontrado nas regiões Sudeste e Sul do Brasil, além de Bolívia, Equador, Paraguai, Peru, Uruguai e Argentina.\n\n",
      habitat:
        "Frequenta florestas úmidas da Mata Atlântica e também matas de galeria, matas mesófilas e matas de araucária. ",
      habits:
        "Constrói ninhos bem elaborados em forma de taça externamente decorados com liquens, para efeito de camuflagem, nas forquilhas de árvores e arbustos, chocando ovos pintalgados.",
      order: "Passeriformes",
      curiosities: "",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FTuc%C3%A3o1.png?alt=media&token=c3e4b495-8999-49e5-9424-53544c583a64",
      name: "Tucão",
      known_names: "**",
      scientific_name: "Elaenia obscura",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "5a811d68-7df2-4978-9e62-872cb016dd4f",
    coordinates: [-22.8926, -49.64966666666667],
    icon_color: "#b91c1c",
    specie: {
      family: "Tyrannidae",
      food: "Se alimenta de pequenos artrópodes que captura na lama das margens de rios, açudes, brejos e pocilgas. Antes de se alimentar, tem o comportamento de estar com o alimento no bico e batê-lo contra o chão.",
      geographic_distribution:
        "Existem duas populações muito distantes, uma no leste brasileiro e outra no noroeste da América do Sul.",
      habitat:
        "O seu habitat é, junto a rios ou lagoas, podendo ser encontrada em parques e jardins em centros urbanos. Vem frequentemente ao chão, mesmo barrento, em busca de alimento. ",
      habits:
        "É ave de espaços abertos, é comum ser vista em bandos ou casais. Ocasionalmente, pode ser encontrada em áreas urbanas bem arborizadas.",
      order: "Passeriformes",
      curiosities:
        "Na década de 90 foram feitos os primeiros registros da espécie no interior de São Paulo e hoje em dia já são registradas aves se reproduzindo em Santa Catarina e Rio Grande do Sul. Em Natal/RN, evita-se sua caça e captura porque há o costume de que esse pássaro “lavou a roupa de Deus”.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FLavadeira-mascarada1.png?alt=media&token=34524ab7-e5c0-45f6-80e3-a9db903350b4",
      name: "Lavadeira-mascarada",
      known_names: "**",
      scientific_name: "Fluvicola nengeta",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "74e896e3-a06d-4528-820e-00a4f1bd600f",
    coordinates: [-22.89224422222222, -49.64044555555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Tyrannidae",
      food: "Insetívoro.",
      geographic_distribution:
        "Ocorre na região centro-leste do Brasil, distribuindo-se desde a Venezuela até a Bolívia, Argentina e Uruguai. ",
      habitat: "Vive em paisagens abertas, campos de cultura e parques nas cidades.",
      habits:
        "Tem o hábito de seguir bois, antas, capivaras e outros mamíferos grandes para capturar carrapatos e outros parasitas sobre estes animais ou para apanhar os insetos espantados por eles enquanto caminham.",
      order: "Passeriformes",
      curiosities: "É migratório no sul do Brasil.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FSuiriri-cavaleiro1.png?alt=media&token=7a0b6f94-9b52-4c72-a71c-e488049f4de0",
      name: "Suiriri-cavaleiro",
      known_names: "**",
      scientific_name: "Machetornis rixosa ",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "40956d99-f135-4af9-b7dc-f8b901e2047c",
    coordinates: [-22.89221022222222, -49.64054155555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Tyrannidae",
      food: "Se alimenta de insetos e frutinhas.",
      geographic_distribution: "Ocorre do México a Argentina e em todo o Brasil.",
      habitat:
        "Encontrado em florestas, paisagens abertas com árvores esparsas, cerrados e áreas urbanas arborizadas, de preferência onde haja água.",
      habits:
        "Ave migratória, sendo encontrada nos meses mais quentes do ano. O casal tem o hábito de cantar em dueto, porém este é mal sincronizado. É muito tímido, sendo mais fácil de ouvir que ver, pois passa a maior parte do seu tempo na copa das árvores. ",
      order: "Passeriformes",
      curiosities:
        "Apesar de viver praticamente sozinho, pode ser visto em casal ou em um bando de três indivíduos.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FNeinei1.png?alt=media&token=748f147a-7984-4d36-923e-541dddf5ea55",
      name: "Neinei",
      known_names: "**",
      scientific_name: "Megarynchus pitanguá",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "9c84b803-fd4c-4bdb-b308-1d5adbc8bb6a",
    coordinates: [-22.889420444444443, -49.63779077777778],
    icon_color: "#b91c1c",
    specie: {
      family: "Tyrannidae",
      food: "Se alimenta de insetos que apanha em voo a partir do poleiro e também de pequenos frutos.",
      geographic_distribution:
        "Ocorre desde o México até a Argentina, presente em todos os países sul americanos, exceto o Chile.",
      habitat:
        "Habita a parte interna das matas ciliares, cerradões, cambarazais e matas secas, ocasionalmente, aparece em áreas de cerrado denso. Não costuma ficar em poleiros expostos, como as outras espécies rajadas. ",
      habits:
        "Vive em casais ou grupos familiares, muito agressivos com outros bem-te-vis-rajados. O chamado de contato mais usado e capaz de denunciá-lo parece um soluço agudo, levemente anasalado, repetido várias vezes. Passa a maior parte do tempo pousado em poleiros nas árvores das bordas de matas secundárias, florestas de galeria ou matas de várzea.",
      order: "Passeriformes",
      curiosities: "Realiza migrações sazonais, indo para as latitudes mais baixas no inverno.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FBem-te-vi-rajado1.png?alt=media&token=bbd01e15-76eb-46f6-baae-f3647b109cab",
      name: "Bem-te-vi-rajado",
      known_names: "**",
      scientific_name: "Myiodynastes maculatus ",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "bc680585-3ae2-4761-896f-25dca5fe77b2",
    coordinates: [-22.891386688888886, -49.64055395555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Tyrannidae",
      food: "Alimenta-se de insetos capturados durante pequenos vôos, e de pequenas frutas.\n\n",
      geographic_distribution:
        "Distribui-se em grande parte do Brasil, em alguns países vizinhos da América do Sul e também na América Central. ",
      habitat:
        "Prefere matas ou capoeiras mais conservadas, quase sempre próximo a algum curso d'água; não se adapta muito às regiões campestres ou cidades pouco arborizadas.",
      habits: "Ocorre aos pares ou em pequenos grupos familiares, que são muito barulhentos.",
      order: "Passeriformes",
      curiosities:
        "Os indivíduos que ocorrem em regiões com clima mais severo, podem realizar movimentos de migração para regiões mais quentes nas épocas de inverno.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FBentevizinho-de-penacho-vermelho1.png?alt=media&token=e8e905de-811e-440b-b174-7332720a4ef5",
      name: "Bentevizinho-de-penacho-vermelho",
      known_names: "**",
      scientific_name: "Myiozetetes similis",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "3274f267-e4a3-449e-8c35-a8b04e428f58",
    coordinates: [-22.89241222222222, -49.64044555555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Tyrannidae",
      food: "É insetívoro, mas também come frutas, ovos e até mesmo filhotes de outros pássaros, flores de jardins, minhocas, pequenas cobras, lagartos, crustáceos, além de peixes e girinos de rios e lagos e pequenos roedores. Costuma comer parasitas (carrapatos) de bovinos e equinos. ",
      geographic_distribution:
        "É ave típica da América Latina, predominantemente do sul do México à Argentina, também ser encontrado no sul do Texas e na ilha de Trinidad. ",
      habitat:
        "Podem ser encontrados em áreas urbanas, matas densas e ambientes aquáticos como lagoas, rios e praias.",
      habits:
        'É agressivo, ameaçando qualquer um que se aproxima de seu "território". Costuma pousar em lugares salientes como postes e topos de árvores. É um dos primeiros a cantar ao amanhecer. Anda geralmente sozinho, mas pode ser visto em grupos de três ou quatro.',
      order: "Passeriformes",
      curiosities: "",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FBem-te-vi1.png?alt=media&token=41cc549b-137c-4195-a1c9-9f7d55dc2399",
      name: "Bem-te-vi",
      known_names: "**",
      scientific_name: "Pitangus sulphuratus",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "0e43ecf5-bdf5-4771-987b-098858754a2d",
    coordinates: [-22.889444444444443, -49.63777777777778],
    icon_color: "#b91c1c",
    specie: {
      family: "Tyrannidae",
      food: "Se alimenta de insetos capturados no ar ou no solo, daí retornando ao poleiro.",
      geographic_distribution:
        "Encontrado no sudeste da Bolívia, Paraguai e do sudeste do Brasil até a Argentina e Uruguai.",
      habitat:
        "Vive em campos e cerrados. Ocupa os ambientes abertos, desde campos, praias de rio com arbustos, até cerrado e bordas de vegetação florestal. ",
      habits:
        "Não penetra em áreas com adensamento de vegetação. Utiliza ambientes criados pelos humanos, sendo notável em jardins e parques urbanos, ainda pode ser observado na periferia de cidades. É normalmente encontrado aos pares.",
      order: "Passeriformes",
      curiosities:
        "Reproduz-se no sul do Brasil e países vizinhos (Uruguai, Argentina) e, após o ciclo reprodutivo, migra para o norte, chegando até a Amazônia. ",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FPr%C3%ADncipe1.png?alt=media&token=e6a0d301-f43e-4c5b-a6a5-33470fd3d945",
      name: "Príncipe",
      known_names: "**",
      scientific_name: "Pyrocephalus rubinus",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  },
  {
    id: "93b59fb7-3e7a-412d-ba20-fc3e45606664",
    coordinates: [-22.89211322222222, -49.64044355555555],
    icon_color: "#b91c1c",
    specie: {
      family: "Tyrannidae",
      food: "Realiza um voo, apanhando a presa no ar, retorna ao local de origem para consumi-la, muitas vezes batendo fortemente no galho para matá-la ou estonteá-la. Se alimenta de insetos e frutos.",
      geographic_distribution:
        "Ocorre em todo o Brasil, e desde os Estados Unidos a quase toda a América do Sul.",
      habitat:
        "Adapta-se até aos maiores conglomerados urbanos, desde que haja alguma arborização.",
      habits:
        "Costuma ficar pousado em poleiros expostos. Vive solitário ou em casais, muito agressivos entre si. Canta frequentemente do final da madrugada ao início da noite.",
      order: "Passeriformes",
      curiosities:
        "Algumas populações migratórias possuem asas mais pontudas, o que pode ser explicado como uma adaptação para voos longos.",
      image_url:
        "https://firebasestorage.googleapis.com/v0/b/cadetutatu-acb45.appspot.com/o/images%2Fanimals%2FSuiriri1.png?alt=media&token=05d26d39-0b6a-48cc-8ca7-4b217042c5b4",
      name: "Suiriri",
      known_names: "**",
      scientific_name: "Tyrannus melancholicus",
      division: "Invertebrado",
      reference:
        "WikiAves (2023) WikiAves, a Enciclopédia das Aves do Brasil. Disponível em: <http://www.wikiaves.com.br/>. "
    }
  }

];

function Dados2() {
  return (
    <div>
      <Titulo></Titulo>
      <Header></Header>
    <div className="bg2 mx-auto">
      <h1 className="text-[2.5rem] text-white font-bold text-center p-11">Base de Dados</h1>
      <Dados data={data}/>
    </div>
    </div>
  );
}

export default Dados2;
