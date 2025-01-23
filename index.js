
// ============================ PART ONE: Thinking Functionally ================================
// Take an array of numbers and return the sum.
function sum(array) {
    let accumulator = 0
    for (let i = 0; i < array.length; i++){
        accumulator += array[i];
    }

    return accumulator;
}

const nums = [1, 3, 4, 5, 6]
console.log(sum(nums));

// Take an array of numbers and return the average.
function avg(array){
    return sum(array) / array.length;
}

console.log(avg(nums));

// Take an array of strings and return the longest string.
function longestStr(array) {
    let longStrLength = 0;  //all strings will be at least 0 characters long
    let longStr = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longStrLength) {
            longStrLength = array[i].length;
            longStr = array[i]
        }
    }

    return longStr
}

const strArr = ['say', 'hello', 'in', 'the', 'morning'];

console.log(longestStr(strArr));

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
function stringsLongerThan(array, num) {
    const longStrs = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i].length > num) {
            longStrs.push(array[i]);
        }
    }
    return longStrs;
}

console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));

// Take a number, n, and print every number between 1 and n using loops.
//assuming that n is inclusive
function numsAfter1(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
}

numsAfter1(10);

// ============================ PART TWO: Thinking Methodically ================================
// When functions are built into objects, like Arrays, they are referred to as “methods” of those objects. Many methods, including Array methods, require “callback functions” to determine their behavior.
// For the tasks below, use the following data to test your work:
// [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
//  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//  { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
// Use callback functions alongside Array methods to accomplish the following:
const data = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

// Sort the array by age.
data.sort((a, b) => a.age - b.age)
console.log(data);

// Filter the array to remove entries with an age greater than 50.
const filteredData = data.filter((person) => person.age < 50)
console.log(filteredData);

// Map the array to change the “occupation” key to “job” and increment every age by 1.
const mappedData = data.map((person) => {
    const newPerson =  {
        ...person,
        job: person.occupation,
        age: String(parseInt(person.age) + 1)
    }
    
    delete newPerson.occupation;

    return newPerson;
})

console.log(mappedData);

// Use the reduce method to calculate the sum of the ages.
const result = data.reduce((acc, person) => {
    return acc += parseInt(person.age)
}, 0)
console.log(result)

// Then use the result to calculate the average age.
avgAge = result/data.length;

console.log(avgAge)

// ============================ PART THREE: Thinking Critically ================================
// It is important to remember that when working with objects in JavaScript, we can either pass those objects into functions by value or by reference. This important distinction changes the way that functions behave, and can have large impacts on the way a program executes.
// For this section, develop functions that accomplish the following:
// Take an object and increment its age field.
// Take an object, make a copy, and increment the age field of the copy. Return the copy.
// For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.
// Thought experiment: since the Date object is an object, what would happen if we modified it in the copy of the object created in the second function using setTime() or another method? How could we circumvent potentially undesired behavior?

// ============================ PART FOUR: Thinking Practically ================================
// Practical application of these concepts varies greatly in industry, but the core foundations are the same: functions handle repeated, specialized tasks, and methods are functions attached to specific types of objects.
// The Skills-Based Assessment (SBA) for this module will have you work on a real-world example that employs all of the tools you have learned thus far. To prepare for it, revisit your previous work as described below.

// ============================ PART FIVE: Thinking Back ================================
// Once you have completed the tasks outlined above, take any extra time you may have to revisit your previous JavaScript assignments. 
// How many of the scripts could be turned into functions?
// What would the parameters look like? What kind of returns should they have?
// Could you package your code into even smaller blocks, creating helper functions?
// What else could be changed to optimize the code, knowing what you now know?