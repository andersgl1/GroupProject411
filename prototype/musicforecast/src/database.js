const { dblClick } = require('@testing-library/user-event/dist/click');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const uri = "mongodb+srv://projectuser:p5comgroup@groupproject411.c2lxw0b.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
    try {
        await mongoose.connect(uri);
    } catch (error) {
        console.error(error);
    }
}

connect();

app.listen(8000, () => {
    console.log("Server started on port 8000");
})
