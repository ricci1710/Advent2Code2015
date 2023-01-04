import Array2d from "./Array2d";

describe('Test class Array2d', () => {
  test('constructor', () => {
    const array2d = new Array2d({x: 10, y: 10}, false);
    expect(array2d).toBeDefined();
    console.log(array2d);
  });
  test('subarray', () => {
    const array2d = new Array2d({x: 1000, y: 1000}, false);
    expect(array2d).toBeDefined();
  });
});
