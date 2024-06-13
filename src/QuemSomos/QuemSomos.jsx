import React from "react";
import Header from '../PaginaPrincipal/header';
import Titulo from '../PaginaPrincipal/titulo';
import Footer from "../PaginaPrincipal/footer";

export const QuemSomos = () => {
  return (
    <div className="flex flex-col bg overflow-x-hidden">
      <div>
        <div>
          <Titulo/>
        </div>
        <Header />
      </div>
      <div className="">
      <div className="flex flex-col items-center">
        <div className="shadow-2xl bg-primary-blue flex flex-col items-center sm:grid sm:grid-cols-2 mt-40 w-[24rem] sm:w-[70rem] pt-12 pb-12 sm:pt-20 sm:pb-20 rounded-[4.5rem]">
          <img src="/img/logo.png" alt="" className="flex sm:ml-[8rem] w-[9rem] h-[9rem] sm:w-[20rem] sm:h-[20rem]"/>
          <div className="flex flex-col items-center mr-10 ml-10 text-white font-medium">
            <h1 className="font-bold font-sans pt-4 sm:pt-0 text-[2rem]">CadeTuTatu?</h1>
            <p className="pt-4 text-justify font-sans text-[1.25rem]">O projeto Cadetutatu, da Universidade Estadual do Norte do Paraná (UENP), tem como objetivo catalogar animais e plantas encontrados nas proximidades do campus, uma região rica em vegetação. A iniciativa envolve alunos e professores na documentação da biodiversidade local, promovendo a conscientização sobre a importância da preservação ambiental. Ao reunir informações sobre as espécies presentes, o projeto contribui para o conhecimento científico e ajuda a proteger a fauna e flora da área.</p>
          </div>
        </div>

            <h1 className="font-sans font-bold text-[3rem] sm:text-[3.6rem] text-white text-center pt-[11rem]">Coordenadores</h1>

           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center items-center justify-center pt-[11rem]">
            <div className="pb-[6rem] sm:pb-0">
            <div className="ml-[3rem] mr-[3rem] shadow-2xl flex flex-col bg-primary-blue h-[30rem] w-[21rem] rounded-[2rem] justify-center items-center">
              <img src="/img/tiagao.png" alt="" className="rounded-full w-[10rem] h-[10rem]"/>
              <div className="font-sans font-medium text-white text-center pt-10">
                <h1 className="text-[1.3rem] pb-10">Thiago Coleti</h1>
              <p className="ml-8 mr-8">Professor na Universidade Estadual do Norte Paraná (UENP)</p>
              </div>
            </div>
            </div>

           <div className="pb-[6rem] sm:pb-0"> 
            <div className="ml-[3rem] mr-[3rem] shadow-2xl flex flex-col bg-primary-blue h-[30rem] w-[21rem] rounded-[2rem] justify-center items-center">
              <img src="/img/ana.jpg" alt="" className="rounded-full w-[10rem] h-[10rem]" />
              <div className="font-sans font-medium text-white text-center pt-10">
                <h1 className="text-[1.3rem] pb-10">Ana Cecília Hoffmann</h1>
              <p className="ml-8 mr-8">Professora na Universidade Estadual do Norte Paraná (UENP)</p>
              </div>
            </div>
            </div>
           

            </div>
      </div>

      <h1 className="font-sans font-bold text-[3rem] sm:text-[3.6rem] text-white text-center pt-[11rem]">Colaboradores</h1>

      <div className="flex flex-col sm:flex-row items-center justify-center pt-[11rem]">
            <div className="pb-[6rem] sm:pb-0">
            <div className="ml-[3rem] mr-[3rem] shadow-2xl flex flex-col bg-primary-blue h-[30rem] w-[21rem] rounded-[2rem] justify-center items-center">
              <img src="/img/diego.png" alt="" className="rounded-full w-[10rem] h-[10rem]"/>
              <div className="font-sans font-medium text-white text-center pt-10">
                <h1 className="text-[1.3rem] pb-10">Diego Pardal</h1>
              <p className="ml-8 mr-8">Professor na Universidade Estadual do Norte Paraná (UENP)</p>
              </div>
            </div>
            </div>

           <div className="pb-[6rem] sm:pb-0"> 
            <div className="ml-[3rem] mr-[3rem] shadow-2xl flex flex-col bg-primary-blue h-[30rem] w-[21rem] rounded-[2rem] justify-center items-center">
              <img src="/img/carla.png" alt="" className="rounded-full w-[10rem] h-[10rem]" />
              <div className="font-sans font-medium text-white text-center pt-10">
                <h1 className="text-[1.3rem] pb-10">Carla Gomes De Araújo</h1>
              <p className="ml-8 mr-8">Professora na Universidade Estadual do Norte Paraná (UENP)</p>
              </div>
            </div>
            </div>

            
      </div>

            <h1 className="font-sans font-bold text-[3rem] sm:text-[3.6rem] text-white text-center pt-[11rem]">Desenvolvedores</h1>
            <div className="flex flex-col sm:flex-row items-center justify-center pt-[11rem]">
            <div className="pb-[6rem] sm:pb-0">
            <div className="ml-[3rem] mr-[3rem] shadow-2xl flex flex-col bg-primary-blue h-[30rem] w-[21rem] rounded-[2rem] justify-center items-center">
              <img src="/img/gu.png" alt="" className="rounded-full w-[10rem] h-[10rem]"/>
              <div className="font-sans font-medium text-white text-center pt-10">
                <h1 className="text-[1.3rem] pb-10">Gustavo Denobi</h1>
              <p className="ml-8 mr-8">Aluno na Universidade Estadual do Norte Paraná (UENP)</p>
              </div>
            </div>
            </div>

           <div className="pb-[6rem] sm:pb-0"> 
            <div className="ml-[3rem] mr-[3rem] shadow-2xl flex flex-col bg-primary-blue h-[30rem] w-[21rem] rounded-[2rem] justify-center items-center">
              <img src="/img/jo.jpeg" alt="" className="rounded-full w-[10rem] h-[10rem]" />
              <div className="font-sans font-medium text-white text-center pt-10">
                <h1 className="text-[1.3rem] pb-10">Joana Shizu</h1>
              <p className="ml-8 mr-8">Aluna na Universidade Estadual do Norte Paraná (UENP)</p>
              </div>
            </div>
            </div>

            <div className="pb-[6rem] sm:pb-0"> 
            <div className="ml-[3rem] mr-[3rem] shadow-2xl flex flex-col bg-primary-blue h-[30rem] w-[21rem] rounded-[2rem] justify-center items-center">
              <img src="/img/leo.jpg" alt="" className="rounded-full w-[10rem] h-[10rem]" />
              <div className="font-sans font-medium text-white text-center pt-10">
                <h1 className="text-[1.3rem] pb-10">Leonardo Faria</h1>
              <p className="ml-8 mr-8">Aluno na Universidade Estadual do Norte Paraná (UENP)</p>
              </div>
            </div>
            </div>

      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center pt-[5.5rem]">
      <div className="pb-[6rem] sm:pb-0"> 
            <div className="ml-[3rem] mr-[3rem] shadow-2xl flex flex-col bg-primary-blue h-[30rem] w-[21rem] rounded-[2rem] justify-center items-center">
              <img src="/img/jo.jpeg" alt="" className="rounded-full w-[10rem] h-[10rem]" />
              <div className="font-sans font-medium text-white text-center pt-10">
                <h1 className="text-[1.3rem] pb-10">Lauren</h1>
              <p className="ml-8 mr-8">Aluna na Universidade Estadual do Norte Paraná (UENP)</p>
              </div>
            </div>
            </div>

            <div className="pb-[6rem] sm:pb-0"> 
            <div className="ml-[3rem] mr-[3rem] shadow-2xl flex flex-col bg-primary-blue h-[30rem] w-[21rem] rounded-[2rem] justify-center items-center">
              <img src="/img/carla.png" alt="" className="rounded-full w-[10rem] h-[10rem]" />
              <div className="font-sans font-medium text-white text-center pt-10">
                <h1 className="text-[1.3rem] pb-10">Lucas</h1>
              <p className="ml-8 mr-8">Aluno na Universidade Estadual do Norte Paraná (UENP)</p>
              </div>
            </div>
            </div>
            </div>

        <div className="flex items-center justify-center pt-[10rem] pb-[7rem]">
            <img src="/img/tatu.png" alt="" className="h-[40rem] w-[30rem]"/>
          </div>
      </div>
           
     
      <Footer />
    </div>
  );
};

export default QuemSomos;
