const express = require('express');
const app = express();
const getDataFirestore = require('./controller');

app.get('/', (req, res) => {
    getDataFirestore(res)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})