let heldValue = null;
let heldOperation = null;
let nextValue = null;

$(".digits button").click(function(){
    if (nextValue===null){
        nextValue ="0",
        nextValue = $(this).text()
        updateDisplay();
    } else { nextValue = nextValue + $(this).text()
        updateDisplay();
    }
})

$('.add').click(function () {
    setHeldOperation(add);
    $('.next-operation').text('+');
    updateDisplay();
});

$('.subtract').click(function () {
    setHeldOperation(subtract);
    $('.next-operation').text('-');
    updateDisplay();
});

$('.multiply').click(function () {
    setHeldOperation(multiply);
    $('.next-operation').text('×');
    updateDisplay();
});

$('.divide').click(function () {
    setHeldOperation(divide);
    $('.next-operation').text('÷');
    updateDisplay();
});

$('.sq-rt').click(function () {
    setHeldOperation(sqrt);
    $('.next-operation').text('√');
    updateDisplay();
});

$('.power').click(function () {
    setHeldOperation(power);
    $('.next-operation').html('(E)');
    updateDisplay();
});

$('.plus-minus').click(function () {
    setHeldOperation(plusminus);
    $('.next-value').text(nextValue);
    updateDisplay();
});

$('.pi').click(function () {
    setHeldOperation(pi);
    $('.next-value').text(nextValue);
    updateDisplay();
});

$('.equals').click(function () {
    setHeldOperation(null);
    $('.next-operation').text('');
    updateDisplay();
});

function showValue(location, value) {
    if (value === null) {
        $(location).text('');
    } else if (value === Infinity) {
        $(location).text('Cannot Divide By Zero');
    } else {
        $(location).text(Number(value));
    }
}
function add(x, y) {
    return Number(x) + Number(y);
}

function subtract(x, y) {
    return Number(x) - Number(y);
}

function multiply(x, y) {
    return Number(x) * Number(y);
}

function divide(x, y) {
    return Number(x) / Number(y);
}

function sqrt() {
    return Math.sqrt(nextValue);
}

function power(x, y) {
    return Math.pow(Number(x), Number(y));
}

function updateDisplay() {
    showValue(".held-value", heldValue),
    showValue(".next-value", nextValue)
}

function setHeldOperation(operation) {
    if (heldOperation !== null) {
        heldValue = heldOperation(heldValue, nextValue);
    } else {
        nextValue !== null && (heldValue = nextValue);
    }
    nextValue = null;
    heldOperation = operation;
}

$('.memory button.clear-all').click(function () {
    (heldValue = null), (heldOperation = null), (nextValue = null);
    $('.next-operation').text('');
    updateDisplay();
});

$('.memory button.clear-entry').click(function () {
    nextValue = null;
    updateDisplay();
});