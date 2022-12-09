const mongoose = require('mongoose');
const uri = "mongodb+srv://projectuser:p5comgroup@groupproject411.c2lxw0b.mongodb.net/?retryWrites=true&w=majority";

module.exports = async () => {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    console.log('connecting');

    return mongoose;
}