// let noteActive = false;
// var currentNote;
var activeNote;
const noteTexts = ["", "", "", "", "", ""];
const noteSaved = [false, false, false, false, false, false]

const note = document.getElementById("note");
const noteTitle = document.getElementById("noteTitle");
const noteText = document.getElementById("noteText");
const saveMessage = document.getElementById("saveMessage");
const changeTitleHolder = document.getElementById("changeTitle");
const changeTitleInput = document.getElementById("changeTitleInput");

noteTitle.addEventListener("click", function() {
    changeTitleHolder.style.display = "flex";
});

function displayNote(currentNote) {
    note.style.display = "flex";
    noteTitle.textContent = `Note ${currentNote}`

    // if (noteSaved[currentNote] === true){
    //     // alert("note has been saved");
    //     var firstSpace = noteTexts[currentNote].indexOf(" ");
    //     // alert(firstSpace)
    //     // alert(noteTexts[currentNote].substring(0, firstSpace));
    //     noteTitle.textContent = noteTexts[currentNote].substring(0, firstSpace)
    // } else {
    //     noteTitle.textContent = `Note ${currentNote}`;
    // }
    
    noteText.value = noteTexts[currentNote];
    saveMessage.style.opacity = 0;
    // noteActive = true;
    activeNote = currentNote;
}

function hideNote() {
    note.style.display = "none";
    // noteText.value = null;
    // noteActive = false;
}

function saveNote() {
    // document.getElementById("note").style.display = "none";
    noteTexts[activeNote] = noteText.value;
    saveMessage.style.opacity = 1;
    // alert(noteTexts[activeNote]);
    noteSaved[activeNote] = true;
    // alert(noteSaved[activeNote])
    // var firstSpace = noteTexts[activeNote].indexOf(" ");
    // document.getElementById(`note${activeNote}`).value = noteTexts[activeNote].substring(0, firstSpace); 
    document.getElementById(`note${activeNote}`).value = noteTexts[activeNote]
}

function saveTitle() {
    changeTitleHolder.style.display = "none";
}