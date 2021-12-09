const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNo = document.querySelector("#lucky-number");
const checkNoButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function compareValues(sum, luckyNo){
    if (sum%luckyNo === 0){
        outputBox.innerText = "Your birthday is lucky （￣︶￣)" ; 
        
        // if you used textarea, use id's .value
        // outputBox.value = "Your birthday is lucky （￣︶￣)" ;
    }
    else {
        outputBox.innerText = "An unlucky birthday it seems (＞﹏＜)";
        
        // if you used textarea, use id's .value
        // outputBox.value = "An unlucky birthday it seems ＞﹏＜";
    }
}

function checkBDayIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if (sum&&dob)
    compareValues(sum, luckyNo.value)
    else 
    outputBox.innerText = "Enter both fields pwease (￣へ￣)";
}

function calculateSum(dob) {
    dob = dob.replaceAll("-","");
    let sum = 0;
    for (let index = 0; index < dob.length; index++) {
        sum = sum + Number(dob.charAt(index)); // typecasting used here, converting it into a number from strings since string and numbers cant be added
    }
    return sum;
}

checkNoButton.addEventListener("click", checkBDayIsLucky)
