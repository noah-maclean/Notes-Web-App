// let noteActive = false;
// var currentNote;
var activeNote;
const noteTexts = ["", "", "", "", "", ""];
const noteSaved = [false, false, false, false, false, false]
const noteTitles = ["Note 1", "Note 2", "Note 3", "Note 4", "Note 5", "Note 6"];

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
    // noteTitle.textContent = `Note ${currentNote}`
    noteTitle.textContent = noteTitles[currentNote];

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
    saveMessage.style.opacity = 1;
    // alert(noteTexts[activeNote]);
    // noteSaved[activeNote] = true;
    // alert(noteSaved[activeNote])
    // var firstSpace = noteTexts[activeNote].indexOf(" ");
    // document.getElementById(`note${activeNote}`).value = noteTexts[activeNote].substring(0, firstSpace); 
    
    if (noteText.value !== ""){
        noteTexts[activeNote] = noteText.value;
        document.getElementById(`note${activeNote + 1}`).value = noteTexts[activeNote];
    }
    else {
        noteTexts[activeNote] = "";
        noteTitles[activeNote] = `Note ${activeNote + 1}`;
        document.getElementById(`note${activeNote + 1}`).value = noteTitles[activeNote];
    }   
}

function saveTitle() {
    // alert(changeTitleInput.value)
    if (changeTitleInput.value !== ""){
        noteTitles[activeNote] = changeTitleInput.value;
        noteTitle.textContent = noteTitles[activeNote];
        changeTitleHolder.style.display = "none";
    // alert(changeTitleInput.value)
    }
    else {
        changeTitleHolder.style.display = "none";
    }
}