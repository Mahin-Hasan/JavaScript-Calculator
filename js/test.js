/*
radianToDegree
isJavaScriptFile
oilPrice
publicBusFare
isBestFriend
*/
//1. Radian to degree conversion
function radianToDegree(num) {
    if (typeof num !== 'number') {
        return 'Please enter a number';
    }
    let inDegree = num * 57.2958;
    let degreeInTwoDecimal = inDegree.toFixed(2);
    return degreeInTwoDecimal
}
const degree = radianToDegree(1);
console.log(degree);
//2. check file type is .js or not
function isJavaScriptFile(fileName) {
    if (typeof fileName !== 'string') {
        return 'Please enter a filename';
    }
    if (fileName.endsWith('.js')) {
        return true;
    }
    else {
        return false;
    }
}
const check = isJavaScriptFile('assignment.js')
console.log(check);
//3.Find total price on oil purchased
function oilPrice(diesel, petrol, octane) {
    if (typeof diesel !== 'number' || typeof petrol !== 'number' || typeof octane !== 'number') {
        return 'Please enter a number';
    }
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;
    let dieselAmount = diesel * dieselPrice;
    let petrolAmount = petrol * petrolPrice;
    let octaneAmount = octane * octanePrice;
    let totalBil = dieselAmount + petrolAmount + octaneAmount;
    return totalBil;
}
const total = oilPrice(1, 1, 1);
console.log(total);
//4.Total cost of fare using public bus
function publicBusFare(fare) {
    if (typeof fare !== 'number') {
        return 'Please enter a number';
    }
    const reservedBus = 50;
    const microBus = 11;
    const ticketPrice = 250;
    let remainingReservedBusPessenger = fare % reservedBus;
    let remaningMicroBusPassenger = remainingReservedBusPessenger % microBus;
    let totalBusFare = remaningMicroBusPassenger * ticketPrice;
    return totalBusFare;
}
const cost = publicBusFare(235);
console.log(cost);
//5.Best friend finder
function isBestFriend(obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return 'Please enter an object';
    }
    let object1 = obj1
    let object2 = obj2;
    if (object1.name === object2.friend && object2.name === object1.friend) {
        return true;
    }
    else {
        return false;
    }
}
const isGoodFriend = isBestFriend({ name: "abul", friend: "babul" }, { name: "babul", friend: "abul" });
console.log(isGoodFriend);