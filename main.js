class Calculator {
    constructor(add, subtract, divide, multiply) {
      this.add = add;
      this.subtract = subtract;
      this.divide = divide;
      this.multiply = multiply;
    }
  };
  
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