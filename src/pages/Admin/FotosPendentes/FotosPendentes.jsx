import { useEffect, useState } from "react"

export default function FotosPendentes() {
  const [fotos, setFotos] = useState([])

  async function carregar() {
    const token = localStorage.getItem("adminToken")

    const res = await fetch("http://localhost:5000/submissions/pending", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    const data = await res.json()
    setFotos(data)
  }

  async function aprovar(id) {
    const token = localStorage.getItem("adminToken")

    await fetch(`http://localhost:5000/submissions/${id}/approve`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    carregar()
  }

  async function rejeitar(id) {
    const token = localStorage.getItem("adminToken")

    await fetch(`http://localhost:5000/submissions/${id}/reject`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    carregar()
  }

  useEffect(() => {
    carregar()
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h2>Fotos Pendentes</h2>

      {fotos.map((foto) => (
        <div key={foto.id} style={{ marginBottom: 20 }}>
          <img
            src={`http://localhost:5000${foto.imageUrl}`}
            alt=""
            width={200}
          />

          <p>{foto.animalName}</p>

          <button onClick={() => aprovar(foto.id)}>Aprovar</button>
          <button onClick={() => rejeitar(foto.id)}>Rejeitar</button>
        </div>
      ))}
    </div>
  )
}