import test, { expect } from '@playwright/test'

test.only("Create Lead",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.getByRole("button", { name: "Login" }).click()
    await page.getByRole("link", { name: "CRM/SFA" }).click()
    await page.locator("//a[text()='Leads']").click()
    await page.locator("//a[text()='Create Lead']").click()
    await page.locator("#createLeadForm_companyName").fill("TestLeaf")
    await page.locator("#createLeadForm_firstName").fill("Timothy")
    await page.locator("#createLeadForm_lastName").fill("Firstimer")
    await page.locator("#createLeadForm_personalTitle").fill("Ms")
    await page.locator("#createLeadForm_generalProfTitle").fill("QA")
    await page.locator("#createLeadForm_annualRevenue").fill("50000")
    await page.locator("#createLeadForm_departmentName").fill("Banking")
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("1234567890")
    await page.locator("//input[contains(@class,'smallSubmit')]").click()
    await expect(page.locator("#viewLead_companyName_sp")).toContainText("TestLeaf")
    await expect(page.locator("#viewLead_firstName_sp")).toContainText("Timothy")
    await expect(page.locator("#viewLead_lastName_sp")).toContainText("Firstimer")
    await expect(page.locator("#viewLead_statusId_sp")).toContainText("Assigned")
    console.log("Lead Created Successfully")
    const actualcompany=await page.locator("#viewLead_companyName_sp").textContent()
    const actcompany= actualcompany?.slice(0,8)
    const actualfirstname=await page.locator("#viewLead_firstName_sp").textContent()
    const actuallastname=await page.locator("#viewLead_lastName_sp").textContent()
    const actualstatus=await page.locator("#viewLead_statusId_sp").textContent()
    const expcompany="TestLeaf"
    const expfirstname="Timothy"
    const explastname="Firstimer"
    const expstatus="Assigned"
    expect.soft(expcompany).toEqual(actcompany)
    expect.soft(expfirstname).toEqual(actualfirstname)
    expect.soft(explastname).toEqual(actuallastname)
    expect.soft(expstatus).toEqual(actualstatus)
    console.log("Values matched")
})