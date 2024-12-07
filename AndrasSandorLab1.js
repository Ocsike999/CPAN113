var userName = "Andras";
let userAge = 18;
const userID = "ID123";
userName = "Sandor";
userAge = 19;
let score = 95.5;                        
let courseName = "JavaScript Basics";     
let isEnrolled = true;                    
let grades = [90, 95, 88, 92];             
let student = {                        
    name: "Sandor",
    age: 100,
    course: "CPAN113"
};             
console.log(userAge + score);             
console.log(score - userAge);             
console.log(userAge * 2);                 
console.log(score / userAge);             
console.log(userAge == 30);
console.log(userAge === 30);
console.log(score < 90);
console.log(score >= 95);
console.log(isEnrolled === true);
if (userAge > 18) {
    console.log("You are a big year old.");
} 
else {
    console.log("You are a small year old.");
}
switch (courseName) {
    case "JavaScript Basics":
        console.log("Welcome to JavaScript Basics!");
        break;
    case "Advanced JavaScript":
        console.log("Welcome to Advanced JavaScript!");
        break;
    default:
        console.log("Course not found.");
}