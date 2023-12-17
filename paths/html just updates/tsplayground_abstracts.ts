interface xycoord{
    x: number ;
    y: number ;
}
function sideLeft( arr: xycoord [] , amps: number ) {
    let xlnew = [] ;
    for (let i = 0; i < arr.length; i++) {
         if (i == (arr.length -1) ) {
            xlnew.push({x: arr[i].x-amps , y: arr[i].y}) ;
            break ;
        }
        const diff = arr[i+1].x - arr[i].x;
        const ydiff = arr[i+1].y - arr[i].y;
        const theta = Math.atan((ydiff/diff)+(ydiff%diff)); // Direction
        if (i==0) {
            // first is x shifted left
            xlnew.push({x: arr[i].x-amps , y: arr[i].y}) ;
            console.log(xlnew)
            continue ;
        }
       
        if (diff >0) {   // Do no need diff here just  """" x > 0 """"   is enough
            xlnew.push({x : arr[i].x - amps , y: arr[i].y}) ;
            xlnew.push({x : arr[i].x - amps + Math.cos(theta)*amps , y : arr[i].y + Math.sin(theta)*amps  }) ;
        }if (diff <0) {
            xlnew.push({x : arr[i].x -amps - Math.cos(theta)*amps , y : arr[i].y - Math.sin(theta)*amps  }) ;
            xlnew.push({x : arr[i].x - amps , y: arr[i].y}) ;
            
        }if (diff === 0) {
            xlnew.push({x : arr[i].x - amps , y: arr[i].y}) ;            
        }      
    }
    return xlnew ;
}

const Datais = Array.from({length:4} , (_ , i) =>({
    x: i*10 ,
    y: i*11 
}))

const hme = sideLeft(Datais , 15 ) ;
console.log("side   :  " + JSON.stringify(hme) )
console.log(JSON.stringify(Datais))
// so compiled js version ...
// "use strict";
// function sideLeft(arr, amps) {
//     let xlnew = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i == (arr.length - 1)) {
//             xlnew.push({ x: arr[i].x - amps, y: arr[i].y });
//             break;
//         }
//         const diff = arr[i + 1].x - arr[i].x;
//         const ydiff = arr[i + 1].y - arr[i].y;
//         const theta = Math.atan((ydiff / diff) + (ydiff % diff)); // Direction
//         if (i == 0) {
//             // first is x shifted left
//             xlnew.push({ x: arr[i].x - amps, y: arr[i].y });
//             console.log(xlnew);
//             continue;
//         }
//         if (diff > 0) { // Do no need diff here just  """" x > 0 """"   is enough
//             xlnew.push({ x: arr[i].x - amps, y: arr[i].y });
//             xlnew.push({ x: arr[i].x - amps + Math.cos(theta) * amps, y: arr[i].y + Math.sin(theta) * amps });
//         }
//         if (diff < 0) {
//             xlnew.push({ x: arr[i].x - amps - Math.cos(theta) * amps, y: arr[i].y - Math.sin(theta) * amps });
//             xlnew.push({ x: arr[i].x - amps, y: arr[i].y });
//         }
//         if (diff === 0) {
//             xlnew.push({ x: arr[i].x - amps, y: arr[i].y });
//         }
//     }
//     return xlnew;
// }
// const Datais = Array.from({ length: 4 }, (_, i) => ({
//     x: i * 10,
//     y: i * 11
// }));
// const hme = sideLeft(Datais, 15);
// console.log("side   :  " + JSON.stringify(hme));
// console.log(JSON.stringify(Datais));
