import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Lock, LogIn, Mail, Microscope, Shield } from "lucide-react";
import backgroundImg from "../../assets/backgrounds/fundo3.png";

const API_URL = "http://localhost:5000";

const initialForm = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const location = useLocation();
  const [role, setRole] = useState(location.pathname.includes("admin") ? "admin" : "researcher");
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isAdmin = role === "admin";

  useEffect(() => {
    setRole(location.pathname.includes("admin") ? "admin" : "researcher");
    setError("");
  }, [location.pathname]);

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function toggleRole() {
    setRole((current) => (current === "admin" ? "researcher" : "admin"));
    setError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const endpoint = isAdmin ? "/auth/login" : "/users/login";
    const body = {
      email: form.email,
      password: form.password,
    };

    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Nao foi possivel entrar no sistema.");
        return;
      }

      localStorage.setItem(isAdmin ? "adminToken" : "userToken", data.token);
      localStorage.removeItem(isAdmin ? "userToken" : "adminToken");
      localStorage.setItem("authType", isAdmin ? "admin" : "researcher");
      localStorage.setItem("loginMessage", "Você está logado");
      window.location.href = "/";
    } catch (requestError) {
      setError("Nao foi possivel conectar ao servidor. Verifique se o backend esta rodando.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-8"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <section className="w-full max-w-6xl min-h-[34rem] overflow-hidden rounded-3xl bg-white shadow-2xl grid grid-cols-1 md:grid-cols-2">
        <aside className="bg-primary-blue text-white px-8 py-10 sm:px-12 flex flex-col items-center justify-center text-center">
          <img src="/img/logo.png" alt="CadeTuTatu?" className="h-32 w-32 object-contain mb-8" />
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">CadeTuTatu?</h1>
          <p className="mt-6 max-w-sm text-lg sm:text-xl font-bold leading-relaxed">
            {isAdmin
              ? "Area administrativa para gerenciar fotos enviadas pelos pesquisadores."
              : "Area do pesquisador para colaborar com registros e dados ambientais."}
          </p>
        </aside>

        <form onSubmit={handleSubmit} className="px-7 py-10 sm:px-14 flex flex-col justify-center">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-blue font-bold mb-12">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-4">
              {isAdmin ? (
                <Shield className="h-10 w-10 text-primary-green" />
              ) : (
                <Microscope className="h-10 w-10 text-primary-green" />
              )}
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-green">
                {isAdmin ? "Login Administrador" : "Login Pesquisador"}
              </h2>
            </div>
            <p className="mt-4 text-lg text-gray-600">
              {isAdmin
                ? "Entre com sua conta de administrador para acessar o painel."
                : "Entre com sua conta de pesquisador para continuar."}
            </p>
          </div>

          <label className="font-bold text-gray-800 mb-2">Email</label>
          <div className="flex items-center border border-gray-200 rounded-xl px-4 mb-5 bg-white">
            <Mail className="w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder={isAdmin ? "admin@email.com" : "pesquisador@email.com"}
              className="w-full p-4 outline-none text-lg"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              required
            />
          </div>

          <label className="font-bold text-gray-800 mb-2">Senha</label>
          <div className="flex items-center border border-gray-200 rounded-xl px-4 mb-5 bg-white">
            <Lock className="w-5 h-5 text-gray-400" />
            <input
              type="password"
              placeholder="Digite sua senha"
              className="w-full p-4 outline-none text-lg"
              value={form.password}
              onChange={(event) => updateField("password", event.target.value)}
              required
            />
          </div>

          {error && <p className="bg-red-100 text-red-700 p-3 rounded-xl mb-5 text-sm font-semibold">{error}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 bg-primary-green text-white text-lg font-bold p-4 rounded-xl hover:scale-[1.01] transition disabled:opacity-60 disabled:hover:scale-100"
          >
            <LogIn className="h-5 w-5" />
            {isSubmitting ? "Enviando..." : isAdmin ? "Entrar no painel" : "Entrar"}
          </button>

          <div className="mt-7 flex flex-col items-center gap-3 text-center">
            <button type="button" onClick={toggleRole} className="text-primary-blue font-bold hover:underline">
              {isAdmin ? "Sou pesquisador" : "Sou administrador"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
