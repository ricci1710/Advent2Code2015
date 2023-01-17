**--- Tag 22: Wizard Simulator 20XX ---**

Der kleine Henry Case beschließt, dass es langweilig ist, Bosse mit Schwertern und so zu besiegen. Jetzt spielt er das
Spiel mit einem Zauberer. Natürlich bleibt er bei einem anderen Endgegner stecken und braucht wieder deine Hilfe.

In dieser Version finden die Kämpfe immer noch abwechselnd zwischen dem Spieler und dem Endgegner statt. Der Spieler
geht immer noch zuerst. Allerdings erhältst du jetzt keine Ausrüstung mehr, sondern musst einen deiner Zaubersprüche
wählen, den du wirken möchtest. Der erste Charakter, der 0 oder weniger Trefferpunkte hat, verliert.

Da du ein Zauberer bist, darfst du keine Rüstung tragen und du kannst nicht normal angreifen. Da du jedoch magischen
Schaden verursachst, wird die Rüstung deines Gegners ignoriert, sodass auch der Endgegner praktisch keine Rüstung hat.
Wie zuvor, wenn Rüstung (in diesem Fall durch einen Zauber, in diesem Fall) den Schaden unter 1 reduzieren würde, wird
er stattdessen zu 1 - das heißt, die Angriffe des Bosses verursachen immer mindestens 1 Schaden.

In jedem eurer Züge müsst ihr einen eurer Zauber wählen, den ihr wirken wollt. Wenn du es dir nicht leisten kannst,
einen Zauber zu wirken, hast du verloren. Zaubersprüche kosten Mana; du beginnst mit 500 Mana, hast aber keine
Obergrenze. Du musst genug Mana haben, um einen Zauber zu wirken, und die Kosten werden sofort abgezogen, wenn du ihn
wirkst. Deine Zauber sind magisches Geschoss, Entziehen, Schild, Gift und Wiederaufladen.

- Magisches Geschoss kostet 53 Mana. Sie verursacht sofort 4 Schaden.
- Entziehen kostet 73 Mana. Er verursacht sofort 2 Schaden und heilt dich um 2 Trefferpunkte.
- Schutzschild kostet 113 Mana. Er löst einen Effekt aus, der 6 Runden lang anhält. Während er aktiv ist, wird deine
  Rüstung um 7 erhöht.
- Gift kostet 173 Mana. Es löst einen Effekt aus, der 6 Runden lang anhält. Zu Beginn jeder Runde, während er aktiv ist,
  fügt er dem Boss 3 Schaden zu.
- Aufladen kostet 229 Mana. Er löst einen Effekt aus, der 5 Runden lang anhält. Zu Beginn jeder Runde, während er aktiv
  ist, gibt er 101 neues Mana.

Die Effekte funktionieren alle auf die gleiche Weise. Effekte werden sowohl zu Beginn des Zuges des Spielers als auch
des Bosses wirksam. Effekte werden mit einem Timer erstellt (die Anzahl der Züge, die sie andauern); zu Beginn jedes
Zuges, nachdem sie einen beliebigen Effekt angewendet haben, wird ihr Timer um eins verringert. Wenn dadurch der Timer
auf 0 sinkt, endet der Effekt. Es ist nicht möglich, einen Zauber zu wirken, der einen Effekt auslösen würde, der
bereits aktiv ist. Effekte können jedoch in derselben Runde gestartet werden, in der sie enden.

Nehmen wir zum Beispiel an, dass der Spieler 10 Trefferpunkte und 250 Mana hat und dass der Boss 13 Trefferpunkte und 8
Schaden hat:

```
-- Spielerzug --
- Spieler hat 10 Trefferpunkte, 0 Rüstung, 250 Mana
- Der Boss hat 13 Trefferpunkte
Spieler zaubert Gift.

-- Zug des Bosses --
- Der Spieler hat 10 Trefferpunkte, 0 Rüstung, 77 Mana
- Der Boss hat 13 Trefferpunkte
Gift verursacht 3 Schaden; sein Timer ist jetzt 5.
Der Boss greift mit 8 Schaden an.

-- Spieler ist am Zug.
- Der Spieler hat 2 Trefferpunkte, 0 Rüstung, 77 Mana
- Der Boss hat 10 Trefferpunkte
Gift fügt 3 Schaden zu; sein Timer ist jetzt 4.
Der Spieler zaubert Magisches Geschoss, das 4 Schaden verursacht.

-- Der Boss ist dran.
- Der Spieler hat 2 Trefferpunkte, 0 Rüstung, 24 Mana
- Der Boss hat 3 Trefferpunkte
Gift richtet 3 Schaden an. Dies tötet den Boss, und der Spieler gewinnt.
```

