var qToDMap = new Map();

qToDMap.set("~", "~")
qToDMap.set("!", "!")
qToDMap.set("@", "@")
qToDMap.set("#", "#")
qToDMap.set("$", "$")
qToDMap.set("%", "%")
qToDMap.set("^", "^")
qToDMap.set("&", "&")
qToDMap.set("*", "*")
qToDMap.set("(", "(")
qToDMap.set(")", ")")
qToDMap.set("_", "{")
qToDMap.set("+", "}")
qToDMap.set("Q", "\"");
qToDMap.set("W", "<");
qToDMap.set("E", ">");
qToDMap.set("R", "P");
qToDMap.set("T", "Y");
qToDMap.set("Y", "F");
qToDMap.set("U", "G");
qToDMap.set("I", "C");
qToDMap.set("O", "R");
qToDMap.set("P", "L");
qToDMap.set("{", "?");
qToDMap.set("}", "+");
qToDMap.set("|", "|");
qToDMap.set("A", "A");
qToDMap.set("S", "O");
qToDMap.set("D", "E");
qToDMap.set("F", "U");
qToDMap.set("G", "I");
qToDMap.set("H", "D");
qToDMap.set("J", "H");
qToDMap.set("K", "T");
qToDMap.set("L", "N");
qToDMap.set(":", "S");
qToDMap.set("\"", "_");
qToDMap.set("Z", ":");
qToDMap.set("X", "Q");
qToDMap.set("C", "J");
qToDMap.set("V", "K");
qToDMap.set("B", "X");
qToDMap.set("N", "B");
qToDMap.set("M", "M");
qToDMap.set("<", "W");
qToDMap.set(">", "V");
qToDMap.set("?", "Z");

qToDMap.set("`", "`")
qToDMap.set("1", "1")
qToDMap.set("2", "2")
qToDMap.set("3", "3")
qToDMap.set("4", "4")
qToDMap.set("5", "5")
qToDMap.set("6", "6")
qToDMap.set("7", "7")
qToDMap.set("8", "8")
qToDMap.set("9", "9")
qToDMap.set("0", "0")
qToDMap.set("-", "[")
qToDMap.set("=", "]")
qToDMap.set("q", "'");
qToDMap.set("w", ",");
qToDMap.set("e", ".");
qToDMap.set("r", "p");
qToDMap.set("t", "y");
qToDMap.set("y", "f");
qToDMap.set("u", "g");
qToDMap.set("i", "c");
qToDMap.set("o", "r");
qToDMap.set("p", "l");
qToDMap.set("[", "/");
qToDMap.set("]", "=");
qToDMap.set("\\", "\\");
qToDMap.set("a", "a");
qToDMap.set("s", "o");
qToDMap.set("d", "e");
qToDMap.set("f", "u");
qToDMap.set("g", "i");
qToDMap.set("h", "d");
qToDMap.set("j", "h");
qToDMap.set("k", "t");
qToDMap.set("l", "n");
qToDMap.set(";", "s");
qToDMap.set("'", "-");
qToDMap.set("z", ";");
qToDMap.set("x", "q");
qToDMap.set("c", "j");
qToDMap.set("v", "k");
qToDMap.set("b", "x");
qToDMap.set("n", "b");
qToDMap.set("m", "m");
qToDMap.set(",", "w");
qToDMap.set(".", "v");
qToDMap.set("/", "z");
qToDMap.set(" ", " ");
qToDMap.set("\n", "\n");

var dToQMap = invertMap(qToDMap);

// Make the values the keys and vice versa, O(n)
function invertMap(map){
	var inverse = new Map();
	var valIter = map.values();
	var keyIter = map.keys();
	for(let value of valIter){
		var key = keyIter.next().value;
		inverse.set(value, key);
	}
	return inverse;
}

function qwertyToDvorak(){
	var qwertyTextArea = document.getElementById("qwertyText");
	var dvorakTextArea = document.getElementById("dvorakText");
	var qwertyText = qwertyTextArea.value;
	var dvorakText = "";
	for(var i = 0; i < qwertyText.length; i++){
		dvorakText += qToDMap.get(qwertyText[i]);
	}	
	dvorakTextArea.value = dvorakText;
}

function dvorakToQwerty(){
	var qwertyTextArea = document.getElementById("qwertyText");
	var dvorakTextArea = document.getElementById("dvorakText");
	var qwertyText = "";
	var dvorakText = dvorakTextArea.value;
	for(var i = 0; i < dvorakText.length; i++){
		qwertyText += dToQMap.get(dvorakText[i]);
	}
	qwertyTextArea.value = qwertyText;	
}