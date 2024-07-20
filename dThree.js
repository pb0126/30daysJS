// ***Day 3:- Control Structure***
//--------------------------------------------------------
// ### Activity 1 If-Else Statements

// # Task 1

// let num = -1;
// if (num > 0) {
// 	console.log("Positive Number");
// } else if (num < 0) {
// 	console.log("Negative Number");
// } else console.log("Zero");

//# Task 2

// let age = 25;

// if (age < 18) {
// 	console.log("Not eligible for Voting");
// } else console.log("Eligible for Voting");

//======================================================

//## Activity 2 - Nested If Else Statement

//# Task 3
num1 = 21;
num2 = 15;
num3 = 25;

// if (num1 > num2) {
// 	if (num1 > num3) {
// 		console.log(`Num 1 is greatest of all (${num1})`);
// 	} else {
// 		console.log(`Num 3 is greatest of all (${num3})`);
// 	}
// } else if (num2 > num3) {
// 	console.log(`Num2 is greatest od all (${num2})`);
// } else console.log(`Num3 is greatest od all (${num3})`);

//======================================================

//## Activity 3 - Switch Case

//# Task 4

let day = 7;

// switch (day) {
// 	case 1:
// 		console.log("Monday");
// 		break;
// 	case 2:
// 		console.log("Tuesday");
// 		break;
// 	case 3:
// 		console.log("Wednesday");
// 		break;
// 	case 4:
// 		console.log("Thursday");
// 		break;
// 	case 5:
// 		console.log("Friday");
// 		break;
// 	case 6:
// 		console.log("Saturday");
// 		break;
// 	case 7:
// 		console.log("Sunday");
// 		break;

// 	default:
// 		break;
// }

//# Task 5

let score = 40;

// switch (true) {
// 	case score >= 90:
// 		console.log(`Grade A`);
// 		break;
// 	case score >= 80:
// 		console.log(`Grade B`);
// 		break;
// 	case score >= 70:
// 		console.log(`Grade C`);
// 		break;
// 	case score >= 60:
// 		console.log(`Grade D`);
// 		break;
// 	case score >= 50:
// 		console.log(`Grade E`);
// 		break;
// 	default:
// 		console.log(`Fail below 50 `);
// 		break;
// }

//======================================================

//## Activity 4 - Conditional (Ternary) Operator

//# Task 6

// console.log(
// 	`The Greatest Number of all is ${
// 		num1 > num2 && num1 > num3
// 			? `(Num 1) i.e :- ${num1}`
// 			: num2 > num1 && num2 > num3
// 			? `(Num 2) i.e :- ${num2}`
// 			: `(Num 3) i.e :- ${num3}`
// 	}`
// );

//======================================================

//## Activity 5 - Combining Conditions

//# Task 7

let year = 1900;

if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
	console.log(`${year} is a Leap Year`);
} else console.log(`${year} is not a Leap Year`);
