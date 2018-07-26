
var tableData = require("../data/friends");

module.exports = function (app) {

    app.get("/app/friends", function (req, res) {
        return res.json(friends);
    })

    app.post("public/survey", function (req, res) {
        var friendAdded = req.body;
        console.log(friendAdded);
        friends.push(friendAdded);
        return res.json({ message: "You have been added to the friend list." });
    });
}

