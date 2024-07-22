const removeFromArray = function(array, ...value) {
        array = array.filter(element => !value.includes(element));
    return array;
 };
removeFromArray([1,2,3,4], 3, 2);

// Do not edit below this line
module.exports = removeFromArray;
