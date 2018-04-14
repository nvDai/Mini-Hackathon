const express = require('express');
const path = require('path');
const handlebar = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const playerController = require("./controllers/playerController");

let app = express();

app.use(bodyParser.urlencoded({extended: false})); //body-parser dùng với form để lấy dữ liệu đưa vào body
app.engine('handlebars', handlebar({defaultLayout: 'main'}));//khai bao engine ten la handlebar(ở trong views/layouts/main.handlebars)
app.set('view engine', 'handlebars');//Cai dat(view engine là mặc định), handlebars là app

app.get('/', (req, res)=> {
    res.render('home');
})

app.post('/', (req, res)=> {
    try {
        // console.log([req.body.player1, req.body.player2, req.body.player3, req.body.player4])
        let player1 = req.body.player1;
        let player2 = req.body.player2;
        let player3 = req.body.player3;
        let player4 = req.body.player4;
        playerController.create(player1, player2, player3, player4, (err, collection)=> { // = callback bên questionController
            if(err) console.log(err);
            
            res.redirect('/games/'+ collection._id);
        });
       
    } catch (ex) {
        console.log(ex);
    }
    
});

// app.get('/game:id', (req, res)=> {
//     res.render('game',{
//         playerName:
//     })
// });


app.get('/games/:id', (req, res)=>{
    let id = req.params.id;
    playerController.getPlayer((docs => {
        console.log(docs[0].playerName1)
            res.render('game', {
                playerName1 : docs[0].playerName1,
                playerName2 : docs[0].playerName2,
                playerName3 : docs[0].playerName3,
                playerName4 : docs[0].playerName4,
            });//(ở trong views/main.handlebars)
            
    }))
    
});

app.get('/result', (req, res)=>{
    res.render('result');
    
});

app.use(express.static('public'));//Để đưa file trong thư mục public lên sever
mongoose.connect('mongodb://localhost/miniHackathon', (err)=>{
    if(err) console.log(err);
    console.log("Database is conected!!!");
} );
app.listen(8080, (err)=> {
    if (err) console.log(err);
    console.log("App is started at 8080");
})