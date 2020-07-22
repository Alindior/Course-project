const { Router } = require("express");
const router = Router();
const config = require("../keys");
const upload = require("../middlewares/multer");
const UploadService = require('../services/UploadService');

router.post("/", upload.single("image"), async (req, res) => {
    try {
        const instanceUploadService = new UploadService();
        await instanceUploadService.uploadFile(req.file, (uploadedFile) => {
            res.json(uploadedFile.Location);
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "ЧТо то пошло не так" });
    }
})

module.exports = router;