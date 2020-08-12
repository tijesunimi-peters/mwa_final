
var nodemailer = require("nodemailer");
var Mailgen = require('mailgen');
var jwt = require('jsonwebtoken');

function runService(user) {
  const{username, email} = user;

  var transporter = nodemailer.createTransport({
    host:process.env.EMAIL_HOST,
    port:process.env.EMAIL_PORT,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.EMAIL_USER_NAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
 

  // Configure mailgen by setting a theme and your product info
  var mailGenerator = new Mailgen({
      theme: 'cerberus',
      product: {
          // Appears in header & footer of e-mails
          name: 'FarmMart',
          link: 'wesite name',
          logo:'https://picsum.photos/seed/picsum/500/500'
          // Optional product logo
          // logo: 'https://mailgen.js/img/logo.png'
      }
  });

  const token = jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 10),
    data: user
  }, process.env.JWT_SECRET);
  
  // Prepare email contents
  var emailgen = {
      body: {
        greeting: 'Dear ' + username,
        signature: 'Sincerely',
          name:username,
          intro: 'Welcome to farmmart! We’re very excited to have you on board.',
          action: {
              instructions: 'To get started with Mailgen, please click here:',
              button: {
                  color: 'green',
                  text: 'login',
                  link: process.env.BASE_FOUNTEND_HOST+'/email-verification/'+token,
              }
          },
          outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
      }
  };
  
  // Generate an HTML email using mailgen
  var emailBody = mailGenerator.generate(emailgen);

  var mailOptions = {
    from:process.env.EMAIL_USER_NAME,
    to: email,
    subject: process.env.WELCOME,
    html: emailBody,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

}

module.exports=runService;

