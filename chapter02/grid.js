var grid = "";
var size = 8;

for (var line = 0; line < size; line++) {
	for (var chars = 0; chars < size; chars++) {
		if ((line + chars) % 2 == 0) {
			grid += " ";
		} else {
			grid += "#";
		}
	}
	grid += "\n";
}
console.log(grid);