import express from "express"
import cors from "cors"
import path from "path"
import { fileURLToPath } from "url"
import speciesRoutes from "./routes/speciesRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import submissionRoutes from "./routes/submissionRoutes.js"
import userRoutes from "./routes/userRoutes.js"

const app = express()

const __filename = fileURLToPath(
    import.meta.url)
const __dirname = path.dirname(__filename)

app.use(cors())
app.use(express.json())

app.use("/uploads", express.static(path.join(__dirname, "../uploads")))

app.use("/auth", authRoutes)
app.use("/species", speciesRoutes)
app.use("/submissions", submissionRoutes)
app.use("/users", userRoutes)

export default app