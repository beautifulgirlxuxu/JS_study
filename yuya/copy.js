// const arr = [1,2,3];
// Arr.prototype.concat
// const arr2 = arr.concat([4,5,6]);
// 返回一个新的数组
// console.log(arr2);
// arr2[0] = 6;
// arr[1] = 8;
// console.log(arr2);
// console.log(arr);
// arr2[1] = 4;
// console.log(arr);
// var old_arr = ['old', 1, true, null, undefined];
// var new_arr = old_arr.concat();
// new_arr[0] = 'new';
// console.log(new_arr);
// console.log(old_arr);
// 基本的的类型

var arr = new Array(6);
// console.log(arr.length);
arr[0] = "George";
arr[1] = "John";
arr[2] = "Thomas";
arr[3] = "James";
arr[4] = "Adrew";
arr[5] = "Martin";

const newArr = arr.slice();
// console.log(newArr);
newArr[0] = '芬芬';
// console.log(newArr);
// console.log(arr);
// console.log(arr.slice(2,4));
// console.log(arr.slice(-4,-1));
// js 数组，删除数组的项目，并且加入
console.log(arr);
// index 
// 数组的方法有两派，改变原数组与否
arr.splice(2,0,'芬芬');
console.log(arr);
// 借用数组concat合并 slice切割
// 返回新数组的方式，来实现浅拷贝
// 从下标为2的地方开始要
// console.log(arr.slice(2));