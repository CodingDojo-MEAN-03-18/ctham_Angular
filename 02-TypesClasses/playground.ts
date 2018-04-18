// myNum = 5;
var myNum: number = 5;

// myString = "Hello Universe";
var myString: string = "Hello Universe";

// myArr = [1,2,3,4];
var myArr: number[] = [1,2,3,4];

// myObj = { name:'Bill'};
var myObj: object = { name:'Bill'};

// anythingVariable = "Hey";
var anythingVariable: any = "Hey";

// anythingVariable = 25; 
var anythingVariable: any = 25;

// arrayOne = [true, false, true, true];
var arrayOne: boolean[] = [true, false, true, true];

// arrayTwo = [1, 'abc', true, 2];
var arrayTwo: any[] = [1, 'abc', true, 2];

// myObj2 = { x: 5, y: 10 };
const myObj2 = { x: 5, y: 10 };

// // object constructor
// MyNode = (function () {
//     function MyNode(val) {
//         this.val = 0;
//         this.val = val;
//     }
//     MyNode.prototype.doSomething = function () {
//         this._priv = 10;
//     };
//     return MyNode;
// }());
class MyNode {
    private _priv: number;
  
    constructor(public val: number) {}
  
    doSomething(): void {
      this._priv = 10;
    }
  }

// myNodeInstance = new MyNode(1);
// console.log(myNodeInstance.val);
// function myFunction() {
//     console.log("Hello World");
//     return;
// }
// function sendingErrors() {
// 	throw new Error('Error message');
// }
const myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction(): void {
    console.log("Hello World");
    return;
}
function sendingErrors(): void {
	throw new Error('Error message');
}