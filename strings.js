
let output = document.getElementById("output1");
let reversed_output = document.getElementById("output-reversed");
let aphabetical_ouput = document.getElementById("output-alphabits");
let palindrome_output = document.getElementById("output-pd");

let inputArea = document.getElementById("input-box");
let button = document.getElementById("submit");
var testString = "";
//let userInput = inputArea.value;
//testString = userInput;

button.addEventListener("click", submit);

function submit() {
	let userInput = inputArea.value;
	testString = userInput;
	console.log("testString: ", testString);
	output.innerHTML = testString;
	
	reversed_output.innerHTML = reversal(testString);
	console.log("reversed", reversal(testString));
	
	//alphabits(testString);
	console.log("alphabetical: ", alphabits(testString));
	aphabetical_ouput.innerHTML = alphabits(testString);
	};



function reversal() {
		let reversed = testString.split("").reverse().join("");
		return reversed;
	
	};

function alphabits() {
	let alphabetical = testString.split("").sort();
	return alphabetical;

};

function palindrome() {
	
}

/*function reversal() {

}

function alphabits() {

}

function palindrome() {

}


reversal(testString);
alphabits(testString);
palindrome(testString);*/