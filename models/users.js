const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId





const UserModel = new Schema({
    id:ObjectId,
    create_at:Date,
    email: {
        type: String,
        required: true,
        unique: true
    },
    first_name :{
         type:String,
         require:true,
         

    },
    last_name: {
        type:String,
        require:true,
    },
    password: {
        type: String,
        required: true
    },
    user_type:  { 
        type: String, 
        required: true, 
        enum: ['user', 'admin'], 
        default: 'user' 
   }
});

UserModel.pre(
    'save', 
    async function (next) {
        const user = this;
        const hash = await bcrypt.hash(this.password, 10)
        
        this.password = hash
        next()
    }
)
UserModel.methods.isValidPassword = async function(password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
  
    return compare;
  }


module.exports =  mongoose.model("users" , UserModel)


