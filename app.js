//Node setup

const express = require('express'); //Express middlware activation
const cors = require('cors'); //Cross-origin requests jic for future
const app = express();
const port = 3000;

app.use(cors());

//Serving static files using Express Server
app.use(express.static(__dirname));

//Start server and send response back
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});