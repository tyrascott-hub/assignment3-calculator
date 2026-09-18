var results = [];
var again = true;

while (again) {
    var x = prompt("Enter first number:");
    var y = prompt("Enter second number:");
    var operator = prompt("Enter operator (+, -, *, /, %):");

    var result;

    if (isNaN(x) || isNaN(y)) {
        result = "Error";
    } else {
        x = Number(x);
        y = Number(y);

        if (operator == "+") {
            result = x + y;
        } else if (operator == "-") {
            result = x - y;
        } else if (operator == "*") {
            result = x * y;
        } else if (operator == "/") {
            result = x / y;
        } else if (operator == "%") {
            result = x % y;
        } else {
            result = "Error";
        }
    }

    document.write("<table>");
    document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");
    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");
    document.write("</table>");

    if (result != "Error") {
        results.push(result);
    }

    again = confirm("Do another calculation?");
}

var min = Math.min(...results);
var max = Math.max(...results);
var total = 0;

for (var i = 0; i < results.length; i++) {
    total = total + results[i];
}

var avg = total / results.length;

document.write("<table>");
document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
document.write("</table>");
