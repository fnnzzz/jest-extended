import matcher from './';

expect.extend(matcher);

const shallow = { x: 10, y: 13, z: 200 };

describe('.toContainKey', () => {
  it('passes when object contains the given key', () => {
    expect(shallow).toContainKey('x');
  });
});

describe('.not.toContainKey', () => {
  it('passes when given object doest not contains given key', () => {
    expect(shallow).not.toContainKey('vector');
  });

  it('passes when expected is not a object', () => {
    expect(12345).not.toContainKey('somekey');
  });
});
