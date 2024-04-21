// Constructor Shape is imported.
const { Circle, Triangle, Square } = require('./shapes');

//A testing suite for Circle is created.
describe('Circle', () => {
    test('renders correctly', () => {
        const shape = new Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    })
})

//A testing suite for Triangle is created.
describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        shape.setColor("#0000ff");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="#0000ff" />');
    })
})

//A testing suite for Square is created.
describe('Square', () => {
    test('renders correctly', () => {
        const shape = new Square();
        shape.setColor("mediumslateblue");
        expect(shape.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="mediumslateblue" />');
    })
})
