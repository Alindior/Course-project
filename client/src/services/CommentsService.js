import axios from "axios";

export class CommentService {
    async addComment(booksId, comment) {
        try {
            const { data } = await axios.post(`/api/${booksId}/comments`, comment);
            return data;
        } catch (e) {
            console.log(e);
        }
    }
}