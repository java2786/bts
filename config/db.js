var mongoose = require('mongoose');
var autoIncrement = require('./auto-increment');

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/bill-tracker', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.then(connection=>{
    autoIncrement.initialize(connection);
});
 