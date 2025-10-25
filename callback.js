let browser = "Chrome"; 
function checkBrowserVersion(callback)
{
    setTimeout(() => {
    callback(browser)    
}, 2000);
}
function browserVersion(version)
{
    console.log("Browser version:" +version);
}
checkBrowserVersion(browserVersion);

