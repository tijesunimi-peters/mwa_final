var nodemailer = require('nodemailer');



class EmailService {
  static sendMail(req, _, next){

    const{email}=req.body;
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: process.env.Email_UserName,
          pass: process.env.Email_Password
        }
      });
      
      
      var mailOptions = {
        from: process.env.Email_UserName,
        to: email,
        subject: process.env.Welcome,
        html: process.env.Message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      
      req.success = { status:200,
          data: "Check your email" };
      next();
  }
}

module.exports = EmailService;
