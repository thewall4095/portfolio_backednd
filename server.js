const express = require('express')
const app = express()
const port = 3000
var nodemailer = require('nodemailer');
var cors = require('cors');
var bodyParser = require("body-parser")

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'thewall4095@gmail.com',
      pass: 'urmilaben1111'
    }
});

app.post('/send-mail', (req, res) => {
    var mailOptions = {
        from: 'thewall4095@gmail.com',
        to: 'thewall4095@gmail.com',
        subject: 'Query from Portfolio | '+req.body["name"],
        text: 'Email: '+req.body["email"] + "\n Message: "+req.body["message"]
    };
        
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            res.send({
                status : false
            })
            console.log(error);
        } else {
            res.send({
                status : true
            })
            console.log('Email sent: ' + info.response);
        }
    });
    
})

  


app.listen(port, () => console.log(`Example app listening on port ${port}!`))