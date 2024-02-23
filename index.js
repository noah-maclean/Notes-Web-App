// TODO: add some form of storage/database integration to save the note texts between sessions

var activeNote;
const noteTexts = ["", "", "", "", "", ""];
const noteSaved = [false, false, false, false, false, false]
const noteTitles = ["Note 1", "Note 2", "Note 3", "Note 4", "Note 5", "Note 6"];

const note = document.getElementById("note");
const noteTitle = document.getElementById("noteTitle");
const noteText = document.getElementById("noteText");
const saveMessage = document.getElementById("saveMessage");
const saveMessageHolder = document.getElementById("saveMessageHolder");
const changeTitleHolder = document.getElementById("changeTitle");
const changeTitleInput = document.getElementById("changeTitleInput");

// noteTitle.addEventListener("click", function() {
// });


function displayChangeTitle() {
    changeTitleHolder.style.display = "flex";
}

function displayNote(currentNote) {
    note.style.display = "flex";

    noteTitle.value = noteTitles[currentNote];

    noteText.value = noteTexts[currentNote];
    // saveMessageHolder.display = "none";
    
    activeNote = currentNote;
}

function hideNote() {
    note.style.display = "none";
}

function saveNote() {
    saveMessage.style.opacity = 1
    // saveMessageHolder.display = "block";               

    if (noteText.value !== "") {
        noteTexts[activeNote] = noteText.value;
        document.getElementById(`note${activeNote + 1}`).value = noteTexts[activeNote];
    }
    else {
        noteTexts[activeNote] = "";
        noteTitles[activeNote] = `Note ${activeNote + 1}`;
        document.getElementById(`note${activeNote + 1}`).value = noteTitles[activeNote];
    }   
    // setTimeout(() => saveMessageHolder.display = "none", 2000);
    setTimeout(() => saveMessage.style.opacity = 0, 2000);

}

function saveTitle() {
    if (changeTitleInput.value !== ""){
        noteTitles[activeNote] = changeTitleInput.value;
        noteTitle.value = noteTitles[activeNote];
        changeTitleHolder.style.display = "none";
        // alert(noteTitles[activeNote])
    }
    else {
        changeTitleHolder.style.display = "none";
    }
}