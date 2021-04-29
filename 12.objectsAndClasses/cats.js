function catNameAge(catArr) {
	class cat {
		constructor(name, age) {
			this.name = name;
			this.age = age;
		}
		sayMeow(cat) {
			console.log(`${this.name}, age ${this.age} says Meow`);
		}
	}

	for (let i = 0; i < catArr.length; i++) {
		let [ name, age ] = catArr[i].split(' ');
		let myCat = new cat(name, age);
		myCat.sayMeow();
	}
}
catNameAge([ 'Mellow 2', 'Tom 5' ]);
