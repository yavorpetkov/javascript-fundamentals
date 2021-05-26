function extractFile(string) {
	let path = string.split('\\');
	let nededFile = path[path.length - 1];
	let file = nededFile.split('.');
	let extension = file.pop();
	let fileName = file.join('.');
	console.log(`File name: ${fileName}`);
	console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
