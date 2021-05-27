function hashTag(text) {
	let textArr = text.split(' ');
	for (const word of textArr) {
		if (word.startsWith('#') && !word.endsWith('#')) {
			let checker = /[^a-zA-Z]/;
			let noHashtag = word.slice(1);
			if (!noHashtag.match(checker)) {
				console.log(noHashtag);
			}
		}
	}
}
hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
