import Day from "../base/Day";

class Day12 extends Day {
  constructor(dayNumber, loadDemoData) {
    super(dayNumber, loadDemoData);
  }

  static findAllNumbers(value) {
    let m;
    const regex = /(-[0-9]+)|([0-9]+)/gm;
    let sum = 0;

    while ((m = regex.exec(value)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      } else {
        sum += parseInt(m[0], 10);
      }
    }

    return sum;
  }

  calcPartOne() {
    return Day12.findAllNumbers(this.storeData.toString());
  }

  // calcPartTwo() {
  //   let result = 0;
  //   const data = JSON.parse(this.storeData);
  //   const test = (value, result) => {
  //     value.forEach((item) => {
  //       if (Array.isArray(item)) {
  //         test(item);
  //       } else if (typeof item === 'object') {
  //         const values = Object.values(item);
  //         const valueString = values.toString();
  //         if (valueString.indexOf('red') === -1) {
  //           for (let idx = 0; idx < values.length; idx += 1) {
  //             let objectValue = values[idx].toString();
  //             const num = parseInt(objectValue, 10);
  //             if (!isNaN(num))
  //               result += num;
  //           }
  //         }
  //       }
  //       console.log(item);
  //     });
  //     return result;
  //   }
  //
  //   test(data);
  //   return result;
  // }

  calcPartTwo() {
    const data = JSON.parse(this.storeData);
    // const test = (value) => {
    //   const removeIndices = [];
    //   for (let removeIdx = 0; removeIdx < value.length; removeIdx += 1) {
    //     // value.forEach((item) => {
    //     const item = value[removeIdx];
    //     if (Array.isArray(item)) {
    //       test(item);
    //     }
    //     else if (typeof item === 'object') {
    //       const values = Object.values(item);
    //       const valueString = values.toString();
    //       if (valueString.indexOf('red') >= 0) {
    //         removeIndices.push(removeIdx);
    //       }
    //       else {
    //         values.forEach(objValue => {
    //           if (typeof objValue === 'object')
    //             test(objValue);
    //           console.log(objValue);
    //         });
    //       }
    //     }
    //     else if (typeof item === 'string' && item === 'red') {
    //       removeIndices.push(removeIdx);
    //     }
    //   }
    //   removeIndices.forEach(delIdx => value.splice(delIdx, 1));
    //   console.log(data);
    // }

    const recursiveArray = (array) => {
      const removeIndices = [];
      for (let idx = 0; idx < array.length; idx += 1) {
        let value = array[idx];
        if (Array.isArray(value))
          recursiveArray(value);
        else if (value === 'red')
          removeIndices.push(idx);
        else if (typeof value === 'object')
          if (recursiveObject(value)) {
            removeIndices.push(idx);
          }
      }
      removeIndices.reduceRight((_, elem) => array.splice(elem, 1), null);
    };

    const recursiveObject = (objValue) => {
      for (const [key, value] of Object.entries(objValue)) {
        if (value === 'red') {
          return true;
        } else if (Array.isArray(value))
          recursiveArray(value);
        else if (typeof value === 'object')
          if (recursiveObject(value)) {
            delete objValue[key];
          }
      }
      return false;
      // for (const value of Object.values(objValue)) {
      //   if (value === 'red') {
      //     objValue = {};
      //     break;
      //   } else if (Array.isArray(value))
      //     recursiveArray(value);
      //   else if (typeof value === 'object')
      //     objValue = recursiveObject(value);
      // }
      // return objValue;
    };

    const test = (value) => {
      if (Array.isArray(value))
        recursiveArray(value);
      else
        recursiveObject(value);
    };


    test(data);
    this.storeData = JSON.stringify(data);
    return this.calcPartOne();
  }
}

export default Day12;

