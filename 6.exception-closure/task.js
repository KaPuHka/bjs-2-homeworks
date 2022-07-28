function parseCount(value) {
    let num = Number.parseInt(value);
    if (num > 0)
        return num;  
    else 
        throw new Error("Невалидное значение");
}

function validateCount(value){

    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a,b,c) {
        if (a+b+c-Math.max(a,b,c) < Math.max(a,b,c))
            throw new Error("Треугольник с такими сторонами не существует");
        this.a = a;
        this.b = b;
        this.c = c;  
    }

    getPerimeter(){
        return this.a + this.b + this.c;
    }

    getArea(){
        let p = this.getPerimeter();
        p *= 0.5;
        let s = p*(p-this.a)*(p-this.b)*(p-this.c);
        s = Math.sqrt(s).toFixed(3);
        return Number.parseFloat(s);
    }
}

class Placeholder {
    constructor(){  
        //
    }
    getPerimeter(){
        return 'Ошибка! Треугольник не существует';
    }

    getArea(){
        return 'Ошибка! Треугольник не существует';
    }
}

function getTriangle(a, b, c){
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return new Placeholder(); 
    }
    
}
 