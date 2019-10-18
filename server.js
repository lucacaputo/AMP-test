const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use((req, res, next) => {
  res.set({
    'Content-type': 'text/html'
  });
  return next();
})

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, "views", "test-one.html"));
})

app.listen(8080, () => {
  console.log('server on port 8080');
})
