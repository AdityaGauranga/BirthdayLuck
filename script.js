const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNo = document.querySelector("#lucky-number");
const checkNoButton = document.querySelector("#check-number");

checkNoButton.addEventListener("click", function getValues(){
    console.log(dateOfBirth.value, luckyNo.value);
})