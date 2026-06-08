import { useState } from "react"
import { Link } from "react-router-dom"
import { User, Mail, Lock, ArrowLeft, Briefcase } from "lucide-react"
import fundoImg from "../../assets/fundo.png"

export default function LoginUsuario() {
  const [isLogin, setIsLogin] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [profession, setProfession] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    setError("")
    setSuccess("")

    const endpoint = isLogin ? "/users/login" : "/users/register"
    const bodyData = isLogin ? { email, password } : { name, email, password, profession }

    const res = await fetch(`http://localhost:5000${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyData)
    })

    const data = await res.json()

    if (!res.ok) {
      setError(data.message || (isLogin ? "Erro ao fazer login" : "Erro ao cadastrar"))
      return
    }

    if (isLogin) {
      localStorage.setItem("userToken", data.token)
      window.location.href = "/"
    } else {
      setSuccess("Cadastro realizado com sucesso! Faça login para continuar.")
      setIsLogin(true)
      setPassword("")
      setProfession("")
    }
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
            Área do usuário para enviar fotos de animais e interagir.
          </p>

        </div>

        <form onSubmit={handleSubmit} className="p-10 flex flex-col justify-center">
          <Link to="/login" className="flex items-center gap-2 text-primary-blue font-semibold mb-8">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <User className="text-primary-green w-8 h-8" />
            <h2 className="text-3xl font-extrabold text-primary-green">
              {isLogin ? "Login de Usuário" : "Criar Conta"}
            </h2>
          </div>

          <p className="text-gray-500 mb-8">
            {isLogin 
              ? "Entre com sua conta de usuário para acessar o sistema." 
              : "Cadastre-se para começar a enviar fotos de animais."}
          </p>

          {!isLogin && (
            <>
              <label className="font-semibold text-gray-700 mb-2">Nome</label>
              <div className="flex items-center border rounded-xl px-3 mb-4">
                <User className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  className="w-full p-3 outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <label className="font-semibold text-gray-700 mb-2">Profissão</label>
              <div className="flex items-center border rounded-xl px-3 mb-4 bg-white overflow-hidden">
                <Briefcase className="w-5 h-5 text-gray-400 ml-3" />
                <select
                  className="w-full p-3 outline-none bg-transparent text-gray-700 appearance-none"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  required
                >
                  <option value="" disabled>Selecione sua profissão</option>
                  <option value="Estudante">Estudante</option>
                  <option value="Professor">Professor</option>
                  <option value="Fotógrafo">Fotógrafo</option>
                  <option value="Pesquisador">Pesquisador</option>
                  <option value="Biólogo">Biólogo</option>
                  <option value="Amante da Natureza">Amante da Natureza</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
            </>
          )}

          <label className="font-semibold text-gray-700 mb-2">Email</label>
          <div className="flex items-center border rounded-xl px-3 mb-4">
            <Mail className="w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full p-3 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              required
            />
          </div>

          {error && (
            <p className="bg-red-100 text-red-600 p-3 rounded-xl mb-4 text-sm">
              {error}
            </p>
          )}

          {success && (
            <p className="bg-green-100 text-green-700 p-3 rounded-xl mb-4 text-sm">
              {success}
            </p>
          )}

          <button className="bg-primary-green text-white font-bold p-3 rounded-xl hover:scale-[1.02] transition mb-4">
            {isLogin ? "Entrar" : "Cadastrar"}
          </button>

          <div className="text-center">
            {isLogin ? (
              <p className="text-gray-600">
                Ainda não tem conta?{" "}
                <button
                  type="button"
                  onClick={() => { setIsLogin(false); setError(""); setSuccess(""); }}
                  className="text-primary-blue font-semibold hover:underline"
                >
                  Cadastre-se
                </button>
              </p>
            ) : (
              <p className="text-gray-600">
                Já possui cadastro?{" "}
                <button
                  type="button"
                  onClick={() => { setIsLogin(true); setError(""); setSuccess(""); }}
                  className="text-primary-blue font-semibold hover:underline"
                >
                  Faça Login
                </button>
              </p>
            )}
          </div>

          <div className="border-t mt-6 pt-6 text-center">
            <Link to="/login-admin" className="text-primary-blue font-semibold">
              Sou administrador
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}