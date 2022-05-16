'use strict'

let testObject = {
	key1: 40,
	key2: 491,
	key3: 991,
	key4: 819,
	key5: 138,
	key6: 481
}

console.log("Alle keys en bijbehorende values:");
PrintAllKeysAndValues(testObject);
console.log("De som van alle values is: ");
SumAllKeyValues(testObject);

/// Print alle keyvaluepairs van een meegegeven Object uit als losstaande arrays
/// BigO: n. Memory allocation lijkt ook lineair
function PrintAllKeysAndValues(obj) {
	Object.entries(obj).forEach( //voor elke keyvaluepair
		(keyvaluepair) => console.log(keyvaluepair)
	);
}

/// Print de som van alle values van een meegegeven Object uit
/// BigO: n. Memory allocation lijkt ook lineair
function SumAllKeyValues(obj) {
	let sum = 0;
	Object.entries(obj).forEach( //voor elke keyvaluepair
		(keyvaluepair) => sum += keyvaluepair[1] //telt de value van de key op bij sum
	);
	console.log(sum);
}