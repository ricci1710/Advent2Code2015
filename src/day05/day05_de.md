**--- Tag 5: Hat er keine Praktikanten-Elfen für so etwas? ---**

Der Weihnachtsmann braucht Hilfe, um herauszufinden, welche Zeichenfolgen in seiner Textdatei unartig oder nett sind.

Eine nette Zeichenfolge ist eine, die alle folgenden Eigenschaften hat

Sie enthält mindestens drei Vokale (nur aeiou), wie aei, xazegov oder aeiouaeiouaeiou.
Er enthält mindestens einen Buchstaben, der zweimal hintereinander vorkommt, wie xx, abcdde (dd) oder 
aabbccdd (aa, bb, cc oder dd).
Er enthält nicht die Zeichenfolgen ab, cd, pq oder xy, auch wenn sie Teil einer der anderen Anforderungen sind.
```
Zum Beispiel:

ugknbfddgicrmopn ist gut, weil es mindestens drei Vokale (u...i...o...), einen Doppelbuchstaben (...dd...) und keine der 
unzulässigen Teilzeichenfolgen enthält. aaa ist gut, weil es mindestens drei Vokale und einen Doppelbuchstaben hat, auch 
wenn sich die Buchstaben, die nach verschiedenen Regeln verwendet werden, überschneiden.

jchzalrnumimnmhp ist unanständig, weil es keinen Doppelbuchstaben hat.
haegwjzuvuyypxyu ist unanständig, weil es die Zeichenfolge xy enthält.
dvszwmarrgswjxmb ist unanständig, weil sie nur einen Vokal enthält.
```

Wie viele Zeichenfolgen sind schön?

**--- Teil 2 ---**

Der Weihnachtsmann hat seinen Fehler eingesehen und ist zu einem besseren Modell übergegangen, um zu bestimmen, ob eine 
Schnur böse oder nett ist. Die alten Regeln gelten nicht mehr, denn sie sind alle eindeutig lächerlich.

Jetzt ist eine Zeichenkette nett, wenn sie alle folgenden Eigenschaften aufweist:

Sie enthält ein Paar aus zwei beliebigen Buchstaben, das mindestens zweimal in der Zeichenfolge vorkommt, ohne sich zu 
überschneiden, wie xyxy (xy) oder aabcdefgaa (aa), aber nicht wie aaa (aa, aber es überschneidet sich).
Sie enthält mindestens einen Buchstaben, der sich mit genau einem Buchstaben dazwischen wiederholt, wie xyx, abcdefeghi 
(efe) oder sogar aaa.
```
Zum Beispiel:

qjhvhtzxzqqjkmpb ist schön, weil es ein Paar hat, das zweimal vorkommt (qj) und einen Buchstaben, der sich mit genau 
einem Buchstaben dazwischen wiederholt (zxz).

xxyxx ist gut, weil es ein Paar hat, das zweimal vorkommt, und einen Buchstaben, der sich mit einem dazwischenliegenden 
Buchstaben wiederholt, auch wenn sich die Buchstaben, die von jeder Regel verwendet werden, überschneiden.

uurcxstgmygtbstg ist unanständig, weil es ein Paar (tg), aber keine Wiederholung mit einem einzelnen Buchstaben 
dazwischen hat.

ieodomkazucvgmuy ist böse, weil sie einen sich wiederholenden Buchstaben mit einem dazwischen (odo) hat, aber kein Paar, 
das zweimal vorkommt.
```

Wie viele Zeichenfolgen sind nach diesen neuen Regeln schön?
