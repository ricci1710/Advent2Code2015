**--- Tag 15: Wissenschaft für hungrige Menschen ---**

Heute machst du dich an die Aufgabe, dein Rezept für milchgetränkte Kekse zu perfektionieren. Alles, was du tun musst,
ist, das richtige Gleichgewicht der Zutaten zu finden.

Dein Rezept lässt Platz für genau 100 Teelöffel der Zutaten. Sie erstellen eine Liste der verbleibenden Zutaten, die Sie
für die Fertigstellung des Rezepts verwenden könnten (Ihr Puzzle-Input) und deren Eigenschaften pro Teelöffel:

- Fassungsvermögen (wie gut kann der Keks Milch aufnehmen)
- Haltbarkeit (wie gut hält sie den Keks intakt, wenn er mit Milch gefüllt ist)
- Geschmack (wie schmackhaft macht es den Keks)
- Textur (wie es die Haptik des Kekses verbessert)
- Kalorien (wie viele Kalorien der Keks enthält)

Sie können die Zutaten nur in ganzen Teelöffeln genau abmessen, und Sie müssen genau sein, damit Sie Ihre Ergebnisse in
Zukunft reproduzieren können. Die Gesamtpunktzahl eines Kekses lässt sich ermitteln, indem man die einzelnen
Eigenschaften addiert (negative Summen werden zu 0) und dann alles außer den Kalorien miteinander multipliziert.

```
Nehmen wir zum Beispiel an, Sie haben diese beiden Zutaten:

Karamell: Fassungsvermögen -1, Haltbarkeit -2, Geschmack  6, Konsistenz  3, Kalorien 8
Zimt:     Fassungsvermögen  2, Haltbarkeit  3, Geschmack -2, Konsistenz -1, Kalorien 3
```

```
Würde man 44 Teelöffel Karamell und 56 Teelöffel Zimt verwenden (da sich die Mengen der einzelnen Zutaten zu 100
addieren müssen), ergäbe sich ein Keks mit den folgenden Eigenschaften:

- Eine Fassungsvermögen von 44*-1 + 56*2 = 68
- Eine Haltbarkeit von 44*-2 + 56*3 = 80
- Ein Geschmack von 44*6 + 56*-2 = 152
- Eine Konsistenz von 44*3 + 56*-1 = 76

Multipliziert man diese Werte (68 * 80 * 152 * 76, ohne Berücksichtigung der Kalorien), so ergibt sich eine 
Gesamtpunktzahl von 62842880, was angesichts dieser Zutaten die bestmögliche Punktzahl ist. Hätte eine der Eigenschaften 
eine negative Gesamtsumme ergeben, wäre sie stattdessen zu Null geworden, so dass die Gesamtpunktzahl mit Null 
multipliziert worden wäre.
```

Wie hoch ist die Gesamtpunktzahl des bestmöglichen Kekses, den du mit den Zutaten in deiner Küche und ihren
Eigenschaften herstellen kannst?
