// 类式继承 function Person new
// 继承
// 人类 object
var Person = { 
    name: 'default name',
    getName: function() {
        return this.name;
    }
}
// Person.name = '徐燕青';
// console.log(Person.getName());

// 原型式继承
// Person object js里面没有类 只有原型对象 一切皆对象
function clone(obj) {
    // 闭包 函数嵌套函数
    function F() {} 
    // obj原型链对象 奉献，让基于它的对象来它的链上找方法和属性
    // 每个函数都有prototype属性
    F.prototype = obj;
    // 返回F的一个实例
    return new F();
}
// Person.getId = '123';
// console.log(Person.getId);
var xyq = clone(Person);
xyq.name = '徐燕青';
console.log(xyq.getName());
// 人类 作者也是人 books getBooks
var author = clone(Person);
author.name = '冯唐';
author.books = ['北京北京','十八岁给我一个姑娘','万物生长'];
author.getBooks = function(){
    return this.books;
}
console.log(author.getName());
console.log(author.getBooks());
// var xyq = Person;
// xyq.name = '徐燕青';
// console.log(xyq.getName());

// // 引用式赋值
// var xmm = Person;
// console.log(xmm.name);
