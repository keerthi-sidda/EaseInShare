require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
    //Database Connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true});
    const connection = mongoose.connection;
    connection.on('error', console.error.bind(console, 'connection error:'));
    connection.once('open', function() {
      // we're connected!
      console.log("Database Connected!!!");
    });
}


module.exports = connectDB;