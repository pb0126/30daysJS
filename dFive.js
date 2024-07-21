// *** Day 5:- FUnctions ***
//--------------------------------------------------------
// ### Activity 1:- Function Declaration

// # Task 1

// function oddEven(num) {
// 	if (num % 2 == 0) {
// 		console.log(`The Number ${num} is Even`);
// 	} else console.log(`The Number ${num} is Odd`);
// }

// oddEven(3);

// # Task 2

// function calSq(num) {
// 	return num * num;
// }

// let calc = calSq(4);
// console.log(`The square is ${calc}`);

//=====================================================
// ### Activity 2:- Function Expression

//# Task 3

// const sumCal = function (num1, num2) {
// 	if (num1 > num2) {
// 		console.log(`${num1} is greater than ${num2}`);
// 	} else console.log(`${num2} is greater than ${num1}`);
// };

// sumCal(4, 8);

// #Task 4

// let conStr = function (str1, str2) {
// 	console.log(str1 + str2);
// };

// conStr("Hello", "World");

//=====================================================
// ### Activity 3:- Arrow Function

// Task 5

// const sum = (num1, num2) => {
// 	return num1 + num2;
// };

// console.log(sum(3, 4));

// Task 6

// const strCheck = (str, char) => {
// 	let len = str.length;
// 	for (let i = 0; i <= len; i++) {
// 		if (char == str[i]) {
// 			return true;
// 		} else return false;
// 	}
// };

// console.log(`Contains the Character:- ${strCheck("Hello", "H")}`);

//=====================================================
// ### Activity 4:- Function Parameter & Default Values

// #Task 7

// const sumTwo = (num1, num2 = 4) => {
// 	return num1 + num2;
// };

// console.log(sumTwo(3));

// # Task 8

// const greet = (personName = "Jhon", age = 18) => {
// 	console.log(
// 		`Hello, ${personName}. Welcome to the program. Nice to know that you are ${age} years old. Thank you. Have a great day!`
// 	);
// };

// greet("Prabhu", 24);

//=====================================================
// ### Activity 5:- Higher Order Function

// #Task 9

// function greetMsg() {
// 	return "Hello Sir";
// }

// const highOrderFunc = (num, func) => {
// 	for (let i = 0; i < num; i++) {
// 		console.log(func);
// 	}
// };

// highOrderFunc(2, greetMsg());

// # Task 10

const highOrderFunc = (firstFunc, secondFunc, value) => {
	let result = firstFunc(value);

	let finalResult = secondFunc(result);
	return finalResult;
};
const firstFunc = (num) => {
	return num * num;
};

const secondFunc = (num) => {
	return num * num * num;
};

console.log(highOrderFunc(firstFunc, secondFunc, 2));
