const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const path = require('path');
const port = process.env.PORT || 8080

app.set('view engine', 'handlebars');
app.engine('handlebars', expbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('views', './views');
app.use(express.static(__dirname+'/public'));


// Routing
app.get('/', (req, res) => {
    res.render('home', {title: 'Home Page', dynamicText: dynamicText(), repository: 'https://github.com/zincfusion/assignment'});
});

app.listen(port, () => {
    console.log('Server is starting at port ', port);
});

function dynamicText() {
    let textArr = [
        "Logic will get you from A to B. Imagination will take you everywhere.",
        "There are 10 kinds of people. Those who know binary and those who don't.",
        "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.",
        "It's not that I'm so smart, it's just that I stay with problems longer.",
        "It is pitch dark. You are likely to be eaten by a grue."
    ];
    
    return textArr[randomWithProbability()];
  }

  function randomWithProbability() {
    var notRandomNumbers = [0, 1, 2 , 3, 4]; // Equal weightage
    var idx = Math.floor(Math.random() * notRandomNumbers.length);
    return notRandomNumbers[idx];
  }



