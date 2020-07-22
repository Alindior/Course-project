import axios from "axios";

export class ChaptersService {
    async SetLikeChapter(booksId, chaptersId) {
        try {
            const { data } = await axios.post(`/api/${booksId}/likes/${chaptersId}`);
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    async RemoveLikeChapter(booksId, chaptersId, likesId) {
        try {
            const { data } = await axios.delete(`/api/${booksId}/likes/${chaptersId}`, { data: { id: likesId } });
            return data;
        } catch (e) {
            console.log(e);
        }
    }
}