import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CircleUserRound,
  ClipboardCheck,
  Database,
  Home,
  LogIn,
  LogOut,
  MapPin,
  UserCog,
  Users,
} from "lucide-react";
import { clearSession, getSession } from "../../services/api";

const TopBanner = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [session, setSession] = useState(() => getSession());
  const [loginMessage, setLoginMessage] = useState("");

  useEffect(() => {
    const message = localStorage.getItem("loginMessage");
    if (!message) return;

    setLoginMessage(message);
    localStorage.removeItem("loginMessage");
    const timer = setTimeout(() => setLoginMessage(""), 4000);
    return () => clearTimeout(timer);
  }, []);

  function logout() {
    clearSession();
    setSession(null);
    window.location.href = "/";
  }

  return (
    <div className="relative w-full">
      {loginMessage && (
        <div className="absolute z-[60] top-4 left-1/2 -translate-x-1/2 bg-white text-primary-green font-bold px-5 py-3 rounded-lg shadow-xl">
          {loginMessage}
        </div>
      )}

      <div className="sm:hidden flex justify-between items-center bg-primary-blue h-[7rem] px-4">
        <img src="/img/logo.png" alt="logo" className="w-[3.4rem] h-[3rem]" />
        <div className="flex flex-col items-center text-center">
          <p className="text-white text-[1.8rem] font-bold">CadeTuTatu?</p>
          <p className="text-white text-[1rem] font-medium px-2">
            Gestão de Dados e Educação Ambiental
          </p>
        </div>
        <button type="button" onClick={() => setMenuOpen((current) => !current)} aria-label="Abrir menu">
          <img src="/img/confgicon.png" alt="" className="w-[2rem] h-[1.5rem]" />
        </button>
      </div>

      <div className="hidden sm:flex justify-between items-center bg-primary-blue h-[8.5rem] md:h-[9.5rem] px-6">
        <img src="/img/logo.png" alt="logo" className="w-[6rem] h-[6rem] md:w-[7rem] md:h-[7rem]" />
        <p className="text-white text-[2rem] sm:text-[2.2rem] md:text-[2.4rem] lg:text-[2.5rem] font-extrabold leading-tight text-center">
          CadeTuTatu? - Gestão de Dados e Educação Ambiental
        </p>
        <button type="button" onClick={() => setMenuOpen((current) => !current)} aria-label="Abrir menu">
          <img src="/img/confgicon.png" alt="" className="w-11 h-10 md:w-12 md:h-11" />
        </button>
      </div>

      {menuOpen && (
        <div className="absolute z-50 top-full right-4 sm:right-6 mt-2 bg-green-200 shadow-lg rounded-lg w-64">
          <ul className="flex flex-col p-4 space-y-3">
            <li><Link to="/" className="flex items-center gap-2 text-primary-blue hover:text-primary-green font-medium"><Home className="w-4 h-4" /> Home</Link></li>
            <li><Link to="/mapa" className="flex items-center gap-2 text-primary-blue hover:text-primary-green font-medium"><MapPin className="w-4 h-4" /> Mapa</Link></li>
            <li><Link to="/dados" className="flex items-center gap-2 text-primary-blue hover:text-primary-green font-medium"><Database className="w-4 h-4" /> Dados</Link></li>
            <li><Link to="/quem-somos" className="flex items-center gap-2 text-primary-blue hover:text-primary-green font-medium"><Users className="w-4 h-4" /> Quem Somos</Link></li>
            {session ? (
              <>
                {session.type === "admin" ? (
                  <>
                    <li>
                      <Link to="/perfil-admin" className="flex items-center gap-2 text-primary-blue hover:text-primary-green font-medium">
                        <CircleUserRound className="w-4 h-4" /> Meu Perfil
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin?tab=researchers" className="flex items-center gap-2 text-primary-blue hover:text-primary-green font-medium">
                        <UserCog className="w-4 h-4" /> Gerenciar Pesquisadores
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin?tab=submissions" className="flex items-center gap-2 text-primary-blue hover:text-primary-green font-medium">
                        <ClipboardCheck className="w-4 h-4" /> Aprovar Imagens
                      </Link>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link to="/perfil" className="flex items-center gap-2 text-primary-blue hover:text-primary-green font-medium">
                      <CircleUserRound className="w-4 h-4" /> Meu Perfil
                    </Link>
                  </li>
                )}
                <li>
                  <button type="button" onClick={logout} className="flex items-center gap-2 text-primary-blue hover:text-red-600 font-medium">
                    <LogOut className="w-4 h-4" /> Sair
                  </button>
                </li>
              </>
            ) : (
              <li><Link to="/login" className="flex items-center gap-2 text-primary-blue hover:text-primary-green font-medium"><LogIn className="w-4 h-4" /> Login</Link></li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TopBanner;
