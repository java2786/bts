const repository = require("./../repository/crud");

exports.getAll = function (req, res) {
    repository.getAll("bill", (err, data) => {
        if (!!err)
            res.json({ success: false, message: "error occurred", err: err });
        else
            res.json({ success: true, data })
    });
}

exports.getAllCb = function (req, res, cb) {
    repository.getAll("bill", (err, data) => {
        if (!!err)
            // res.json({ success: false, message: "error occurred", err: err });
            cb(err);
        else
            // res.json({ success: true, data })
            cb(null, data);
    });
}





exports.post = function (req, res) {
    repository.post("bill", req.body, (err, data) => {
        if (!!err) {
            res.json({ success: false, message: "error occurred", err: err });
        }
        else {
            res.json({ success: true, data })
        }
    })
}



exports.postCb = function (req, res, cb) {
    repository.post("bill", req.body, (err, data) => {
        if (!!err) {
            // res.json({ success: false, message: "error occurred", err: err });
            cb(err);
        }
        else {
            // res.json({ success: true, data })
            cb(null, data)
        }
    })
}

