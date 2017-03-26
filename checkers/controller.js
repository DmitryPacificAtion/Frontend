// Creqting main element and functions
function render() {
	var section = document.createElement('section');
	var table = document.createElement('table');

	document.body.appendChild(section).appendChild(table);

	for (var x = 0; x < 8; x++) {
		var tr = document.createElement('tr');
		table.appendChild(tr);
		for (var y = 0; y < 8; y++) {
			var td = document.createElement('td');
			var i = document.createElement('i');
			tr.appendChild(td).appendChild(i);
			if ( (!(x % 2) && y % 2) || (x % 2 && !(y % 2) ) ) {
				if (x < 3)
				i.className = 'empire';
				if (x > 4)
				i.className = 'alias';
			}
		}
	}
}

render();
// Create logic