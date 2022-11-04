const jwt = require('jsonwebtoken');
const UserModel = require('../models/users.js')

require('dotenv').config();


exports.signup = async (req,res) =>{
    const user = await UserModel.findOne({username:req.user.username})
     
    user.first_name = req.body.firstName
    user.last_name = req.body.lastName
    user.email = req.body.email


    await user.save()
    delete user.password

    res.status(201).json({
        message:'You have successfully Signup up!',
        user: user
    })
}
exports.login = (req, res, { err, user, info}) => {

    if (!user) {
        return res.json({ message: 'Username or Password is Incorrect!'})
    }


    req.login(user, { session: false },
        async (error) => {
            if (error) return res.status(400).json(error)

            const body = { _id: user._id, username: user.username };
            const token = jwt.sign({ user: body }, process.env.JWT_SECRET || 'something_secret');

            return res.status(200).json({ token });
        }
    );
}
