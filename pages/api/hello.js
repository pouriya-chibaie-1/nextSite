const nodemailer=require('nodemailer')
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
      user: 'your.gmail.account@gmail.com',
      pass: 'your.password'
  }
});

let mailOptions = {
  from: 'your.gmail.account@gmail.com',
  to: 'receivers.email@domain.example',
  subject: 'Test',
  text: 'Hello World!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
      return console.log(error.message);
  }
  console.log('success');
});