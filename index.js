// Code your solution here
function findMatching(drivers, string) {
  let match = drivers.filter(n => {
    return n.toLowerCase() === string.toLowerCase();
  })
  return match
}

function fuzzyMatch(drivers, string) {
  let fuzz = drivers.filter(n => {
    return n.substr(0, string.length) === string;
  })
  return fuzz
}

function matchName(drivers, string) {
  let matched = drivers.filter(n => {
    return n.name === string;
  })
  return matched
}
