const { models: { Article,User,Order } } = require('ktbo-data')
const { validate } = require('ktbo-utils')
// const nodemailer = require('nodemailer')

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
            
           /* // Generate test SMTP service account from ethereal.email
            // Only needed if you don't have a real mail account for testing
           
            let testAccount = await nodemailer.createTestAccount();

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: 'kttape-es.correoseguro.dinaserver.com',
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                    user: 'alias@kttape.es', // generated ethereal user
                    pass:  'Joan1303'// generated ethereal password
                }
            });

            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: '"TEST email" <weborders@kttape.es>', // sender address
                to: 'adria.arki@gmail.com', // list of receivers
                subject: 'Hello ✔', // Subject line
                text: 'Hello world?', // plain text body
                html: '<b>Hello world?</b>' // html body
            });

            console.log('Message sent: %s', info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou... */
             
            await Promise.all(stockArticles.map(article => article.save()))
            const order = await Order.create({ date, owner: userId, items: user.cart })

            user.cart = []
            await user.save()

            return order

        } catch ({ message }) {
            throw Error(message)
        }

    })()
}