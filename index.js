// Створити "абстрактний" клас Figure3D з властивістю name (рядок не порожній)
// і методом обчислити об'єм.
//
// Створити класи нащадки: сфера, куб, циліндр.
//     Обов'яково прописати сеттери та геттери для властивостей!
// Не забувати про виброс виключень.
//
//     Використовувати конструкцію try/catch
// Створити по одному екземпляру кожного класу.
//
//     Створити функцію showVolume3DFigure, яка приймає об'єкт і повертає рядок виду "[назва фигури] has volume:
//     [значення об'єму].

function checkName(value) {
    if (typeof value !== "string") {
        throw new TypeError("Name must be string");
    }
    if (value.trim().length === 0) {
        throw new RangeError("Name must exist words");
    }
    return true;
}

function showVolume3DFigure(figure) {
    if (figure instanceof Figure3D) {
        return (figure.name, "has volume: ", figure.getVolume());
    }
    throw new TypeError("Instance must be extends Figure3D");
}

class Figure3D {
    constructor(name) {
        if (this.constructor === Figure3D) {
            throw new Error("Not create instance from Figure3D");
        }
        this.name = name;
    }

    set name(value) {
        if (checkName(value)) {
            this._name = value;
        }
    }

    get name() {
        return this._name;
    }

    getVolume() {}
}

class Sphere extends Figure3D {
    constructor(radius) {
        super("sphere");
        this.radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        if (typeof value !== "number") {
            throw new TypeError("Radius must be number");
        }
        if (value <= 0) {
            throw new RangeError("Radius must be positive");
        }
        this._radius = value;
    }
    getVolume() {
        return (4 * Math.PI * this._radius * this._radius * this._radius) / 3;
    }
}

class Cube extends Figure3D {
    constructor(side) {
        super("cube");
        this.side = side;
    }

    get side() {
        return this._side;
    }

    set side(value) {
        if (typeof value !== "number") {
            throw new TypeError("side must be number");
        }
        if (value <= 0) {
            throw new RangeError("side must be positive");
        }
        this._side = value;
    }
    getVolume() {
        return this._side * this._side * this._side;
    }
}

class Cylinder extends Figure3D {
    constructor(radius, height) {
        super("cylinder");
        this.radius = radius;
        this.height = height;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        if (typeof value !== "number") {
            throw new TypeError("Radius must be number");
        }
        if (value <= 0) {
            throw new RangeError("Radius must be positive");
        }
        this._radius = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        if (typeof value !== "number") {
            throw new TypeError("height must be number");
        }
        if (value <= 0) {
            throw new RangeError("height must be positive");
        }
        this._height = value;
    }

    getVolume() {
        return Math.PI * this._radius * this._radius * this._height;
    }
}

try {
    const figure1 = new Sphere(5);
    const figure2 = new Cube(5);
    const figure3 = new Cylinder(5, 10);
    showVolume3DFigure(figure1);
    showVolume3DFigure(figure2);
    showVolume3DFigure(figure3);
} catch (error) {
    console.log(error);
}




