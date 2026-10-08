import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

/**
 * Recursos de acessibilidade do site inteiro (WCAG 2.1):
 *  - VLibras: traduz o conteudo da pagina para Libras (widget oficial do governo)
 *  - link "Pular para o conteudo" para quem navega pelo teclado
 *  - titulo proprio em cada pagina (2.4.2)
 * A pagina /mapa e um iframe do mapa, que ja traz o proprio VLibras, entao ali o
 * widget do site fica ESCONDIDO para nao aparecerem dois botoes.
 */

const URL_PLUGIN = "https://vlibras.gov.br/app/vlibras-plugin.js";
const URL_APP = "https://vlibras.gov.br/app";

// O plugin cria este elemento direto no <body>, fora do React. Ele nao se recria se for
// removido, por isso nesta pagina ele so e escondido (e mostrado de novo nas outras).
const ID_BOTAO_FLUTUANTE = "vlibras-access-wrapper";

const TITULOS = {
  "/": "CadeTuTatu – Início",
  "/mapa": "CadeTuTatu – Mapa interativo",
  "/dados": "CadeTuTatu – Base de dados",
  "/quem-somos": "CadeTuTatu – Quem somos",
};

export function VLibras({ oculto }) {
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
  }, []);

  // Esconde/mostra o botao flutuante do plugin. Tenta por alguns segundos porque ele pode
  // ser criado depois (o plugin inicia com atraso) e o usuario pode ja estar em /mapa.
  useEffect(() => {
    const aplicar = () => {
      const botao = document.getElementById(ID_BOTAO_FLUTUANTE);
      if (botao) botao.style.display = oculto ? "none" : "";
    };
    aplicar();
    let tentativas = 0;
    const timer = setInterval(() => {
      aplicar();
      tentativas += 1;
      if (tentativas >= 20) clearInterval(timer);
    }, 500);
    return () => clearInterval(timer);
  }, [oculto]);

  return (
    <div hidden={oculto}>
      <div vw="true" className="enabled">
        <div vw-access-button="true" className="active"></div>
        <div vw-plugin-wrapper="true">
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>
    </div>
  );
}

export default function LayoutAcessivel() {
  const { pathname } = useLocation();
  const noMapa = pathname === "/mapa";

  // Em /mapa o widget so e carregado se ja tiver sido carregado antes; assim quem abre o
  // mapa direto nao baixa o plugin a toa, e o widget sobrevive a ida e volta pelo mapa.
  const [ativo, setAtivo] = useState(!noMapa);
  useEffect(() => {
    if (!noMapa) setAtivo(true);
  }, [noMapa]);

  useEffect(() => {
    document.title = TITULOS[pathname] || "CadeTuTatu";
  }, [pathname]);

  return (
    <>
      <a href="#conteudo" className="pular-para-conteudo">
        Pular para o conteúdo
      </a>
      <Outlet />
      {ativo && <VLibras oculto={noMapa} />}
    </>
  );
}
