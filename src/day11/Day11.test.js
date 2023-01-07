import Day11 from "./Day11";

describe('Test Class Day11', () => {
  const demoDay = new Day11(11, true);
  const lifeDay = new Day11(11, false);

  test('constructor', () => {
    expect(demoDay).toBeDefined();
    expect(lifeDay).toBeDefined();
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
    expect(result).toEqual('a');
  });
  // test('calcPartTwo with demo data', () => {
  //   const result = demoDay.calcPartTwo();
  //   expect(result).toEqual(-1);
  // });
  // test('calcPartTwo with life data', () => {
  //   const result = lifeDay.calcPartTwo();
  //   // You have completed Day XX!
  //   expect(result).toEqual(-1);
  // });
});
