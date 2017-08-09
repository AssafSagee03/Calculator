//global variables
var overAll = "";
var first = "";
var second = "";
var opp = "";

//function to clear the calculator
function clear() {
    first = "";
    second = "";
    opp = "";
    overAll = "";
    document.getElementById("enterNumbers").innerHTML = '0';
}

// Illustrates the Functioning of the Numbered Keys
// This function will be activated when the user clicks any of the numbered keys on the calculator.
function click ($key) {
    var display = "";
        if (opp == "") {
            first = first + $key;
            document.getElementById("enterNumbers").innerHTML = first;
        }
    else {
        second = second + $key;
        display = document.getElementById("enterNumbers").innerHTML;
        document.getElementById("enterNumbers").innerHTML = first + " " + opp + " " + second;
    }
}

// Code adds the Operator sign to the ‘Opp’ variable
// This function adds the operator sign to the 'Opp' variable
function operator ($sign) {
    var display = "";
    opp = $sign;
    // // See if the first and second factors have values ie: there has already been an equation 
    if (first != "" && second != "") doSum();
    display = document.getElementById("enterNumbers").innerHTML;
    document.getElementById("enterNumbers").innerHTML = display + " " + opp + " ";
    
}

// It checks to see if there are 3 values inside the variables. If so, it calculates the answer. It takes the new variable 'string' and adds to that string all 3 values from the global variables (First,Opp and Second) so we end up with one string.
function doSum () {
    var string;
    result = 0;
    if (first != "" && second != "" && opp !="") {
        string = first + " " + opp + " " + second;
        overAll = eval(string);
        document.getElementById("enterNumbers").innerHTML = overAll;
        first = overAll;
        second = "";
        opp = "";
    }
    
}

// This function simply calls the previous "clear()" function and we will load it when the page loads.
function init() {
    clear();
}