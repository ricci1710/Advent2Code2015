**--- Tag 1: Nicht ganz Lispeln ---**

Der Weihnachtsmann hatte auf weiße Weihnachten gehofft, aber die "Schnee"-Funktion seiner Wettermaschine wird von
Sternen angetrieben, und die sind ihm gerade ausgegangen! Um Weihnachten zu retten, musst du bis zum 25. Dezember
fünfzig Sterne sammeln.

Sammle Sterne, indem du dem Weihnachtsmann hilfst, Rätsel zu lösen. An jedem Tag des Adventskalenders werden zwei Rätsel
zur Verfügung gestellt; das zweite Rätsel wird freigeschaltet, wenn du das erste löst. Für jedes Rätsel gibt es einen
Stern. Viel Glück!

Hier ist ein einfaches Rätsel, um dich aufzuwärmen.

Der Weihnachtsmann versucht, die Geschenke in einem großen Wohnhaus auszuliefern, aber er kann die richtige Etage nicht
finden - die Wegbeschreibung ist etwas verwirrend. Er beginnt im Erdgeschoss (Stockwerk 0) und folgt dann den
Anweisungen, ein Zeichen nach dem anderen.

Eine öffnende Klammer, (, bedeutet, dass er eine Etage höher gehen soll, und eine schließende Klammer, ), bedeutet,
dass er eine Etage tiefer gehen soll.

Das Mehrfamilienhaus ist sehr hoch und der Keller sehr tief; er wird nie die oberste oder unterste Etage finden.
```
Zum Beispiel:

(()) und ()() ergeben beide die Etage 0.
((( und (()(()( ergeben beide die Etage 3.
))((((( ergibt ebenfalls die Etage 3.
()) und ))( ergeben beide das Stockwerk -1 (das erste Untergeschoss).
))) und )())()) führen beide zum Stockwerk -3.
In welches Stockwerk führen die Anweisungen Santa?
```

--- Zweiter Teil ---
Finden Sie nun mit den gleichen Anweisungen die Position des ersten Zeichens, die ihn in den Keller (Stockwerk -1)
führt. Das erste Zeichen in der Anweisung hat die Position 1, das zweite Zeichen die Position 2 und so weiter.
```
Ein Beispiel:

) veranlasst ihn, den Keller an Zeichenposition 1 zu betreten.
()()) veranlasst ihn, den Keller an der Zeichenposition 5 zu betreten.
```

An welcher Position befindet sich das Zeichen, das den Weihnachtsmann zuerst in den Keller gehen lässt?
