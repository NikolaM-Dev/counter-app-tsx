describe('Tests in the demo.test.ts file', () => {
  it('should be the same string', () => {
    const message = 'Hello World';
    const expectedMessage = `Hello World`;

    expect(message).toBe(expectedMessage);
  });
});
