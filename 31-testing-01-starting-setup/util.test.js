const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");

test("should output name and age", () => {
  const text = generateText("Max", 40);
  expect(text).toBe("Max (40 years old)");
});

test("should output data-less text", () => {
  const text = generateText("", null);
  expect(text).toBe(" (null years old)");
});

test("should generate a valid text output", () => {
  const text = checkAndGenerate("Max", 29);
  expect(text).toBe("Max (29 years old)");
});

test("create and element with text and correct class", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ["--window-size=640, 480"]
  });

  const page = await browser.newPage();
  await page.goto("http://127.0.0.1:5500/31-testing-01-starting-setup/");

  // enter something
  await page.click("input#name");
  await page.type("input#name", "Anna");
  await page.click("input#age");
  await page.type("input#age", "28");
  await page.click("#btnAddUser");

  const finalText = await page.$eval(".user-item", el => el.textContent);
  expect(finalText).toBe("Anna (28 years old)");
}, 10000);
