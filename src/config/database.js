const mongoose = require('mongoose');
const connectDB= async () => {
    try {
        const connect = await mongoose.connect("mongodb://localhost/productdb")
        console.log(`MongoDB Connected: ${connect.connection.host}`);
        
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

module.exports = connectDB;