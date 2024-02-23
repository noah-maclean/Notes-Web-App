// TODO: add some form of storage/database integration to save the note texts between sessions
// localStorage?

var activeNote;
const noteTexts = ["", "", "", "", "", ""];
const noteSaved = [false, false, false, false, false, false]
let noteTitles = ["Note 1", "Note 2", "Note 3", "Note 4", "Note 5", "Note 6"];

const note = document.getElementById("note");
const noteTitle = document.getElementById("noteTitle");
const noteText = document.getElementById("noteText");
const saveMessage = document.getElementById("saveMessage");
const saveMessageHolder = document.getElementById("saveMessageHolder");
const changeTitleHolder = document.getElementById("changeTitle");
const changeTitleInput = document.getElementById("changeTitleInput");

// noteTitle.addEventListener("click", function() {
// });
// setArray("noteTitles", noteTitles);
// noteTitles = ["Note 1", "Note 2", "Note 3", "Note 4", "Note 5", "bruh"];
// setArray(noteTitles); 

// for (var i of noteTitles) {
//     alert(i);

// }
// noteTitles = JSON.parse(localStorage.getItem("noteTitles"));

// for (i in noteTitles) {
//     alert(i);
// }


// TODO: when window loads, note text is set to the value from localStorage
// for each note, if there is text then load the text to the button
// else if there is no text and a title then load the title to the button
// else load note num (just in case noteTitles[note num] gets overridden to null or something)
// ? window.onload = (event) => {
// ?     if (noteTitles) {noteTitles = getArray("noteTitles")};
// ?     if (noteTexts) {noteTexts = getArray("noteTexts")};
// ?     for (num in noteTitles) {
// ?         document.getElementById(`note${num}`).value = noteTexts[num];
// ?     }
// ?   };

//stores an array in localStorage to allow it to be accessed when page is refreshed
function setArray(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
}

function getArray(name) {
    return JSON.parse(localStorage.getItem(name));
}

function displayChangeTitle() {
    changeTitleHolder.style.display = "flex";
}

function displayNote(currentNote) {
    // noteTitles = JSON.parse(localStorage.getItem("noteTitles"));
    noteTitles = getArray("noteTitles");

    note.style.display = "flex";

    noteTitle.value = noteTitles[currentNote];

    noteText.value = noteTexts[currentNote];
    // saveMessageHolder.display = "none";
    
    activeNote = currentNote;
}

function hideNote() {
    note.style.display = "none";
    saveMessage.style.opacity = 0
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
        // noteTitles[activeNote] = `Note ${activeNote + 1}`;
        document.getElementById(`note${activeNote + 1}`).value = noteTitles[activeNote];
    }   

    setArray("noteTitles", noteTitles);
    // setTimeout(() => saveMessageHolder.display = "none", 2000);
    setTimeout(() => saveMessage.style.opacity = 0, 2000);

}

function saveTitle() {
    if (changeTitleInput.value !== ""){
        noteTitles[activeNote] = changeTitleInput.value;
        noteTitle.value = noteTitles[activeNote];
        document.getElementById(`note${activeNote + 1}`).value = noteTitles[activeNote];
        changeTitleHolder.style.display = "none";
        // alert(noteTitles[activeNote])
    }
    else {
        changeTitleHolder.style.display = "none";
    }
}
