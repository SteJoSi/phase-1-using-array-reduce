const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//function totalBatteries(batteryBatches, reducer, init) {
   // let accum = init;
   // for (const element of batteryBatches) {
//         accum = reducer(accum, element);
//     }
//     return accum;
// }

const totalBatteries = batteryBatches.reduce((a, b)=> a + b)