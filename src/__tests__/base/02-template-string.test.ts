import { getGreeting } from '../../base/02-template-string';

describe('Tests in 02-template-string', () => {
  it('should to return "Hello Nikola"', () => {
    const name = 'Nikola';
    const greeting = getGreeting(name);

    expect(greeting).toBe(`Hello ${name}`);
  });

  it('should to return "Hello Carlos" by default', () => {
    const greeting = getGreeting();

    expect(greeting).toBe('Hello Carlos');
  });
});
