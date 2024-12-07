let colors = new Array("Red", "Purple", "Green");
console.log(colors);
colors.push("Yellow");
console.log(colors);

let sizes = ["Small", "Medium", "Large"];
console.log(sizes); 
sizes.pop();
console.log(sizes);

let numbers = Array.of(8, 50, 100);
console.log(numbers);
let secondNumber = numbers[1];
console.log(secondNumber);

let filteredNumbers = numbers.filter(num => num > 10);
console.log("Numbers greater than 10:", filteredNumbers);

let squaredNumbers = numbers.map(num => num * num);
console.log("Squared numbers array:", squaredNumbers);

console.log("Colors printed using forEach:");
colors.forEach(color => console.log(color));

console.log("Iterating numbers array using for...of loop:");
for (let num of numbers) {
    console.log(num);
}
console.log("Iterating sizes array using traditional for loop:");
for (let i = 0; i < sizes.length; i++) {
    console.log(sizes[i]);
}
console.log("Colors array index and element pairs using entries():");
for (let [index, color] of colors.entries()) {
    console.log(`Index: ${index}, Color: ${color}`);
}