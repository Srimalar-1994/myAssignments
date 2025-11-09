import test, { expect } from '@playwright/test'
test('Alerts and Frames', async({page}) =>{
    
    page.on('dialog',popup1 => {
        const p = popup1.type()
        console.log(p)
        console.log(popup1.message())
        if(p === "confirm"){
    popup1.accept()        
    }
    })    
     await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')
    await page.frameLocator('#iframeResult').getByText("Try It").click()
    const actValue=await page.frameLocator("#iframeResult").locator("#demo").innerText()
    const expValue="You pressed OK!"
    expect.soft(actValue).toEqual(expValue)
})