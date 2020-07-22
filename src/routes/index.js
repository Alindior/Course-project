const auth = require("./auth.routes");
const book = require("./books.routes");
const upload = require("./upload.routes");
const chapter = require("./books-chapters.routes");
const comments = require("./books-comments.routes");
const rating = require("./books-rating.routes");
const likes = require("./chapters-like.routes");
const users = require('./users.routes');
const tags = require('./tags.routes');

module.exports = { auth, book, upload, chapter, comments, rating, likes, users, tags };
