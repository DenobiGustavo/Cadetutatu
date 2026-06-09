# CadeTuTatu

O projeto está separado em duas aplicações:

```text
Cadetutatu/
├── frontend/   # Interface React
└── backend/    # API Express, Prisma e PostgreSQL
```

## Frontend

```powershell
cd frontend
npm start
```

Disponível em `http://localhost:3000`.

## Backend

Inicie o PostgreSQL:

```powershell
cd backend
docker compose up -d
```

Depois, inicie a API:

```powershell
node src/server.js
```

Disponível em `http://localhost:5000`.
