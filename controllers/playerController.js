const playerSchema = require("../models/playerSchema");

let create = (name1, name2, name3, name4, callback)=>{
    let newPlayer = {
        playerName1: name1, //giống bên questionSchema.js
        playerName2: name2,
        playerName3: name3,
        playerName4: name4
    }
    try {
        
        playerSchema.create(newPlayer, (err, doc) => {
            //chỉ trả về error nên không cần truyền collection vào
            callback(err, doc);
        });
    } catch (ex) {
        console.log(ex);
    }
    
};

let getPlayer = (callback)=> {
    playerSchema.find({}, (err, docs) => {
        if (err) console.log(err);
        callback(docs);
    });
    return;
};

// let getQuestionByID = (id, callback) => {
//     try {
//         QuestionSchema.findById(id, (err, doc) => {
//             if (err) console.log(err);
//             callback(doc);
//         })
//     } catch (ex) {
//         console.log(ex);
//     }
    
// };

// let findRandom = (callback) => {
//     try {
//         QuestionSchema.count().exec((err, length)=>{
//             if(err) callback(err)
//             else {
//                 QuestionSchema.findOne()
//                     .skip(Math.floor(Math.random()*length))
//                     .exec((errRandom, doc)=>{
//                         callback(errRandom, doc);
//                     });
//             }
//         });
//     } catch (ex) {
//         console.log("Exception: "+ex)
//     }
// }


// /**
//  * Increase yes/no attribute
//  * @param {string} vote "yes" or "no"
//  * @param {string} id the id of question
//  * @param {(err, question)=> void} callback call this function after updating 
//  */
// const updateYesNo = async (vote, id, onUpdateComplete) => {
//     try {
//         const question = await QuestionSchema.findById(id);
//         if((question) == 'yes') {
//             question.yes += 1;
//         } else {
//             question.no += 1;
//         }
//         await question.save();
//             onUpdateComplete(err, question);//Nếu ko dùng callback thì return question
//     } catch (err) {
//             throw err;
//         }
// }
 

module.exports = {
    create,
    getPlayer
    // getQuestionByID,
    // updateYesNo,
    // findRandom
}