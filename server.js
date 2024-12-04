const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Corrected route definition
app.get('/', (req, res) => {
    res.send('Hello, Dockerized Node.js app!'); // Corrected method and string output
});

// Corrected app.listen
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});
