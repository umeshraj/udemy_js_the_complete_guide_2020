var num1Input = document.getElementById("num1");
var num2Input = document.getElementById("num2");
var buttonElement = document.querySelector("button");
function add(a, b) {
    return a + b;
}
var OutputMode;
(function (OutputMode) {
    OutputMode[OutputMode["CONSOLE"] = 0] = "CONSOLE";
    OutputMode[OutputMode["ALERT"] = 1] = "ALERT";
})(OutputMode || (OutputMode = {}));
function printResult(result, printMode) {
    if (printMode == OutputMode.CONSOLE) {
        console.log(result);
    }
    else if (printMode == OutputMode.ALERT) {
        alert(result);
    }
}
var results = [];
buttonElement.addEventListener("click", function () {
    var num1 = +num1Input.value;
    var num2 = +num2Input.value;
    var result = add(num1, num2);
    var resultContainer = {
        res: result,
        print: function () {
            console.log(this.res);
        }
    };
    results.push(resultContainer);
    // results.push(5);
    // printResult(results);
    // results[0].print();
    printResult(result, OutputMode.CONSOLE);
    printResult(result, OutputMode.ALERT);
});
