// src/components/Dados.jsx
import React, { useState } from 'react';
import { imageResolver } from './imageresolver';

const Dados = ({ data = [] }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (name) => {
    const imageUrl = imageResolver(name);
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  if (!data || data.length === 0) {
    return <div>Nenhum dado disponível</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="mr-10 ml-10 mb-10 mt-1 rounded-lg bg-blue-400 text-white text-center outline">
        <thead>
          <tr className='bg-primary-blue font-bold'>
            <th className="px-2 py-2 border">Nome</th>
            <th className="px-2 py-2 border">Nome Científico</th>
            <th className="px-2 py-2 border">Família</th>
            <th className="px-2 py-2 border">Alimentação</th>
            <th className="px-2 py-2 border">Distribuição Geográfica</th>
            <th className="px-2 py-2 border">Habitat</th>
            <th className="px-2 py-2 border">Hábitos</th>
            <th className="px-2 py-2 border">Ordem</th>
            <th className="px-2 py-2 border">Curiosidades</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className='text-black'>
              <td className="px-2 py-2 border bg-primary-blue text-white font-bold">
                <div className='grid'>
                  {item.specie.name}
                  <button 
                    onClick={() => handleImageClick(item.specie.name)}
                    className='p-1 bg-primary-green text-center rounded-lg text-sm'
                  >
                    Veja Imagens
                  </button>
                </div>
              </td>
              <td className="px-2 py-2 border">{item.specie.scientific_name}</td>
              <td className="px-2 py-2 border">{item.specie.family}</td>
              <td className="px-2 py-2 border">{item.specie.food}</td>
              <td className="px-2 py-2 border">{item.specie.geographic_distribution}</td>
              <td className="px-2 py-2 border">{item.specie.habitat}</td>
              <td className="px-2 py-2 border">{item.specie.habits}</td>
              <td className="px-2 py-2 border">{item.specie.order}</td>
              <td className="px-2 py-2 border">{item.specie.curiosities}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-primary-green p-4 rounded max-w-[40rem] max-h-[40rem]">
            <img src={selectedImage} alt="Animal" />
            <button onClick={handleCloseModal} className="mt-4 bg-red-500 text-white p-2 rounded">
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dados;
