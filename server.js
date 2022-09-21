const express = require('express');

const app = express();

app.use('/', express.static('public'));

app.use('/admin', express.static('admin'));


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
