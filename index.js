// Code your solution in this file
function map(drivers, callback) {
    const newArr = [];
 
    for (const element of drivers) {
        newArr.push(callback(drivers));
    }
 
    return newArr;
}