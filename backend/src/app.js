import cors from "cors";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import speciesRoutes from "./routes/speciesRoutes.js";
import submissionRoutes from "./routes/submissionRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.get("/", (req, res) => {
  res.json({ message: "API CadeTuTatu funcionando" });
});

app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/species", speciesRoutes);
app.use("/submissions", submissionRoutes);
app.use("/users", userRoutes);

app.use((error, req, res, next) => {
  if (error) {
    return res.status(400).json({ message: error.message || "Erro ao processar solicitacao" });
  }
  next();
});

export default app;
