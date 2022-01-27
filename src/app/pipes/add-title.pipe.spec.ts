import { AddTitlePipe } from './add-title.pipe';

describe('AddTitlePipe', () => {
  it('create an instance', () => {
    const pipe = new AddTitlePipe();
    expect(pipe).toBeTruthy();
  });

  it('should display title in format', () => {
    const title ="Harshita"
    const pipe = new AddTitlePipe();
    const result = pipe.transform(title, 'Ms.', 'ji');
    expect(result).toBe('Ms. Harshita ji');
  });
});
