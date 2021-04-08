// import express
const express = require('express');
const app = express();

// access the path
const path = require('path');

// import ejs and set it as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// import own js & css
app.use(express.static(__dirname + '/public'));

// import bootstrap
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/popper', express.static(__dirname + '/node_modules/popper.js/dist/'));


app.get('/', (req, res) => {
    // const title = "The Catchy Catch";
    // const headerBackground = "images/home-bg.png";
    res.render('home')
})


app.listen(3000, () => {
    console.log('Listening on port 3000.')
})