import { MobileNumberPipe } from './mobile-number.pipe';

describe('MobileNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new MobileNumberPipe();
    expect(pipe).toBeTruthy();
  });
  it('should display phone number in phone format', () => {
    const phoneNumber ="876543213121"
    const pipe = new MobileNumberPipe();
    const result = pipe.transform(phoneNumber);
    expect(result).toBe('(+87)-65432 13121');
  });
});
