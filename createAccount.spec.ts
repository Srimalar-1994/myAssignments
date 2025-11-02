import test, { expect } from '@playwright/test'

test.only("Create Account",async({page})=>{
    await page.goto("https://login.salesforce.com/ ")
    await page.getByLabel("username").fill("dilipkumar.rajendran@testleaf.com")
    await page.getByLabel("Password").fill("TestLeaf@2025")
    await page.locator("#Login").click()
    await page.waitForTimeout(3000)
    await expect(page).toHaveTitle('Home | Salesforce')
    await expect(page).toHaveURL('https://testleaf.lightning.force.com/lightning/page/home')
    await page.locator("//div[contains(@class,'slds-icon-waffle')]").click()
    await page.locator("//button[text()='View All']").click()
    await page.getByPlaceholder("Search apps or items...").fill("Service")
    await page.locator('//p[@class="slds-truncate"]').first().click()
    await page.locator('//span[text()="Accounts"]').click()
    await page.getByRole('button', { name: 'New' }).click()
    await page.locator('[name="Name"]').fill("Test Account")
    await page.locator('//button[@class="slds-button slds-button_brand"]').last().click()
    console.log("Account Created Successfully")
    
})