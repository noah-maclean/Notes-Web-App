let noteActive = false;
var currentNote;

function displayNote(currentNote) {
    document.getElementById("note").style.display = "flex";
    document.getElementById("noteTitle").textContent = `Note ${currentNote}`;
    noteActive = true;
}

function hideNote() {
    document.getElementById("note").style.display = "none";
    noteActive = false;
}