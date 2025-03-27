
function reverseString() {
    const input = document.getElementById("stringInput").value;
    let reversed = "";
    for (let i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }
    document.getElementById("reversedStringResult").textContent = "Reversed: " + reversed;
}

function checkPalindrome() {

    const input = document.getElementById("numberInput").value;    
    let reversed = "";
    for (let i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }    
    if (input === reversed) {
        document.getElementById("palindromeResult").textContent = "It's a Palindrome!";
    } else {
        document.getElementById("palindromeResult").textContent = "Not a Palindrome!";
    }
}

function calculateTotal() {   
    const subtotal = parseFloat(document.getElementById("subtotalInput").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentageInput").value);    
    const tip = (tipPercentage / 100) * subtotal;
    const total = subtotal + tip;    
    document.getElementById("totalResult").textContent = "Total: $" + total.toFixed(2);
    if(!tipPercentage){
        document.getElementById("totalResult").textContent = "No Tip provided";
    }
}
