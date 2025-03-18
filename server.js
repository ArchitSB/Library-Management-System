const express = require("express");
const app = express();

app.use(express.json());

app.use("/books", require("./src/routes/book.routes"));
app.use("/authors", require("./src/routes/author.routes"));
app.use("/genres", require("./src/routes/genre.routes"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});