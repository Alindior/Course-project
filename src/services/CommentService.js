module.exports = class CommentService {
    constructor(modelBook) {
        this._modelBook = modelBook;
    }

    async addComment(booksId, comment) {
        try {
            const book = await this._modelBook.findById(booksId);
            if (book) {
                book.comments.push(comment);
                await book.save();
                return book;
            }
        } catch (e) {
            console.log(e);
        }
    }
}