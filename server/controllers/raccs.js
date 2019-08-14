console.log("inside of raccs.js");

const mongoose = require("mongoose");
const RaccoonSchema = mongoose.model("raccoon");

class Raccoons {
    index(req, res) {
        RaccoonSchema.find()
            .then(raccoon => res.render("index", { raccoons : raccoon }))
            .catch(err => { console.log(err); });
    };

    form(req, res) {
        res.render('form');
    };

    create(req, res) {
        const c = new RaccoonSchema();
        c.name = req.body.name;
        c.color = req.body.color;
        c.type = req.body.type;
        c.age = req.body.age;
        c.save()
            .then(newRaccoon => console.log('raccoon created:', newRaccoon ))
            .catch(err => { console.log(err); })
        res.redirect('/')
    };

    view(req, res) {
        RaccoonSchema.find({ _id: req.params._id })
            .then(data => res.render("view", { raccoons: data }))
            .catch(err => res.json(err));
    };

    viewEdit(req, res) {
        RaccoonSchema.find({ _id: req.params._id })
            .then(data => { res.render("edit", {raccoons : data }); })
            .catch(err => res.json(err));
    };

    remove(req, res) {
            RaccoonSchema.findByIdAndRemove({ _id: req.params._id })
                .then(() => { res.redirect("/"); })
                .catch(err => res.json(err));
    };
    
    update(req, res){
        let r = RaccoonSchema.find({_id: req.params._id})
        r.update({_id: req.params._id}, req.body)
            .then(data => console.log('raccoon updated: ', data))
            .catch(err => console.log(err));
        res.redirect('/');
    };
    
    delete(req, res){
        let user = RaccoonSchema.find({_id: req.params._id})
        user.remove({_id: req.params._id})
            .then(console.log('raccoon deleted'))
            .catch(err => console.log(err));
        res.redirect('/');
    };
};
module.exports = new Raccoons();