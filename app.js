const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;

}

function clearDisplay(){
    display.value="";

}

function calculate(){
    try{
    display.value=eval(display.value);
    }catch(error){
        display.value="Error";
    }

}

function backSpace(){
    displayValue = document.getElementById("display").value;
    if (displayValue.length > 0) {
        document.getElementById("display").value = displayValue.slice(0, -1);
    }
}
