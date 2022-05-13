import calculator from "./main.js";

//Arrange
const message = {
    add: 'sum of 2 numbers is:',
    divide: 'division of 2 numbers is:',
    multiply: 'multiplication of 2 numbers is:'
  }
  
  //Act
  const addition = calculator.add(10, 5);
  const subtraction = calculator.subtract(10, 5);
  const division = calculator.divide(10, 5);
  const multiplication = calculator.multiply(10, 5);

describe('Calculator', () => {
    test('is addition', () => {
      expect(Calculator.add).toBeTruthy();
    });
  
    test('is not subtraction', () => {
      expect(Calculator.subtract).toBeFalsy();
    });

    test('is not division', () => {
        expect(Calculator.divide).toBeFalsy();
    });
  });

  describe('Calculator', () => {
    test('is subtraction', () => {
      expect(Calculator.subtract).toBeTruthy();
    });
  
    test('is not multiplication', () => {
      expect(Calculator.multiply).toBeFalsy();
    });

    test('is not division', () => {
        expect(Calculator.divide).toBeFalsy();
    });
  });

  describe('Calculator', () => {
    test('is division', () => {
      expect(Calculator.divide).toBeTruthy();
    });
  
    test('is not multiplication', () => {
      expect(Calculator.multiply).toBeFalsy();
    });

    test('is not addition', () => {
        expect(Calculator.add).toBeFalsy();
    });
  });

  describe('Calculator', () => {
    test('is multiplication', () => {
      expect(Calculator.multiply).toBeTruthy();
    });
  
    test('is not subtraction', () => {
      expect(Calculator.subtract).toBeFalsy();
    });

    test('is not addition', () => {
        expect(Calculator.add).toBeFalsy();
    });
  });