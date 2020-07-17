// ************feetToMile.js************

function feetToMile(feet) {
   if(feet<= 0){
       return "number should be positive";
   }
    var mile = feet/5280;
    return mile;
}
var miles = feetToMile(3000);
console.log("Total mile:",miles);
 
// ********* woodCalculator.js********* *

function woodCalculator(chair,table,bed){
    var woodForChair = chair*1;
    var woodForTable = table*3;
    var woodForBed   = bed*5;
    var totalwood =  woodForChair + woodForTable + woodForBed;
    return totalwood;
} 
var totalwood = woodCalculator(4,5,6);
console.log("total wood need=", totalwood);

// ************brickCalculator.js*****************

function brickCalculator(numberOfFloor){
    if(numberOfFloor <= 0){
        console.log("please entre possitive velue");
        return brickCalculator;
    } else{
        if(numberOfFloor <= 10){
            firstTenFloor = numberOfFloor;
            return amountOfbricks =firstTenFloor*15*1000;
        }else if((numberOfFloor>10) && (numberOfFloor<=20)){
            var firstTenFloor = 10;
            var elevnToTwentyFloor = numberOfFloor - firstTenFloor;
            return ((firstTenFloor*15*1000) +(elevnToTwentyFloor*12*1000));
        }else if (numberOfFloor > 20){
            var firstTenFloor = 10;
            var elevnToTwentyFloor = 10;
            var twentyoneToMore = numberOfFloor - 20;
            return ((firstTenFloor*15*1000) +(elevnToTwentyFloor*12*1000)+(twentyoneToMore*10*1000));
        }
    }
}
console.log(brickCalculator(50));



//  **************tinyFriend.js****************

function tinyFriend(friends) {
    var tinyFriend = friends[0];
    for( var i=0; i <friends.length; i++){
        var nextfriend = friends[i];
        if(nextfriend.length < tinyFriend.length){
            tinyFriend = nextfriend;
        }
    }
    return tinyFriend;
}
var tiny = tinyFriend(["rifat","tanimDipto","gosu","jamsedDipu"]);
console.log("Tiny friend is :",tiny);

