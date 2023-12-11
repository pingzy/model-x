enum dir { // from buttom to top level
    RIghtShift_UP ,
    LeftShift_UP ,
    RightShift_DOWN ,
    LeftShift_DOWN ,
}

type XYObject = { x: number; y: number };

function modifyXYArray(inputArray: XYObject[]): { x: number; y: number }[] { // moving from top level
  const resultArray: { x: number; y: number }[] = [];

  for (let i = 0; i < inputArray.length; i++) {
    const point = inputArray[i];
    const modifiedPoint = {
      x: point.x + 20,
      y: point.y + 20,
    };
    resultArray.push(modifiedPoint);

    const x1 = inputArray[i+1].x;
    const y1 = inputArray[i+1].y;
    const x2 = inputArray[i].x;
    const y2 = inputArray[i].y;
    
  }

  return resultArray;
}

// Example usage:
const inputArray: XYObject[] = [
  { x: 5, y: 10 },
  { x: 8, y: 15 },
  { x: 12, y: 18 },
];

const modifiedArray = modifyXYArray(inputArray);
console.log(modifiedArray);