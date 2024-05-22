import React from "react";
import Header from '../PaginaPrincipal/header';
import Titulo from '../PaginaPrincipal/titulo';
import Footer from "../PaginaPrincipal/footer";

export const QuemSomos = () => {
  return (
    <div className="flex flex-col bg">
      <div>
        <div>
          <Titulo/>
        </div>
        <Header />
      </div>
      <div className="">
      <div className="flex flex-col items-center">
        <div className="shadow-2xl bg-primary-blue flex flex-col items-center sm:grid sm:grid-cols-2 mt-40 w-[24rem] sm:w-[60rem] pt-12 pb-12 sm:pt-20 sm:pb-20 rounded-[4.5rem]">
          <img src="/img/logo.png" alt="" className="flex sm:ml-[6rem] w-[9rem] h-[9rem] sm:w-[16rem] sm:h-[16rem]"/>
          <div className="flex flex-col items-center mr-10 ml-10 text-white font-medium">
            <h1 className="font-bold font-sans pt-4 sm:pt-0 text-[2rem]">CadeTuTatu?</h1>
            <p className="pt-4 text-justify font-sans text-[1.25rem]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>

            <h1 className="font-sans font-bold text-[3rem] sm:text-[3.6rem] text-white text-center pt-[11rem]">Coordenadores</h1>

           <div className="flex flex-col sm:flex-row items-center justify-center pt-[11rem]">
            <div className="pb-[6rem] sm:pb-0">
            <div className="shadow-2xl flex flex-col bg-primary-blue h-[30rem] w-[21rem] rounded-[2rem] justify-center items-center">
              <img src="/img/tiagao.png" alt="" className="rounded-full w-[10rem] h-[10rem]"/>
              <div className="font-sans font-medium text-white text-center pt-10">
                <h1 className="text-[1.3rem] pb-10">Coordenador</h1>
              <p className="ml-8 mr-8">testando texto de descrição abaixo do título</p>
              </div>
            </div>
            </div>

           <div className="pb-[6rem] sm:pb-0"> 
            <div className="ml-[6rem] mr-[6rem] shadow-2xl flex flex-col bg-primary-blue h-[30rem] w-[21rem] rounded-[2rem] justify-center items-center">
              <img src="/img/tiagao.png" alt="" className="rounded-full w-[10rem] h-[10rem]" />
              <div className="font-sans font-medium text-white text-center pt-10">
                <h1 className="text-[1.3rem] pb-10">Coordenador</h1>
              <p className="ml-8 mr-8">testando texto de descrição abaixo do título</p>
              </div>
            </div>
            </div>
            

           <div>
            <div className="flex flex-col shadow-2xl bg-primary-blue h-[30rem] w-[21rem] rounded-[2rem] justify-center items-center">
              <img src="/img/tiagao.png" alt="" className="rounded-full w-[10rem] h-[10rem]"/>
              <div className="font-sans font-medium text-white text-center pt-10">
                <h1 className="text-[1.3rem] pb-10">Coordenador</h1>
              <p className="ml-8 mr-8">testando texto de descrição abaixo do título</p>
              </div>
            </div>
            </div>
           

            </div>
      </div>

      <h1 className="font-sans font-bold text-[3rem] sm:text-[3.6rem] text-white text-center pt-[11rem]">Alunos</h1>

      <div className="flex flex-col sm:flex-row items-center justify-center pt-[11rem]">
            <div className="pb-[6rem] sm:pb-0">
            <div className="shadow-2xl flex flex-col bg-primary-blue h-[30rem] w-[21rem] rounded-[2rem] justify-center items-center">
              <img src="/img/tiagao.png" alt="" className="rounded-full w-[10rem] h-[10rem]"/>
              <div className="font-sans font-medium text-white text-center pt-10">
                <h1 className="text-[1.3rem] pb-10">Coordenador</h1>
              <p className="ml-8 mr-8">testando texto de descrição abaixo do título</p>
              </div>
            </div>
            </div>

           <div className="pb-[6rem] sm:pb-0"> 
            <div className="ml-[6rem] mr-[6rem] shadow-2xl flex flex-col bg-primary-blue h-[30rem] w-[21rem] rounded-[2rem] justify-center items-center">
              <img src="/img/tiagao.png" alt="" className="rounded-full w-[10rem] h-[10rem]" />
              <div className="font-sans font-medium text-white text-center pt-10">
                <h1 className="text-[1.3rem] pb-10">Coordenador</h1>
              <p className="ml-8 mr-8">testando texto de descrição abaixo do título</p>
              </div>
            </div>
            </div>
            

           <div>
            <div className="flex flex-col shadow-2xl bg-primary-blue h-[30rem] w-[21rem] rounded-[2rem] justify-center items-center">
              <img src="/img/tiagao.png" alt="" className="rounded-full w-[10rem] h-[10rem]"/>
              <div className="font-sans font-medium text-white text-center pt-10">
                <h1 className="text-[1.3rem] pb-10">Coordenador</h1>
              <p className="ml-8 mr-8">testando texto de descrição abaixo do título</p>
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
