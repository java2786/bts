let crudRepo = require("./../repository/crud");
let autoIncrement = require("./../config/auto-increment");

let mongoose = require("mongoose");

autoIncrement.initialize(mongoose.connection);

describe('Repository', function () {

    beforeEach(function () {
        // db connection
        require('./../config/db')

        // timeout, default is 5000
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
    })

    describe('business', function () {

        it("should post bill", function (done) {
            let now = Date.now();
            let bill = {
                title: "title-" + now,
                category: "category-" + now,
                entryDate: new Date(),
                dueDate: new Date(),
                amount: +Date.now().toString().substring(0, 5)
            }

            crudRepo.post("bill", bill, function (err, result) {
                expect(err).toBeNull();
                expect(result).toBeDefined();
                done();
            });

        });

        it("should get all bills", function (done) {
            crudRepo.getAll("bill", function (err, result) {
                expect(err).toBeNull();
                expect(result).toBeDefined();
                done();
            });

        });

    });


    describe('exception', function () {

        it("should not post bill without title", function (done) {
            let now = Date.now();
            let bill = {
                // title: "title-" + now,
                category: "category-" + now,
                entryDate: new Date(),
                dueDate: new Date(),
                amount: +Date.now().toString().substring(0, 5)
            }

            crudRepo.post("bill", bill, function (err, result) {
                expect(err).not.toBeNull();
                done();
            });

        });
        it("should not post bill without entry date", function (done) {
            let now = Date.now();
            let bill = {
                title: "title-" + now,
                category: "category-" + now,
                dueDate: new Date(),
                amount: +Date.now().toString().substring(0, 5)
            }

            crudRepo.post("bill", bill, function (err, result) {
                expect(err).not.toBeNull();
                done();
            });

        });

    });
});



