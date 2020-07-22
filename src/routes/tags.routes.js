const { Router } = require("express");
const router = Router();
const TagService = require('../services/TagService');
const Tag = require('../models/tag');

router.get("/", async (req, res) => {
    try {
        const instanceTagService = new TagService(Tag);
        const tags = await instanceTagService.getAll();
        if (tags) {
            res.status(200).json(tags);
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "ЧТо то пошло не так" });
    }
})


module.exports = router;

