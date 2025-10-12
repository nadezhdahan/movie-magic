import express from 'express'
import handlebars from 'express-handlebars'
import mongoose from 'mongoose';

import routes from './routes.js';

const app = express();

// Set up DB

const url= 'mongodb://localhost:27017';

try{
    await mongoose.connect(url,{dbName:'movie-magic-oct2025'})
console.log('Connected to DB')

}catch(err){
    console.error('error')
}

// Setup Handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views');

// Setup static middleware
app.use(express.static('src/public'));

// Parse form data from req
app.use(express.urlencoded()); 

// Routes
app.use(routes);

// Start Server
app.listen(5000, () => console.log('Server is listening on http://localhost:5000...'));