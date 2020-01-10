const { models: { User } } = require('ktbo-data')
const { validate } = require('ktbo-utils')
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')

/**
 *  Register a new User / Company.
 *  Required a is of an admin for formalize the register.
 *
 * @param {String} id - Identifier of the admin user performing the register.
 * @param {String} company - Name of the Company
 * @param {String} country - Country of the Company
 * @param {String} email
 * @param {String} password
 * @param {String} role - Role for the functionality of the new User - enum = ('admin', 'regular').
 * 
 * @returns {Promise} - Returns a Promise with the created user.
 */

module.exports = function (id, name, surname, company, country, email, password, role) {

    validate.string(name, 'name')
    validate.string(surname, 'surname')
    validate.string(company, 'company')
    validate.string(country, 'country')
    validate.string(email, 'e-mail')
    validate.email(email, 'e-mail')
    validate.string(password, 'password')
    validate.securePassword(password, 'password')
    validate.string(role, 'role')
    validate.string(id, 'id')

    return (async () => {

        if(password.length < 6) throw Error("The password must contain more than 5 characters")

        const res = await User.findOne({_id: id})
        if (!res) throw new Error(`TODO`)

        const hash = await bcrypt.hash(password, 10)

            if(res.role === 'admin'){
                
                if(role === 'admin')throw Error(`You\'re creating an admin, not available now`)
                
                const result = await User.findOne({ email })
                if (result) throw new Error(`user with e-mail ${email} already exists`)

                const user = await User.create({ name, surname, company, country, email, password: hash, role })
                user._id = user.id
                user.cart = []
                await sendCustomerEmail(name, surname, company, email, password)
                await sendStaffEmail(id, name, surname, company, country, email, password, role)
                return user

            } else {
                throw new Error(`User with id ${id} is not an admin`)
            }

    })()
}

async function sendCustomerEmail(name, surname, company, email, password) {
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
        to: `${email}`,
        subject: `We have generated an account for you ${name} ${surname}`,
        text: `To finalize your account registration, please log in at https://backoffice.kttape.es/ with the following credentials and change your password in My Account` + 
        `\nLogin: ${email}` +
        `\nPassword: ${password}`+
        '\nThank you!'
    })

    console.log('Message sent: %s', info.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
}

async function sendStaffEmail(id, name, surname, company, country, email, password, role) {
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
        subject: `New User registered`,
        text: `El usuari amb id ${id}, acaba de generar un nou usuari amb les seguents dades:` +
        `\nName: ${name}`+
        `\nSurname: ${surname}`+
        `\nCountry: ${country}`+
        `\nCompany: ${company}`+
        `\nEmail: ${email}`+
        `\nPassword: ${password}`+
        `\nRole: ${role}`
    })

    console.log('Message sent: %s', info.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
}