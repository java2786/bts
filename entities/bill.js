var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('./../config/auto-increment');

var billSchema = new Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    entryDate: {
        type: Date,
        // min: '1987-09-28',
        // max: '1994-05-23',
        required: true
    },
    dueDate: { type: Date, required: true },
    amount: { type: Number, required: true }

});


// Getter
billSchema.path('amount').get(function (num) {
    return (num / 100).toFixed(2);
});

// Setter
billSchema.path('amount').set(function (num) {
    return num * 100;
});


billSchema.plugin(autoIncrement.plugin, 'Bill');
var Bill = mongoose.model('Bill', billSchema);

module.exports = Bill;

