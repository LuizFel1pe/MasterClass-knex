const express = require('express');
const { notFound, allError } = require('./middlewares/catchError');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(routes);

app.use(notFound);
app.use(allError);


app.listen(3333, () => console.log('Server is running on port:3333'));