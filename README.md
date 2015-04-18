# ZHAW Webeng Scrum
ZHAW Webeng Scrum ist sehr eine einfache SCRUMBoard Webapp. Die App hat einen Server Teil welcher die Daten verwaltet und einen Client Teil welcher die Funktionalität und das GUI zur Verfügung stellt.

## Server ##
Der Server Teil besteht aus express.js und einer mongodb. Der Server hat 2 Routen. Auf "/issues" wird der Client teil zur Verfügung gestellt und unter "/api" wird die REST API angeboten. Die API akzeptiert POST, PUT, GET und DELETE. PUT und DELETE funktionieren nur mit einer id. Die Daten werden presistent in der Datenbank gespeichert.

Express.js wurde für dieses Projekt ausgewählt weil es einem mit wenigen Zeilen Code erlaubt eine funktionierende API zu implementieren. Für Mongodb gibt es ein Node module und heroku unterstützt die Datenbank ebenfals.

Der Server hat keine Unittests.

## Client ##
Der Client Teil besteht aus Ember.js mit einem REST Adapter welcher auf den Server zeigt. Ember.js ist ein MVC Framwork welches seit 2011 existiert. Der Client hat nur einen Controller welcher wiederum zwei Webkomponeten (Dragable und Dropzone). Alle Issues werden als Dragable dargestellt. Die 3 Zustände in welchen die Issues sein können sind Dropzone. Die Dragables können mit der Maus verschoben werden und auf einer Dropzone abgesetzt werden.

Ember.js ist ein sehr umfangreiches MVC Framework welches die neusten Standards der Webentwicklung umsetzt und für dieses Projekt hervoragend geeignet ist.

## Development ##
Für die Entwicklung wird der [Heroku Toolbelt][https://toolbelt.heroku.com/] und das [Ember CLI][http://www.ember-cli.com/] benötigt. Zusätzlich wird eine lokale laufende Instanz einer mongodb erwartet.

Im Root Verzeichnis kann man mit ```npm install``` die zusätzlichen Nodemodule installieren und mit ```foreman start``` wird der Server Teil wie auf Heroku ausgeführt.

Im Client Verzeichnis kann man mit ```ember install``` alle zusätzlichen Module installieren. Mit ```ember serve``` wird der Client Teil lokal ausgeführt. 

## Testing ##
Im Client Verzeichnis kann man mit ```ember test -s``` die Unittests ausführen. Die Resultate werden dann im Browser angezeigt. Die Unittests befinden sich im Client Verzeichnis unter tests/unit/**. 
