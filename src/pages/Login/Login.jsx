import { Link } from "react-router-dom"
import { User, ShieldCheck, ArrowLeft } from "lucide-react"
import fundoImg from "../../assets/fundo.png"

export default function Login() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${fundoImg})` }}
    >
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-4xl p-8 relative">
        <Link to="/" className="absolute top-6 left-6 flex items-center gap-2 text-primary-blue font-semibold hover:underline">
          <ArrowLeft className="w-4 h-4" />
          Voltar para Home
        </Link>
        <div className="flex flex-col items-center mb-8 mt-4">
          <img src="/img/logo.png" alt="Logo CadeTuTatu" className="w-28 h-28 mb-4" />

          <h1 className="text-3xl font-bold text-primary-blue text-center">
            Bem-vindo ao CadeTuTatu?
          </h1>

          <p className="text-gray-600 text-center mt-2 max-w-xl">
            Escolha como deseja acessar o sistema. Usuários podem enviar fotos e explorar o site, enquanto administradores podem gerenciar e aprovar os envios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/login-usuario"
            className="border-2 border-primary-green rounded-2xl p-6 hover:scale-105 transition bg-green-50"
          >
            <User className="w-12 h-12 text-primary-green mb-4" />

            <h2 className="text-2xl font-bold text-primary-green mb-2">
              Login de Usuário
            </h2>

            <p className="text-gray-600">
              Acesse para enviar fotos de animais, acompanhar seus envios e explorar as funcionalidades do site.
            </p>
          </Link>

          <Link
            to="/login-admin"
            className="border-2 border-primary-blue rounded-2xl p-6 hover:scale-105 transition bg-blue-50"
          >
            <ShieldCheck className="w-12 h-12 text-primary-blue mb-4" />

            <h2 className="text-2xl font-bold text-primary-blue mb-2">
              Login Administrativo
            </h2>

            <p className="text-gray-600">
              Acesse o painel administrativo para aprovar, rejeitar e gerenciar fotos enviadas pelos usuários.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}