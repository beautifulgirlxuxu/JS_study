// import { prototype } from "stream";
function extend(subClass, superClass) {
    // 手术 extend 继承 subClass子类 superClass父类
    // prototype 指向
    // 类 F 空函数  函数就是对象也是类，当然js 无类
    var F = function() { }
       F.prototype = superClass.prototype;
       console.log(F.prototype);
    //    js 原型链 prototype 对象会沿着原型链一直去查找，
    // 自身对象是否有getName方法，如果没有，就会沿着这跟链找其他对象，是否有方法
    // console.log( subClass.prototype.constructor );
       subClass.prototype = new F();
    //    console.log( subClass.prototype.constructor );
       
    //    constructor 构造函数 subClass
    // prototype 下面有一个 constructor 属性 对象完全是由 prototype 来指挥

       subClass.prototype.constructor = subClass;
    //    console.log( subClass.prototype.constructor );
        //  静态属性指向 superClass.prototype
    subClass.superclass = superClass.prototype;

       
}
// 人类
// person 既是函数， 又是构造函数
// 函数是对等的一种，即可执行的对象
// 一等对象 上天入地
// 表达式 var a = function() {}
// 高阶函数 形参 function fun(cb){ cd();}
// 返回值 返回一个函数
// 基类 
function Person(name) {
    this.name = name;
    // this.occupation = occupation;
}

 
 Person.prototype.getName = function() {
     return this.name;
 }

 var xmm = new Person ('熊苗苗');
   
 //console.log(xmm.getName());
  

 function Author (name, books) {
    // 借 
    // author 类得到属性设置
    // new Person 构造实例
    // Person 构造函数 被执行.call 让this 指针指向Person
    // this ->author 对象指向
    Person.call(this, name);
    this.books = books;
     }  
    // Author.prototype.getName = function() {
    //     return Person.prototype.getName.call(this);
    // }

    // Person prototype 方法 ，它都要有
    // Person 的构造函数不能被改掉
    extend(Author, Person);

    Author.prototype.getBooks = function() {
        return this.books.join(',');
    }

        var xwz = new Author ('樱桃小丸子',['我知道的JS','JS红学','小丸子模式']);
        // console.log(xwz.getName());
        console.log(xwz.getBooks());
        console.log(xwz.getName());
        