Nehmen wir nun dieselben Ausgangsbedingungen an, nur dass der Boss stattdessen 14 Trefferpunkte hat:

```
-- Spielerzug --
- Spieler hat 10 Trefferpunkte, 0 Rüstung, 250 Mana
- Der Boss hat 14 Trefferpunkte
Spieler wirkt Wiederaufladen.

-- Zug des Bosses --
- Der Spieler hat 10 Trefferpunkte, 0 Rüstung, 21 Mana
- Der Boss hat 14 Trefferpunkte
Wiederaufladen liefert 101 Mana; der Timer ist jetzt 4.
Der Boss greift an und verursacht 8 Schaden!

-- Spieler ist am Zug.
- Der Spieler hat 2 Trefferpunkte, 0 Rüstung, 122 Mana
- Der Boss hat 14 Trefferpunkte
Die Wiederaufladung liefert 101 Mana; ihr Timer ist jetzt 3.
Der Spieler zaubert einen Schild, der die Rüstung um 7 erhöht.

-- Der Boss ist dran.
- Der Spieler hat 2 Trefferpunkte, 7 Rüstung, 110 Mana
- Der Boss hat 14 Trefferpunkte
Der Timer des Schildes ist jetzt 5.
Wiederaufladen liefert 101 Mana; der Timer ist jetzt 2.
Der Boss greift für 8 - 7 = 1 Schaden an!

-- Spieler ist am Zug.
- Der Spieler hat 1 Trefferpunkt, 7 Rüstung, 211 Mana
- Der Boss hat 14 Trefferpunkte
Der Timer des Schildes ist jetzt 4.
Aufladen liefert 101 Mana; sein Timer ist jetzt 1.
Der Spieler wirkt Drain, verursacht 2 Schaden und heilt 2 Trefferpunkte.

-- Der Boss ist dran.
- Der Spieler hat 3 Trefferpunkte, 7 Rüstung, 239 Mana
- Der Boss hat 12 Trefferpunkte
Der Timer des Schildes ist jetzt 3.
Wiederaufladen liefert 101 Mana; sein Timer ist jetzt 0.
Wiederaufladung lässt nach.
Der Boss greift für 8 - 7 = 1 Schaden an!

-- Spieler ist am Zug.
- Der Spieler hat 2 Trefferpunkte, 7 Rüstung, 340 Mana
- Der Boss hat 12 Trefferpunkte
Der Timer des Schildes ist jetzt 2.
Der Spieler zaubert Gift.

-- Der Boss ist dran.
- Der Spieler hat 2 Trefferpunkte, 7 Rüstung, 167 Mana
- Der Boss hat 12 Trefferpunkte
Der Timer des Schildes ist jetzt 1.
Gift verursacht 3 Schaden; sein Timer ist jetzt 5.
Der Boss greift für 8 - 7 = 1 Schaden an!

-- Spieler ist am Zug.
- Der Spieler hat 1 Trefferpunkt, 7 Rüstung, 167 Mana
- Der Boss hat 9 Trefferpunkte
Der Timer des Schildes ist jetzt 0.
Der Schild nutzt sich ab, wodurch die Rüstung um 7 verringert wird.
Gift verursacht 3 Schaden; sein Timer ist jetzt 4.
Der Spieler zaubert ein magisches Geschoss, das 4 Schaden verursacht.

-- Der Boss ist dran.
- Der Spieler hat 1 Trefferpunkt, 0 Rüstung, 114 Mana
- Der Boss hat 2 Trefferpunkte
Gift richtet 3 Schaden an. Dies tötet den Boss, und der Spieler gewinnt.
```

Sie beginnen mit 50 Trefferpunkten und 500 Manapunkten. Die tatsächlichen Werte des Endgegners finden Sie in Ihrer
Rätseleingabe. Wie viel Mana können Sie am wenigsten ausgeben und trotzdem den Kampf gewinnen? (Mana-Aufladeeffekte
zählen nicht als "Ausgeben" von negativem Mana.)
