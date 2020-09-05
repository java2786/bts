let mocks = require('node-mocks-http');
let eventEmitter= require('events');

let autoIncrement = require("./../config/auto-increment");
let mongoose = require("mongoose");
autoIncrement.initialize(mongoose.connection);

let billService = require("./../services/bill.service");


describe('Service', function () {
    beforeEach(function(){
        // db connection
        require('./../config/db')
    })
    
    describe('boundary', function () {
        it("should get all bills", async function () {

            req = mocks.createRequest(
                {
                    method: 'GET'
                }
            );

            res = mocks.createResponse({
                eventEmitter: eventEmitter.EventEmitter
            });

            res.on('end', function () {
                expect(res.statusCode).toBe(200);
            })

            billService.post(req, res);
        })

    });
    describe('business', function () {
        it("should post bill", async function () {
            let now = Date.now();
            let bill = {
                title: "title-"+now,
                category: "category-"+now,
                entryDate: new Date(),
                amount: +Date.now().toString().substring(0,5)
            }

            req = mocks.createRequest(
                {
                    method: 'POST',
                    body: bill
                }
            );

            res = mocks.createResponse({
                eventEmitter: eventEmitter.EventEmitter
            });

            res.on('end', function () {

                expect(res.statusCode).toBe(200);

            })

            billService.post(req, res);
        })

    });
});



