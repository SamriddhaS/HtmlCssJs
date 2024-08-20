

const includeNumberCheckBox = document.getElementById("includeNumbers");
const includeSpecialCharecterCheckBox = document.getElementById("includeSplChrac");
const includeUpperCaseCheckBox = document.getElementById("includeUpperCase");
const generateBtn = document.getElementById("generateBtn");
const outputBox = document.getElementById("showValue");


const passwordLength = 12;
const lowercaseCharecters =  "abcdefghijklmnopqrstuvwxyz";
const numberCharecters =  "0123456789"
const uppercaseCharecters =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const specialCharecters = "~!@#$%^&*()_+{}[]<>/?,.-"



generateBtn.onclick = function(){
    const result = generatePassword(
        includeUpperCaseCheckBox.checked,
        includeSpecialCharecterCheckBox.checked,
        includeNumberCheckBox.checked,
    )
    outputBox.textContent = result
}

function generatePassword(
    upperCase
    ,specicalCharecter
    ,includeNumber){

        let password = "";
        let cherecters = lowercaseCharecters;
        cherecters += upperCase ? uppercaseCharecters : ""
        cherecters += includeNumber ? numberCharecters : ""
        cherecters += specicalCharecter ? specialCharecters : ""

        console.log(`Charecters --> ${cherecters}`)

        for(let i=0;i<passwordLength;i++){
            const ranIndex = Math.floor(Math.random() * cherecters.length)
            password += cherecters[ranIndex]
        }

        console.log(`Password generated --> ${cherecters}`)

        return password;
}

