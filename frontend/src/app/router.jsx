import { createBrowserRouter } from 'react-router-dom';
import AboutPage from '../pages/about/AboutPage';
import AdminDashboardPage from '../pages/admin/AdminDashboardPage';
import AdminProfilePage from '../pages/admin/AdminProfilePage';
import LoginPage from '../pages/auth/LoginPage';
import HomePage from '../pages/home/HomePage';
import MapPage from '../pages/map/MapPage';
import ResearcherProfilePage from '../pages/profile/ResearcherProfilePage';
import SpeciesPage from '../pages/species/SpeciesPage';

export const router = createBrowserRouter([{
        path: "/",
        element: <HomePage />
    },
    {
        path: "quem-somos",
        element: <AboutPage />,
    },
    {
        path: "mapa",
        element: <MapPage />,
    },
    {
        path: "dados",
        element: <SpeciesPage />,
    },
    {
        path: "login",
        element: <LoginPage />,
    },
    {
        path: "login-admin",
        element: <LoginPage />,
    },
    {
        path: "perfil",
        element: <ResearcherProfilePage />,
    },
    {
        path: "admin",
        element: <AdminDashboardPage />,
    },
    {
        path: "perfil-admin",
        element: <AdminProfilePage />,
    },
]);
