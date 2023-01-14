**--- Tag 19: Medizin für Rudolph ---**

Rudolph, das rotnasige Rentier, ist krank! Seine Nase leuchtet nicht besonders hell, und er braucht Medizin.

Die Biologie des Rentiers mit der roten Nase ist nicht vergleichbar mit der Biologie eines normalen Rentiers; Rudolph
braucht eine maßgeschneiderte Medizin. Leider ist die Chemie des Rentiers mit der roten Nase auch nicht mit der normalen
Rentierchemie vergleichbar.

Der Nordpol ist mit einer Kernfusions- und Kernspaltungsanlage für Rentiere mit roten Nasen ausgestattet, die jedes
beliebige Molekül für Rentiere mit roten Nasen herstellen kann. Die Maschine beginnt mit einem Eingangsmolekül und
ersetzt es dann Schritt für Schritt, bis sie das richtige Molekül hat.

Allerdings muss die Maschine kalibriert werden, bevor sie eingesetzt werden kann. Bei der Kalibrierung geht es darum,
die Anzahl der Moleküle zu bestimmen, die in einem Schritt von einem bestimmten Ausgangspunkt aus erzeugt werden können.

```
Stellen Sie sich zum Beispiel eine einfachere Maschine vor, die nur die folgenden Ersetzungen unterstützt:

H => HO
H => OH
O => HH
Mit den obigen Ersetzungen und ausgehend von HOH könnten die folgenden Moleküle erzeugt werden:

HOOH (über H => HO am ersten H).
HOHO (über H => HO am zweiten H).
OHOH (über H => OH am ersten H).
HOOH (über H => OH am zweiten H).
HHHH (über O => HH).

Im obigen Beispiel gibt es also 4 verschiedene Moleküle (nicht fünf, da HOOH zweimal vorkommt) nach einer Ersetzung 
durch HOH. Das Lieblingsmolekül des Weihnachtsmanns, HOHOHO, kann zu 7 verschiedenen Molekülen werden (über neun 
Ersetzungen: sechs aus H und drei aus O).

Die Maschine ersetzt ohne Rücksicht auf die umgebenden Zeichen. Bei der Zeichenkette H2O zum Beispiel würde der 
Übergang H => OO zu OO2O führen.
```

Ihre Rätseleingabe beschreibt alle möglichen Ersetzungen und am Ende das Medikamentenmolekül, für das Sie die Maschine
kalibrieren müssen. Wie viele verschiedene Moleküle können durch die verschiedenen Ersetzungen des Medikamentenmoleküls
erzeugt werden?

**--- Zweiter Teil ---**

Nun, da die Maschine kalibriert ist, kannst du mit der Herstellung von Molekülen beginnen.

Die Herstellung von Molekülen beginnt immer mit einem einzigen Elektron, e, und der Anwendung von Ersetzungen, eine nach
der anderen, genau wie die während der Kalibrierung.

```
Nehmen wir zum Beispiel an, Sie haben die folgenden Ersetzungen:

e => H
e => O
H => HO
H => OH
O => HH

Wenn du HOH machen möchtest, beginnst du mit e und nimmst dann die folgenden Ersetzungen vor:
HOH -> eOH
H -> e => O, um O zu erhalten
O -> O => HH, um HH zu erhalten
H -> H => OH (am zweiten H), um HOH zu erhalten

Ergebnis: HOOH

Man könnte also nach 3 Schritten HOH herstellen. Das Lieblingsmolekül des Weihnachtsmanns, HOHOHO, kann in 6 Schritten
hergestellt werden.
```

Wie lange dauert es, das Medikament herzustellen? Wie viele Schritte sind nötig, um von e zum Medikamentenmolekül zu
gelangen, wenn man die verfügbaren Ersatzstoffe und das Medikamentenmolekül in der Rätseleingabe berücksichtigt?
