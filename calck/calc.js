
function addition() {
    var a = parseInt(document.getElementById('first_number').value);
    var b = parseInt(document.getElementById('second_number').value);

    if (isNaN(a)==true) a=0;
    if (isNaN(b)==true) b=0;

    var c = a + b;

    document.getElementById('result').innerHTML = c;
}
    
function subtraction() {
    var a = parseInt(document.getElementById('first_number').value);
    var b = parseInt(document.getElementById('second_number').value);

    if (isNaN(a)==true) a=0;
    if (isNaN(b)==true) b=0;

    var c = a - b;

    document.getElementById('result').innerHTML = c;
};

function multiplication() {
    var a = parseInt(document.getElementById('first_number').value);
    var b = parseInt(document.getElementById('second_number').value);

    if (isNaN(a)==true) a=0;
    if (isNaN(b)==true) b=0;

    var c = a * b;

    document.getElementById('result').innerHTML = c;
};

function division() {
    var a = parseInt(document.getElementById('first_number').value);
    var b = parseInt(document.getElementById('second_number').value);

    if (isNaN(a)==true) a=0;
    if (isNaN(b)==true) b=0;

    var c = a / b;

    document.getElementById('result').innerHTML = c;
};
