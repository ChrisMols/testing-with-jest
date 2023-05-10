const { Builder, By, Key, until } = require('selenium-webdriver');

describe('Webbsida', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  it('testar att sidan laddas korrekt', async () => {
    await driver.get('http://127.0.0.1:5500/dist/');
    await driver.wait(until.titleIs('En stack'), 100000);
  }, 15000);
});

