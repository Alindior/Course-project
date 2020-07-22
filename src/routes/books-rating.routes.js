const { Router } = require('express');
const router = Router();
const Book = require("../models/book");
const passport = require('passport');
const RatingService = require("../services/RatingService");

router.post("/:id/rating", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const { id } = req.params;
        const { _id } = req.user;
        const { value } = req.body;
        const instanceRatingService = new RatingService(Book);
        const book = await instanceRatingService.SetRating(id, { author: _id, value });
        res.status(201).json(book);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "ЧТо то пошло не так" });
    }
})

module.exports = router;