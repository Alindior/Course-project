const Tag = require("../models/tag");
const TagService = require("./TagService");
const _ = require("lodash");


module.exports = class BookService {
    constructor(bookModel) {
        this._bookMedel = bookModel;
    }

    async Create({ name, genre, tags, description, usersId }) {
        try {
            const instanceTagService = new TagService(Tag);
            for (let i = 0; i < tags.length; i++) {
                if (instanceTagService.Validate(Tag[i])) {
                    await instanceTagService.Add(tags[i]);
                }
            }
            const book = new this._bookMedel({ name, genre, tags, description, author: usersId });
            if (book) {
                await book.save();
                return book;
            }
        } catch (e) {
            console.log(e);
        }
    }

    async GetAll(userId) {
        try {
            const books = await this._bookMedel.find({ author: userId });
            return books;
        } catch (e) {
            console.log(e);
        }
    }

    async GetAllPublic() {
        try {
            const books = await this._bookMedel.find().sort({ avarageRating: -1 });
            return books;
        } catch (e) {
            console.log(e);
        }
    }

    async Remove({ id }) {
        try {
            const removedBook = await this._bookMedel.findByIdAndDelete({ _id: id });
            if (removedBook) {
                return removedBook;
            }
        } catch (e) {
            console.log(e);
        }
    }

    async GetOne({ id }) {
        try {
            const book = await this._bookMedel.findById({ _id: id });
            if (book) {
                return book;
            }
        } catch (e) {
            console.log(e);
        }
    }

    async AddChapter(booksId, newChapter) {
        try {
            const book = await this._bookMedel.findById({ _id: booksId });
            if (book) {
                book.chapters.push({ ...newChapter, order: book.chapters.length + 1 });
                await book.save();
                return book
            }
        } catch (e) {
            console.log(e);
        }
    }

    async RemoveChapter(booksId, chaptersId) {
        try {
            const book = await this._bookMedel.findById({ _id: booksId });
            if (book) {
                const chapterIndex = book.chapters.findIndex(c => c._id.toString() === chaptersId);
                if (chapterIndex < 0) {
                    console.log("Глава не найдена");
                }
                book.chapters.splice(chapterIndex, 1);
                const updatedBook = await book.save();
                return updatedBook;
            }
        } catch (e) {
            console.log(e);
        }
    }

    async UpdateChapter(booksId, chaptersId, newChapter) {
        try {
            const book = await this._bookMedel.findById({ _id: booksId });
            if (book) {
                const chapter = book.chapters.find(c => c._id.toString() === chaptersId);
                book.chapters[newChapter.order - 1].order = chapter.order;
                chapter.order = newChapter.order;
                chapter.title = newChapter.title;
                chapter.content = newChapter.content;
                chapter.image = newChapter.image;
                book.chapters = _.sortBy(book.chapters, "order");
                await book.save();
                return book;
            }
        } catch (e) {
            console.log(e);
        }
    }
}