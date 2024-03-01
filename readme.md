Express Server Steps:

// Step 1: Create the express application
const app = express();

// Step 2: Define the routes for the application 
app.get('/', (req, res) => {
    res.send('Server is ready');
});

/// Step 3: Start the web server and listen for
/// incoming connections on a specified host and port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});


Useful links
- https://expressjs.com/