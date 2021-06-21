import * as nodemailer from 'nodemailer';
// import { google } from 'googleapis';
// const OAuth2 = google.auth.OAuth2;
const createTransporter = async () => {
  // const oauth2Client = new OAuth2(
  //   process.env.CLIENT_ID,
  //   process.env.CLIENT_SECRET,
  //   'https://developers.google.com/oauthplayground'
  // );

  // oauth2Client.setCredentials({
  //   refresh_token: process.env.REFRESH_TOKEN,
  // });

  // const accessToken = await new Promise((resolve, reject) => {
  //   oauth2Client.getAccessToken((err, token) => {
  //     if (err) {
  //       reject();
  //     }
  //     resolve(token);
  //   });
  // });

  // const transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     type: 'OAuth2',
  //     user: process.env.EMAIL,
  //     accessToken,
  //     clientId: process.env.CLIENT_ID,
  //     clientSecret: process.env.CLIENT_SECRET,
  //     refreshToken: process.env.REFRESH_TOKEN,
  //   },
  // });
  // const transporter = nodemailer.createTransport({
  //   host: 'smtp.gmail.com',
  //   port: 465,
  //   secure: true,
  //   auth: {
  //     user: process.env.EMAIL,
  //     pass: process.env.PASS,
  //   },
  // });
  const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: process.env.EMAIL || 'kushakjafry@outlook.com',
      pass: process.env.PASS,
    },
    debug: false,
    logger: true,
  });

  return transporter;
};

export const sendEmail = async (emailOptions) => {
  let emailTransporter = await createTransporter();
  await emailTransporter.sendMail(emailOptions);
};
