const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = batteryBatches.reduce(superCounter, 0)

function superCounter(accumulator, element){
    return element + accumulator;
}