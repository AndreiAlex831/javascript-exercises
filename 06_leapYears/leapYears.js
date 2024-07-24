const leapYears = function(year) {
    const divByFour = year % 4 === 0;
    const divByOneH = year % 100 === 0;
    const divByFourH = year % 400 === 0;
    if (divByFour && (!divByOneH || divByFourH)) {
        return true
    }else{
        return false
    }
}
leapYears(1985)
// Do not edit below this line
module.exports = leapYears;
