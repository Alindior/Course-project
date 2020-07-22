const { Router } = require("express");
const router = Router();
const Book = require("../models/book");
const BookService = require("../services/BookService");

router.post("/:bookId/chapter", async (req, res) => {
    try {
        const { bookId } = req.params;
        const instanceBookService = new BookService(Book);
        const book = await instanceBookService.AddChapter(bookId, req.body);
        res.status(200).json(book);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "что то пошло не так" });
    }
});

router.delete("/:booksId/chapter/:chaptersId", async (req, res) => {
    try {
        const { booksId, chaptersId } = req.params;
        const instanceBookService = new BookService(Book);
        const book = await instanceBookService.RemoveChapter(booksId, chaptersId);
        res.status(200).json(book);
    } catch (e) {
        console.log(e);
    }
});

router.put("/:booksId/chapter/:chaptersId", async (req, res) => {
    try {
        const { booksId, chaptersId } = req.params;
        const instanceBookService = new BookService(Book);
        const book = await instanceBookService.UpdateChapter(booksId, chaptersId, req.body);
        res.status(200).json(book);
    } catch (e) {
        console.log(e);
    }
})

module.exports = router;