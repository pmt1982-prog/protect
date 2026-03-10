const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;

    // IMPORTANT: Use environment variables in a real application
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Gmail's SMTP server. [1]
        port: 587, // Port for TLS. [1]
        secure: false, // false for TLS. [3]
        auth: {
            user: 'your-email@gmail.com', // Your sending email address
            pass: 'your-app-password'     // Your Gmail App Password. [1]
        }
    });

    const mailOptions = {
        from: email,
        to: 'abdullahthajudheen123@gmail.com', // Your receiving Gmail address
        subject: `New message from ${name}: ${subject}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Something went wrong.');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Your account is protected!');
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;

    // IMPORTANT: Use environment variables in a real application
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Gmail's SMTP server. [1]
        port: 587, // Port for TLS. [1]
        secure: false, // false for TLS. [3]
        auth: {
            user: 'your-email@gmail.com', // Your sending email address
            pass: 'your-app-password'     // Your Gmail App Password. [1]
        }
    });

    const mailOptions = {
        from: email,
        to: 'abdullahthajudheen123@gmail.com', // Your receiving Gmail address
        subject: `New message from ${name}: ${subject}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Something went wrong.');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Your account is protected!');
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
