const { Router } = require('express');
const router = Router();
const passport = require('passport');
const Book = require("../models/book");
const BookService = require("../services/BookService");

router.post("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const instanceBookService = new BookService(Book);
        const book = await instanceBookService.Create(req.body);
        if (book) {
            res.status(200).json(book)
        }
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Ошибка сервера" })
    }
});

router.get("/public", async (req, res) => {
    try {
        const instanceBookService = new BookService(Book);
        const books = await instanceBookService.GetAllPublic();
        return res.status(200).json(books);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Ошибка сервера" })
    }
});

router.get("/private/:userId", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const instanceBookService = new BookService(Book);
        const { userId } = req.params;
        const books = await instanceBookService.GetAll(userId);
        return res.status(200).json(books);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Ошибка сервера" })
    }
});


router.get("/:id", async (req, res) => {
    try {
        const instanceBookService = new BookService(Book);
        const book = await instanceBookService.GetOne(req.params);
        return res.status(200).json(book);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Ошибка сервера" })
    }
});

router.delete("/", async (req, res) => {
    try {
        const instanceBookService = new BookService(Book);
        const deletedBook = await instanceBookService.Remove(req.body);
        if (deletedBook) {
            return res.status(201).json(deletedBook);
        }
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Что то пошло не так" });
    }
});


module.exports = router;