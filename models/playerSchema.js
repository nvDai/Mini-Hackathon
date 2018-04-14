const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    playerName1: { type: String, require: true},//true: bắt buộc phải có nội dung
    playerName2: { type: String, require: true},
    playerName3: { type: String, require: true},
    playerName4: { type: String, require: true}
    
}, {
    timestamps: true //tạo ra created_at, updated_at cho field
});



module.exports = mongoose.model("Dai", playerSchema); //Tên model + tên schema