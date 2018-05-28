{
    var evens = [2, 4, 6, 8, 10];
    var odds = evens.map(function (v) {
        return v + 1;
    });

    console.log(evens);
    console.log(odds);
}

{
    let evens = [2, 4, 6, 8, 10];
    let odds = evens.map(v => v + 1);
    console.log(evens);
    console.log(odds);
}

{
    var factory = function () {
        this.a = 'a';
        this.b = 'b';
        this.c = {
    
            a: 'a+',
            b: function () {
                return this.a;
            }
        }
    }
    
    console.log(new factory().c.b()); // a+
}

{
    var factory = function () {
        this.a = 'a';
        this.b = 'b';
        this.c = {
    
            a: 'a+',
            b: () => this.a
        }
    }
    
    console.log(new factory().c.b()); // a 箭头函数中，this的指向是定义时的this
}
