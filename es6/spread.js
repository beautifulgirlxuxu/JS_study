// import { functionTypeAnnotation } from "./C:/Users/A456-930MX/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/babel-types";

// 食品小店 pizza
//常量 es6 优先考虑const let安全 
// const 只限制类型不能变，除了基本类型外，值是可变的(比如数组，函数，对象等等)
//var 基本不用
// constant variable
// const name = 'xyq';
// name = '徐燕青';
const featured = ['Deep Fish','Pepperoni','Hawaiian'];
featured.push('芝士');
// console.log(featured);
// featured = {'haha': '123'};
const specialty = ['Meatzza','Spicy Mama','Marghtita'];
const pizzas = [...featured,'veg',...specialty];
console.log(pizzas);
// console.log(typeof(pizzas));
const fridayPizzas = [...pizzas];
