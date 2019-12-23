const { models: { Article,User,Order } } = require('ktbo-data')
const { validate } = require('ktbo-utils')
const nodemailer = require('nodemailer')

/**
 * Function that creates a new order based on the user's cart. 
 * Always taking into account the quantity of stock of the product and discounting it later.
 *
 * @param {string} userId - Identifier of the user on whom we placed the order.
 * 
 * @returns {Promise} - Returns a Promise with the created order.
 */

module.exports = function (userId) {

    validate.string(userId, 'userId')

    return (async () => {

        let quantityZeroError

        const user = await User.findById(userId)
        if (!user) throw Error(`User with id ${userId} does not exist`)

        const cart = user.cart
        if (cart.length === 0) throw new Error(`Your cart is empty`)
        if(cart.some(element => element.quantity === 0)) throw new Error(`All quantities must be greater than 0`)

        let date = new Date()
        date = date.toString()

        try {

            const stockArticles = await Promise.all(user.cart.map(element => Article.findById(element.article)))
            user.cart.map(cartArticle => {

                let index = stockArticles.findIndex(article => {
                    return article.id === cartArticle.article.toString()
                })

                if (cartArticle.quantity > stockArticles[index].quantity) {
                    throw Error('Stock greater than quantity required')

                } else {
                    stockArticles[index].quantity = stockArticles[index].quantity - cartArticle.quantity

                }
            })
             
            await Promise.all(stockArticles.map(article => article.save()))
            const order = await Order.create({ date, owner: userId, items: user.cart })

            let itemsToPrint = '' 
           
            // async function printerItems () { TO DO
            //     user.cart.forEach(async item => { TO DO
            //         const article = await Article.findById(item.article) TO DO
            //         const quantityItemToString = item.quantity.toString() TO DO
            //         itemsToPrint.concat(`\n- Article: ${article.title} Quantity: ${quantityItemToString}`) TO DO
            //     }) TO DO
            // } TO DO
           
            // printerItems() TO DO

            user.cart = []
            await user.save()

            await sendCustomerEmail(user, order, itemsToPrint)
            await sendStaffEmail(user, order, itemsToPrint)

            return order
         
        } catch ({ message }) {
            throw Error(message)
        }

    })()
}

async function sendCustomerEmail(user, order, itemsToPrint) {
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
        to: user.email,
        subject: `Order with Id: ${order.id} successful`,
        text: `Thank you ${user.company} for your order.` + 
        '\nYou can check your order at https://backoffice.kttape.es/#/home/my-orders'
    })

    console.log('Message sent: %s', info.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
}

async function sendStaffEmail(user, order, itemsToPrint) {
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
        to: 'adria.arki@gmail.com',
        subject: `New order from ${user.company}`,
        text: `Nen, tens un nou Order de ${user.company}`
    })

    console.log('Message sent: %s', info.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
}
