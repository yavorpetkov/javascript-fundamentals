function addAndSubtract(firstNum, secondNum, thirdNum) {
	function sum(firstNum, secondNum) {
		return firstNum + secondNum;
	}
	function subtract(sum, thirdNum) {
		return sum - thirdNum;
	}
	const added = sum(firstNum, secondNum);

	let result = subtract(added, thirdNum);
	console.log(result);
	/*
	let sum = (firstNum, secondNum) => firstNum + secondNum;
	let subtract = sum - thirdNum;
	console.log(subtract);
    */
}
addAndSubtract(23, 6, 10);
