// Creqting main element and functions
var checkers = [];
var checker = {};
var teem = 'empire';
function Checker(teem, i) {
	this.teem = (teem === 'empire') ? 'empire' : 'republic';
	this.number = i;
}
new Checker('empire', 1)

function render() {
	var section = document.createElement('section');
	var table = document.createElement('table');

	document.body.appendChild(section).appendChild(table);

	for (var x = 0, count = 0; x < 8; x++) {
		var tr = document.createElement('tr');
		table.appendChild(tr);
		for (var y = 0; y < 8; y++) {
			var td = document.createElement('td');
			var i = document.createElement('i');
			tr.appendChild(td);
			if ( (!(x % 2) && y % 2) || (x % 2 && !(y % 2) ) ) {
				switch (x) {
					case 0:
					case 1:
					case 2:
						count++;
						checker = new Checker('empire', count);
						checkers.pop(checker);
						td.appendChild(i);
						i.className = checker.teem;
						break;
					case 5:
					case 6:
					case 7:
						count++;
						checker = new Checker('republic', count);
						checkers.pop(checker);
						td.appendChild(i);
						i.className = checker.teem;
						break;
					default:
						count = 0;
						break;
				}
			}
		}
	}
}

render();
// Create logic

var figures = document.querySelectorAll('table tr td i');
var table = document.querySelector('table');
table.addEventListener('click', select);
var hasSelect = false;

function select(e) {
	console.log(e);
	console.log(e.target);
	if ( e.target.parentElement.classList.contains('selected') && hasSelect ) {
		e.target.parentElement.classList.remove('selected');
		hasSelect = false;
	}
	else if ( e.target.tagName == 'I' && !hasSelect) {
		e.target.parentElement.classList.add('selected');
		hasSelect = true;
	}
	else {}
	// e.stopPropagation();
}

function move() {

}