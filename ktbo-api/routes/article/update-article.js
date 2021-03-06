const updateArticle = require('../../logic/article/update-article')

module.exports = (req, res) => {

    const { params: { articleId }, body } = req

    try {
        updateArticle(articleId, body)
            .then(() => res.json({ message: `Article with id ${articleId} updated successfully`}))
            .catch(({ message }) => res.status(400).json({ error: message }))
    } catch({ message }) {
        res.status(404).json({ error: message })
    }
}