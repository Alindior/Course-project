module.exports = class RatingService {
    constructor(modelBook) {
        this._modelBook = modelBook;
    }

    async SetRating(booksId, rating) {
        try {
            const book = await this._modelBook.findById(booksId);
            book.rating.push(rating);
            const avarageRating = (book.rating.reduce((sum, current) => { return sum + current.value }, 0)) / book.rating.length;
            book.avarageRating = avarageRating;
            await book.save();
            return book;
        } catch (e) {
            console.log(e);
        }
    }
}