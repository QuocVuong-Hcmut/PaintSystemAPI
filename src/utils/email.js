import nodemailer from "nodemailer";
//create transporter
const SendEmail = async () => {
  let transporter = nodemailer.createTransport({
    // host: process.env.EMAIL_HOST,
    // port: process.env.EMAIL_PORT,
    // auth: {
    //     user: process.env.EMAIL_USER, // generated ethereal user
    //     pass: process.env.EMAIL_PASS, // generated ethereal password
    //   },
    service: "Gmail",
    auth: {
      user: "vuong.nguyenking@hcmut.edu.vn", // generated ethereal user
      pass: "0389929596", // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <vuong.nguyenking@hcmut.edu.vn>', // sender address
    to: "hotrohoctapsv@gmail.com, thanh.dq.sistrain@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
};
export default SendEmail;
