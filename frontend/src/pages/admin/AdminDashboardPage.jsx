import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  Check,
  ClipboardList,
  LogOut,
  Pencil,
  Plus,
  Save,
  Trash2,
  Users,
  X,
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import backgroundImg from "../../assets/backgrounds/fundo3.png";
import { API_URL, apiRequest, clearSession, getSession } from "../../services/api";

const emptyResearcher = {
  name: "",
  email: "",
  password: "",
  profession: "Pesquisador",
  address: "",
  institution: "",
  specialty: "",
  bio: "",
};

export default function AdminDashboardPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedTab = searchParams.get("tab");
  const [tab, setTab] = useState(requestedTab === "submissions" ? "submissions" : "researchers");
  const [overview, setOverview] = useState({});
  const [researchers, setResearchers] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [form, setForm] = useState(emptyResearcher);
  const [editingId, setEditingId] = useState("");
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (getSession()?.type !== "admin") {
      window.location.href = "/login-admin";
      return;
    }
    loadDashboard();
  }, []);

  useEffect(() => {
    setTab(requestedTab === "submissions" ? "submissions" : "researchers");
  }, [requestedTab]);

  function selectTab(nextTab) {
    setTab(nextTab);
    setSearchParams({ tab: nextTab });
  }

  async function loadDashboard() {
    setLoading(true);
    setError("");
    try {
      const [overviewData, researchersData, submissionsData] = await Promise.all([
        apiRequest("/admin/overview"),
        apiRequest("/admin/researchers"),
        apiRequest("/admin/submissions"),
      ]);
      setOverview(overviewData);
      setResearchers(researchersData);
      setSubmissions(submissionsData);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  }

  function updateForm(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function startEdit(researcher) {
    setEditingId(researcher.id);
    setForm({
      name: researcher.name || "",
      email: researcher.email || "",
      password: "",
      profession: researcher.profession || "Pesquisador",
      address: researcher.address || "",
      institution: researcher.institution || "",
      specialty: researcher.specialty || "",
      bio: researcher.bio || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function cancelEdit() {
    setEditingId("");
    setForm(emptyResearcher);
  }

  async function saveResearcher(event) {
    event.preventDefault();
    setNotice("");
    setError("");

    try {
      const path = editingId ? `/admin/researchers/${editingId}` : "/admin/researchers";
      const method = editingId ? "PUT" : "POST";
      await apiRequest(path, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setNotice(editingId ? "Pesquisador atualizado." : "Pesquisador cadastrado.");
      cancelEdit();
      await loadDashboard();
    } catch (requestError) {
      setError(requestError.message);
    }
  }

  async function deleteResearcher(id) {
    if (!window.confirm("Deseja realmente excluir este pesquisador?")) return;
    try {
      await apiRequest(`/admin/researchers/${id}`, { method: "DELETE" });
      setNotice("Pesquisador excluído.");
      await loadDashboard();
    } catch (requestError) {
      setError(requestError.message);
    }
  }

  async function changeSubmissionStatus(id, action) {
    try {
      await apiRequest(`/submissions/${id}/${action}`, { method: "PUT" });
      setNotice(action === "approve" ? "Foto aprovada." : "Foto rejeitada.");
      await loadDashboard();
    } catch (requestError) {
      setError(requestError.message);
    }
  }

  function logout() {
    clearSession();
    window.location.href = "/";
  }

  return (
    <main className="min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <header className="bg-primary-blue text-white px-5 sm:px-10 py-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase">CadeTuTatu?</p>
          <h1 className="text-2xl sm:text-3xl font-extrabold">Painel Administrativo</h1>
        </div>
        <div className="flex items-center gap-5">
          <Link to="/" className="flex items-center gap-2 font-bold"><ArrowLeft className="h-5 w-5" /> Site</Link>
          <button type="button" onClick={logout} className="flex items-center gap-2 font-bold"><LogOut className="h-5 w-5" /> Sair</button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-4 sm:p-8">
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <Stat label="Pesquisadores" value={overview.researchers || 0} />
          <Stat label="Fotos pendentes" value={overview.pendingSubmissions || 0} />
          <Stat label="Fotos aprovadas" value={overview.approvedSubmissions || 0} />
        </section>

        <nav className="bg-white border-b flex overflow-x-auto">
          <Tab active={tab === "researchers"} onClick={() => selectTab("researchers")} icon={<Users />} label="Pesquisadores" />
          <Tab active={tab === "submissions"} onClick={() => selectTab("submissions")} icon={<ClipboardList />} label="Fotos enviadas" />
        </nav>

        {error && <p className="bg-red-100 text-red-700 p-3 font-semibold">{error}</p>}
        {notice && <p className="bg-green-100 text-green-700 p-3 font-semibold">{notice}</p>}

        {loading ? (
          <div className="bg-white p-10 text-center font-bold">Carregando painel...</div>
        ) : tab === "researchers" ? (
          <section className="bg-white">
            <form onSubmit={saveResearcher} className="p-5 sm:p-7 border-b">
              <div className="flex items-center justify-between gap-3 mb-5">
                <h2 className="text-xl font-extrabold text-primary-blue">
                  {editingId ? "Editar pesquisador" : "Adicionar pesquisador"}
                </h2>
                {editingId && <button type="button" onClick={cancelEdit} className="text-gray-600 font-bold">Cancelar</button>}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Input label="Nome" value={form.name} onChange={(value) => updateForm("name", value)} required />
                <Input label="Email" type="email" value={form.email} onChange={(value) => updateForm("email", value)} required />
                <Input label={editingId ? "Nova senha (opcional)" : "Senha inicial"} type="password" value={form.password} onChange={(value) => updateForm("password", value)} required={!editingId} />
                <Input label="Profissão" value={form.profession} onChange={(value) => updateForm("profession", value)} />
                <Input label="Instituição" value={form.institution} onChange={(value) => updateForm("institution", value)} />
                <Input label="Endereço" value={form.address} onChange={(value) => updateForm("address", value)} />
                <Input label="Especialidade" value={form.specialty} onChange={(value) => updateForm("specialty", value)} />
              </div>
              <label className="block mt-4 font-bold text-gray-700">
                Biografia
                <textarea value={form.bio} onChange={(event) => updateForm("bio", event.target.value)} rows="3" className="mt-2 w-full border rounded-lg p-3 outline-none resize-none" />
              </label>
              <button type="submit" className="mt-5 inline-flex items-center gap-2 bg-primary-green text-white font-bold px-5 py-3 rounded-lg">
                {editingId ? <Save className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                {editingId ? "Salvar alterações" : "Cadastrar pesquisador"}
              </button>
            </form>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-100 text-gray-700">
                  <tr><th className="p-4">Pesquisador</th><th className="p-4">Instituição</th><th className="p-4">Envios</th><th className="p-4">Ações</th></tr>
                </thead>
                <tbody>
                  {researchers.map((researcher) => (
                    <tr key={researcher.id} className="border-t">
                      <td className="p-4">
                        <p className="font-bold">{researcher.name}</p>
                        <p className="text-sm text-gray-500">{researcher.email}</p>
                      </td>
                      <td className="p-4">{researcher.institution || "Não informada"}</td>
                      <td className="p-4">{researcher._count?.submissions || 0}</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button type="button" title="Editar pesquisador" onClick={() => startEdit(researcher)} className="p-2 text-primary-blue"><Pencil className="h-5 w-5" /></button>
                          <button type="button" title="Excluir pesquisador" onClick={() => deleteResearcher(researcher.id)} className="p-2 text-red-600"><Trash2 className="h-5 w-5" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {!researchers.length && <p className="p-7 text-gray-500">Nenhum pesquisador cadastrado.</p>}
            </div>
          </section>
        ) : (
          <section className="bg-white p-5 sm:p-7">
            <h2 className="text-xl font-extrabold text-primary-blue mb-5">Fotos enviadas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {submissions.map((submission) => (
                <article key={submission.id} className="border rounded-lg overflow-hidden">
                  <img src={`${API_URL}${submission.imageUrl}`} alt={submission.animalName} className="w-full h-52 object-cover" />
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div><h3 className="font-extrabold">{submission.animalName}</h3><p className="text-sm text-gray-500">{submission.user?.name || submission.authorName || "Autor não informado"}</p></div>
                      <span className="text-sm font-bold text-primary-blue">{submission.status}</span>
                    </div>
                    <p className="mt-3 text-gray-600">{submission.description || "Sem descrição"}</p>
                    {submission.status === "PENDING" && (
                      <div className="mt-4 flex gap-3">
                        <button type="button" onClick={() => changeSubmissionStatus(submission.id, "approve")} className="flex-1 inline-flex items-center justify-center gap-2 bg-primary-green text-white font-bold p-3 rounded-lg"><Check className="h-5 w-5" /> Aprovar</button>
                        <button type="button" onClick={() => changeSubmissionStatus(submission.id, "reject")} className="flex-1 inline-flex items-center justify-center gap-2 bg-red-600 text-white font-bold p-3 rounded-lg"><X className="h-5 w-5" /> Rejeitar</button>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
            {!submissions.length && <p className="text-gray-500">Nenhuma foto enviada.</p>}
          </section>
        )}
      </div>
    </main>
  );
}

function Stat({ label, value }) {
  return <div className="bg-white border-l-4 border-primary-green p-5 shadow"><p className="text-gray-500 font-bold">{label}</p><p className="text-3xl font-extrabold text-primary-blue mt-1">{value}</p></div>;
}

function Tab({ active, onClick, icon, label }) {
  return <button type="button" onClick={onClick} className={`flex items-center gap-2 px-6 py-4 font-bold border-b-4 ${active ? "border-primary-green text-primary-green" : "border-transparent text-gray-500"}`}>{React.cloneElement(icon, { className: "h-5 w-5" })}{label}</button>;
}

function Input({ label, value, onChange, type = "text", required = false }) {
  return <label className="font-bold text-gray-700">{label}<input type={type} value={value} onChange={(event) => onChange(event.target.value)} required={required} className="mt-2 w-full border rounded-lg p-3 outline-none" /></label>;
}
