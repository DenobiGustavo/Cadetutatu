import React, { useState, useEffect, useRef } from "react";

const Dados = ({ data = [] }) => {
  const [modalImage, setModalImage] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [filter, setFilter] = useState("Todos");
  const [search, setSearch] = useState("");

  const quemAbriu = useRef(null);
  const botaoFechar = useRef(null);

  const openModal = (url, credit, nome) => {
    quemAbriu.current = document.activeElement;
    setModalImage({ url, credit, nome });
  };
  const closeModal = () => {
    setModalImage(null);
    if (quemAbriu.current && quemAbriu.current.focus) quemAbriu.current.focus();
  };

  // Esc fecha a foto ampliada e o foco vai para o botao Fechar (WCAG 2.1.1 / 2.4.3)
  useEffect(() => {
    if (!modalImage) return undefined;
    if (botaoFechar.current) botaoFechar.current.focus();
    const aoTeclar = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", aoTeclar);
    return () => document.removeEventListener("keydown", aoTeclar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalImage]);

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

  // Categorias
  const categories = [
    { label: "Todos", value: "Todos" },
    { label: "Animais", value: "Animal" },
    { label: "Plantas", value: "Planta" },
  ];

  // Filtro
  let filteredData = data.filter((item) => {
    const division = item.specie.division;

    if (filter === "Todos") return true;

    if (filter === "Planta") {
      return division === "Plantae";
    }

    if (filter === "Animal") {
      // Animais = Vertebrado (1) ou Invertebrado (2)
      return Number(division) === 1 || Number(division) === 2;
    }

    return false;
  });

  // Busca
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
          aria-label="Buscar espécie"
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
                       text-gray-600 hover:text-gray-800 text-xl leading-none"
            aria-label="Limpar busca"
          >
            ×
          </button>
        )}
      </div>

      {/* Filtro */}
      <div role="group" aria-label="Filtrar por categoria" className="flex gap-4 mb-4 flex-wrap sm:gap-6 sm:mb-6">
        {categories.map((cat) => (
          <button
            key={cat.value}
            type="button"
            aria-pressed={filter === cat.value}
            onClick={() => setFilter(cat.value)}
            className={`px-4 sm:px-5 py-2 rounded-lg text-white font-semibold transition ${
              filter === cat.value
                ? "bg-primary-green"
                : "bg-[#156AC7] hover:bg-blue-700"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Anuncia para leitores de tela quantas especies o filtro/busca encontrou */}
      <p role="status" className="sr-only">
        {filteredData.length} {filteredData.length === 1 ? "espécie encontrada" : "espécies encontradas"}
      </p>

      {/* Cards */}
      {filteredData.length === 0 ? (
        <div className="text-center p-6 text-gray-100 italic sm:text-base">
          Nenhuma espécie encontrada
        </div>
      ) : (
        filteredData.map((item) => {
          const imageUrl = item.specie.image_url;
          const imageCredit = item.specie.image_credit;
          const isMobile = windowWidth < 768;
          // Habitat, hábitos, alimentação e ordem só fazem sentido para animais.
          const ehPlanta = item.specie.division === "Plantae";

          return (
            <div
              key={item.id}
              className="w-full max-w-full bg-[#156AC7] rounded-xl shadow-md overflow-hidden
                         flex flex-col md:flex-row hover:shadow-lg md:hover:scale-105 md:transition-transform md:duration-300
                         sm:max-w-3xl md:max-w-5xl"
            >
              {imageUrl && (
                <div className="flex flex-col w-full md:w-64 md:h-80 flex-shrink-0 bg-[#0F4C94]">
                  <button
                    type="button"
                    onClick={() => openModal(imageUrl, imageCredit, item.specie.name)}
                    aria-label={`Ampliar foto: ${item.specie.name}`}
                    className="block w-full h-56 md:h-auto md:flex-1 min-h-0 cursor-zoom-in"
                  >
                    <img
                      src={imageUrl}
                      alt={item.specie.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </button>
                  {imageCredit && (
                    <p className="px-3 py-2 text-xs leading-snug text-gray-100">
                      Foto: {imageCredit}
                    </p>
                  )}
                </div>
              )}

              <div
                // O painel de texto dos animais rola (altura fixa); sem foco o teclado nao le o resto (WCAG 2.1.1)
                {...(!isMobile && !ehPlanta
                  ? { tabIndex: 0, role: "group", "aria-label": `Detalhes de ${item.specie.name}` }
                  : {})}
                className={`flex-1 p-6 sm:p-8 text-sm sm:text-base text-gray-100 flex flex-col justify-between
                            ${isMobile ? "h-auto" : "h-80 overflow-auto"}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-greenheader text-lg sm:text-xl">
                    {item.specie.name}
                  </h2>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <p>
                    <span className="font-bold text-greenheader">
                      Nome Científico:
                    </span>{" "}
                    {item.specie.scientific_name}
                  </p>
                  <p>
                    <span className="font-bold text-greenheader">Família:</span>{" "}
                    {item.specie.family}
                  </p>
                  {!ehPlanta && (
                    <p>
                      <span className="font-bold text-greenheader">
                        Alimentação:
                      </span>{" "}
                      {item.specie.food || "Não informado"}
                    </p>
                  )}
                  <p>
                    <span className="font-bold text-greenheader">
                      Distribuição:
                    </span>{" "}
                    {item.specie.geographic_distribution}
                  </p>
                  {!ehPlanta && (
                    <>
                      <p>
                        <span className="font-bold text-greenheader">Habitat:</span>{" "}
                        {item.specie.habitat || "Não informado"}
                      </p>
                      <p>
                        <span className="font-bold text-greenheader">Hábitos:</span>{" "}
                        {item.specie.habits || "Não informado"}
                      </p>
                    </>
                  )}
                  {!ehPlanta && (
                    <p>
                      <span className="font-bold text-greenheader">Ordem:</span>{" "}
                      {item.specie.order || "Não informado"}
                    </p>
                  )}
                  <p>
                    <span className="font-bold text-greenheader">
                      Curiosidades:
                    </span>{" "}
                    {item.specie.curiosities || "Não informado"}
                  </p>
                </div>
              </div>
            </div>
          );
        })
      )}

      {/* Modal de Imagem */}
      {modalImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ampliada: ${modalImage.nome}`}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-3xl w-full">
            <img
              src={modalImage.url}
              alt={`Foto de ${modalImage.nome}`}
              className="w-full h-auto rounded-lg"
            />
            {modalImage.credit && (
              <p className="mt-2 text-xs text-gray-200">{modalImage.credit}</p>
            )}
            <button
              type="button"
              ref={botaoFechar}
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
