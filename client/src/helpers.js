import $ from 'jquery';

function clickString(string, fret) {
  let strings = this.state.strings
  if (fret === strings[string - 1]) {
    strings[string - 1] = 0;
  } else {
    strings[string - 1] = fret;
  }
  this.setState({ strings }, () => {
    this.pianofy();
    this.findChordFromNotes();
  });

}

function pianofy() {
  // assume standard tuning (i.e., gCEA)
  const standardTuning = [7, 0, 4, 9];
  let strings = this.state.strings;
  let currentKeys = standardTuning.map((x, i) => {
    return x + strings[i];
  });

  $('.key').removeClass('selectedKey');
  currentKeys.forEach((index) => {
    $(`#key${index}`).addClass('selectedKey');
  });
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function notify() {
    const notes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
    const standardTuning = [7, 0, 4, 9];
    let strings = this.state.strings;
    let currentKeys = standardTuning.map((baseline, fretPosition) => {
      return baseline + strings[fretPosition];
    });
  
   let currentNotes = currentKeys.map((key) => {
     return notes[key % 12]
   })

   let uniqueNotes = currentNotes.filter(onlyUnique);
   while (uniqueNotes.length < 4) {
     uniqueNotes.push('X');
   }
   
   return uniqueNotes;
}

function chordNotFound() {
  this.setState({
    root: '?',
    tension: '?'
  })
}

function findChordFromNotes() {
  let notes = this.notify().sort().join('');

  $.ajax({
    type: 'GET',
    url: '/chordsByNotes',
    dataType: 'json',
    data: { notes },
    error: (err) => {
      console.log('error in get to /chordsByNotes');
      console.log(err);
      this.chordNotFound();
    },
    success: (data) => {
      if (!data[0]) {
        this.chordNotFound();
      } else {
        this.setState({
          root: data[0].letter,
          tension: data[0].suffix
        });
      }
    }
  });
}

function findStringsFromChord() {
  let root = this.state.root;
  let tension = this.state.tension;

  $.ajax({
    type: 'GET',
    url: '/stringsByChord',
    dataType: 'json',
    data: { root, tension },
    error: (err) => {
      console.log('error in get to /chordsByNotes');
      console.log(err);
      this.chordNotFound();
    },
    success: (data) => {
      let strings = [data[0].string1, data[0].string2, data[0].string3, data[0].string4];
      console.log(strings)
      this.setState({strings}, this.pianofy);
      }
  });
}

function changeRoot() {
  let root = $('#rootDropdown').val();
  this.setState({ root }, this.findStringsFromChord);
}

function changeTension() {
  let tension = $('#tenseDropdown').val();
  this.setState({ tension }, this.findStringsFromChord);
}

module.exports = { clickString, pianofy, notify, chordNotFound, findChordFromNotes, findStringsFromChord, changeRoot, changeTension }