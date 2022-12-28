class Day02 {
  constructor(storeData) {
    this.storeData = storeData;
  }

  calc (l,w,h) {
    const result = 2*l*w + 2*w*h + 2*h*l;
    const minSide = Math.min(l*w,w*h,h*l);
    return result+minSide;
  }
  calcPartOne() {
    let result = 0;
    this.storeData.forEach((item)=>{
      const size3d = item.split('x');
      result += this.calc(size3d[0], size3d[1], size3d[2]);
    });
    return result;
  }
  calcPartTwo() {
    let result = 0;
    return result;
  }
}
export default Day02;

