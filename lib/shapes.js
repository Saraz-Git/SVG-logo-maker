// Exports `Triangle`, `Circle`, and `Square` classes
class Shape {
    constructor(fill, text, color) {
        this.fill = fill;
        this.text = text;
        this.color = color;
    }

    setColor(fill) {
        this.fill = fill;
    }
    render() {
        return ``;
    }
    renderSVG() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${this.render()}

  <text x="150" y="120" font-size="55" text-anchor="middle" fill="${this.color}">${this.text}</text>

</svg>   
        `;
    }
}

class Circle extends Shape {
    constructor(fill, text, color) {
        super(fill, text, color);
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.fill}" />`
    }
}

class Triangle extends Shape {
    constructor(fill, text, color) {
        super(fill, text, color);
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.fill}" />`
    }
    renderSVG() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${this.render()}

  <text x="150" y="145" font-size="40" text-anchor="middle" fill="${this.color}">${this.text}</text>

</svg>   
        `;
    }
}

class Square extends Shape {
    constructor(fill, text, color) {
        super(fill, text, color);
    }
    render() {
        return `<rect x="70" y="20" width="160" height="160" fill="${this.fill}" />`
    }
}







module.exports = { Circle, Triangle, Square };