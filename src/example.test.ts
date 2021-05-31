import toCapitalizeFirstLetter from './example';

describe('toCapitalizeFirstLetter', () => {
  test('должна принять строку и вернуть строку с заглавной буквы', () => {
    expect(toCapitalizeFirstLetter('some String')).toBe('Some string');
  });
  test('должна принять строку с пробелами и вернуть строку с заглавной буквы без пробелов', () => {
    expect(toCapitalizeFirstLetter(' some String ')).toBe('Some string');
  });
  test("может принять пустую строку и вернуть 'Пустая строка'", () => {
    expect(toCapitalizeFirstLetter('')).toBe('');
  });
});
