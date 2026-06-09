import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsDirectory = path.resolve(__dirname, "../../uploads");

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, uploadsDirectory);
  },
  filename(req, file, callback) {
    const extension = path.extname(file.originalname);
    callback(null, `${Date.now()}-${Math.round(Math.random() * 1e9)}${extension}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter(req, file, callback) {
    if (!file.mimetype.startsWith("image/")) {
      return callback(new Error("Apenas arquivos de imagem sao permitidos"));
    }
    callback(null, true);
  },
});

export default upload;
