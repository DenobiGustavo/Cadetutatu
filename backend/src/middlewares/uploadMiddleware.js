import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9)
        const extension = path.extname(file.originalname)
        cb(null, uniqueName + extension)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
        cb(null, true)
    } else {
        cb(new Error("Apenas imagens são permitidas"), false)
    }
}

const upload = multer({
    storage,
    fileFilter
})

export default upload