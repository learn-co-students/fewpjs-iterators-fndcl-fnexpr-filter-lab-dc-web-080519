// Code your solution here
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});


function findMatching(drivers, string){
  let newArr = [];
  for (let i = 0; i < drivers.length; i++){
    if (drivers[i].toLowerCase() === string.toLowerCase()){
      newArr.push(drivers[i])
    }
  }
  return newArr;
}


function fuzzyMatch(array, string){
  debugger
  let newArr = [];
  for (let i = 0; i < array.length; i++){
    if (array[i].startsWith(string)){
      newArr.push(array[i])
    }
  }
  return newArr;
}

function matchName(array, string){
  debugger
  let newArr = [];
  for (let i = 0; i < array.length; i++){
    if (array[i].name === string){
      newArr.push(array[i])
    }
  }
  return newArr;
}
