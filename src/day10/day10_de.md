**--- Tag 10: Elfen schauen, Elfen sagen ---**

Heute spielen die Elfen ein Spiel, das sie Look-and-Say nennen. Sie bilden abwechselnd Sequenzen, indem sie die
vorherige Sequenz laut vorlesen und diese als nächste Sequenz verwenden. Zum Beispiel wird 211 als **_"eine zwei, zwei
Einsen"_** gelesen, was zu 1221 (1 2, 2 1s) wird.

Look-and-Say-Sequenzen werden iterativ erzeugt, wobei der vorherige Wert als Eingabe für den nächsten Schritt verwendet
wird. Für jeden Schritt nehmen Sie den vorherigen Wert und ersetzen jede Ziffernfolge (wie 111) durch die Anzahl der
Ziffern (3), gefolgt von der Ziffer selbst (1).

```
Zum Beispiel:

Aus 1 wird 11 (1 Kopie der Ziffer 1).
11 wird zu 21 (2 Kopien der Ziffer 1).
21 wird zu 1211 (eine 2 gefolgt von einer 1).
1211 wird zu 111221 (eine 1, eine 2 und zwei 1en).
111221 wird zu 312211 (drei 1en, zwei 2en und eine 1).
```

Beginnen Sie mit den Ziffern in Ihrer Rätseleingabe und wenden Sie diesen Vorgang 40 Mal an.
Wie lang ist das Ergebnis?
