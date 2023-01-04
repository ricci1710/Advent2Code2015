**--- Tag 8: Streichhölzer ---**

Da der Platz im Schlitten dieses Jahr begrenzt ist, bringt der Weihnachtsmann seine Liste als digitale Kopie mit. Er
muss wissen, wie viel Platz die Liste beim Speichern einnimmt.

In vielen Programmiersprachen gibt es eine Möglichkeit, Sonderzeichen in Zeichenketten zu umgehen. C, JavaScript, Perl,
Python und sogar PHP handhaben Sonderzeichen auf sehr ähnliche Weise.

Es ist jedoch wichtig, sich den Unterschied zwischen der Anzahl der Zeichen in der Codedarstellung des
Zeichenkettenliterals und der Anzahl der Zeichen in der speicherinternen Zeichenkette selbst bewusst zu machen.

```
Ein Beispiel:

- "" besteht aus 2 Zeichen Code (die beiden Anführungszeichen), aber die Zeichenfolge enthält null Zeichen.
- "abc" besteht aus 5 Zeichen Code, aber 3 Zeichen in den Zeichenkettendaten.
- "aaa\"aaa" besteht aus 10 Zeichen Code, aber die Zeichenfolge selbst enthält sechs "a"-Zeichen und ein einzelnes 
   Anführungszeichen, also insgesamt 7 Zeichen in den Zeichenkettendaten.
- "\x27" besteht aus 6 Zeichen, aber die Zeichenfolge selbst enthält nur ein Zeichen - ein Apostroph ('), das in 
   hexadezimaler Notation dargestellt wird.
```

Die Liste des Weihnachtsmanns ist eine Datei, die viele Zeichenfolgenliterale in doppelten Anführungszeichen enthält,
eines in jeder Zeile. Die einzigen Escape-Sequenzen, die verwendet werden, sind \\ (ein einzelner Backslash),
\" (ein einzelnes Anführungszeichen) und \x plus zwei hexadezimale Zeichen (ein einzelnes Zeichen mit diesem
ASCII-Code).

Wie hoch ist die Anzahl der Codezeichen für Zeichenfolgenliterale abzüglich der Anzahl der Zeichen im Speicher für die
Werte der Zeichenfolgen insgesamt für die gesamte Datei, ohne Berücksichtigung des Leerraums in der Datei?

Bei den vier obigen Zeichenketten beträgt die Gesamtzahl der Zeichen des Zeichenkettencodes (2 + 5 + 10 + 6 = 23)
abzüglich der Gesamtzahl der Zeichen im Speicher für die Zeichenkettenwerte (0 + 3 + 7 + 1 = 11) 23 - 11 = 12.

**--- Zweiter Teil ---**

Lassen Sie uns nun den umgekehrten Weg gehen. Zusätzlich zur Ermittlung der Anzahl der Zeichen des Codes sollten Sie nun
jede Code-Repräsentation als neue Zeichenkette kodieren und die Anzahl der Zeichen der neuen kodierten Repräsentation
ermitteln, einschließlich der umgebenden Anführungszeichen.

```
Zum Beispiel:

"" kodiert zu "\"\"", was eine Zunahme von 2 auf 6 Zeichen bedeutet.
"abc" verschlüsselt zu "\"abc\"", was eine Erhöhung von 5 auf 9 Zeichen bedeutet.
"aaa\"aaa" verschlüsselt zu "\"aaa\\"aaa\"", ein Zuwachs von 10 auf 16 Zeichen.
"\x27" verschlüsselt zu "\"\\x27\"", was eine Erhöhung von 6 auf 11 Zeichen bedeutet.
```

Ihre Aufgabe besteht darin, die Gesamtzahl der Zeichen zu ermitteln, die die neu kodierten Zeichenfolgen abzüglich der
Anzahl der Zeichen des Codes in jedem ursprünglichen Zeichenfolgenliteral darstellen. Für die obigen Zeichenketten
beträgt die kodierte Gesamtlänge (6 + 9 + 16 + 11 = 42) abzüglich der Zeichen in der ursprünglichen Code-Darstellung
(23, genau wie im ersten Teil dieses Rätsels) 42 - 23 = 19.