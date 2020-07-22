import axios from "axios";

export class RatingService {
    async SetRating(booksId, rating) {
        try {
            const { data } = await axios.post(`/api/${booksId}/rating`, { value: rating });
            return data;
        } catch (e) {
            console.log(e);
        }
    }
}