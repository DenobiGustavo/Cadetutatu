import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Home, MapPin, Database, Users, LogIn, LogOut, Shield, User } from "lucide-react"

const Titulo = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const adminToken = localStorage.getItem("adminToken")
  const userToken = localStorage.getItem("userToken")

  const toggleMenu = () => setMenuOpen(!menuOpen)

  function logout() {
    localStorage.removeItem("adminToken")
    localStorage.removeItem("userToken")
    window.location.href = "/"
  }

  return (
    <div className="relative w-full">
      <div className="sm:hidden flex justify-between items-center bg-primary-blue h-[7rem] px-4">
        <img src="/img/logo.png" alt="logo" className="w-[3.4rem] h-[3rem]" />

        <div className="flex flex-col items-center text-center">
          <p className="text-white text-[1.8rem] font-bold tracking-tight">
            CadeTuTatu?
          </p>
          <p className="text-white text-[1rem] font-medium tracking-wide px-2 text-center">
            Gestão de Dados e Educação Ambiental
          </p>
        </div>

        <img
          src="/img/confgicon.png"
          alt="menu"
          className="w-[2rem] h-[1.5rem] cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      <div className="hidden sm:flex justify-between items-center bg-primary-blue h-[8.5rem] md:h-[9.5rem] px-6">
        <img
          src="/img/logo.png"
          alt="logo"
          className="w-[6rem] h-[6rem] md:w-[7rem] md:h-[7rem]"
        />

        <p className="text-white text-[2rem] sm:text-[2.2rem] md:text-[2.4rem] lg:text-[2.5rem] font-extrabold tracking-wide leading-tight text-center">
          CadeTuTatu? - Gestão de Dados e Educação Ambiental
        </p>

        <img
          src="/img/confgicon.png"
          alt="menu"
          className="w-11 h-10 md:w-12 md:h-11 cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {menuOpen && (
        <div className="absolute z-50 top-full right-4 sm:right-6 mt-2 bg-green-200 shadow-lg rounded-lg w-56">
          <ul className="flex flex-col p-4 space-y-3">
            {!adminToken && !userToken && (
              <li>
                <Link
                  to="/login"
                  className="flex items-center gap-2 text-primary-blue hover:text-primary-green font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  <LogIn className="w-4 h-4" /> Login
                </Link>
              </li>
            )}

            {adminToken && (
              <li>
                <Link
                  to="/admin/fotos"
                  className="flex items-center gap-2 text-primary-blue hover:text-primary-green font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  <Shield className="w-4 h-4" /> Painel Admin
                </Link>
              </li>
            )}

            {userToken && (
              <li>
                <Link
                  to="/perfil"
                  className="flex items-center gap-2 text-primary-blue hover:text-primary-green font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  <User className="w-4 h-4" /> Meu Perfil
                </Link>
              </li>
            )}

            <li>
              <Link to="/" className="flex items-center gap-2 text-primary-blue hover:text-primary-green font-medium">
                <Home className="w-4 h-4" /> Home
              </Link>
            </li>

            <li>
              <Link to="/mapa" className="flex items-center gap-2 text-primary-blue hover:text-primary-green font-medium">
                <MapPin className="w-4 h-4" /> Mapa
              </Link>
            </li>

            <li>
              <Link to="/dados" className="flex items-center gap-2 text-primary-blue hover:text-primary-green font-medium">
                <Database className="w-4 h-4" /> Dados
              </Link>
            </li>

            <li>
              <Link to="/quem-somos" className="flex items-center gap-2 text-primary-blue hover:text-primary-green font-medium">
                <Users className="w-4 h-4" /> Quem Somos
              </Link>
            </li>

            {(adminToken || userToken) && (
              <li>
                <button
                  onClick={logout}
                  className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold"
                >
                  <LogOut className="w-4 h-4" /> Sair
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Titulo