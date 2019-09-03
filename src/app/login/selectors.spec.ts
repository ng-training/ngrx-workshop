import * as userSelectors from './selectors';

describe('login selectors', () => {
  it('should retrieve the name', () => {
    const user = { name: 'foo', username: 'bar' };
    expect(userSelectors.getUserName.projector(user)).toEqual(user.username);
  });
});
