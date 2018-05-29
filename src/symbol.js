// 使用symbol消除魔术字符串

// 定义一个shapeType来消除魔术字符串
// var shapeType = {
//     triangle: 'Triangle',
//     rectangle: 'Rectangle'
// }

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
// 其实，最终shapeType.triangle是不是等于字符串'Triangle'并不重要，只要它是一个唯一的，和其他的key对应的值不一样就可以了。
console.log(shapeType.triangle);
var area1 = getArea(shapeType.triangle, {width:100, height:200});
console.log(area1); // 10000
var area2 = getArea(shapeType.rectangle, {width:100, height:200});
console.log(area2); // 20000

/**
 * 另一个例子，游戏程序中，用户需要选择角色的种族，有3个种族：神族 protoss、人族 terran 、虫族 zerg
 */

// var race = {
//     protoss: 'protoss',
//     terran: 'terran',
//     zerg: 'zerg'
// };
const race = {
    protoss: Symbol('protoss'), // 可以给Symbol起一个名字，但不影响其真实值
    terran: Symbol(),
    zerg: Symbol()
};

console.log(race.protoss);
function createRole(type){
    if(type === race.protoss){
        console.log('create role protoss');
    }else if(type === race.terran){
        console.log('create role terran');
    }else if(type === race.zerg){
        console.log('create role zerg');
    }
}

createRole(race.zerg);
