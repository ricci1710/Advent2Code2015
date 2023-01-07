**--- Tag 12: JSAbacusFramework.io ---**

Die Buchhaltungs-Elfen des Weihnachtsmannes brauchen Hilfe, um die Bücher nach einer kürzlich erfolgten Bestellung
auszugleichen. Leider verwendet ihre Buchhaltungssoftware ein merkwürdiges Speicherformat. Hier kommst du ins Spiel.

Sie haben ein JSON-Dokument, das eine Vielzahl von Dingen enthält: Arrays ([1,2,3]), Objekte ({"a":1, "b":2}), Zahlen
und Strings. Ihre erste Aufgabe besteht darin, einfach alle Zahlen im Dokument zu finden und sie zu addieren.

```
Zum Beispiel:

[1,2,3] und {"a":2, "b":4} haben beide eine Summe von 6.
[[[3]]] und {"a":{"b":4}, "c":-1} haben beide eine Summe von 3.
{"a":[-1,1]} und [-1,{"a":1}] haben beide eine Summe von 0.
[] und {} haben beide eine Summe von 0.
Sie werden keine Zeichenketten finden, die Zahlen enthalten.
```

Wie hoch ist die Summe aller Zahlen in dem Dokument?

**--- Teil 2 ---**

Uh oh - die Buchhaltungs-Elfen haben gemerkt, dass sie alles Rote doppelt gezählt haben.

Ignoriere jedes Objekt (und alle seine Kinder), das eine Eigenschaft mit dem Wert "rot" hat. Tun Sie dies nur für
Objekte ({...}), nicht für Arrays ([...]).

```
[1,2,3] hat immer noch eine Summe von 6.
[1,{"c": "rot", "b":2},3] hat jetzt eine Summe von 4, weil das mittlere Objekt ignoriert wird.
{"d": "rot", "e":[1,2,3,4], "f":5} hat jetzt eine Summe von 0, weil die gesamte Struktur ignoriert wird.
[1, "rot",5] hat eine Summe von 6, weil "rot" in einem Array keine Wirkung hat.
```
