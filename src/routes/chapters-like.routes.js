const { Router } = require('express');
const router = Router();
const Book = require("../models/book");
const passport = require('passport');
const LikeService = require("../services/LikeServiece");

router.post("/:booksId/likes/:chaptersId", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const { booksId, chaptersId } = req.params;
        const { _id } = req.user;
        const instanceLikeService = new LikeService(Book);
        const updatedBook = await instanceLikeService.SetLikeChapter(_id, booksId, chaptersId);
        res.status(200).json(updatedBook);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "ЧТо то пошло не так" });
    }
})

router.delete("/:booksId/likes/:chaptersId", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const { booksId, chaptersId } = req.params;
        const { id } = req.body;
        const instanceLikeService = new LikeService(Book);
        const updatedBook = await instanceLikeService.RemoveLikeChapter(booksId, chaptersId, id);
        res.status(200).json(updatedBook);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "ЧТо то пошло не так" });
    }
})

module.exports = router;