const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const chordsByNotes = require('./basic_chords/chordsByNotes.js')
const chordsByStrings = require('./basic_chords/chordsByStrings.js')

const connection = mysql.createConnection(mysqlConfig);

const addChordByNotes = function (chord, callback = () => { }) {
  var q = 
  `INSERT INTO chords_by_notes (id, letter, suffix, notes, note1, note2, note3, note4) 
  VALUES (null, "${chord.letter}", "${chord.suffix}", "${chord.notes}", 
  "${chord.note1}", "${chord.note2}", "${chord.note3}", "${chord.note4}")`;

  connection.query(q, function (err, results) {
    if (err) {
      console.log('problem with adding chord-by-note to database')
      console.log(err);
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const addChordByStrings = function (chord, callback = () => { }) {
  var q = 
  `INSERT INTO chords_by_strings (id, letter, suffix, strings, string1, string2, string3, string4) 
  VALUES (null, "${chord.letter}", "${chord.suffix}", "${chord.strings}", 
  "${chord.string1}", "${chord.string2}", "${chord.string3}", "${chord.string4}")`;

  connection.query(q, function (err, results) {
    if (err) {
      console.log('problem with adding chord-by-strings to database')
      console.log(err);
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const seed = (byNotes, byStrings) => {
  console.log('seeding by notes')
  for (var i = 0; i < byNotes.length; i++) {
    console.log(i)
    addChordByNotes(byNotes[i])
  };
  console.log('seeding by strings')
  for (var j = 0; j < byStrings.length; j++) {
    console.log(j)
    addChordByStrings(byStrings[j])
  }
};

seed(chordsByNotes, chordsByStrings);
