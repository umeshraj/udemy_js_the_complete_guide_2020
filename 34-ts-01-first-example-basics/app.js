"use strict";
// class User {
//   public name: string;
//   private age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.print = function () {
        console.log(this.name);
    };
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name, age, permissions) {
        var _this = _super.call(this, name, age) || this;
        _this.permissions = permissions;
        return _this;
    }
    return Admin;
}(User));
var user = new User("Umesh", 23);
console.log(user.name);
// console.log(user.age);
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
// type CalculationResults = { res: number; print: () => void };
// const results: CalculationResults[] = [];
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
function logAndEcho(val) {
    console.log(val);
    return val;
}
logAndEcho("Hello there").split(" ");
