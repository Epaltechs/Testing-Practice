import reverseString from './main';

//Arrange
const message = 'Reversed string';

//Act
const reverseFunc = reverseString('jest');

//Assert
test(message, () => { expect(reverseFunc).toBe('tsej') });