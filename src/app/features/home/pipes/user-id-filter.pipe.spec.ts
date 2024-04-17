import { UserIdFilterPipe } from './user-id-filter.pipe';

describe('UserIdFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new UserIdFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
