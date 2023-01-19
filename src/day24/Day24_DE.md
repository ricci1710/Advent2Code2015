**--- Tag 24: Es steht auf der Kippe ---**

Es ist Heiligabend, und der Weihnachtsmann belädt den Schlitten für die diesjährigen Lieferungen. Allerdings gibt es ein
kleines Problem: Er kann den Schlitten nicht ausbalancieren. Wenn er nicht im Gleichgewicht ist, kann er die Physik
nicht überlisten, und niemand bekommt dieses Jahr Geschenke.

Kein Druck.

Der Weihnachtsmann hat dir eine Liste mit den Gewichten aller Pakete gegeben, die auf den Schlitten passen müssen. Die
Pakete müssen in drei Gruppen mit genau demselben Gewicht aufgeteilt werden, und jedes Paket muss hineinpassen. Die
erste Gruppe kommt in den Fahrgastraum des Schlittens, die zweite und dritte in die Behälter auf beiden Seiten. Nur wenn
alle drei Gruppen genau gleich viel wiegen, kann der Schlitten fliegen. Die Physik hat ihre eigenen Regeln, wisst ihr!

Das ist natürlich nicht das einzige Problem. _Die erste Gruppe_ - diejenige, die in den Fahrgastraum kommt - _braucht
so wenig Pakete wie möglich_, damit der Weihnachtsmann noch etwas Beinfreiheit hat. Es ist egal, wie viele Pakete in
einer der beiden anderen Gruppen sind, solange alle Gruppen das gleiche Gewicht haben.

Außerdem sagt dir der Weihnachtsmann, wenn es mehrere Möglichkeiten gibt, die Pakete so anzuordnen, dass die wenigsten
in der ersten Gruppe sind, dann musst du den Weg wählen, bei dem _die erste Gruppe die geringste Quantenverschränkung
hat_, um die Wahrscheinlichkeit von "Komplikationen" zu verringern. Die _Quantenverschränkung_ einer Gruppe von Paketen
ist das Produkt ihrer Gewichte, d. h. der Wert, den man erhält, wenn man ihre _Gewichte miteinander multipliziert_. Eine
Quantenverschränkung kommt nur dann in Betracht, wenn die erste Gruppe die geringstmögliche Anzahl von Paketen enthält
und alle Gruppen das gleiche Gewicht haben.

```
Nehmen wir zum Beispiel an, Sie haben zehn Pakete mit den Gewichten 1 bis 5 und 7 bis 11. In diesem Fall sind einige der
einzigartigen ersten Gruppen, ihre Quantenverschränkungen und eine Möglichkeit, die verbleibenden Pakete aufzuteilen,
wie folgt:

Gruppe 1;          Gruppe 2;    Gruppe 3
11 9       (QE= 99); 10 8 2;   7 5 4 3 1
10 9 1     (QE= 90); 11 7 2;   8 5 4 3
10 8 2     (QE=160); 11 9;     7 5 4 3 1
10 7 3     (QE=210); 11 9;     8 5 4 2 1
10 5 4 1   (QE=200); 11 9;     8 7 3 2
10 5 3 2   (QE=300); 11 9;     8 7 4 1
10 4 3 2 1 (QE=240); 11 9;     8 7 5
9 8 3      (QE=216); 11 7 2;  10 5 4 1
9 7 4      (QE=252); 11 8 1;  10 5 3 2
9 5 4 2    (QE=360); 11 8 1;  10 7 3
8 7 5      (QE=280); 11 9;    10 4 3 2 1
8 5 4 3    (QE=480); 11 9;    10 7 2 1
7 5 4 3 1  (QE=420); 11 9;    10 8 2

Von diesen hat 10 9 1 zwar die kleinste Quantenverschränkung (90), aber die Konfiguration mit nur zwei Paketen, 11 9, im
Fahrgastraum bietet dem Weihnachtsmann die größte Beinfreiheit und gewinnt. In dieser Situation beträgt die
Quantenverschränkung für die ideale Konfiguration also 99. Gäbe es zwei Konfigurationen mit nur zwei Paketen in der
ersten Gruppe, würde diejenige mit der geringeren Quantenverschränkung gewählt werden.
```

Wie hoch ist die Quantenverschränkung der ersten Gruppe von Paketen in der idealen Konfiguration?
