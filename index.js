const fs = require('fs');
const { extname } = require('path');
const path = require('path')
//NOTE - Ordner zum sortieren auswählen
const currentPath = 'C:/users/focht/Testordner/';
// NOTE - Ordner auslesen
fs.readdir(currentPath, dirRead);
function dirRead(err, files) {
    console.log(`Verzeichniss ${currentPath} ausgelesen!`);
    console.log(files);
    files.forEach(processFile);
}
//NOTE - Ordner nach Datei endung erstellen&auffühlen
function processFile(file) {
    var extension = path.extname(file); // Dateierweiterung
    console.log('Datei Erweiterung: ' + extension);
    //NOTE - Ordner nach gefundenen Erweiterungen erstellen
    fs.mkdir(currentPath + extension, function () {
        console.log('Ordner wurde erstellt!');
        // NOTE - Dateien sortieren
        fs.rename(currentPath + file, currentPath + extension + '/' + file, removed);
    });
}
function removed() {
    console.log('Die Datei wurde erfolgreich verschoben')
}
