// Code your solution in this file
function lowerCaseDrivers(drivers) {
  return drivers.map(function (element) { return element.toLowerCase(); })
}

function nameToAttributes(drivers){
  return drivers.map(function (element) { return element.firstName, element.lastName})
}