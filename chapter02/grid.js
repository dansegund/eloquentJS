var grid = "";
var size = 8;

for (line = 0; line < size; line++) {
	for (chars = 0; chars < size; chars++) {
		if ((line + chars) % 2 == 0) {
			grid += " ";
		} else {
			grid += "#";
		}
	}
	grid += "\n";
}
console.log(grid);