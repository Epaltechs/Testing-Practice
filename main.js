function stringLength(practice) {
        return practice.split('').reduce((length) => length + 1, 0);
}

it('characters', () =>
  expect(stringLength({
  })).toBe(8))