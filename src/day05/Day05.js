class Day05 {
  constructor(storeData) {
    this.storeData = storeData;
  }

  /**
   * Rules:
   * It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou. => /(a|e|i|o|u)/gm
   * It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd). => /(\w)\1+/gm
   * It does not contain the strings' ab, cd, pq, or xy, even if they are part of one of the other requirements.
   *
   */

  /**
   * It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou. => /([aeiou])/gm
   * @param item Text
   * @returns {boolean}
   */
  checkVowels(item) {
    let counter = 0;
    const letters = item.split('');
    for (const letter of letters) {
      if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u')
        counter += 1;

      if (counter === 3)
        break;
    }
    return counter === 3;
  }
  /**
   * It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd
   * (aa, bb, cc, or dd). => /(\w)\1+/gm
   * @param item Text
   * @returns {boolean}
   */
  checkTwiceLetterInRow(item) {
    const regExp = new RegExp(/(\w)\1+/gm);
    return regExp.test(item);
  }
  /**
   * It does not contain the strings' ab, cd, pq, or xy, even if they are part of one of the other requirements.
   */
  checkNotAllowed (item) {
    if (item.indexOf('ab') >= 0)
      return false;
    if (item.indexOf('cd') >= 0)
      return false;
    if (item.indexOf('pq') >= 0)
      return false;

    return item.indexOf('xy') < 0;
  }

  /**
   * It contains a pair of any two letters that appears at least twice in the string without overlapping, like xyxy (xy)
   * or aabcdefgaa (aa), but not like aaa (aa, but it overlaps).
   * It contains at least one letter which repeats with exactly one letter between them, like xyx, abcdefeghi (efe), or
   * even aaa.
   */
  rulesPartTow(item) {
    const repeat=item.match(/([a-z][a-z])[a-z]*\1/);
    const zxz=item.match(/([a-z])[a-z]\1/);
    return (repeat !== null && repeat.length>0) && (zxz !== null && zxz.length>0)
  }
  calcPartOne() {
    let result = 0;
    let checkOk = true;

    this.storeData.forEach((item)=>{
      let checkOk = this.checkNotAllowed(item);
      checkOk = checkOk && this.checkVowels(item);
      checkOk = checkOk && this.checkTwiceLetterInRow(item);

      if (checkOk)
        result += 1;
    });
    return result;
  }
  calcPartTwo() {
    let result = 0;
    this.storeData.forEach((item)=>{
      if (this.rulesPartTow(item))
        result += 1;
    });
    return result;
  }
}
export default Day05;

