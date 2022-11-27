const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

// Create application/x-www-form-urlencoded parser
app.use(bodyParser.json())
app.use(express.static('public'));
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT"],
    credentials: true,
  }));


app.post('/sendMail', async function (req, res) {
    console.log(req.body.data)
if(!req.body.data.email) {
   return res.send('')
}
const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
      user: 'makeupgayane01@gmail.com',
      pass: 'aonvuleckskkfpkj'
    }
  });
  
  const mailOptions = {
    from: 'makeupgayane01@gmail.com',
    to: req.body.data.email,
    subject: 'info from gayane',
    text: `
Վճարման կարգը
Հայաստանից կարող եք կատարել վճարում ցանկացած տերմինալով,բանով կամ օնլայն հավելվածներով
Ardshinbank քարտի տվյալներ 4454300001065405 
Gayane Hunanyan
Վճարում կատարելուց հետո կտրոնը պարտադիր նկարեք և ուղարկեք (+1(818)2137315  - >viber),որ հայտը ընդունենք Վճարման արժեքը 20.000 դրամ

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Способ оплаты из России 
Сбербанк перевод на карту 
Унанян Анаит Торосовна 
Номер телефона 89057456828
После совершения платежа обязательно сфоткайте квитанцию и отправьте на (+1(818)2137315  - >viber), чтобы мы могли принять вашу заявку 
Стоимость 3000 рублей

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Payment method USA 
Zelle 
Gayane Hunanyan 
+1(818)2137315
Attention!!!
After making the payment,take a picture of the check and send it (+1(818)2137315  - >viber),so that we can accept your application 
Price 50$


Your Phone - ${req.body.data?.phone}
Your Email -${req.body.data?.email}
    `
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
   // Prepare output in JSON format
   res.send(';;;')
})

const server = app.listen(8081, function () {
   const host = server.address().address
   const port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})