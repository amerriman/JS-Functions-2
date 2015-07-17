//1. Define a function called `oldestPerson` that takes an object with names as keys and ages as values (e.g., {'Chuck': 22, 'Brian': 46}), and then returns the name of the oldest living person.

var persons = [
 {name: "Chuck", age: 22},
 {name: "Brian", age: 46},
 {name: "Ross", age: 90}
]

function oldestPerson (people) {
 var oldestAge = 0;
 var oldestPerson = [];
 for(i = 0; i < people.length; i++){
     if (oldestAge < people[i].age) {
           oldestAge = people[i].age;
           oldestPerson = people[i];
         //console.log(people[i].age);
     }
   }
   //console.log(oldestPerson.name);
   return oldestPerson.name;
 }
console.log(oldestPerson(persons));

//2 Define a function called longestWord that takes a string and returns the longest word in the string.

function longestWord (string) {
 var stringBroken = string.split(" ");
 var longestWord = 0;
 var longestWordArray = [];
 for (var i = 0; i < stringBroken.length; i++) {
   if (longestWord < stringBroken[i].length) {
     longestWordArray = stringBroken[i];
     longestWord = stringBroken[i].length
    //  console.log("longestWord", longestWord)
    //  console.log("longestWordArray", longestWordArray);
    //  console.log("stringBroken[i]", stringBroken[i]);
    //  console.log("stringBroken[i].length", stringBroken[i].length);
     }
 }
 return longestWordArray
}

console.log(longestWord("what????????? is theeeeeee string"));

//3Refactor the longestWord function so that it ignores punctuation.
function longestWord (string) {
 var stringBroken = string.replace(/[\.,-\/#!''""$?@%^&*;:{}=\-_`~()]/g,"")
 var stringBroken2 = stringBroken.split(" ");
 var longestWord = 0;
 var longestWordArray = [];
 console.log(string);
 //console.log("stringBroken", stringBroken);
 //console.log("stringBroken2",stringBroken2);
 for (var i = 0; i < stringBroken2.length; i++) {
   if (longestWord < stringBroken2[i].length) {
     longestWordArray = stringBroken2[i];
     longestWord = stringBroken2[i].length
    //  console.log("longestWord", longestWord);
    //  console.log("longestWordArray", longestWordArray);
    //  console.log("stringBroken[i]", stringBroken2[i]);
    //  console.log("stringBroken[i].length", stringBroken2[i].length);
     }
 }
 return longestWordArray
}

console.log(longestWord("what??????????? is theee?#?$?%eeee string"));

//4Define a function called factorial that takes a random number as an argument and then returns the factorial of that given number.

//This one was a huge pain in the a$$. The math of it kept messing me up. I had already spent hours trying to solve it on coderbyte

// function factorial(num) {
//   var total = 1;
//   for (var i = 1; i <= num; i++) {
//     total *= i;
//    //console.log("i",i);
//    //console.log("total", total);
//   }
//   return total;
// }
//
// console.log(factorial(4));


//5Bonus: Write a function called palindrome that takes a string as an argument and returns the string in reversed order. Return true if the string is the same as the reversed string, otherwise return false.
//Also had already solved this on coderbyte but I hadn't considered the capital letters, issue, so refactored for that.

// function palindrome(str) {
//     var str2 = str.replace(/ /g, "").toLowerCase();
//     console.log("str2", str2);
//     var rts = str2.split("").reverse().join("");
//
// 	console.log("rts", rts);
//   if(rts == str2){
//     return true;}
//   else {
//     return false;}
// }
//
// console.log(palindrome("Too hot to hoot"));
// console.log(palindrome("too hot to hoot"));
// console.log(palindrome("this will not work"));
// console.log(palindrome("mom"));
