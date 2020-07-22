import axios from "axios";

export class TagService {
    async getAll() {
        try {
            const { data } = await axios.get("/api/tags");
            return data;
        } catch (e) {
            console.log(e);
        }
    }
}