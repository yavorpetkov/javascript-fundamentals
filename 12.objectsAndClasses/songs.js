function playlist(arr) {
	let songs = [];
	const numberOfSongs = arr.shift();
	const typeOfSong = arr.pop();

	class Song {
		constructor(type, name, time) {
			this.type = type;
			this.name = name;
			this.time = time;
		}
	}
	for (let i = 0; i < numberOfSongs; i++) {
		let [ type, name, time ] = arr[i].split('_');
		songs.push(new Song(type, name, time));
	}
	if (typeOfSong === 'all') {
		songs.filter((el) => console.log(el.name));
	} else {
		let filtered = songs.filter((el) => el.type === typeOfSong);
		filtered.forEach((el) => console.log(el.name));
	}
}
playlist([ 3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite' ]);
