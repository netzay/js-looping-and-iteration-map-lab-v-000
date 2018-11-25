// Code your solution in this file
function lowerCaseDrivers(drivers) {
    const newArr = drivers.map(driver.toLowerCase());
 
    return newArr;
}
function lowerCaseDrivers(array) {
  return array.map(function (element) { return element.toLowerCase(); })
};