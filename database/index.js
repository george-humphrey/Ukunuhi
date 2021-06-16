const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

let getChordByNotes = function (chordCode, callback) {
  let notes = chordCode.notes;

  let q = `SELECT * FROM chords_by_notes WHERE notes = "${notes}"`;
  connection.query(q, function (err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

let getStringsByChord = function (chord, callback) {
  let root = chord.root;
  let tension = chord.tension;

  let q = `SELECT * FROM chords_by_strings WHERE letter = "${root}" AND suffix = "${tension}"`;
  connection.query(q, function (err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

module.exports = {
  getChordByNotes, getStringsByChord
};