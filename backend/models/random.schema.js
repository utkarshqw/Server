const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({

    name:{type:String},
    email:{type:String}
})


const Info = mongoose.model("info",UserSchema)

module.exports = Info
