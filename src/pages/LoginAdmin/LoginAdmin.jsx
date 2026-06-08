import { useState } from "react"
import { Link } from "react-router-dom"
import { Shield, Mail, Lock, ArrowLeft } from "lucide-react"
import fundoImg from "../../assets/fundo.png"

export default function LoginAdmin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  async function handleLogin(e) {
    e.preventDefault()
    setError("")

    const res = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })

    const data = await res.json()

    if (!res.ok) {
      setError(data.message || "Erro ao fazer login")
      return
    }

    localStorage.setItem("adminToken", data.token)
    window.location.href = "/admin/fotos"
  }

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{ backgroundImage: `url(${fundoImg})` }}
    >
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="bg-primary-blue text-white p-10 flex flex-col justify-center items-center text-center">
          <img src="/img/logo.png" alt="logo" className="w-32 h-32 mb-6" />

          <h1 className="text-3xl font-extrabold mb-3">
            CadeTuTatu?
          </h1>

          <p className="text-lg font-medium">
            Área administrativa para gerenciar fotos enviadas pelos usuários.
          </p>

        </div>

        <form onSubmit={handleLogin} className="p-10 flex flex-col justify-center">
          <Link to="/login" className="flex items-center gap-2 text-primary-blue font-semibold mb-8">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <Shield className="text-primary-green w-8 h-8" />
            <h2 className="text-3xl font-extrabold text-primary-green">
              Login Administrativo
            </h2>
          </div>

          <p className="text-gray-500 mb-8">
            Entre com sua conta de administrador para acessar o painel.
          </p>

          <label className="font-semibold text-gray-700 mb-2">Email</label>
          <div className="flex items-center border rounded-xl px-3 mb-4">
            <Mail className="w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="admin@email.com"
              className="w-full p-3 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label className="font-semibold text-gray-700 mb-2">Senha</label>
          <div className="flex items-center border rounded-xl px-3 mb-4">
            <Lock className="w-5 h-5 text-gray-400" />
            <input
              type="password"
              placeholder="Digite sua senha"
              className="w-full p-3 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="bg-red-100 text-red-600 p-3 rounded-xl mb-4 text-sm">
              {error}
            </p>
          )}

          <button className="bg-primary-green text-white font-bold p-3 rounded-xl hover:scale-[1.02] transition">
            Entrar no painel
          </button>

          <Link to="/login-usuario" className="text-center mt-5 text-primary-blue font-semibold">
            Sou usuário comum
          </Link>
        </form>
      </div>
    </div>
  )
}