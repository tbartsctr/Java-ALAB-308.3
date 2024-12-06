/* 
A. Q + A
How do we assign a value to a variable? With an assignement operator like =
How do we change the value of a variable? Simpy, typing in a new value in the intial value submission or typing a new value in a following line.
How do we assign an existing variable to a new variable? By using the assignment operator "=". You could simply do something like "let valueOne = 15" and than follow it with "let valueTwo = valueOne" 
Remind me, what are declare, assign, and define? This is the process if creating a variable and giving it a value in JS. Declaring a variable is the initial part of the process with something like "let x". We follow this with the assignment step, which assigns a value to our declared value. It might look like this: "x = 25". Define is the combination of these steps, so it would look like this: "let x = 25".
What is pseudocoding and why should you do it? Pseudocoding is a form of coding that implements and utilizes human language to break down code syntax into a more readable understandable form. It essentially puts the steps of your desired coding tasks into a readble sentence. It makes it easier to understand exactly what youre trying to accomplish when you have a programming task to do.
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? I would say the answer to this question is very relative. I think it depends heavily on the programmer's skill, but I would say maybe 50% of time spent should be on something like pseudocoding.
*/

/*B. Strings

1. let firstVariable  
2. let firstVariable = "Hello World"
3. let firstVairable = 15
4. let firstVariable = secondVariable
4. let secondVariable = "Hello PerScholas"
5. The value of firstVariable is "Hello PerScholas".
6. let yourName = "Tucker"
    let greeting = "Hello, my name is" + yourName;
    console.log(greeting);


C. Booleans:

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false || false || false || false || false || true);
  console.log(false && false)
  console.log(e === 'Kevin');
  console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');


  D. The Farm

  1. let animal = "cow" 
      if (animal === "cow"){
      console.log("mooooo"):
} else {
 console.log("Hey! You're not a cow.");
}

E. Driver's Ed


const driverAge = 18 
if (driverAge >= 16) {
console.log("Here are the keys!");
}
else {console.log("Sorry, you're too young.");
}


II. Loops

A. The Basics

1. for (let i = 0, i <= 10, i++) {
console.log(i);
}

2. for (let i = 10, i <= 400, i++){
console.log(i);
}

3. for (let i = 12, i <= 4000, i += 3){
console.log(i):
}


B. Get Even

1. for (let i = 1, i <= 100, i++){
if (i % 2 === 0){console.log(i + "<--is an even number");
}
else {console.log(i);
}

}

I just did both parts in 1 take above, I hope thats okay!



C. Give me Five

1. for (let i = 0, i <= 100, i+=5){
if (i % 5 === 0 && i % 3 === 0){console.log("I found a ${i}. High Five! Three is a crowd.");
} else if (i % 5 === 0) {console.log("I found a ${i}. High five!");
} else ( i % 3 === 0) {console.log("I found a ${i}. Three is a crowd.");
}
}


D. Savings Account

1. let bank_account = 0
for (let i = 0, i <= 10, i ++){
bank_account += i;}
console.log(bank_account);

2. let bank_account = 0
for (let i = 0, i <= 100, i++){
bank_account = i += * 2;}
console.log(bank_account);



III Arrays:

A.
1. Elements
2. Yes
3. Anything that uses a list of data elements, like a collection of games or songs.


B. Easy Does It
1. let quotes = ["hello bill", "hello tom", "hello jim"];

C. Accessing Elements
1. const randomThings = [1, 10, "Hello", true];
console.log(randomThings[0]); 

2. const randomThings = [1, 10, "Hello", true];
    randomThings[2] = "World";
    console.log(randomThings);

3. checked.


D. Change Values
1. I would access if by console logging it with console.log(ourClass[2]);

2. const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
    ourClass[4] = "Octocat";
    console.log(ourClass);

3. const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
      ourClass.push("Cloud City");
      console.log(ourClass);


E. Mix It Up
1. const myArray = [5, 10, 500, 20];
  myArray.push("Aegon");
  myArray.push("okay");

2. myArray.shift();

3. myArray.unshift("Bob Marley");

4. myArray.pop();

5. myArray.reverse(); Yes, this mutates the array. This means that it modifies the original array instead of creating a new array to implement the changes. Yes, it returns the reversed array.



F. Biggie Smalls
1. const myNumber = 50;
  if (myNumber < 100){console.log("little number");}
else {console.log("big number");
}


G. Monkey in the Middle
 1. const myNumber = 50;
    if (myNumber < 5){
    console.log("little number");
    } else if (myNumber > 10){
     console.log("big number");
    } else {
     console.log("monkey");
    }


H. What's in Your Closet?

1. console.log("Kristyn is rocking that" + kristynsCloset[2] + "today!");
2. kristynsCloset.splice(5, 0, "raybans");
3. kristynsCloset[5] = "stained knit hat";
4. console.log(thomsCloset [0][0]);
5. console.log(thomscloset [1][0]);
6. console.log(thomsCloset [2][1]);
7. console.log("Thom is looking fierce in a grey button-up, grey jeans, and a wool scarf!");
8. thomsCloset[1][2] = "Footie Pajamas";


IV. Functions
A. it says skip this problem?

B. function printCool(name){
  return "{$} is cool";
  }
  console.log(printCool("CaptainReynolds"))

C. function calculateCube(side){
let volume = side **3}

console.log(volume);


D. isVowel

function isVowel(letters){
const vowels = [A, E, I, O, U, a, e, i, o, u];
return vowels.includes(letters)
}

E. getTwoLengths

function getTwoLengths (strng1, strng2)
return [strng1.length, strng2.length]

console.log(getTwoLengths("Hank", Hippo"));

F. getMultipleLengths

function getMultipleLengths(arr) {
  return arr.map(str => str.length);  // Use map to iterate over the array and return an array of string lengths
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));



G. maxOfThree

function maxOfThree(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}


H. printLongestWord

function printLongestWord(words) {
    let longestWord = "";
    
    for (let word of words) {
      if (word.length > longestWord.length){
      longestWord = word;
    }
    }
    return longestWord;
    }
console.log(printLongestWord(["Tom", "Jack", "John", "Man", "Max"]));


Objects:

A. Make a User Object

1. let user = {
name: Tucker
age: 30
email: tbartsctr@gmail.com
purchased: []
};


B.
1. let updatedUser = {...user, email: "tbartsctr1@gmail.com"};
console.log(updatedUser);

2. let updatedUser = {...user, age: user.age++};
console.log(updatedUser);

C. Adding Keys to Values
1. let uodatedUser = {...user, location: "Cincinnati, Ohio"};
console.log(updatedUser)

D. Shopaholic!
1. user.purchased.push("carbohydrates");
console.log(user.purchased);

2. user.purchased.push("peace of mind");
console.log(user.purchased);

3.  user.purchased.push("Merino jodhpurs");
console.log(user.purchased);

4. console.log(user.purchased[2]);


E. Object-within-object

1. user.friend = {
name: "Taj"
age: 30
location: "Cincinnati, Ohio"
purchased: []
}

2. console.log(user.friend.name);

3. console.log(user.friend.location);

4. user.friend.age = 55;

5. user.friend.purchased.push("The One Ring");

6. user.friend.purchased.push("A latte");

7.console.log(user.friend.purchased[1]);



F. Loops

1. for (let i = 0; i < user.purchased.length; i++) {
  console.log(user.purchased[i]);
}

2.  for (let i = 0; i < user.friend.purchased.length; i++) {
  console.log(user.friend.purchased[i]);



G. Functions Can Operate on Objects

1. function updateUser(){
user.age++;
user.name = user.name.toUppercase();}
updateUser();

2. function oldAndLoud(person){
person.age++;
}

oldAndLoud(user);



Cat Combinator:

1. Mama Cat
const cat1 = {
name: "Bill"
breed: "Cat"
age: "487"
};

console.log(cat1.age);

console.log(cat1.breed);


2. Papa Cat
const cat2 = {
name:
breed:
age:
};

3.
function combineCats(mama, papa){

console.log("mama cat", mama);
console.log("papa cat", papa);
}
combineCats(cat1, cat2);

3B.
function combineCats(mama, papa){
  const babyCat = {
    name: mama.name + "-" + papa.name
    age: 1
    breed: mama.breed + "-" + papa.breed 
  };
  return babyCat;
}

const babyCat = combineCats(cat1, cat2);
console.log(babyCat);


4. console.log(combineCats(
  combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)),
  combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))
));







