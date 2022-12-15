const fs = require('fs');
const { extname } = require('path');
const path = require('path');

//NOTE - Einen Ordner zum sortieren auswählen-einfügen

const currentPath = 'C:/users/focht/Testordner/';

// NOTE - Ordner auslesen
fs.readdir(currentPath, dirRead);
function dirRead(err, files) {
    console.log(`In dem Verzeichniss gefundene Dateien ${files}!`);
    files.forEach(processFile);
}

//NOTE - Ordner für jede Dateiendung erstellen files verschieben
function processFile(file) {
    var extension = path.extname(file); // Dateiart check

    //NOTE - Ordner nach gefundenen Dateiendung erstellen
    fs.mkdir(currentPath + extension, function () {
        console.log('Ordner wurde erstellt!');
        // NOTE - Dateien sortieren
        fs.rename(currentPath + file, currentPath + extension + '/' + file, removed);
    });
}
function removed() {
    console.log('Die Datei wurde erfolgreich verschoben')
}
