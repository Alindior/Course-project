const path = require("path");
const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const connectToMongoDB = require("./lib/mongoose-config");
const config = require("./keys");
const middlewares = require("./middlewares");
const fileUpload = require("express-fileupload");
const routes = require("./routes");
const Book = require('./models/book');


io.on("connection", (client) => {
    client.on("getBook", async (booksId) => {
        if (booksId !== undefined) {
            const book = await Book.findById(booksId);
            io.sockets.emit("send book", book);
        }
    })
})

middlewares.forEach((m) => app.use(m));
app.use(fileUpload());

app.use("/api/auth", routes.auth);
app.use("/api/books", routes.book);
app.use("/api/upload", routes.upload);
app.use("/api", routes.chapter);
app.use("/api", routes.comments);
app.use("/api", routes.rating);
app.use("/api", routes.likes);
app.use("/api/users", routes.users);
app.use("/api/tags", routes.tags);

if (process.env.NODE_ENV === "production") {
    app.use("/", express.static(path.join(__dirname, "..", "client", "build")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "..", "client", "build", "index.html"));
    });
}

async function start() {
    try {
        await connectToMongoDB();
        server.listen(config.port, () => {
            console.log(`Server started on port ${config.port}`)
        })
    } catch (e) {
        console.log(`Server Error`, e.message);
        process.exit();
    }
}


start();
