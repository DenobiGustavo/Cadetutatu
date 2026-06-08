import { createBrowserRouter } from "react-router-dom"

import Home from "../pages/Home/home"
import Mapa from "../pages/Mapa/mapa"
import DadosPage from "../pages/Dados/DadosPage"
import QuemSomos from "../pages/QuemSomos/QuemSomos"
import Login from "../pages/Login/Login"
import LoginAdmin from "../pages/LoginAdmin/LoginAdmin"
import LoginUsuario from "../pages/LoginUsuario/LoginUsuario"
import FotosPendentes from "../pages/Admin/FotosPendentes/FotosPendentes"
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute"
import Profile from "../pages/Profile/Profile"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/quem-somos",
    element: <QuemSomos />
  },
  {
    path: "/mapa",
    element: <Mapa />
  },
  {
    path: "/dados",
    element: <DadosPage />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/login-admin",
    element: <LoginAdmin />
  },
  {
    path: "/login-usuario",
    element: <LoginUsuario />
  },
  {
    path: "/perfil",
    element: <Profile />
  },
  {
    path: "/admin/fotos",
    element: (
      <ProtectedRoute>
        <FotosPendentes />
      </ProtectedRoute>
    )
  }
])