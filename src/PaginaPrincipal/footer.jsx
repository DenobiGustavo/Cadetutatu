import React from "react";

const Footer = () => {
  return (
    <footer
      className="
        bg-primary-blue text-white
        h-10 sm:h-12 md:h-16
        flex items-center justify-center
        w-full
        px-4 sm:px-6         /* 👉 espaçamento lateral */
        text-center          /* garante alinhamento central */
        text-sm sm:text-base
      "
    >
      &copy; 2024 CadeTuTatu – Todos os direitos reservados
    </footer>
  );
};

export default Footer;
