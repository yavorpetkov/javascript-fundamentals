function smallestNum(firstNum, secondNum, thirdNum) {
	if (firstNum < secondNum && firstNum < thirdNum) {
		console.log(firstNum);
	} else if (secondNum < firstNum && secondNum < thirdNum) {
		console.log(secondNum);
	} else {
		console.log(thirdNum);
	}
}
smallestNum(5, 5, 3);
