export const API_URL = "http://localhost:5000";

export function getSession() {
  const adminToken = localStorage.getItem("adminToken");
  const userToken = localStorage.getItem("userToken");

  if (adminToken) return { token: adminToken, type: "admin" };
  if (userToken) return { token: userToken, type: "researcher" };
  return null;
}

export function clearSession() {
  localStorage.removeItem("adminToken");
  localStorage.removeItem("userToken");
  localStorage.removeItem("authType");
}

export async function apiRequest(path, options = {}) {
  const session = getSession();
  const headers = { ...(options.headers || {}) };

  if (session?.token) {
    headers.Authorization = `Bearer ${session.token}`;
  }

  const response = await fetch(`${API_URL}${path}`, { ...options, headers });
  if (response.status === 204) return null;

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || "Não foi possível concluir a solicitação.");
  }

  return data;
}
