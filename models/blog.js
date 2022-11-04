const mongoose = require("mongoose")

const Schema = mongoose.Schema 




const BlogModel  = new Schema({
     title: {
        type: String,
        require:true,
        unique:true
       },
       description :String ,
        author:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'User' ,
            require:true,
        },
      
          state:{
              type:String,
              enum:['draft','publish'],
              default:'draft',
        },
           read_count:{
             type:Number,
             default:0
      },

    reading_Time:Number,
        tags:[String],
        body:String
}, {timestamps:true});


module.exports   = mongoose.model('Blog' , BlogModel);