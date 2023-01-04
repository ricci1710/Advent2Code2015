**--- Tag 7: Etwas Montage erforderlich ---**

Dieses Jahr brachte der Weihnachtsmann dem kleinen Bobby Tables einen Satz Drähte und bitweise Logikgatter! Leider ist
der kleine Bobby etwas unter dem empfohlenen Alter, und er braucht Hilfe beim Zusammenbau der Schaltung.

Jeder Draht hat eine Kennung (einige Kleinbuchstaben) und kann ein 16-Bit-Signal (eine Zahl von 0 bis 65535) übertragen.
Ein Signal wird jedem Draht durch ein Gatter, einen anderen Draht oder einen bestimmten Wert zugeführt. Jeder Draht kann
ein Signal nur von einer Quelle erhalten, kann aber sein Signal an mehrere Ziele weitergeben. Ein Gatter liefert erst
dann ein Signal, wenn alle seine Eingänge ein Signal haben.

In der beiliegenden Anleitung wird beschrieben, wie die Teile miteinander verbunden werden: x AND y -> z bedeutet, dass
die Drähte x und y mit einem UND-Gatter verbunden werden und dessen Ausgang dann mit dem Draht z verbunden wird.

```
Zum Beispiel:

123 -> x bedeutet, dass das Signal 123 an die Leitung x gelegt wird.
x AND y -> z bedeutet, dass die bitweise UND-Verknüpfung der Adern x und y an die Ader z gelegt wird.
p LSHIFT 2 -> q bedeutet, dass der Wert von Leitung p um 2 nach links verschoben wird und dann an Leitung q geliefert wird.
NOT e -> f bedeutet, dass das bitweise Komplement des Wertes von Leitung e an Leitung f weitergegeben wird.
```

Weitere mögliche Gatter sind OR (bitweises ODER) und RSHIFT (Rechtsverschiebung). Wenn Sie aus irgendeinem Grund die
Schaltung emulieren möchten, bieten fast alle Programmiersprachen (z. B. C, JavaScript oder Python) Operatoren für
diese Gatter.

**--- Teil 2 ---**

Nimm nun das Signal, das du an Draht a erhalten hast, überbrücke Draht b mit diesem Signal und setze die anderen Drähte
(einschließlich Draht a) zurück. Welches neue Signal wird schließlich an Leitung a geliefert?
