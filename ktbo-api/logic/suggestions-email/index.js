const { models: { User } } = require('ktbo-data')
const { validate } = require('ktbo-utils')
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')

module.exports = function (subject, userId) {

    validate.string(subject, 'subject')
    validate.string(userId, 'userId')

    return (async () => {

        const user = await User.findOne({_id: userId})
        if (!user) throw new Error(`TODO`)

        await sendStaffEmail(subject, user)
    })()
}

async function sendStaffEmail(subject, user) {
    const transporter = nodemailer.createTransport({
        host: 'mail.kttape.es',
        port: 465,
        secure: true,
        auth: {
            user: 'orders@kttape.es',
            pass: 'Pedidos123'
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    
    const info = await transporter.sendMail({
        from: '"Kt Tape Customers Orders" <orders@kttape.es>',
        to: 'joan@ktsport.es, adria.arquimbau@gmail.com',
        subject: `New suggestion`,
        text: `El usuari ${user.name}, acaba de generar un nou usuari amb les seguents dades:` +
        `\nSubject: ${subject}`
    })

    console.log('Message sent: %s', info.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
}