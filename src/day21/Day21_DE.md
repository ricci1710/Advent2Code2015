**--- Tag 21: RPG Simulator 20XX ---**

Der kleine Henry Case hat zu Weihnachten ein neues Videospiel bekommen. Es ist ein RPG, und er steckt bei einem Boss
fest. Er muss wissen, welche
Ausrüstung er im Laden kaufen soll. Er übergibt dir den Controller.

In diesem Spiel greifen der Spieler (du) und der Feind (der Boss) abwechselnd an. Der Spieler greift immer zuerst an.
Jeder Angriff
reduziert die Trefferpunkte des Gegners um mindestens 1. Der erste Charakter, der 0 oder weniger Trefferpunkte hat,
verliert.

Der Schaden, den ein Angreifer in jeder Runde verursacht, ist gleich dem Schadenswert des Angreifers minus dem
Rüstungswert des Verteidigers. Ein
Angreifer richtet immer mindestens 1 Schaden an. Wenn also der Angreifer einen Schadenswert von 8 hat und der
Verteidiger einen Rüstungswert
von 3, verliert der Verteidiger 5 Trefferpunkte. Hätte der Verteidiger eine Rüstungszahl von 300, würde der Verteidiger
immer noch 1 Treffer
Punkt.

Die Schadens- und Rüstungspunkte beginnen beide bei Null. Sie können durch den Kauf von Gegenständen im Tausch gegen
Gold erhöht werden. Du
beginnst ohne Gegenstände und hat so viel Gold, wie er braucht. Dein Gesamtschaden oder deine Rüstung ist gleich der
Summe dieser Werte
aus all deinen Gegenständen. Du hast 100 Trefferpunkte.

```
Hier ist, was der Item-Shop verkauft:

Waffen:    Kosten Schaden Rüstung
Dolch         8      4       0
Kurzschwert  10      5       0
Kriegshammer 25      6       0
Langschwert  40      7       0
Großaxt      74      8       0

Rüstung:   Kosten Schaden Rüstung
Leder        13      0       1
Kettenhemd   31      0       2
Splinthemd   53      0       3
Bandeisen    75      0       4
Plattenhemd 102      0       5


Ringe:           Kosten Schaden Rüstung
Schaden +1        25       1       0
Schaden +2        50       2       0
Schaden +3       100       3       0
Verteidigung +1   20       0       1
Verteidigung +2   40       0       2
Verteidigung +3   80       0       3
```

Du musst genau eine Waffe kaufen; keine Doppelwaffen. Rüstung ist optional, aber du kannst nicht mehr als eine benutzen.
Du kannst 0-2 Ringe kaufen (höchstens einen für jede Hand). Du musst alle gekauften Gegenstände benutzen. Im Laden gibt
es von jedem sGegenstand nur ein Exemplar, du kannst also nicht mehr kaufen, zum Beispiel zwei Ringe mit Schaden +3.

```
Angenommen, du hast 8 Trefferpunkte, 5 Schaden und 5 Rüstung, und der Boss hat 12 Trefferpunkte, 7 Schaden und 2
Rüstung:

Der Spieler verursacht 5-2 = 3 Schaden; der Boss geht auf 9 Trefferpunkte zurück.
Der Boss fügt          7-5 = 2 Schaden zu; der Spieler sinkt auf 6 Trefferpunkte.
Der Spieler fügt       5-2 = 3 Schaden zu; der Endgegner hat nur noch 6 Trefferpunkte.
Der Boss fügt          7-5 = 2 Schaden zu; der Spieler sinkt auf 4 Trefferpunkte.
Der Spieler fügt       5-2 = 3 Schaden zu; der Boss geht auf 3 Trefferpunkte zurück.
Der Boss fügt          7-5 = 2 Schaden zu; der Spieler sinkt auf 2 Trefferpunkte.
Der Spieler verursacht 5-2 = 3 Schaden; der Boss hat nur noch 0 Trefferpunkte.

In diesem Szenario gewinnt der Spieler! (Knapp.)
```

Du hast 100 Trefferpunkte. Die tatsächlichen Werte des Endgegners stehen in deiner Rätseleingabe. Wie viel Gold kannst
du am wenigsten ausgeben, ausgeben und den Kampf trotzdem gewinnen?
