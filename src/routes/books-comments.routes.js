const { Router } = require('express');
const router = Router();
const Book = require("../models/book");
const CommentService = require("../services/CommentService");
const passport = require('passport');

router.post("/:id/comments", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const { id } = req.params;
        const { _id } = req.user;
        const { body } = req.body;
        const instanceCommentService = new CommentService(Book);
        const book = await instanceCommentService.addComment(id, { author: _id, body });
        res.status(201).json(book);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "ЧТо то пошло не так" });
    }
})

module.exports = router;