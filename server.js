var port = process.env.PORT || 5000;

const express = require('express');
const app = express();

app.use(express.static('build'));

console.log(`Server Running on port ${port} !`);
app.listen(port);

