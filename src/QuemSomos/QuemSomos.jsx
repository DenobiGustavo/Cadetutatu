import React from "react";
import Header from '../PaginaPrincipal/header';
import Titulo from '../PaginaPrincipal/titulo';
import Footer from "../PaginaPrincipal/footer";

export const QuemSomos = () => {
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
            
            {/* Lado da imagem */}
            <div className="flex justify-center items-center mb-6 sm:mb-0">
              <img
                src="/img/logo.png"
                alt=""
                className="w-[8rem] h-[8rem] sm:w-[20rem] sm:h-[20rem] md:w-[22rem] md:h-[22rem]"
              />
            </div>

            {/* Lado do texto */}
            <div className="flex flex-col items-center text-white font-medium px-4 sm:px-10">
              <h1 className="font-bold font-sans text-[1.8rem] sm:text-[2rem] md:text-[2.4rem] text-center">
                CadeTuTatu?
              </h1>
              <p className="pt-4 text-justify font-sans text-[1rem] sm:text-[1.25rem] md:text-[1.3rem]">
                O projeto Cadetutatu, da Universidade Estadual do Norte do Paraná (UENP), tem como objetivo catalogar animais e plantas encontrados nas proximidades do campus, uma região rica em vegetação. A iniciativa envolve alunos e professores na documentação da biodiversidade local, promovendo a conscientização sobre a importância da preservação ambiental. Ao reunir informações sobre as espécies presentes, o projeto contribui para o conhecimento científico e ajuda a proteger a fauna e flora da área.
              </p>
            </div>
          </div>

          {/* TITULO PROFESSORES */}
          <h1 className="font-sans font-bold text-[2rem] sm:text-[3.6rem] md:text-[3rem] text-white text-center pt-[6rem] sm:pt-[11rem] md:pt-[8rem]">
            Professores Pesquisadores
          </h1>

          {/* CARTÕES DE PROFESSORES */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-8 pt-[6rem] sm:pt-[11rem] md:pt-[8rem]">
            {[
              { nome: "Thiago Adriano Coleti", curso: "(Ciência da Computação)", img: "/img/tiagao.png" },
              { nome: "Ana Cecília Hoffmann", curso: "(Biologia)", img: "/img/ana.jpg" },
              { nome: "Diego Pardal", curso: "(Biologia)", img: "/img/diego.png" },
              { nome: "Carla Gomes De Araújo", curso: "(Biologia)", img: "/img/carla.png" },
              { nome: "Luiz Fernando Legore", curso: "(Ciência da Computação)", img: "/img/legore.jpeg" },
            ].map((prof, idx) => (
              <div
                key={idx}
                className="shadow-2xl flex flex-col bg-primary-blue w-full sm:w-[21rem] md:w-[18rem] h-[28rem] md:h-[25rem] rounded-[2rem] justify-center items-center p-6"
              >
                <div className="flex justify-center items-center">
                  <img src={prof.img} alt="" className="rounded-full w-[8rem] h-[8rem] md:w-[9rem] md:h-[9rem]" />
                </div>
                <div className="font-sans font-medium text-white text-center pt-6">
                  <h1 className="text-[1.2rem] md:text-[1.4rem] font-bold">{prof.nome}</h1>
                  <h2 className="text-[1rem] md:text-[1.15rem] pb-4">{prof.curso}</h2>
                  <p className="px-4">Professor(a) na Universidade Estadual do Norte Paraná (UENP)</p>
                </div>
              </div>
            ))}
          </div>

          {/* TITULO ALUNOS */}
          <h1 className="font-sans font-bold text-[2rem] sm:text-[3.6rem] md:text-[3rem] text-white text-center pt-[6rem] sm:pt-[11rem] md:pt-[8rem]">
            Alunos Pesquisadores
          </h1>

          {/* CARTÕES DE ALUNOS */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-8 pt-[6rem] sm:pt-[11rem] md:pt-[8rem]">
            {[
              { nome: "Gustavo Denobi", curso: "(Ciência da Computação)", img: "/img/guu.png" },
              { nome: "Joana Shizu", curso: "(Ciência da Computação)", img: "/img/jo.jpeg" },
              { nome: "Leonardo Faria", curso: "(Ciência da Computação)", img: "/img/leo.jpg" },
              { nome: "Lauren Marçulo", curso: "(Biologia)", img: "/img/lauren.png" },
            ].map((aluno, idx) => (
              <div
                key={idx}
                className="shadow-2xl flex flex-col bg-primary-blue w-full sm:w-[21rem] md:w-[18rem] h-[28rem] md:h-[25rem] rounded-[2rem] justify-center items-center p-6"
              >
                <div className="flex justify-center items-center">
                  <img src={aluno.img} alt="" className="rounded-full w-[8rem] h-[8rem] md:w-[9rem] md:h-[9rem]" />
                </div>
                <div className="font-sans font-medium text-white text-center pt-6">
                  <h1 className="text-[1.2rem] md:text-[1.4rem] font-bold">{aluno.nome}</h1>
                  <h2 className="text-[1rem] md:text-[1.15rem] pb-4">{aluno.curso}</h2>
                  <p className="px-4">Aluno(a) na Universidade Estadual do Norte Paraná (UENP)</p>
                </div>
              </div>
            ))}
          </div>

          {/* IMAGEM FINAL */}
          <div className="flex items-center justify-center pt-[6rem] sm:pt-[10rem] md:pt-[8rem] pb-[4rem] sm:pb-[7rem]">
            <img src="/img/tatu.png" alt="" className="h-[20rem] w-[15rem] sm:h-[40rem] sm:w-[30rem] md:h-[38rem] md:w-[28rem]" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default QuemSomos;
