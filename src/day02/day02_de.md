**--- Tag 2: Mir wurde gesagt, es gäbe keine Mathematik ---**

Den Elfen geht das Geschenkpapier aus und sie müssen eine Nachbestellung aufgeben. Sie haben eine Liste mit den 
Abmessungen (Länge l, Breite w und Höhe h) jedes Geschenks und wollen nur genau so viel bestellen, wie sie brauchen.

Glücklicherweise ist jedes Geschenk eine Schachtel (ein perfektes rechtwinkliges Prisma), was die Berechnung des 
benötigten Geschenkpapiers für jedes Geschenk ein wenig vereinfacht: 

```Die Fläche der Schachtel beträgt 
2*l*w + 2*w*h + 2*h*l.
```

Die Wichtel brauchen außerdem für jedes Geschenk ein wenig mehr Papier: die Fläche der
kleinsten Seite.

```
Ein Beispiel:

Für ein Geschenk mit den Maßen 2x3x4 braucht man 2*6 + 2*12 + 2*8 = 52 Quadratfuß Geschenkpapier plus 6 Quadratfuß 
loses Papier, also insgesamt 58 Quadratfuß.
Für ein Geschenk mit den Maßen 1x1x10 braucht man 2*1 + 2*10 + 2*10 = 42 Quadratfuß Geschenkpapier plus 1 Quadratfuß 
Durchhang, also insgesamt 43 Quadratfuß.
```

Alle Zahlen in der Liste der Elfen sind in Fuß angegeben. Wie viele Quadratmeter Geschenkpapier sollten sie 
insgesamt bestellen?

**--- Zweiter Teil ---**

Den Elfen gehen auch die Bänder aus. Die Bänder sind alle gleich breit, sodass sie sich nur über die Länge Gedanken 
machen müssen, die sie bestellen müssen, und auch hier möchten sie genau sein.

Das Band, das zum Einpacken eines Geschenks benötigt wird, ist die kürzeste Strecke um die Seiten oder der kleinste 
Umfang einer Seite. Für jedes Geschenk wird auch eine Schleife aus Band benötigt; die Meter Band, die für die perfekte 
Schleife benötigt werden, entsprechen dem Kubikmeter Volumen des Geschenks. Fragen Sie aber nicht, wie sie die Schleife 
binden, das verraten sie nicht.
```
Ein Beispiel:

Ein Geschenk mit den Maßen 2x3x4 erfordert 2+2+3+3 = 10 Fuß Band 
zum Einwickeln des Geschenks plus 2*3*4 = 24 Fuß Band für die Schleife, also insgesamt 34 Fuß.

Für ein Geschenk mit den Maßen 1x1x10 benötigt man 1+1+1+1 = 4 Fuß Band 
zum Einwickeln des Geschenks plus 1*1*10 = 10 Fuß Band für die Schleife, also insgesamt 14 Fuß.
```

Wie viele Meter Band sollten sie insgesamt bestellen?

Formel Umfang Rechteck: U = 2 · a + 2 · b.
