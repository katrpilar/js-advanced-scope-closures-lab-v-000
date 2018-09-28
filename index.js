function produceDrivingRange(blockRange){
  return function(firstBlk, secondBlk){
    let firstNum = parseInt(firstBlk);
    let secondNum = parseInt(secondBlk);
    if(secondNum-firstNum > blockRange){
      let diff = ((secondNum - firstNum) - blockRange)
      return diff.toString() + ' blocks out of range'
    }else{
      let reach = (blockRange - (secondNum-firstNum))
      return 'within range by ' + reach.toString()
    }
  }
};

function produceTipCalculator(percentage){
  return function(amt){
    return amt * percentage    
  }
}
