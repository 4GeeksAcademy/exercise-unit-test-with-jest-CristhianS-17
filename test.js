const {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app');

test('adds 14 + 9 to equal 23', () => {
    expect(sum(14, 9)).toBe(23);
});

test("One euro should be 1.07 dollars", () => {
    const dollars = fromEuroToDollar(3.5);
    expect(dollars).toBe(3.745);
});

test("One dollar should be 156.5 yen", () => {
    const yen = fromDollarToYen(1);
    expect(yen).toBe(156.5);
});

test("One yen should be 0.87 pounds", () => {
    const pound = fromYenToPound(1000);
    expect(pound).toBe(870); 
});