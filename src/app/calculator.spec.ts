import { Calculator } from "./calculator"

describe('testing calculator', () => {
    it('should be able to add two whole numbers ', () => {
        var calculator = new Calculator();       
        expect(calculator.addNumbers(10,10)).toEqual(20); 
    })

    it('should be able to add a whole number and a zero ', () => {
        var calculator = new Calculator();       
        expect(calculator.addNumbers(10,0)).toEqual(10); 
    })
})