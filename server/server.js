const express = require ('express');
const path = require ('path');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const PORT = process.env.PORT || 3000; // PORT provided by heroku

app.use(express.static(publicPath));

app.get('*', (req, res) => { // processing all unhandle requests
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log('Server is up!');
});