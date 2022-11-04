
require("dotenv").config()
const mongoose  = require('mongoose')


const  MongoDB_URL =  process.env.MongoDB_URL



function  connectionMongoDB(){
    mongoose.connect(MongoDB_URL)

    mongoose.connection.on("connected", () =>{
        console.log("connection to mongodb successful")
    })

    mongoose.connection.on("err", (err) =>{
        console.log(err)
        console.log("connection to failed")
    })

}


module.exports = {connectionMongoDB}