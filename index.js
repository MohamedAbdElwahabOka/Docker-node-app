const express = require('express');
const PORT = 4000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!ss  This is a simple Node.js application running in a Docker container.');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});