"use strict";

let point = {
    x: 0,
    y: 0,
    // Получить координату X
    getX: () => 
        this.x,
    // Получить координату Y
    getY: () => 
        this.y,

    // Умножить координату
    scale: (z) => {
        this.x *= z
        this.y *= z
    },
    // Прибавить значение к координате
    translate: (z) => {
        this.x += z
        this.y += z
    },
    // Создать точку
    createPoint: (x, y) => {
        this.x = x
        this.y = y
    },
}

point.createPoint(2, 3)
console.log(point.getX(), point.getY())
point.translate(1)
console.log(point.getX(), point.getY())
point.scale(3)
console.log(point.getX(), point.getY())
