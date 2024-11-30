let display = document.getElementById("display");
let mode = "deg"; // Default mode is degrees

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        let input = display.value;

        // Replace factorial notation with a custom function call
        input = input.replace(/(\d+)!/g, "factorial($1)");

        // Replace modes (deg/rad) in trigonometric functions
        if (mode === "rad") {
            input = input.replace(/Math.sin\(/g, "Math.sin(Math.PI / 180 * ");
            input = input.replace(/Math.cos\(/g, "Math.cos(Math.PI / 180 * ");
            input = input.replace(/Math.tan\(/g, "Math.tan(Math.PI / 180 * ");
        }
        
        let result = eval(input); // Evaluate the expression
        display.value = result;
    } catch (e) {
        display.value = 'Error';
    }
}

function toggleMode() {
    mode = (mode === "deg") ? "rad" : "deg";
    alert("Mode switched to " + mode.toUpperCase());
}

// Factorial function
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
