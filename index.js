//index.js
const express = require('express');
const app = express();
const port = process.env.PORT;

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const postRouter = require('./routes/postRoutes');
app.use('/post', postRouter);

const commentRouter = require('./routes/commentRoute');
app.use('/comments', commentRouter);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;