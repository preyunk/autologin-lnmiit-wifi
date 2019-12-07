const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    args: ["--ignore-certificate-errors"],
    headless: false
  });
  const page = await browser.newPage();
  await page.goto("https://172.22.2.6/connect/PortalMain");
  await page.waitForSelector("#UserCheck_Login_Button");
  await page.waitForSelector("#LoginUserPassword_auth_username");
  await page.waitForSelector("#LoginUserPassword_auth_password");

  await page.$eval(
    "#LoginUserPassword_auth_username",
    el => (el.value = "18ucs019")
  );
  await page.$eval(
    "#LoginUserPassword_auth_password",
    el => (el.value = "InwOYdT6")
  );
  const el = await page.$("#UserCheck_Login_Button");
  console.log(el);

  el.click();
  await page.waitForSelector("#UserCheck_Logoff_Button");
  // await page.waitFor(4000);
  await page.screenshot({ path: "./example.png" });
  await browser.close();
})();
