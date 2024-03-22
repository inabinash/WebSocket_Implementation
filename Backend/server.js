const express = require('express')
const app = express()

app.get('/', (req, res) => {
    // Sending "Hello" response
    res.send('Hello');
});

// Starting the server
const PORT =  3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
