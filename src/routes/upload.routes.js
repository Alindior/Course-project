const { Router } = require("express");
const router = Router();
const UploadService = require('../services/UploadService');

router.post("/", async (req, res) => {
    try {
        const instanceUploadService = new UploadService();
        const srcUploadedImg = await instanceUploadService.uploadFile(req.files.image);
        res.status(200).json(srcUploadedImg);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "ЧТо то пошло не так" });
    }
})

module.exports = router;