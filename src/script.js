const screen = document.querySelector('#screen');
const operator = {
    '+': function (x, y) {
        return x + y
    },
    '-': function (x, y) {
        return x - y
    },
    '*': function (x, y) {
        return x * y
    },
    '/': function (x, y) {
        return x / y
    },
};

var numberOne, op;
function clickButton(el) {
    
    switch (el.value) {
        case "equal":
            screen.value = numberOne = operator[op](+numberOne, +screen.value);
            break;
        case "clear":
            screen.value = "0";
            numberOne = 0;
            break;
        case '+':
            numberOne = screen.value;
            screen.value = el.value;
            op = el.value;
            break;
        case '-':
            numberOne = screen.value;
            screen.value = el.value;
            op = el.value;
            break;
        case '*':
            numberOne = screen.value;
            screen.value = el.value;
            op = el.value;
            break;
        case '/':
            numberOne = screen.value;
            screen.value = el.value;
            op = el.value;
            break;
        default:
            if(!!+screen.value && screen.value != '0') {
                screen.value += el.value;
            } else {
                screen.value = el.value;
            }
            break;
    }
}