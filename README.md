# Datei Sortieranwendung

## Funktionsanleitung

| Version | Supported          | Bescreibung |
| ------- | ------------------ | ------------|
| 5.1.x   | :x:                | |
| 5.0.x   | :x:                | |
| 4.0.x   | :x:                | |
| < 2.0   | :white_check_mark: | Dateiendung - Ordner erstellen - Datei verschieben |

----

## Nutzungsanleitung

> *****Wichtig***** !!! **Gilt nur für die aktuelle Version**

> In der index.js Datei den gewünschten Pfad hinzufügen

```javascript
 const currentPath = 'C:/users/mustermann/downloads';
```

> Via PowerShell Console die index.js starten

```console
 node ./index.js
```

> Genießen XD - Der Script durchsucht den **currentPath**
>
> Für jede Dateiendung, die im Ordner exestiert, wird ein Ordner im **currentPaht** erstellt
>
> Alle Dateien mit derselben Endung werden in einen Ordner verschoben
