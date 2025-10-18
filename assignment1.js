//odd or even
let value = 4
    if(value%2==0)
    {
        console.log(value + " is even");
    }
    else
    {
        console.log(value + " is odd");
    }

//numberType
let num1 = 0
if(num1 > 0)
{
    console.log (num + " is positive")
}
else if (num1 < 0)
{
    console.log(num1 + " is negative")
}
else
{
    console.log(num1 + " is zero")
}

//conditional statements
let browserName = "chrome"
let testType = "regression"
if (browserName === "chrome")
{    console.log("Launching Chrome browser...");}
else if (browserName === "firefox")
{console.log("You are using Firefox");}
else
{console.log("Launching default browser...");}
switch (testType)
{
    case "smoke":
        console.log("Running Smoke Tests...");
        break;
    case "regression":
        console.log("Running Regression Tests...");
        break;
    case "sanity":
        console.log("Running Sanity Tests...");
        break;
    default:
        console.log("Running Default Smoke Tests...");
}

//Looping statements
let num = 25
for (let i = 0; i <= num; i++)
{    
    if (i % 2 !== 0)
    {    
        console.log(i);
    }
}

//String
let originalWord = "madam"
let length = originalWord.length
let reversed = ""
for (let i = length; i >= 0; i--)
{
    reversed += originalWord.charAt(i)
}
console.log("Reversed Word: " + reversed)
if (originalWord === reversed)
{    console.log(originalWord + " is a palindrome")}
else{console.log(originalWord + " is not a palindrome")}
switch (true)
{
    case (originalWord == "hero"):
        console.log("The word is 'hero'");
        break;
    case (originalWord == "madam"):
        console.log("The word is 'madam'");
        break;
    case (originalWord == "level"):
        console.log("The word is 'level'");
        break;
    default:
        console.log("The word is not listed");
}

//Grade calculation
let score = 85
switch (true)
{
    case (score >= 90):
        console.log("Grade A");
        break;
    case (score >= 80 && score < 89):
        console.log("Grade B");
        break;
    case (score >= 70 && score < 79):
        console.log("Grade C");
        break;
    case (score >= 60 && score < 69):
        console.log("Grade D");
        break;
    default:
        console.log("Grade F");
}