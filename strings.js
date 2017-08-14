/******* VARIABLES *******/
let output = document.getElementById("output1");
let reversed_output = document.getElementById("output-reversed");
let aphabetical_ouput = document.getElementById("output-alphabits");
let palindrome_output = document.getElementById("output-pd");

let inputArea = document.getElementById("input-box");
let button = document.getElementById("submit");
var testString = "";
//let userInput = inputArea.value;
//testString = userInput;


/******* EVENT WHEN ENTER IS PRESSED *******/
inputArea.addEventListener("keyup", enterPress);
	function enterPress() {
		var userInput = inputArea.value;
		testString = userInput;

		//g for global, i for non case sensitive. "^" means except. 
		//so eveything except a-z(or A-Z) will be stripped and replaced with nothing.
		var letters = /[^a-z]/gi;
		inputArea.value = testString.replace(letters, "");

		if (event.keyCode === 13) {
			reversal(testString);
			alphabits(testString);
			palindrome(testString);
		}	

	};


/******* EVENT WHEN SUBMIT BUTTON IS PRESSED *******/
button.addEventListener("click", submit);

function submit() {
	var userInput = inputArea.value;
	testString = userInput;
	console.log("testString: ", testString);
	//output.innerHTML = testString;

	var letters = /[^a-z]/gi;
	inputArea.value = testString.replace(letters, "");

	reversal(testString);
	console.log("reversed: ", reversal(testString));

	alphabits(testString);
	console.log("alphabetical: ", alphabits(testString));

	palindrome(testString);
	};


/******* FUNNCTIONS *******/
function reversal() {
		let reversed = testString.split("").reverse().join("");
		reversed_output.innerHTML = reversed;
		return reversed;
	};


function alphabits() {
	let alphabetical = testString.split("").sort();
	aphabetical_ouput.innerHTML = alphabetical;
	return alphabetical;
};


function palindrome() {

	if (testString === testString.split("").reverse().join("")) {
		palindrome_output.innerHTML = "Your string is a palindrome! Yay! :)";
	} else {
		palindrome_output.innerHTML = "Your string is not a palindrome. :(";
	}

	return palindrome;
};

/*function reversal() {

}

function alphabits() {

}

function palindrome() {

}


reversal(testString);
alphabits(testString);
palindrome(testString);*/