const createApp = require('../../src/app');

describe('Root route test', () => {
  it('Should return message hello world', async () => {
    const app = createApp();

    const res = await app.inject('/');

    expect(res.json()).toEqual({ message: 'Hello World' });

    await app.close();
  });
});
