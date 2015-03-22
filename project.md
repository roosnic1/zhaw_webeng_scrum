# Webengineering

## Projekt für Vornote

### Ziel des Projektes

Sie zeigen, dass Sie folgende Techniken und Technologien verstanden haben, indem 
Sie selbständig ein kleines Projekt entwickeln.

Zwingend

* Web / API Server mit node.js

2 von 3

* REST API 
* Frontend Anwendung mit Backbone / jQuery *)
* Websockets

Aus diesen Technologien müssen mindestens 2 verwendet werden (d.h., sie können 
eine Technologie weglassen).

Wenn Sie eine anderes Framework statt Backbone verwenden wollen, dann ist das das grundsätzlich in Ordnung. Allerdings erwarte ich dann, dass Sie in der Dokumentation begründen wieso Sie sich für dieses Framework entschieden haben, und einen Anspekt (z.B. Model, View oder Controller mit dem entsprechenden Gegenstück in Backbone vergleichen)

 
### Projektbeschreibung

Entwickeln Sie ein Tool, mit dem Sie ein einfaches Scrum Board verwalten können.

Ein Scrumboard besteht aus einer Tafel mit 3 Spalten:

- Todo
- In Progress
- Done

Sie können in jeder dieser Spalten verschiedene *Karten* hängen haben. Diese Karten
enthalten einen Titel, eine Beschreibung, eine Aufwandschätzung (Eine Zahl aus 1,2,3,5,8) und 
den Namen einer verantwortlichen Person.

Sie können neue Karten erzeugen, bestehende Karten bearbeiten, die Karten von einer 
Spalte in die nächste schieben und Karten löschen.

Die Darstellung und die Benutzerinteraktion bleibt Ihnen überlassen.


### Abgabe

Sie müssen die Applikation auf Github verwalten und auf Heroku publizieren. Als
Abgabe schicken Sie mir folgendes an `xfir@zhaw.ch`:

* Github URL
* Heroku URL
* Kurze (!) Beschreibung der Anwendung, warum & wie welche Technologie eingesetzt wurde

#### Abgabetermin

* Github URL und Heroku URL: bis 23.3.2015
* Beschreibung (und damit Abgabe): 20.4.2015

Sie erhalten von mir jeweils eine Empfangsbestätigung. Wenn Sie diese nicht erhalten haben sollten,
kontaktieren Sie mich via `jens-christian@invisible.ch` nochmals.

### Randbedingungen

#### Zeitaufwand

Sie sollten nicht mehr als 8 bis 10 Stunden Aufwand für diese Aufgabe haben. Davon können Sie 2 * 2
Stunden während den letzten beiden Vorlesungen dieses Teils (16.3 und 23.3) nehmen. Während dieser
Zeit stehe ich Ihnen für Fragen und Hilfe zur Verfügung.


#### Vertikaler Schnitt statt Horizontale Breite

Wenn Sie mit dem gegebenen Zeitrahmen nicht genügend Zeit haben, können Sie die Funktionalität 
reduzieren. Ich möchte, dass Sie eine Funktion durchgehend implementieren, nicht dass Sie eine
ganze Reihe von Funktionen nur halb implementieren. Beschreiben Sie in der Dokumentation, was funktioniert (und was
nicht)!


#### Funktion vor Aussehen

Ich lege mehr Wert auf das Funktionieren der Anwednung, als auf ein perfektes Aussehen (d.h. auch 
minimales Styling mit CSS ist vollständig akzeptabel).

#### Persistenz Optional

Sie müssen keinen Persistenzlayer bauen.  Es reicht, wenn der Server die Daten im Memory hält und bei einem Neustart verliert.
Heroku unterstützt PostgreSQL von Haus aus und es gibt entsprechende ORM Bibliotheken.

#### Bewertung

Bewertet werden folgende Dinge:

* Lauffähigkeit der Anwendung
* Korrektheit der Implementierung
* Verwendung der richtigen Technologien
* Verwendung von Tests
* Dokumentation