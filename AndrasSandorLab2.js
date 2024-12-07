//Task 1

let x = 10;  
if (x > 0) {
    console.log("x is positive");
} else if (x < 0) {
    console.log("x is negative");
} else {
    console.log("x is zero");
}
let grade = 'B';  

switch (grade) {
    case 'A':
        console.log("Excellent");
        break;
    case 'B':
        console.log("Good");
        break;
    case 'C':
        console.log("Average");
        break;
    case 'D':
        console.log("Below Average");
        break;
    case 'F':
        console.log("Fail");
        break;
}

//Task 2

let i = 1;

while (i <= 10) {
    console.log(i);
    i++;  
} 
let num = 1;

do {
    console.log(num * 3);  
    num++;
} while (num <= 5);
let colors = ["Red", "Green", "Blue", "Yellow"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);  
}

//Task 3

let person = {
    name: "Andras",
    age: 18,
    profession: "Coding Person"
};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

let grades = ['A', 'B', 'C', 'D', 'F'];

for (let grade of grades) {
    console.log(grade);
}

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;  
    }
    console.log(i);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        continue;  
    }
    console.log(numbers[i]);  
}
