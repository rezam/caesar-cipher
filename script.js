let yourString = document.querySelector(".text");
let yourNumber = document.querySelector(".number");
let runBtn = document.querySelector(".run");
let resultLbl = document.querySelector(".result");

runBtn.addEventListener("click", function () {
  let stringArr = [];
  let resultArr = [];

  for(let index = 0; index < yourString.value.length; index++) {
    stringArr = yourString.value.charCodeAt(index);
    resultArr = (parseInt(stringArr) + parseInt(yourNumber.value));

    resultLbl.innerHTML += String.fromCharCode(resultArr);
  }
});
