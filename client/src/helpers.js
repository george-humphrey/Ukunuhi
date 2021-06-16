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
      console.log('error in ajax get to /chordsByNotes api');
      console.log(err)
      this.chordNotFound();
    },
    success: (data) => {
      if (!data[0]) {
        this.chordNotFound();
      } else {
        this.setState({
          root: data[0].letter,
          tension: data[0].suffix
        })
      }
    }
  })
}

function findStringsFromChord() {
  let root = this.state.root;
  let tension = this.state.tension;
  console.log(root, tension);
}

function changeRoot() {
  let root = $('#rootDropdown').val();
  console.log(root)
  this.setState({ root }, this.findChord);
}

function changeTension() {
  let tension = $('#tenseDropdown').val();
  console.log(tension)
  this.setState({ tension }, this.findChord);
}

module.exports = { clickString, pianofy, notify, chordNotFound, findChordFromNotes, findStringsFromChord, changeRoot, changeTension }