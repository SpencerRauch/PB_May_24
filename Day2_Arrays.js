//Array -- collection of elements referenced by index

//Array 1
var produceList = ["apples", "oranges", "jalapenos"];
//                    0         1           2
//Array 2
var accountBalances = [5000, 10, 2500];
//Array 3
var auntsContact = ["Jayne", "Smithe", "123 Main Street", "Springfield", "MO", 12345];

console.log(produceList[2]);
produceList[2] = "bell pepper";
// assigned or accessing is done using subscript syntax ie array[index]
console.log(produceList[2]);

// var produceLength = produceList.length; 
produceList.push("bananas");
produceList.push("kiwi");
produceList.push("garbanzo beans");
console.log(`There are ${produceList.length} items in the list!`);
var removedFromList = accountBalances.pop();
console.log(`There are ${produceList.length} items in the list!`);
console.log(produceList);
console.log(`I got rid of the ${removedFromList} from the list and your account balance is ${accountBalances[0]}`);
console.log("I got rid of the " + removedFromList + " from the list");
console.log("I got rid of the", removedFromList, "from the list");

