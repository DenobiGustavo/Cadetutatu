import React from "react";
import Header from '../PaginaPrincipal/header';
import Titulo from '../PaginaPrincipal/titulo';
import Footer from "../PaginaPrincipal/footer";

export const QuemSomos = () => {

  const mostrarParticipantes = false; 

  return (
    <div className="flex flex-col bg overflow-x-hidden">
      <div>
        <Titulo />
        <Header />
      </div>

      <div className="px-4 sm:px-0">
        <div className="flex flex-col items-center">

          {/* BLOCO PRINCIPAL */}
          <div className="shadow-2xl bg-primary-blue flex flex-col items-center sm:grid sm:grid-cols-2 mt-20 sm:mt-40 w-full max-w-[90%] sm:max-w-[70rem] pt-8 sm:pt-20 pb-8 sm:pb-20 sm:px-8 md:px-16 rounded-[2rem] sm:rounded-[4.5rem]">
            
            <div className="flex justify-center items-center mb-6 sm:mb-0">
              <img
                src="/img/logo.png"
                alt=""
                className="w-[8rem] h-[8rem] sm:w-[20rem] sm:h-[20rem] md:w-[22rem] md:h-[22rem]"
              />
            </div>

            <div className="flex flex-col items-center text-white font-medium px-4 sm:px-10">
              <h1 className="font-bold font-sans text-[1.8rem] sm:text-[2rem] md:text-[2.4rem] text-center">
                CadeTuTatu?
              </h1>
              <p className="pt-4 text-justify font-sans text-[1rem] sm:text-[1.25rem] md:text-[1.3rem]">
                O projeto Cadetutatu, da Universidade Estadual do Norte do Paraná (UENP), tem como objetivo catalogar animais e plantas encontrados nas proximidades do campus...
              </p>
            </div>
          </div>

          {/* CONTROLE DE VISIBILIDADE */}
          {mostrarParticipantes ? (
            <>
              {/* PROFESSORES */}
              <h1 className="font-sans font-bold text-[2rem] sm:text-[3.6rem] md:text-[3rem] text-white text-center pt-[6rem] sm:pt-[11rem] md:pt-[8rem]">
                Professores Pesquisadores
              </h1>

              <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-8 pt-[6rem] sm:pt-[11rem] md:pt-[8rem]">
                {[
                  { nome: "Thiago Adriano Coleti", curso: "(Ciência da Computação)", img: "/img/tiagao.png" },
                  { nome: "Ana Cecília Hoffmann", curso: "(Biologia)", img: "/img/ana.jpg" },
                  { nome: "Diego Pardal", curso: "(Biologia)", img: "/img/diego.png" },
                  { nome: "Carla Gomes De Araújo", curso: "(Biologia)", img: "/img/carla.png" },
                  { nome: "Luiz Fernando Legore", curso: "(Ciência da Computação)", img: "/img/legore.jpeg" },
                ].map((prof, idx) => (
                  <div key={idx} className="shadow-2xl flex flex-col bg-primary-blue w-full sm:w-[21rem] md:w-[18rem] h-[28rem] md:h-[25rem] rounded-[2rem] justify-center items-center p-6">
                    <img src={prof.img} alt="" className="rounded-full w-[8rem] h-[8rem] md:w-[9rem] md:h-[9rem]" />
                    <div className="text-white text-center pt-6">
                      <h1 className="font-bold">{prof.nome}</h1>
                      <h2>{prof.curso}</h2>
                      <p>Professor(a) na UENP</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* ALUNOS */}
              <h1 className="font-sans font-bold text-[2rem] sm:text-[3.6rem] md:text-[3rem] text-white text-center pt-[6rem] sm:pt-[11rem] md:pt-[8rem]">
                Alunos Pesquisadores
              </h1>

              <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-8 pt-[6rem] sm:pt-[11rem] md:pt-[8rem]">
                {[
                  { nome: "Gustavo Denobi", curso: "(Ciência da Computação)", img: "/img/guu.png" },
                  { nome: "Ozeias Moreira", curso: "(Ciência da Computação)", img: "/img/ozi.jpeg" },
                  { nome: "Joana Shizu", curso: "(Ciência da Computação)", img: "/img/jo.jpeg" },
                  { nome: "Leonardo Faria", curso: "(Ciência da Computação)", img: "/img/leo.jpg" },
                  { nome: "Lauren Marçulo", curso: "(Biologia)", img: "/img/lauren.png" },
                ].map((aluno, idx) => (
                  <div key={idx} className="shadow-2xl flex flex-col bg-primary-blue w-full sm:w-[21rem] md:w-[18rem] h-[28rem] md:h-[25rem] rounded-[2rem] justify-center items-center p-6">
                    <img src={aluno.img} alt="" className="rounded-full w-[8rem] h-[8rem] md:w-[9rem] md:h-[9rem]" />
                    <div className="text-white text-center pt-6">
                      <h1 className="font-bold">{aluno.nome}</h1>
                      <h2>{aluno.curso}</h2>
                      <p>Aluno(a) na UENP</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex justify-center items-center pt-[6rem] sm:pt-[10rem]">
              <div className="bg-primary-blue text-white shadow-2xl rounded-[2rem] p-8 max-w-[40rem] text-center">
                <h1 className="font-bold text-[1.5rem] sm:text-[2rem] pb-4">
                  Informações Ocultadas
                </h1>
                <p className="text-[1rem] sm:text-[1.2rem]">
                  Os dados dos pesquisadores e participantes deste projeto foram temporariamente ocultados por questões de privacidade e segurança.
                </p>
              </div>
            </div>
          )}

          {/* IMAGEM FINAL */}
          <div className="flex items-center justify-center pt-[6rem] sm:pt-[10rem] md:pt-[8rem] pb-[4rem] sm:pb-[7rem]">
            <img src="/img/tatu.png" alt="" className="h-[20rem] w-[15rem] sm:h-[40rem] sm:w-[30rem]" />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default QuemSomos;