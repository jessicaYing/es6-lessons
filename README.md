# es6-lessons

一个学习es6的练习项目

## 1. 常量

const 声明一个只读的常量。一旦声明，常量的值就不能改变。

const 声明的常量在声明时就需要被初始化。

## 2. 变量作用域

## 3. Symbol

Symbol 类型用于声明一个独一无二的值。

### 3.1 消除魔术字符串
```js
// 使用symbol消除魔术字符串
function getArea(shape, options){
    let area = 0;
    switch(shape){
        case 'Triangle': // 这个字符串就是魔术字符串
            area = 0.5 * options.width * options.height;
            break;
        case 'Rectangle':
            area = options.width * options.height;
            break;
    }
    return area;
}

var area = getArea('Triangle', {width:100, height:200});
console.log(area);
```
魔术字符串的危害：与逻辑代码形成“强耦合”，不利于将来的修改和维护；容易产生拼写错误。

常用的消除魔术字符串的方法，就是把它写成一个变量。

```js
// 定义一个shapeType来消除魔术字符串
var shapeType = {
    triangle: 'Triangle',
    rectangle: 'Rectangle'
}

function getArea(shape, options){
    let area = 0;
    switch(shape){
        case shapeType.triangle: // 这个字符串就是魔术字符串
            area = 0.5 * options.width * options.height;
            break;
        case shapeType.rectangle:
            area = options.width * options.height;
            break;
    }
    return area;
}

var area = getArea(shapeType.triangle, {width:100, height:200});
console.log(area); // 10000
```

其实，最终shapeType.triangle是不是等于字符串'Triangle'并不重要，只要它是一个唯一的，和其他的key对应的值不一样就可以了。所以，可以使用Symbol来解决上述问题。

```js
const shapeType = {
    triangle: Symbol(),
    rectangle: Symbol()
};

function getArea(shape, options){
    let area = 0;
    switch(shape){
        case shapeType.triangle: // 这个字符串就是魔术字符串
            area = 0.5 * options.width * options.height;
            break;
        case shapeType.rectangle:
            area = options.width * options.height;
            break;
    }
    return area;
}
console.log(shapeType.triangle); // Symbol()
var area1 = getArea(shapeType.triangle, {width:100, height:200});
console.log(area1); // 10000
var area2 = getArea(shapeType.rectangle, {width:100, height:200});
console.log(area2); // 20000
```