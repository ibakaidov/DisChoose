var mtable = document.getElementById("mtable");
var out = document.getElementById("out");
var cols = [document.getElementById("left"), document.getElementById("right")];
var si = document.getElementById('sourced');

var choosed;
si.onchange = load;
var sourced;
function load	() {


sourced = si.value.split('/');
spreader(sourced);	
}
load();

window.addEventListener('contextmenu', function(ev) {
    ev.preventDefault();
	if (ev.target===si)return;

 	choose(true);
    return false;
}, false);

window.addEventListener('click', function(ev) {
    ev.preventDefault();
	if (ev.target===si)return;
 	choose(false);
    return false;
}, false);

function choose(button) {
	button=+button;
	var choosen = choosed[button];
	var oneword = choosen.length<2;
	var toload = oneword?sourced:choosen;
	if (oneword) {
		out.innerHTML+=choosen[0];
		out.innerHTML+="<br>"	
	}
	spreader(toload);
}

function spreader(words) {
	choosed  = [[],[]];
	cols.forEach(function (col) {
		col.innerHTML="";
	})
	words.forEach(function (word, index) {
		var col = cols[index%2]; 
		var li = document.createElement('li');
		li.innerHTML=word;
		col.appendChild(li);
		
			choosed[index%2].push(word)
		
	}, this);
}