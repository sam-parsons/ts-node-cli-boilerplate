import lib from '../lib';

test('first', () => {
  expect(lib('text')).toEqual('text');
});