const mongoose = require("mongoose");
const validator = require('validator');

mongoose.connect("mongodb://localhost:27017:/mongoDatabase", 
{useNewUrlParser: true, useUnifiedTopology: true}).then(() =>{
    console.log("Connection Succesfull");
}).catch( (err) =>{
    console.log(err);
});

const mongoDataSchema = new mongoose.Schema({
    name : {
        type : String,
        lowercase : true
    },
    age : {
        type : Number,
        validate(value){
            if(value < 0){
                throw new Error("age can not be negative");
            }
        }
    },
    email :{
        type : String,
        require : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is not valid");
            }
        }
    },
    city : String,
    date : {
        type : Date,
        default : Date.now
    }
});

const Mongodata = new mongoose.model("Mongodata", mongoDataSchema);

console.log(Mongodata);

const MongoData = new Mongodata({
    name : "MongoDb",
    age : 41,
    email : "yash.04may@gmail.com",
    city : "New"
});

const ExpressData = new Mongodata({
    name : "Express JavaScript",
    age : 4,
    city : "American"
});

console.log(MongoData);

// console.log(ExpressData);
        
// MongoData.save();

// ExpressData.save();

// const result = Mongodata.find({name : "Mongodb"});

// console.log(result);

// const getResult = async () =>{
//     try{
//         const result = await Mongodata.find({name : "Express JavaScript"});
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// getResult();


// const results = Mongodata.find({name: "MongoDb"}).then(() =>{
//     console.log("result");
// }).catch((err) =>{
//     console.log(err);
// })

// console.log(results);

// const getOperatorResult = async () =>{
//     try{
//         const result = await Mongodata.find({$or: [{name : "MongoDb"}, {age : 4}]});
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// getOperatorResult();

// const getCountResult = async () =>{
//     try{
//         const result = await Mongodata.find({name : "MongoDb"}).countDocuments(() =>{
//             console.log("CountDocuments");
//         });
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// getCountResult();

// const getUpdateResult = async () =>{
//     try{
//         const result = await Mongodata.updateOne({name : "MongoDb"}, {$set : {name : "MongooseDb"}});
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// getUpdateResult();

// const getDeleteResult = async () =>{
//     try{
//         const result = await Mongodata.deleteOne({name : "MongooseDb"});
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// getDeleteResult();


