import axios from "axios";

export class BooksService {
    async Add(book) {
        try {
            const { data } = await axios.post("/api/books", book);
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    async GetAll(usersId) {
        try {
            const { data } = await axios.get(`/api/books/private/${usersId}`);
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    async GetAllPublic() {
        try {
            const { data } = await axios.get("/api/books/public");
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    async RemoveOne(booksId) {
        try {
            const response = await axios.delete("/api/books", { data: { id: booksId } });;
            return response;
        } catch (e) {
            console.log(e);
        }
    }

    async GetOne(booksId) {
        try {
            const { data } = await axios.get(`/api/books/${booksId}`);
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    async AddChapter(bookId, chapter) {
        try {
            const { data } = await axios.post(`/api/${bookId}/chapter`, chapter);
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    async RemoveChapter(booksId, chaptersId) {
        try {
            const { data } = await axios.delete(`/api/${booksId}/chapter/${chaptersId}`);
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    async UpdateChapter(booksId, chaptersId, body) {
        try {
            const { data } = await axios.put(`/api/${booksId}/chapter/${chaptersId}`, body);
            return data;
        } catch (e) {
            console.log(e);
        }
    }
}