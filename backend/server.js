const express = require('express');
const app = express();
const port = 3000; // You can change the port number as needed
const cors = require('cors');

app.use(cors());

// Define a GET endpoint
app.get('/contactinformation', (req, res) => {
    res.json("salim");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
