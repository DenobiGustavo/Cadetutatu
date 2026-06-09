import React, { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Building2, Camera, Lock, LogOut, Mail, MapPin, Microscope, Save, User } from "lucide-react";
import { Link } from "react-router-dom";
import backgroundImg from "../../assets/backgrounds/fundo3.png";
import { API_URL, apiRequest, clearSession, getSession } from "../../services/api";

const initialProfile = {
  name: "",
  email: "",
  address: "",
  profession: "",
  institution: "",
  specialty: "",
  bio: "",
  profileImageUrl: "",
  submissions: [],
};

export default function ResearcherProfilePage() {
  const [profile, setProfile] = useState(initialProfile);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (getSession()?.type !== "researcher") {
      window.location.href = "/login";
      return;
    }

    apiRequest("/users/profile")
      .then(setProfile)
      .catch((requestError) => setError(requestError.message))
      .finally(() => setLoading(false));
  }, []);

  const avatar = useMemo(() => {
    if (image) return URL.createObjectURL(image);
    if (profile.profileImageUrl) return `${API_URL}${profile.profileImageUrl}`;
    return "";
  }, [image, profile.profileImageUrl]);

  function updateField(field, value) {
    setProfile((current) => ({ ...current, [field]: value }));
  }

  async function saveProfile(event) {
    event.preventDefault();
    setSaving(true);
    setNotice("");
    setError("");

    const body = new FormData();
    ["name", "profession", "institution", "specialty", "bio"].forEach((field) => {
      body.append(field, profile[field] || "");
    });
    if (image) body.append("profileImage", image);

    try {
      const updated = await apiRequest("/users/profile", { method: "PUT", body });
      setProfile((current) => ({ ...current, ...updated }));
      setImage(null);
      setNotice("Perfil atualizado com sucesso.");
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setSaving(false);
    }
  }

  function logout() {
    clearSession();
    window.location.href = "/";
  }

  if (loading) {
    return <main className="min-h-screen grid place-items-center bg-gray-50 font-bold">Carregando perfil...</main>;
  }

  return (
    <main className="min-h-screen bg-cover bg-center bg-fixed px-4 py-8" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        <header className="bg-primary-blue text-white px-6 sm:px-10 py-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase">Área do pesquisador</p>
            <h1 className="text-2xl sm:text-3xl font-extrabold">Meu Perfil</h1>
          </div>
          <button type="button" onClick={logout} className="flex items-center gap-2 font-bold">
            <LogOut className="h-5 w-5" /> Sair
          </button>
        </header>

        <form onSubmit={saveProfile} className="grid grid-cols-1 lg:grid-cols-[18rem_1fr]">
          <aside className="bg-gray-50 p-7 flex flex-col items-center border-r">
            <div className="h-40 w-40 rounded-full overflow-hidden bg-primary-blue text-white grid place-items-center">
              {avatar ? <img src={avatar} alt="Perfil" className="h-full w-full object-cover" /> : <User className="h-20 w-20" />}
            </div>
            <label className="mt-5 cursor-pointer inline-flex items-center gap-2 bg-primary-green text-white font-bold px-4 py-3 rounded-lg">
              <Camera className="h-5 w-5" /> Alterar foto
              <input type="file" accept="image/*" className="hidden" onChange={(event) => setImage(event.target.files?.[0] || null)} />
            </label>
            <Link to="/" className="mt-8 inline-flex items-center gap-2 text-primary-blue font-bold">
              <ArrowLeft className="h-4 w-4" /> Voltar ao site
            </Link>
          </aside>

          <section className="p-7 sm:p-10">
            <div className="mb-7">
              <h2 className="text-xl font-extrabold text-primary-blue">Dados de acesso</h2>
              <p className="mt-1 text-sm text-gray-500">
                Essas informações só podem ser alteradas pelo administrador.
              </p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
                <LockedField label="Email" icon={<Mail />} value={profile.email} />
                <LockedField label="Senha" icon={<Lock />} value="••••••••" />
                <div className="md:col-span-2">
                  <LockedField label="Endereço" icon={<MapPin />} value={profile.address || "Não informado"} />
                </div>
              </div>
            </div>

            <div className="border-t pt-7">
              <h2 className="text-xl font-extrabold text-primary-blue mb-4">Informações do perfil</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Nome" icon={<User />} value={profile.name} onChange={(value) => updateField("name", value)} required />
              <Field label="Profissão" icon={<Microscope />} value={profile.profession} onChange={(value) => updateField("profession", value)} />
              <Field label="Instituição" icon={<Building2 />} value={profile.institution} onChange={(value) => updateField("institution", value)} />
              <Field label="Especialidade" value={profile.specialty} onChange={(value) => updateField("specialty", value)} />
            </div>

            <label className="block mt-5 font-bold text-gray-700">
              Sobre você
              <textarea
                value={profile.bio || ""}
                onChange={(event) => updateField("bio", event.target.value)}
                rows="5"
                className="mt-2 w-full border rounded-lg p-3 outline-none resize-none"
                placeholder="Conte um pouco sobre sua atuação e seus interesses."
              />
            </label>

            {error && <p className="mt-5 bg-red-100 text-red-700 p-3 rounded-lg font-semibold">{error}</p>}
            {notice && <p className="mt-5 bg-green-100 text-green-700 p-3 rounded-lg font-semibold">{notice}</p>}

            <button type="submit" disabled={saving} className="mt-6 inline-flex items-center gap-2 bg-primary-green text-white font-bold px-6 py-3 rounded-lg disabled:opacity-60">
              <Save className="h-5 w-5" /> {saving ? "Salvando..." : "Salvar perfil"}
            </button>
            </div>

            <div className="mt-10 border-t pt-7">
              <h2 className="text-xl font-extrabold text-primary-blue">Meus envios</h2>
              {profile.submissions?.length ? (
                <div className="mt-4 grid gap-3">
                  {profile.submissions.map((submission) => (
                    <div key={submission.id} className="border rounded-lg p-4 flex justify-between gap-4">
                      <div>
                        <p className="font-bold">{submission.animalName}</p>
                        <p className="text-sm text-gray-500">{submission.description || "Sem descrição"}</p>
                      </div>
                      <span className="font-bold text-primary-blue">{submission.status}</span>
                    </div>
                  ))}
                </div>
              ) : <p className="mt-3 text-gray-500">Você ainda não enviou fotos.</p>}
            </div>
          </section>
        </form>
      </div>
    </main>
  );
}

function LockedField({ label, icon, value }) {
  return (
    <label className="font-bold text-gray-700">
      {label}
      <div className="mt-2 flex items-center border border-gray-200 rounded-lg px-3 bg-gray-100 text-gray-500">
        {React.cloneElement(icon, { className: "h-5 w-5 shrink-0" })}
        <input value={value || ""} readOnly disabled className="w-full p-3 bg-transparent outline-none cursor-not-allowed" />
        <Lock className="h-5 w-5 shrink-0 text-gray-400" aria-label="Campo bloqueado" />
      </div>
    </label>
  );
}

function Field({ label, icon, value, onChange, required = false }) {
  return (
    <label className="font-bold text-gray-700">
      {label}
      <div className="mt-2 flex items-center border rounded-lg px-3">
        {icon && React.cloneElement(icon, { className: "h-5 w-5 text-gray-400" })}
        <input value={value || ""} onChange={(event) => onChange(event.target.value)} className="w-full p-3 outline-none" required={required} />
      </div>
    </label>
  );
}
