const { stringLength } = require('./main');

test('should output name and number', () => {
  const text = stringLength('Max', 12);
  expect(text).toBe('Max(12 12)');
});