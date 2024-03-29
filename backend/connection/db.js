const mongoose = require("mongoose");
const colors = require("colors");


const connectDB = async() =>{
    try {
        const DB = 'mongodb+srv://satishresearch369:ebAJDIMJDJw2TPbZ@cluster0.txeyphg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
        const con = await mongoose.connect(DB)
        console.log(`Connection success with: ${con.connection.host}`.bgGreen.white)
    } catch (error) {
        console.log(`THROW ERROR: ${error}`.bgRed.white)
        
    }

}

module.exports = connectDB