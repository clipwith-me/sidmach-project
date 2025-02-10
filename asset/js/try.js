const display = document.getElementById('textInput');

function clickToShow(input) {
    textInput.value = input;
}

function clearDisplay() {
    textInput.value = '';
}

function calculate() {
    try {
        textInput.value = eval(textInput.value);
    } catch (error) {
        console.log(error);
        
    }
    
}