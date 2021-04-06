function calculator(firstNum, decider, secondNum) {
	console.log(decider === '+' ? (firstNum + secondNum).toFixed(2) : (firstNum - secondNum).toFixed(2));
}
calculator(1, `-`, 2);
