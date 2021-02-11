const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017:/userData", {useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connection Succesfull.....")
}).catch((err) => {
    console.log(err);
});

const userDataSchema = new mongoose.Schema({
    name : {
        type : String,
        lowercase : true
    },
    age : {
        type : Number
    },
    email : {
        type : String,
        require : true
    },
    city : {
        type : String
    },
    course : {
        type : String
    }
});

const userdata = new mongoose.model("userdata", userDataSchema);

console.log(userdata);

const createUserOne = async () =>{
    try{
        const userOne = new userdata({
            name : "John",
            age : 30,
            email : "Johnaug45@gmail.com",
            city : "New York",
            course : "HTML"
        });

        const result = await userOne.save();
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

createUserOne();

// const createUserTwo = async () =>{
//     try{
//         const userTwo = new userdata({
//             name : "Jogn Mark",
//             age : 32,
//             email : "Johnmark62@gmail.com",
//             city : "New York",
//             course : "CSS"
//         });

//         const result = await userTwo.save();
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// createUserTwo();

// const createUserThird = async () =>{
//     try{
//         const userThird = new userdata({
//             name : "John Markes",
//             age : 30,
//             email : "Johnmarke58@gmail.com",
//             city: "New York, Los Angles",
//             course : "JavaScript"
//         });

//         const result = await userThird.save();
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// createUserThird();

// const createUserFourth = async () =>{
//     try{
//         const userFourth = new userdata({
//             name : "John Twirenq",
//             age : 32,
//             email : "Johntwirenq42@gmail.com",
//             city : "New York, California",
//             course : "React JS"
//         });

//         const result = await userFourth.save();
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// createUserFourth();

// const createUserFifth = async () =>{
//     try{
//         const userFifth = new userdata({
//             name : "Jogn Ericqnmiodp",
//             age : 31,
//             email : "Johnericqnimiodp29@gmail.com",
//             city : "New York, America",
//             course : "Node JS"
//         });

//         const result = await userFifth.save();
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// createUserFifth();

// const createUserSixth = async () =>{
//     try{
//         const userSixth = new userdata({
//             name : "John riwicktodwnmiuhgt",
//             age : 30,
//             email : "Johnriwicktodwnmiuhgt84@gmail.com",
//             city : "New York, Colombia",
//             course : "MongoDB"
//         })

//         const result = await userSixth.save();
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// createUserSixth();

// const getUserData = async () =>{
//     const result = await userdata.find({$and:[{$or: [{course: "JavaScript"}, {name : "John"}]}, {city: "New York"}]}).select({name : 1});
//     console.log(result);
// }

// getUserData();

// const removeUserData = async () =>{
//     const result = await userdata.deleteOne({name : "John"});
//     console.log(result);
// }

// removeUserData();

const updateUserData = async () =>{
    const result = await userdata.update({name : "Jogn Mark"}, {$set : {name : "John"}});
    console.log(result);
}

updateUserData();