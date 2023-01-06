import Day08 from "./Day08";

describe('Test Class Day08', () => {
  const demoDay = new Day08(8, true);
  const lifeDay = new Day08(8, false);

  test('constructor', () => {
    expect(demoDay).toBeDefined();
    expect(lifeDay).toBeDefined();
  });
  test('aaa\"aaa', () => {
    const data = demoDay.storeData[2];
    const utf8Length = Day08.getUtf8Length(data);
    expect(utf8Length).toEqual(10);
    const asciiLength = Day08.getAsciiLength(data);
    expect(asciiLength).toEqual(7);
  });
  test('\x27', () => {
    const data = demoDay.storeData[3];
    const utf8Length = Day08.getUtf8Length(data);
    expect(utf8Length).toEqual(6);
    const asciiLength = Day08.getAsciiLength(data);
    expect(asciiLength).toEqual(1);
  });
  test('aaa\"aa\x27a', () => {
    const data = demoDay.storeData[4];
    const utf8Length = Day08.getUtf8Length(data);
    expect(utf8Length).toEqual(14);
    const asciiLength = Day08.getAsciiLength(data);
    expect(asciiLength).toEqual(8);
  });
  test('byc\x9dyxuafof\\\xa6uf\\axfozomj\\olh\x6a', () => {
    const data = demoDay.storeData[7];
    const utf8Length = Day08.getUtf8Length(data);
    expect(utf8Length).toEqual(43);
    const asciiLength = Day08.getAsciiLength(data);
    expect(asciiLength).toEqual(29);
  });
  test('"vvdnb\\x\\uhnxfw\"dpubfkxfmeuhnxisd"', () => {
    const data = demoDay.storeData[9];
    const utf8Length = Day08.getUtf8Length(data);
    expect(utf8Length).toEqual(37);
    const asciiLength = Day08.getAsciiLength(data);
    expect(asciiLength).toEqual(32);
  });
  test('"ogvazaqy\"j\x73"', () => {
    const data = demoDay.storeData[10];
    const utf8Length = Day08.getUtf8Length(data);
    expect(utf8Length).toEqual(17);
    const asciiLength = Day08.getAsciiLength(data);
    expect(asciiLength).toEqual(11);
  });
  test('"\\\xb1qso\"s"', () => {
    const data = demoDay.storeData[11];
    const utf8Length = Day08.getUtf8Length(data);
    expect(utf8Length).toEqual(14);
    const asciiLength = Day08.getAsciiLength(data);
    expect(asciiLength).toEqual(7);
  });
  test('"\\\\xuvqso\"s""', () => {
    const data = demoDay.storeData[12];
    const utf8Length = Day08.getUtf8Length(data);
    expect(utf8Length).toEqual(14);
    const asciiLength = Day08.getAsciiLength(data);
    expect(asciiLength).toEqual(10);
  });
  test('calcPartOne with demo data', () => {
    demoDay.storeData = demoDay.storeData.slice(0, 4);
    const result = demoDay.calcPartOne();
    expect(result).toEqual(12);
  });
  test('calcPartOne with life data', () => {
    const result = lifeDay.calcPartOne();
    expect(result).toEqual(1350);
  });
  test('calcPartTwo with demo data', () => {
    const result = demoDay.calcPartTwo();
    expect(result).toEqual(19);
  });
  test('calcPartTwo with life data', () => {
    const result = lifeDay.calcPartTwo();
    // You have completed Day 08!
    expect(result).toEqual(2085);
  });
});
