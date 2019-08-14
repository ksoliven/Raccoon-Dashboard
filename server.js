console.log("inside of server.js");

const express = require("express"),
    bp = require("body-parser"),
    app = express(),
    port = 8000,
    DB_NAME = "coons";

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bp.urlencoded({ extended: true }));


require("./server/utils/mongoose")(DB_NAME);
require("./server/utils/routes")(app);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});