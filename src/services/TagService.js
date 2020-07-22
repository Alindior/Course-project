module.exports = class TagService {
    constructor(tagModel) {
        this._tagModel = tagModel;
    }

    async getAll() {
        try {
            const tags = await this._tagModel.find();
            if (tags) {
                return tags;
            }
        } catch (e) {
            console.log(e);
        }
    }

    async Add(candidateTag) {
        try {
            const tag = await new this._tagModel({ name: candidateTag });
            await tag.save();
            console.log(tag);
        } catch (e) {
            console.log(e);
        }
    }

    async Validate(candidateTag) {
        try {
            const tag = await this._tagModel.findOne({ name: candidateTag });
            if (!tag) {
                return true;
            }
            return false;
        } catch (e) {
            console.log(e);
        }
    }
}