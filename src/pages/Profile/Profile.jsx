import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { User, ArrowLeft, Save, Lock, Briefcase } from "lucide-react"

export default function Profile() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [profession, setProfession] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()
  const token = localStorage.getItem("userToken")

  useEffect(() => {
    if (!token) {
      navigate("/login-usuario")
      return
    }

    async function fetchProfile() {
      try {
        const res = await fetch("http://localhost:5000/users/profile", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })

        if (!res.ok) {
          throw new Error("Sessão expirada ou inválida")
        }

        const data = await res.json()
        setName(data.name || "")
        setEmail(data.email || "")
        setProfession(data.profession || "")
      } catch (err) {
        localStorage.removeItem("userToken")
        navigate("/login-usuario")
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [token, navigate])

  async function handleUpdate(e) {
    e.preventDefault()
    setError("")
    setSuccess("")

    try {
      const res = await fetch("http://localhost:5000/users/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ name, profession, password: password || undefined })
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.message || "Erro ao atualizar perfil")
        return
      }

      setSuccess("Perfil atualizado com sucesso!")
      setPassword("") // Limpa a senha após atualizar
    } catch (err) {
      setError("Erro de conexão ao tentar atualizar o perfil")
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-green-100 flex items-center justify-center">
        <p className="text-xl font-bold text-primary-green">Carregando perfil...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-primary-blue font-semibold mb-6 hover:text-primary-green transition">
          <ArrowLeft className="w-5 h-5" />
          Voltar para o Início
        </Link>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header Dashboard */}
          <div className="bg-primary-blue p-8 text-center relative">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md border-4 border-primary-green relative">
              <User className="w-12 h-12 text-primary-blue" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-1">{name}</h1>
            <p className="text-blue-200 text-sm">{profession || "Usuário"}</p>
          </div>

          {/* Form Content */}
          <form onSubmit={handleUpdate} className="p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Informações da Conta</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="font-semibold text-gray-700 mb-2 block">Nome Completo</label>
                <div className="flex items-center border border-gray-300 rounded-xl px-3 bg-gray-50 focus-within:border-primary-green focus-within:ring-1 focus-within:ring-primary-green transition">
                  <User className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full p-3 outline-none bg-transparent"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-gray-700 mb-2 block">Email (Apenas Leitura)</label>
                <div className="flex items-center border border-gray-200 bg-gray-100 rounded-xl px-3 cursor-not-allowed">
                  <User className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    className="w-full p-3 outline-none bg-transparent cursor-not-allowed text-gray-500"
                    value={email}
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="font-semibold text-gray-700 mb-2 block">Sua Profissão</label>
                <div className="flex items-center border border-gray-300 rounded-xl px-3 bg-gray-50 focus-within:border-primary-green transition overflow-hidden">
                  <Briefcase className="w-5 h-5 text-gray-400" />
                  <select
                    className="w-full p-3 outline-none bg-transparent text-gray-700"
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
              </div>

              <div>
                <label className="font-semibold text-gray-700 mb-2 block">Nova Senha (Opcional)</label>
                <div className="flex items-center border border-gray-300 rounded-xl px-3 bg-gray-50 focus-within:border-primary-green transition">
                  <Lock className="w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Deixe em branco para manter"
                    className="w-full p-3 outline-none bg-transparent"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {error && (
              <p className="bg-red-100 text-red-600 p-4 rounded-xl mb-6 text-sm font-medium border border-red-200">
                {error}
              </p>
            )}

            {success && (
              <p className="bg-green-100 text-green-700 p-4 rounded-xl mb-6 text-sm font-medium border border-green-200">
                {success}
              </p>
            )}

            <div className="flex justify-end pt-4 border-t border-gray-100 mt-4">
              <button className="bg-primary-green text-white font-bold py-3 px-8 rounded-xl hover:bg-green-600 hover:shadow-lg transition flex justify-center items-center gap-2 transform hover:-translate-y-1">
                <Save className="w-5 h-5" />
                Salvar Alterações
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
