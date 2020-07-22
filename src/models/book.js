const { Schema, model, Types } = require("mongoose");

const bookSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true
    },
    tags: [
        {
            type: String
        }
    ],
    description: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    author: {
        type: Types.ObjectId,
        ref: "User",
        required: true
    },
    avarageRating: {
        type: Number,
        default: 0
    },
    rating: [
        {
            value: {
                type: Number,
                required: true
            },
            author: {
                type: Types.ObjectId,
                ref: "User",
                required: true
            }
        }
    ],
    chapters: [
        {
            title: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            },
            order: {
                type: Number
            },
            likes: [
                {
                    user: {
                        type: Types.ObjectId,
                        ref: "User",
                        required: true
                    }
                }
            ],
        }
    ],
    comments: [
        {
            body: {
                type: String,
                required: true
            },
            author: {
                type: Types.ObjectId,
                ref: "User",
                required: true
            },
            createdDate: {
                type: Date,
                default: Date.now
            }
        }
    ]
});



const populationFields = "author comments.author";

bookSchema.post("save", async (doc) => {
    await doc.populate(populationFields).execPopulate();
});

function populateFields() {
    this.populate(populationFields);
}

bookSchema.pre("find", populateFields);
bookSchema.pre("findOne", populateFields);
bookSchema.pre("findOneAndUpdate", populateFields);
bookSchema.pre("findById", populateFields);

module.exports = model("Book", bookSchema);
