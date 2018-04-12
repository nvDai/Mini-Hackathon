const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    playerName: { type: String, require: true},//true: bắt buộc phải có nội dung
    score: { type: Number, default: 0 }
    
}, {
    timestamps: true //tạo ra created_at, updated_at cho field
});



module.exports = mongoose.model("playerSchema", playerSchema); //Tên model + tên schema