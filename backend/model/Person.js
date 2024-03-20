

const mongoose = require('mongoose')

// mongoose.connect("")

mongoose.connect('', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },  
    gender: {
         type: String,
        enum: ['Male', 'Female', 'Other'], 
        required: true 
    },
    mobileNumber :{
        type: Number,
        required: true
    }
})

const Person = mongoose.model('Person',personSchema);

module.exports = Person;