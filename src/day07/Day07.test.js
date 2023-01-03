import Day07 from "./Day07";
import {MOCK_DEMO_DATA_DAY_07} from "./DemoData07";
import {MOCK_LIFE_DATA_DAY_07} from "./LifeData07";

describe('Test Class Day07', () => {
  test('constructor', () => {
    const day = new Day07();
    expect(day).toBeDefined();
  });
  test('uint32', () => {
    expect(Day07.toUint32(-1)).toEqual(4294967295);
    expect(Day07.str2bin('110')).toEqual(6);
    expect(Day07.number2bin(6)).toEqual('00000000000000000000000000000110');
  });
  test('calcPartOne with demo data', () => {
    const storeData = MOCK_DEMO_DATA_DAY_07.split('\n');
    const day = new Day07(storeData);
    const result = day.calcPartOne();
    // After it is run, these are the signals on the wires:
    //
    // d: 72
    // e: 507
    // f: 492
    // g: 114
    // h: 65412
    // i: 65079
    // x: 123
    // y: 456
    expect(result).toEqual(-1);
  });
  test('calcPartOne with life data', () => {
    const storeData = MOCK_LIFE_DATA_DAY_07.split('\n');
    const day = new Day07(storeData);
    // what signal is ultimately provided to wire a
    const result = day.calcPartOne();
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with demo data', () => {
    const storeData = MOCK_DEMO_DATA_DAY_07.split('\n');
    const day = new Day07(storeData);
    const result = day.calcPartTwo();
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with life data', () => {
    const storeData = MOCK_LIFE_DATA_DAY_07.split('\n');
    const day = new Day07(storeData);
    const result = day.calcPartTwo();
    // You have completed Day XX!
    expect(result).toEqual(-1);
  });
});
