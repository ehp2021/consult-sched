const mongoose = require('mongoose');


//mongodb+srv://emilyhpark:Pa$$w0rd@cluster0.jd1zv.mongodb.net/events_db
mongoose.connect('mongodb+srv://emilyhpark:Pa$$w0rd@cluster0.jd1zv.mongodb.net/events_db', {useNewUrlParser: true})

mongoose.connection
    .once('open', ()=> console.log('Connected'))
    .on('error', (error) => {
        console.log(error + 'on startup');
    });

module.exports = mongoose;

