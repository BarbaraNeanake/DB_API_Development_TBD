const express = require("express");
const PublisherRoutes = require('./src/GRB_Database_Barbs/routes');

const app = express();
const port = 3000;

app.use(express.json());

// Basic route to check if the server is running
app.get("/", (req, res) => {
    res.send("Hello I'm Barbara Neanakeeee!");
});

// Routes for publisher operations
app.use('/api/v1/Publisher', PublisherRoutes);

// Error handling middleware for JSON parsing errors
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error('Bad JSON');
        return res.status(400).json({ error: 'Invalid JSON format. Please check your request data.' });
    }
    next();
});

app.listen(port, () => {
    console.log(`This app listening on port ${port}`);
});
