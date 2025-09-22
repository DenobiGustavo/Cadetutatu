import React, { useState, useEffect } from "react";
import { imageResolver } from "./imageresolver";

const Dados = ({ data = [] }) => {
  const [modalImage, setModalImage] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [filter, setFilter] = useState("Todos");
  const [search, setSearch] = useState("");

  const openModal = (imageUrl) => setModalImage(imageUrl);
  const closeModal = () => setModalImage(null);

  useEffect(() => {
    document.body.style.overflow = modalImage ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalImage]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = [
    { label: "Todos", value: "Todos" },
    { label: "Vertebrado", value: "Vertebrado" },
    { label: "Invertebrado", value: "Invertebrado" },
    { label: "Planta", value: "Planta" },
  ];

  let filteredData = data.filter((item) => {
    const division = item.specie.division;
    if (filter === "Todos") return true;
    if (filter === "Planta") return division === "Plantae";
    if (filter === "Vertebrado") return Number(division) === 1;
    if (filter === "Invertebrado") return Number(division) === 2;
    return false;
  });

  if (search.trim() !== "") {
    filteredData = filteredData.filter((item) =>
      item.specie.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 p-4 sm:p-6 md:p-8 w-full">
      {/* Buscador com botão X */}
      <div className="relative w-full max-w-md mb-4 sm:mb-6">
        <input
          type="text"
          placeholder="Buscar espécie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300
                     focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800
                     sm:text-base"
        />
        {search && (
          <button
            type="button"
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2
                       text-gray-400 hover:text-gray-600 text-xl leading-none"
            aria-label="Limpar busca"
          >
            ×
          </button>
        )}
      </div>

      {/* Filtro */}
      <div className="flex gap-4 mb-4 flex-wrap sm:gap-6 sm:mb-6">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setFilter(cat.value)}
            className={`px-4 sm:px-5 py-2 rounded-lg text-white font-semibold transition ${
              filter === cat.value
                ? "bg-[#0CBB68]"
                : "bg-[#156AC7] hover:bg-blue-700"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      {filteredData.length === 0 ? (
        <div className="text-center p-6 text-gray-100 italic sm:text-base">
          Nenhuma espécie encontrada
        </div>
      ) : (
        filteredData.map((item) => {
          const imageUrl =
            imageResolver(item.specie.name) || item.specie.image_url;
          const isMobile = windowWidth < 768;

          return (
            <div
              key={item.id}
              className="w-full max-w-full bg-[#156AC7] rounded-xl shadow-md overflow-hidden
                         flex flex-col md:flex-row hover:shadow-lg md:hover:scale-105 md:transition-transform md:duration-300
                         sm:max-w-3xl md:max-w-5xl" // tablet: 3xl, desktop: 5xl
            >
              {imageUrl && (
                <div className="hidden md:flex md:w-64 md:h-80 flex-shrink-0">
                  <img
                    src={imageUrl}
                    alt={item.specie.name}
                    className="w-full h-full object-cover rounded-l-xl"
                  />
                </div>
              )}

              <div
                className={`flex-1 p-6 sm:p-8 text-sm sm:text-base text-gray-100 flex flex-col justify-between
                            ${isMobile ? "h-auto" : "h-80 overflow-auto"}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-[#86EFAC] text-lg sm:text-xl">
                    {item.specie.name}
                  </h2>
                  {imageUrl && isMobile && (
                    <button
                      className="px-3 py-1 rounded-lg text-sm text-white bg-[#0CBB68] hover:bg-green-600 transition"
                      onClick={() => openModal(imageUrl)}
                    >
                      Ver Foto
                    </button>
                  )}
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <p>
                    <span className="font-bold text-[#86EFAC]">
                      Nome Científico:
                    </span>{" "}
                    {item.specie.scientific_name}
                  </p>
                  <p>
                    <span className="font-bold text-[#86EFAC]">Família:</span>{" "}
                    {item.specie.family}
                  </p>
                  <p>
                    <span className="font-bold text-[#86EFAC]">Alimentação:</span>{" "}
                    {item.specie.food || "Não informado"}
                  </p>
                  <p>
                    <span className="font-bold text-[#86EFAC]">Distribuição:</span>{" "}
                    {item.specie.geographic_distribution}
                  </p>
                  <p>
                    <span className="font-bold text-[#86EFAC]">Habitat:</span>{" "}
                    {item.specie.habitat}
                  </p>
                  <p>
                    <span className="font-bold text-[#86EFAC]">Hábitos:</span>{" "}
                    {item.specie.habits}
                  </p>
                  <p>
                    <span className="font-bold text-[#86EFAC]">Ordem:</span>{" "}
                    {item.specie.order || "Não informado"}
                  </p>
                  <p>
                    <span className="font-bold text-[#86EFAC]">Curiosidades:</span>{" "}
                    {item.specie.curiosities || "Não informado"}
                  </p>
                </div>
              </div>
            </div>
          );
        })
      )}

      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-3xl w-full">
            <img
              src={modalImage}
              alt="Visualização"
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-gray-800 bg-opacity-70 rounded-full px-3 py-1 hover:bg-opacity-90 transition"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dados;
