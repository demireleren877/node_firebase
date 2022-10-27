const express = require('express');
const app = express();
const getDataFirestore = require('./controller');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    getDataFirestore(res)
})

app.listen(port, () => {
    console.log('Server is running on port 3000');
})
