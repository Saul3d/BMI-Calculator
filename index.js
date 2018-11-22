const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + '/index.html');
    
})


app.get("/bmiCalculator", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){
  
    //   res.send('Thank you for posting that!');
    
      let h = req.body.height;
      let w = req.body.weight;
      let bmi = (Number(w)/Math.pow(Number(h),2))*703;
      
      res.send('The result of the calculation is' + ' ' + bmi.toFixed(2));
    });
    
app.listen(3000, function(){
    console.log('Server is running on port 3000');
});