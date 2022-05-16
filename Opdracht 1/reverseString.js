'use strict'
let myReversedName = "drahciRelttiL";
let myActualName = reverseString(myReversedName);
console.log(myActualName);

/// Bepaalt recursief het spiegelschrift door bij elke iteratie de laatste letter te onthouden en de rest verder te laten spiegelen en erachter te plakken.
/// BigO: n. Ook is er lineaire memory allocation door string.substr omdat strings immutable zijn
function reverseString(string) {
	let charsLeft = string.length - 1; // minus huidige letter. Is tegelijk de index van de laatste letter en een variant die aangeeft hoelang de recursie nog door moet gaan
	if (charsLeft <= 0)
		return string; //einde recursie
	else
		return string.charAt(charsLeft) + reverseString(string.substr(0, charsLeft)); //recursie met overige letters
}