function primeNumber(num) {
	for (let i = 1; i <= num; i++) {
		if (num % i === 0 && i !== 1 && i !== num) {
			console.log('false');
			break;
		} else if (num % 1 === 0 && num % i === 0 && i === num) {
			console.log('true');
			break;
		}
	}
}
primeNumber(8);
