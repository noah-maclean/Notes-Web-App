// add some form of storage/database integration to save the note texts between sessions

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

    noteTitle.textContent = noteTitles[currentNote];

    noteText.value = noteTexts[currentNote];
    saveMessage.style.opacity = 0;
    
    activeNote = currentNote;
}

function hideNote() {
    note.style.display = "none";
}

function saveNote() {
    saveMessage.style.opacity = 1;
        
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
    if (changeTitleInput.value !== ""){
        noteTitles[activeNote] = changeTitleInput.value;
        noteTitle.textContent = noteTitles[activeNote];
        changeTitleHolder.style.display = "none";
    }
    else {
        changeTitleHolder.style.display = "none";
    }
}