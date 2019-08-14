console.log("inside of routes.js");

const Raccoons = require("../controllers/Raccs");

module.exports = function(app) {
    app.get("/", Raccoons.index);
    app.get("/create", Raccoons.form);
    app.post("/new", Raccoons.create);
    app.get('/view/:_id', Raccoons.view);
    app.get("/edit/:_id", Raccoons.viewEdit);
    app.post("/update/:_id", Raccoons.update);
    app.get("/delete/:_id", Raccoons.delete);
}