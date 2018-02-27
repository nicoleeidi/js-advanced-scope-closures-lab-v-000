function produceDrivingRange(blockRange){
  return function(startblock,endblock){
    let start=startblock.substring(0,2)
    let end=endblock.substring(0,2)
    let distance= Math.abs(start-end) //need to remove the th!!
    if (distance>blockRange){
      return `${distance-blockRange} blocks out of range`
    }
    else {
      return `within range by ${blockRange-distance}`
    }
  }
}
function produceTipCalculator(tip){
  return function(fare){
    return fare*tip

  }
}

function createDriver(){
  let driverId=0
  return class {
    constructor(name){
      this.name=name
      this.id=++driverId
    }
  }
}
