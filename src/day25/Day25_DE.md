**--- Tag 25: Let It Snow ---**

Frohe Weihnachten! Der Weihnachtsmann fährt seine Wettermaschine hoch; es sieht so aus, als ob es doch noch weiße
Weihnachten geben könnte.

Die Wettermaschine piept! Auf der Konsole der Maschine erscheint eine Kopierschutzmeldung, die dich auffordert, einen
Code aus der Bedienungsanleitung einzugeben. Offenbar weigert sich das Gerät, zu laufen, wenn du ihm diesen Code nicht
gibst. Kein Problem, du schlägst den Code einfach in der...

"Ho ho ho", denkt der Weihnachtsmann laut nach. "Ich kann das Handbuch nicht finden."

Du suchst die Support-Nummer des Herstellers und rufst dort an. Das ist auch gut so - der 49. Stern hätte sich nicht von
selbst verdient.

"Oh, das Gerät ist schon ziemlich alt!", sagt man Ihnen. "Dieses Modell wird seit sechs Minuten nicht mehr unterstützt,
und wir haben gerade alle Handbücher geschreddert. Aber ich wette, wir können den Algorithmus zur Codegenerierung für
Sie finden."

Nachdem man Sie zwanzig Minuten lang in der Warteschleife gehalten hat (Ihr Anruf ist sehr wichtig für sie, das wurde
Ihnen wiederholt gesagt), findet man endlich einen Techniker, der sich an die Funktionsweise des Codesystems erinnert.

Die Codes sind auf ein unendlich langes Blatt Papier gedruckt, beginnend in der linken oberen Ecke. Die Codes werden
diagonal ausgefüllt: Beginnend mit der ersten Zeile mit einem leeren ersten Kästchen werden die Codes diagonal nach oben
und nach rechts ausgefüllt. Dieser Vorgang wird so lange wiederholt, bis das gesamte Papier ausgefüllt ist. Die ersten
paar Codes werden also in dieser Reihenfolge ausgefüllt:

```
   |  1   2   3   4   5   6  
---+---+---+---+---+---+---+
 1 |  1   3   6  10  15  21
 2 |  2   5   9  14  20
 3 |  4   8  13  19
 4 |  7  12  18
 5 | 11  17
 6 | 16
```

Zum Beispiel würde der 12. Code in Zeile 4, Spalte 2 geschrieben, der 15. Code in Zeile 1, Spalte 5.

Die Stimme am anderen Ende des Telefons fährt damit fort, wie die Codes tatsächlich erzeugt werden. Der erste Code
ist 20151125. Danach wird jeder Code generiert, indem der vorherige Code mit 252533 multipliziert wird und dann der Rest
aus der Division dieses Wertes durch 33554393 übrig bleibt.

Um also den zweiten Code zu finden (der in Zeile 2, Spalte 1 steht), beginnen Sie mit dem vorherigen Wert, 20151125.
Multiplizieren Sie ihn mit 252533, um 5088824049625 zu erhalten. Dann dividieren Sie diesen Wert durch 33554393, was
einen Rest von 31916031 ergibt. Dieser Rest ist der zweite Code.

"Oh!", sagt die Stimme. "Es sieht so aus, als hätten wir einen Abschnitt aus einem der Handbücher übersehen. Lass mich
ihn dir vorlesen." Du schreibst seine Zahlen auf:

```
   |    1         2         3         4         5         6
---+---------+---------+---------+---------+---------+---------+
 1 | 20151125  18749137  17289845  30943339  10071777  33511524
 2 | 31916031  21629792  16929656   7726640  15514188   4041754
 3 | 16080970   8057251   1601130   7981243  11661866  16474243
 4 | 24592653  32451966  21345942   9380097  10600672  31527494
 5 |    77061  17552253  28094349   6899651   9250759  31663883
 6 | 33071741   6796745  25397450  24659492   1534922  27995004
```

"Denken Sie daran", fährt die Stimme fort, "das sind noch nicht einmal alle ersten Zahlen; zum Beispiel fehlt die Zahl
7,1, die vor 6,2 stehen würde. Aber das sollte ausreichen, um... Oh, es ist Zeit für das Mittagessen! Auf Wiederhören!"
Die Verbindung wird unterbrochen.

Der Weihnachtsmann sieht nervös aus. Ihre Rätseleingabe enthält die Nachricht auf der Konsole der Maschine. Welchen Code
geben Sie der Maschine?

**--- Zweiter Teil ---**

Die Maschine erwacht zum Leben, dann verstummt sie wieder. Es piept. "Unzureichender Treibstoff", zeigt die Konsole
an. "Fünfzig Sterne sind erforderlich, um fortzufahren. Ein Stern ist verfügbar."

... "ein Stern ist verfügbar"? Du überprüfst den Treibstofftank, und tatsächlich, ein einsamer Stern liegt am Boden und
wartet auf seine Freunde. Sieht aus, als müsstest du selbst für 49 sorgen.

Du hast aber nicht genug Sterne, um die Maschine zu starten. Du brauchst noch 4.