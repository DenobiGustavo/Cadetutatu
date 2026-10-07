import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

/**
 * Recursos de acessibilidade do site inteiro (WCAG 2.1):
 *  - VLibras: traduz o conteudo da pagina para Libras (widget oficial do governo)
 *  - link "Pular para o conteudo" para quem navega pelo teclado
 *  - titulo proprio em cada pagina (2.4.2)
 * A pagina /mapa e um iframe do mapa, que ja traz o proprio VLibras, entao ali
 * nao carregamos um segundo botao.
 */

const URL_PLUGIN = "https://vlibras.gov.br/app/vlibras-plugin.js";
const URL_APP = "https://vlibras.gov.br/app";

const TITULOS = {
  "/": "CadeTuTatu – Início",
  "/mapa": "CadeTuTatu – Mapa interativo",
  "/dados": "CadeTuTatu – Base de dados",
  "/quem-somos": "CadeTuTatu – Quem somos",
};

export function VLibras() {
  useEffect(() => {
    function iniciar() {
      if (window.VLibras && !window.__vlibrasIniciado) {
        window.__vlibrasIniciado = true;
        new window.VLibras.Widget(URL_APP);
      }
    }

    let script = document.querySelector(`script[src="${URL_PLUGIN}"]`);
    if (script) {
      iniciar();
    } else {
      script = document.createElement("script");
      script.src = URL_PLUGIN;
      script.async = true;
      script.onload = iniciar;
      document.body.appendChild(script);
    }

    // Se o widget sair da tela (ex.: ida para /mapa), permite iniciar de novo na volta
    return () => {
      window.__vlibrasIniciado = false;
    };
  }, []);

  return (
    <div vw="true" className="enabled">
      <div vw-access-button="true" className="active"></div>
      <div vw-plugin-wrapper="true">
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
}

export default function LayoutAcessivel() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = TITULOS[pathname] || "CadeTuTatu";
  }, [pathname]);

  return (
    <>
      <a href="#conteudo" className="pular-para-conteudo">
        Pular para o conteúdo
      </a>
      <Outlet />
      {pathname !== "/mapa" && <VLibras />}
    </>
  );
}
