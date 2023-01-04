import Day07 from "./Day07";
import {MOCK_DEMO_DATA_DAY_07} from "./DemoData07";
import {MOCK_CA_DATA_DAY_07} from "./CA";
import {MOCK_LIFE_DATA_DAY_07} from "./LifeData07";

describe('Test Class Day07', () => {
  test('constructor', () => {
    const day = new Day07();
    expect(day).toBeDefined();
  });
  test('uint32', () => {
    expect(Day07.toUint(-1)).toEqual(4294967295);
    expect(Day07.toUint(2049, 8)).toEqual(1);
    expect(Day07.str2bin('110')).toEqual(6);
    expect(Day07.number2bin(6)).toEqual('00000000000000000000000000000110');
    expect(Day07.number2bin(6, 8)).toEqual('00000110');
  });
  test('calcPartOne with demo data', () => {
    const storeData = MOCK_DEMO_DATA_DAY_07.split('\n');
    const day = new Day07(storeData);
    const result = day.calcPartOne();
    expect(result).toBeUndefined();
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
    // aa: 1
    // ab: 123
    expect(day.keyValueMap.get('d')).toEqual(72);
    expect(day.keyValueMap.get('e')).toEqual(507);
    expect(day.keyValueMap.get('f')).toEqual(492);
    expect(day.keyValueMap.get('g')).toEqual(114);
    expect(day.keyValueMap.get('h')).toEqual(65412);  // x: 123 => NOT x -> h
    expect(day.keyValueMap.get('i')).toEqual(65079);
    expect(day.keyValueMap.get('x')).toEqual(123);
    expect(day.keyValueMap.get('y')).toEqual(456);
    expect(day.keyValueMap.get('aa')).toEqual(1);
    expect(day.keyValueMap.get('ab')).toEqual(123);
  });
  test('calcPartOne with life data', () => {
    const storeData = MOCK_LIFE_DATA_DAY_07.split('\n');
    const day = new Day07(storeData);
    // what signal is ultimately provided to wire a
    const result = day.calcPartOne();
    expect(result).toEqual(16076);
  });
  test('calcPartOne with life data CA', () => {
    const storeData = MOCK_CA_DATA_DAY_07.split('\n');
    const day = new Day07(storeData);
    // what signal is ultimately provided to wire a
    const result = day.calcPartOne();
    expect(result).toEqual(956);
  });
  test('calcPartTwo with life data', () => {
    const storeData = MOCK_LIFE_DATA_DAY_07.split('\n');
    const day = new Day07(storeData);
    const result = day.calcPartTwo();
    // You have completed Day 07!
    expect(result).toEqual(2797);
  });
});
