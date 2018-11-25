// Code your solution in this file
function lowerCaseDrivers(drivers) {
    const newArr = drivers.map(driver.toLowerCase());
 
    return newArr;
}
var elems = document.querySelectorAll('select option:checked');
var values = Array.prototype.map.call(elems, function(obj) {
  return obj.value;
});