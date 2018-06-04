function produceDrivingRange(range) {
  return function(startBlock, endBlock) {
    let trip = Math.abs(parseInt(endBlock) - parseInt(startBlock));
    let distance = trip - range;
    if (distance > 0) {
      return `${distance} blocks out of range`;
    } else {
      return `within range by ${Math.abs(distance)}`;
    }
  };
}

function produceTipCalculator(percentage) {
  return function(fare) {
    return fare * percentage;
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name){
      this.id = ++driverId;
      this.name = name;
    }
  }
}
