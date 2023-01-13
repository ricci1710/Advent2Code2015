-**-- Tag 18: Wie ein GIF für Ihren Garten ---**

Nach dem Vorfall mit der Million Lichter sind die Brandschutzvorschriften strenger geworden: Jetzt sind höchstens
zehntausend Lichter erlaubt. Du ordnest sie in einem 100x100-Raster an.

Der Weihnachtsmann, der dich nie im Stich lässt, schickt dir wieder eine Anleitung für die ideale Beleuchtung. Bei so
wenigen Lichtern, sagt er, müssen Sie auf Animation zurückgreifen.

Beginnen Sie damit, Ihre Lichter auf die mitgelieferte Ausgangskonfiguration einzustellen (Ihre Rätseleingabe).
Ein # bedeutet "an", und ein . bedeutet "aus".

Animieren Sie dann Ihr Gitter schrittweise, wobei jeder Schritt die nächste Konfiguration auf der Grundlage der
aktuellen Konfiguration bestimmt. Der nächste Zustand jedes Lichts (entweder an oder aus) hängt von seinem aktuellen
Zustand und den aktuellen Zuständen der acht benachbarten Lichter (einschließlich der Diagonalen) ab. Lichter am Rande
des Gitters können weniger als acht Nachbarn haben; die fehlenden zählen immer als "aus".

In einem vereinfachten 6x6-Gitter hat die Leuchte A beispielsweise die Nachbarn 1 bis 8, während die Leuchte B, die sich
am Rand befindet, nur die Nachbarn 1 bis 5 hat:

1B5...
234...
......
..123.
..8A4.
..765.

Der Zustand, den ein Licht als nächstes haben sollte, basiert auf seinem aktuellen Zustand (an oder aus) plus der Anzahl
der Nachbarn, die an sind:

Eine eingeschaltete Leuchte bleibt eingeschaltet, wenn 2 oder 3 Nachbarn eingeschaltet sind, und schaltet sich ansonsten
aus.
Ein ausgeschaltetes Licht schaltet sich ein, wenn genau 3 Nachbarn eingeschaltet sind, und bleibt ansonsten
ausgeschaltet.
Alle Lichter werden gleichzeitig aktualisiert, d. h. sie berücksichtigen alle denselben aktuellen Zustand, bevor sie zum
nächsten übergehen.

```
Hier sind ein paar Schritte aus einer Beispielkonfiguration eines anderen 6x6-Gitters:

Anfangszustand:
.#.#.#
...##.
#....#
..#...
#.#..#
####..

Nach 1 Schritt:
..##..
..##.#
...##.
......
#.....
#.##..

Nach 2 Schritten:
..###.
......
..###.
......
.#....
.#....

Nach 3 Schritten:
...#..
......
...#..
..##..
......
......

Nach 4 Schritten:
......
......
..##..
..##..
......
......
Nach 4 Schritten sind in diesem Beispiel vier Lichter an.
```

Wie viele Lichter sind in Ihrem Gitter von 100x100 Lichtern bei Ihrer Ausgangskonfiguration nach 100 Schritten an?
