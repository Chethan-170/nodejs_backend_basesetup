import dotenv from 'dotenv';
import { app } from './app.js';
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
});

connectDB().then(() => {
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
        console.log(`Server at http://localhost:${port}`);
    });
}).catch(error => {
    console.log(`Connection error: ${error}`);
})

