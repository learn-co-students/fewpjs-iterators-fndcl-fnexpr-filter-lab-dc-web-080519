// Code your solution here
function findMatching(driverArray, str) {
  return driverArray.filter(driver => {
    return driver.toLowerCase() === str.toLowerCase();
  });
}

function fuzzyMatch(driverArray, str) {
  const subString = str.length;
  return driverArray.filter(driver => {
    return driver.slice(0, subString).toLowerCase() === str.toLowerCase();
  } );
}

function matchName(driverObjectArray, str) {
  return driverObjectArray.filter(driver => {
    return driver["name"].toLowerCase() === str.toLowerCase();
  });
}