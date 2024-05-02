/* GREEDY MONSTER!
You're a monster wrangler, tasked with feeding a monster. The monster unfortunately doesn't know when to stop!
Add to the code below to make sure the monster stops when it consumes 1000 calories or more.
Stretch goal: 
    Make it so the monster stops eating when it reaches 1000 or more calories 
    OR when it eats three snacks, whichever happens first.
Topics to review if stuck: conditionals -- break 
*/


function feedTheMonster(food){
    var snacksInBag = food.length;
    var snacksEaten = 0; //keeps track of how many snacks have been removed from the bag
    var caloriesConsumed = 0; // keeps track of how many calories the monster has consumed

    for (var i = 0; i < snacksInBag; i++){ //loops through our food array
        caloriesConsumed += food.pop(); //monster eats a food from the top of the bag ( end of array )
        snacksEaten++; //increase amount of snacks eaten
        //TODO: Your code here!
        if (caloriesConsumed >= 1000 || snacksEaten == 3){
            break;
        }
    }
    //create output message
    var msg = `The monster ate ${snacksEaten} snacks 
    It has consumed a total of ${caloriesConsumed} calories
    there are ${food.length} snacks left in the bag`;

    //return output message
    return msg;
}

//values in the snackBags represent calories, the monster pulls one out from the end each time
var snackBag1 = [100, 300, 300, 200, 400];
var snackBag2 = [200, 500, 800, 900, 100];
var snackBag3 = [1000,1000,1000,1000];

console.log("***Bag 1***")
console.log(feedTheMonster(snackBag1), "\n");
/* expected output: 
***Bag 1***
The monster ate 4 snacks 
    It has consumed a total of 1200 calories
    there are 1 snacks left in the bag 

expected output with stretch feature:
***Bag 1***
The monster ate 3 snacks 
    It has consumed a total of 900 calories
    there are 2 snacks left in the bag 

*/

console.log("***Bag 2***")
console.log(feedTheMonster(snackBag2),"\n");
/* expected output:
***Bag 2***
The monster ate 2 snacks 
    It has consumed a total of 1000 calories
    there are 3 snacks left in the bag 
*/

console.log("***Bag 3***")
console.log(feedTheMonster(snackBag3),"\n");
/* expected output:
***Bag 3***
The monster ate 1 snacks 
    It has consumed a total of 1000 calories
    there are 3 snacks left in the bag 
*/
