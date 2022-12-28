class Day02 {
  constructor(storeData) {
    this.storeData = storeData;
  }

  calcPO (l,w,h) {
    const result = 2*l*w + 2*w*h + 2*h*l;
    const minSide = Math.min(l*w,w*h,h*l);
    return result+minSide;
  }
  calcPT (l,w,h) {
    const result = l*w*h;
    const minSide = Math.min(2*l+2*w,2*w+2*h,2*h+2*l);
    return result+minSide;
  }
  calcPartOne() {
    let result = 0;
    this.storeData.forEach((item)=>{
      const size3d = item.split('x');
      result += this.calcPO(size3d[0], size3d[1], size3d[2]);
    });
    return result;
  }
  calcPartTwo() {
    let result = 0;
    this.storeData.forEach((item)=>{
      const size3d = item.split('x');
      result += this.calcPT(size3d[0], size3d[1], size3d[2]);
    });
    return result;
  }
}
export default Day02;

