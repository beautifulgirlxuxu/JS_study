'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// import { functionTypeAnnotation } from "./C:/Users/A456-930MX/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/babel-types";

// 食品小店 pizza
//常量 es6 优先考虑const let安全 
// const 只限制类型不能变，除了基本类型外，值是可变的(比如数组，函数，对象等等)
//var 基本不用
// constant variable
// const name = 'xyq';
// name = '徐燕青';
var featured = ['Deep Fish', 'Pepperoni', 'Hawaiian'];
featured.push('芝士');
// console.log(featured);
// featured = {'haha': '123'};
var specialty = ['Meatzza', 'Spicy Mama', 'Marghtita'];
var pizzas = [].concat(featured, ['veg'], specialty);
console.log(pizzas);
// console.log(typeof(pizzas));
var fridayPizzas = [].concat(_toConsumableArray(pizzas));
