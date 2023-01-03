import Day06 from "./Day06";
import {MOCK_LIFE_DATA_DAY_06} from "./LifeData06";

describe('Test Class Day06', () => {
  test('constructor', () => {
    const day = new Day06();
    expect(day).toBeDefined();
  });
  test('parseLine turn on', () => {
    const day = new Day06();
    let { cmd, fromPoint, toPoint } = day.parseLine('turn on 887,9 through 959,629');
    expect(cmd).toEqual('on');
    expect(JSON.stringify(fromPoint)).toEqual(JSON.stringify({ x: 887, y: 9 }));
    expect(JSON.stringify(toPoint)).toEqual(JSON.stringify({ x: 959, y: 629 }));
  });
  test('parseLine turn off', () => {
    const day = new Day06();
    let { cmd, fromPoint, toPoint } = day.parseLine('turn off 539,243 through 559,965');
    expect(cmd).toEqual('off');
    expect(JSON.stringify(fromPoint)).toEqual(JSON.stringify({ x: 539, y: 243 }));
    expect(JSON.stringify(toPoint)).toEqual(JSON.stringify({ x: 559, y: 965 }));
  });
  test('parseLine turn toggle', () => {
    const day = new Day06();
    let { cmd, fromPoint, toPoint } = day.parseLine('toggle 720,196 through 897,994');
    expect(cmd).toEqual('toggle');
    expect(JSON.stringify(fromPoint)).toEqual(JSON.stringify({ x: 720, y: 196 }));
    expect(JSON.stringify(toPoint)).toEqual(JSON.stringify({ x: 897, y: 994 }));
  });
  test('initPlayground', () => {
    const day = new Day06();
    day.initPlayground(10, false);
    expect(day.playground.sizeToString).toEqual(JSON.stringify({ x: 10, y: 10 }));
    expect(day.playground.get(5, 5)).toBeFalsy();
  });
  test('calcPartOne with demo data', () => {
    const storeData = ['turn on 0,0 through 0,0'];
    const day = new Day06(storeData, 1000);
    const result = day.calcPartOne();
    expect(result).toEqual(1);
  });
  test('calcPartOne with life data', () => {
    const storeData = MOCK_LIFE_DATA_DAY_06.split('\n');
    const day = new Day06(storeData, 1000);
    const result = day.calcPartOne();
    expect(result).toEqual(377891);
  });
  test('calcPartTwo with demo data', () => {
    const storeData = ['toggle 0,0 through 999,999'];
    const day = new Day06(storeData, 1000);
    const result = day.calcPartTwo();
    expect(result).toEqual(2000000);
  });
  test('calcPartTwo with life data', () => {
    const storeData = MOCK_LIFE_DATA_DAY_06.split('\n');
    const day = new Day06(storeData, 1000);
    const result = day.calcPartTwo();
    // You have completed Day XX!
    expect(result).toEqual(14110788);
  });
});
