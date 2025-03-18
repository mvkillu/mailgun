require('dotenv').config();

const Mailgun = require('mailgun.js');
const formData = require('form-data');

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY
});

// Send mail without attachment
let data = {
  from: 'Excited User <mailgun@sandbox.mailgun.net>',
  to: 'mvkillu@gmail.com', 
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};

mg.messages.create(process.env.MAILGUN_DOMAIN, data)
  .then(msg => console.log(msg))
  .catch(err => console.log(err));

  
  // Send mail with attachment  
 data = {
    from: 'Excited User <mailgun@sandbox.mailgun.net>',
    to: 'mvkillu@gmail.com',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomeness!',
    attachment: {
      filename: 'test.txt',
      content: 'Hello World'
    }
  };

  