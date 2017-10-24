import predicate from './predicate';

describe('toContainKey Predicate', () => {
  const shallow = { a: 10, b: 20, sum: 30 };

  describe('returns true', () => {
    it('when given object contains target key', () => {
      expect(predicate(shallow, 'sum')).toBe(true);
    });

    it('when given object contains given key', () => {
      expect(predicate(shallow, 'a')).toBe(true);
    });
  });

  describe('returns false', () => {
    it('when given object does not contain target key', () => {
      expect(predicate(shallow, 'diameter')).toBe(false);
    });

    it('when expected is not a object', () => {
      expect(predicate(null, 'key')).toBe(false);
    });
  });
});
