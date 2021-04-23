function numSearch(arr, threeNums) {
	const cutArr = arr.slice(threeNums[1], threeNums[0]);
	const neededNum = threeNums[2];
	const numsFound = cutArr.filter((el) => el === neededNum);
	console.log(`Number ${neededNum} occurs ${numsFound.length} times.`);
}
numSearch([ 5, 2, 3, 4, 3, 6, 3, 78, 3, 5, 2, 4 ], [ 9, 2, 3 ]);
