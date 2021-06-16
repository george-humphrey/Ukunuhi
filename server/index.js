const express = require('express');
const bodyParser = require('body-parser');

const db = require('../database');

const app = express();
const port = 3009;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get('/chordsByNotes', (req, res) => {
  db.getChordByNotes(req.query, function (err, data) {
    if (err) {
      console.log(err);
      res.status(400).end();
    } else if (data === undefined) {
      res.status(404).end();
    } else {
      res.status(200).send(data).end();
    }
  })
})