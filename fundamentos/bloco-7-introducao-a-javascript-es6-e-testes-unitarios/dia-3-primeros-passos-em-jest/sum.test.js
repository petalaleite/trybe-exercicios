const sum = require('./sum');

test('Testa o retorno de sum', () => {
  expect(sum(4, 5)).toBe(9);
  expect(sum(0, 0)).toBe(0);
  expect(() => sum(4, '5')).toThrowError();
  expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
})