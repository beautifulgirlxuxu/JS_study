function XiaoCai(name, haircut) {
    this.name = name;
    this.haircut = haircut;
}

XiaoCai.prototype.hobbies = function() {
    console.log('不管怎样，你开心就好');
}

// var xc = new XiaoCai('小蔡', '飞刘海');
// var xc2 = new XiaoCai('小蔡', '爆炸头');
// xc.hobbies();
// xc2.hobbies();

// 要找什么样的小蔡，小蔡都是那一个小蔡
// 如何在多次new 只得到一个对象 单例
// class new 
var Singleton = function(name) {
    this.name = name;
    // this.haircut = haircut;
    // instanceof 实例
    this.instance = null;
}
// static 方法，静态方法，不需要new 可以在类上调用的
// 废掉constructor new 
Singleton.getInstance = function(name) {
    if(!this.instance) {
        this.instance = new Singleton(name);
    }

    return this.instance;
}
// new 执行构造函数，建立新的对象内存
var a =  Singleton.getInstance('sven1');
var b =  Singleton.getInstance('sven2');
// a === b 引用式赋值
console.log(a.name);
console.log(b.name);
console.log(a === b);

                                                                                                                                                                                                                                                                                                                                       