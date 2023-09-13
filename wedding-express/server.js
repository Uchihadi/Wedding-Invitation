const express = require ('express')
require('dotenv').config()
const port = process.env.PORT || 5000
const cors=require("cors")
const userRouter=require("./routes/postRoute")
const nodeMailer = require ('nodemailer');
const path = require("path");

const html = `
    <h1> Hello World </h1>
    <p> Nodemailer useful? <p>
`;

const transporter = nodeMailer.createTransport({
    // service: 'gmail',
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Only true for Port 465
        auth: {
            user: process.env.USER,
            pass: process.env.PASSWORD
        },
    });

    const mailOptions = {
        from: {
            name: 'Hadi Rahman',
            address: process.env.USER
        },
        to: ["saiargyle25@gmail.com"],
        subject: "Wedding Invitation",
        text: "Hello World",
        html: html,
        // attachments: [
        //     {
        //         filename: 'test.pdf',
        //         path: path.join(__dirname, 'test.pdf'),
        //         contentType: 'application/pdf'
        //     },
        //     {
        //         filename: 'sample.jpg',
        //         path: path.join(__dirname, 'sample.jpg'),
        //         contentType: 'image/jpg'
        //     },
        // ]
    }

    const sendMail = async (mailOptions) => {
        try {
            await transporter.sendMail(mailOptions)
            console.log('Mail is sent successfully')
        } catch (error) {
            console.error(error);
        }
    }

    sendMail(transporter, mailOptions)

    // console.log("Message sent: " + info.messageId);


// main()
// .catch(e => console.log(e));

const app = express()
app.use(cors())
app.use(express.json())

app.use("/",userRouter)

app.listen(port, () => console.log(`Server started on port ${port}`))