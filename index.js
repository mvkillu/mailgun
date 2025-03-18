require('dotenv').config();

const Mailgun = require('mailgun.js');
const formData = require('form-data');

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY
});

const data = {
  from: 'Excited User <mailgun@sandbox.mailgun.net>',
  to: 'mvkillu@gmail.com', // This email must be authorized in your Mailgun account
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};

mg.messages.create(process.env.MAILGUN_DOMAIN, data)
  .then(msg => console.log(msg))
  .catch(err => console.log(err));

  