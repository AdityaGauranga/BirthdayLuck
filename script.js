const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNo = document.querySelector("#lucky-number");
const checkNoButton = document.querySelector("#check-number");

function compareValues(sum, luckyNo){
    if (sum%luckyNo === 0){
        console.log("Your birthday is lucky （￣︶￣)")
    }
    else {
        console.log("Sorry an unlucky birthday it seems ＞﹏＜");
    }
}

function checkBDayIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    compareValues(sum, luckyNo.value)
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
