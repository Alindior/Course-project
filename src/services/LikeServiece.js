module.exports = class LikeService {
    constructor(bookModel) {
        this._bookModel = bookModel;
    }

    async SetLikeChapter(usersId, booksId, chaptersId) {
        try {
            const book = await this._bookModel.findById(booksId);
            if (book) {
                const chapterIndex = book.chapters.findIndex(c => c._id.toString() === chaptersId);
                if (book.chapters[chapterIndex].likes.find(like => like.user.toString() === usersId)) {
                    return null;
                }
                book.chapters[chapterIndex].likes.push({ user: usersId });
                await book.save();
                return book;
            }
        } catch (e) {
            console.log(e);
        }
    }

    async RemoveLikeChapter(booksId, chaptersId, likesId) {
        try {
            const book = await this._bookModel.findById(booksId);
            if (book) {
                const chapterIndex = book.chapters.findIndex(c => c._id.toString() === chaptersId);
                const likesIndex = book.chapters[chapterIndex].likes.findIndex(like => like._id.toString() === likesId);
                book.chapters[chapterIndex].likes.splice(likesIndex, 1);
                await book.save();
                return book;
            }
        } catch (e) {
            console.log(e);
        }
    }
}