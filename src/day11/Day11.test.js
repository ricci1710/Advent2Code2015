import Day11 from "./Day11";

describe('Test Class Day11', () => {
  const demoDay = new Day11(11, true);
  const lifeDay = new Day11(11, false);

  test('constructor', () => {
    expect(demoDay).toBeDefined();
    expect(lifeDay).toBeDefined();
  });
  test('lettersAllowed', () => {
    let result = Day11.lettersAllowed('hijklmmn');
    expect(result).toBeFalsy();
    result = Day11.lettersAllowed('abbceffg');
    expect(result).toBeTruthy();
  });
  test('existDoubleLetter', () => {
    let result = Day11.existDoubleLetter('hijklmmn');
    expect(result).toBeFalsy();
    result = Day11.existDoubleLetter('abbceffg');
    expect(result).toBeTruthy();
  });
  test('existThreeFollowLetters', () => {
    let result = Day11.existThreeFollowLetters('hijklmmn');
    expect(result).toBeTruthy();
    result = Day11.existThreeFollowLetters('abbceffg');
    expect(result).toBeFalsy();
  });
  test('generatePassword', () => {
    let result;
    result = Day11.generatePassword('abcdefgz');
    expect(result).toEqual('abcdefha');
    result = Day11.generatePassword('zzcdefzz');
    expect(result).toEqual('zzcdegaa');
    result = Day11.generatePassword('abcdefgg');
    expect(result).toEqual('abcdefgh');
  });
  test('calcPartOne with demo data: abcdefgh', () => {
    demoDay.storeData = 'abcdefgh';
    const result = demoDay.calcPartOne();
    expect(result).toEqual('abcdffaa');
  });
  test('calcPartOne with demo data: ghijklmn', () => {
    demoDay.storeData = 'ghijklmn';
    const result = demoDay.calcPartOne();
    expect(result).toEqual('ghjaabcc');
  });
  test('calcPartOne with life data', () => {
    lifeDay.storeData = 'hxbxwxba';
    const result = lifeDay.calcPartOne();
    expect(result).toEqual('hxbxxyzz');
  });
  test('calcPartTwo with life data', () => {
    lifeDay.storeData = 'hxbxwxba';
    const result = lifeDay.calcPartTwo();
    // You have completed Day 11!
    expect(result).toEqual('hxcaabcc');
  });
});
