// ES5的写法
const callbacks = [];
for(var i=0; i<= 2; i++){
    callbacks[i] = function(){
        return i*2;
    }
}

console.log(callbacks[0]());
console.table(["apples", "oranges", "bananas"]);
console.table([
    callbacks[0](),
    callbacks[1]()
]);

// ES5的写法
const callbacks2 = [];
for(let i=0; i<= 2; i++){
    callbacks2[i] = function(){
        return i*2;
    }
}

console.table([
    callbacks2[0](), // 0
    callbacks2[1]() //2
]);

// 立即执行函数,可以限定一个变量的作用域，在这个函数内
(function(){
    var foo = function(){
        return 1;
    }
    console.log("foo() === 1", foo() === 1);

    (function(){
        var foo = function(){
            return 2;
        }

        console.log("foo() === 1", foo() === 1);
    })();
})();

// ES6中使用一个花括号就可以限定作用域
{
    var foo = function(){
        return 1;
    }
    console.log("foo() === 1", foo() === 1)
}