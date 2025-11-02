import test, { expect } from '@playwright/test'

test.only("UPdate Lead",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.getByRole("button", { name: "Login" }).click()
    await page.getByRole("link", { name: "CRM/SFA" }).click()
    await page.locator("//a[text()='Leads']").click()
    await page.locator("//a[text()='Find Leads']").click()
    await page.locator('input[name="firstName"]').last().fill("Timothy")
    await page.getByRole("button", { name: "Find Leads" }).click()
    await page.locator("//a[text()='11217']").click()
    await page.locator("//a[text()='Edit']").click()
    await page.locator("#updateLeadForm_companyName").fill("TestLeaf Company")
    await page.locator("#updateLeadForm_annualRevenue").fill("200000") 
    await page.locator("#updateLeadForm_departmentName").fill("IT")
    await page.locator("#updateLeadForm_description").fill("Updated details")
    await page.locator("input[name='submitButton']").first().click()
    await expect(page.locator("#viewLead_companyName_sp")).toContainText("TestLeaf Company")
    await expect(page.locator("#viewLead_annualRevenue_sp")).toContainText("$200,000.00")
    await expect(page.locator("#viewLead_departmentName_sp")).toContainText("IT")
    await expect(page.locator("#viewLead_description_sp")).toContainText("Updated details")
    console.log("Lead Updated Successfully")
    const actualcompany1=await page.locator("#viewLead_companyName_sp").textContent()
    const actcompany1= actualcompany1?.slice(0,16)
    const actualrev1=await page.locator("#viewLead_annualRevenue_sp").textContent()
    const actualdep1=await page.locator("#viewLead_departmentName_sp").textContent()
    const actualdes1=await page.locator("#viewLead_description_sp").textContent()
    const expcompany1="TestLeaf Company"
    const exprev1="$200,000.00"
    const expdep1="IT"
    const expdesc1="Updated details"
    expect.soft(expcompany1).toEqual(actcompany1)
    expect.soft(exprev1).toEqual(actualrev1)
    expect.soft(expdep1).toEqual(actualdep1)
    expect.soft(expdesc1).toEqual(actualdes1)
    console.log("Values matched")
})