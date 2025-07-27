import { firstUpperCase, good, hi } from './hi';

describe('firstUpperCase', () => {
  test('firstUpper', () => {
    expect(firstUpperCase('abcd')).toBe('Abcd');
    expect(firstUpperCase('AAbb')).toBe('AAbb');
    expect(firstUpperCase('123A')).toBe('123A');
  });
});

describe('hi -', () => {
  describe('hi', () => {
    it('Minsoo', () => {
      expect(hi('minsoo')).toBe('Hi~ Minsoo!');
    });
  });

  describe('good', () => {
    test('Morning', () => {
      expect(good('Morning')).toBe('Good Morning!');
    });

    test('Night', () => {
      expect(good('night')).toBe('Good Night!');
    });
  });
});
