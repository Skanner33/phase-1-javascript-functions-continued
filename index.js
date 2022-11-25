function saturdayFun(event = 'roller-skate'){
  return `This Saturday, I want to ${event}!`  
}

function mondayWork(work = 'go to the office'){
  return `This Monday, I will ${work}.`
}

function wrapAdjective(flair= "*"){
  return function (mike = " a hard worker "){
    return `You are ${flair}${mike}${flair}!`;
  }
}