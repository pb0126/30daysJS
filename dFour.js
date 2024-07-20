// *** Day 4:- Loop ***
//--------------------------------------------------------
// ### Activity 1:- For Loop

// # Task 1

// for (let i = 1; i <= 10; i++) {
// 	// console.log(i);
// }

// # Task 2

// for (let i = 1; i <= 10; i++) {
// 	// console.log(`5 X ${i} = ${5 * i};`);
// }

//=====================================================
// ### Activity 2:- While Loop

// # Task 3

// let sum = 0;
// let i = 0;
// while (i <= 10) {
// 	sum += i;
// 	i++;
// }
// console.log(`Sum fo digit 1 to 10 is ${sum}`);

// # Task 4

// let i = 10;
// while (i >= 1) {
// 	console.log(`${i}`);
// 	i--;
// }

//=====================================================
// ### Activity 3:- Do.. While Loop

// # Task 5

// let i = 0;

// do {
// 	console.log(`${i}`);
// 	i++;
// } while (i <= 5);

// # Task 6

// let num = 4;
// let i = 1;
// let fact = 1;

// do {
// 	fact *= i;
// 	i++;
// } while (num >= i);
// console.log(`The Factorial of ${num} is ${fact}`);

//=====================================================
// ### Activity 4:- Nested Loops

// # Task 7

// for (let i = 1; i <= 5; i++) {
// 	let row = "";
// 	for (let j = 1; j <= i; j++) {
// 		row += "* ";
// 	}
// 	console.log(row);
// }

//=====================================================
// ### Activity 5:- Loop Control Statement

// # Task 8

// for (let i = 1; i <= 10; i++) {
// 	if (i == 3) {
// 		continue;
// 	}
// 	console.log(i);
// }

// # Task 9

for (let i = 1; i <= 10; i++) {
	if (i == 7) {
		break;
	}
	console.log(i);
}
