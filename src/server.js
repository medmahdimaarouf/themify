const express = require('express')
const path = require('path')
const app = express();
const port = 8000;
app.use('/dashboard', express.static(path.join(__dirname, '../client/')))
app.get('/', (req, res) => { res.redirect("/dashboard") });

app.listen(port, () => {
    console.log(`themify listening on port ${port}!`)
});