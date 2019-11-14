const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: '1fadc6751db54c1c834fc1a99f03f7f3'
});

const handleAPI = (req, res) => {
    app.models.predict(
        Clarifai.MODERATION_MODEL,
        req.body.input
    )
    .then(response => {
        res.json(response)
    })
    .catch(err => alert("There are some problems with your URL. Please check it again"));
}

module.exports = {
    handleAPI
}