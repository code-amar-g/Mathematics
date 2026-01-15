console.log('jai shree ram');
let sumScore = document.querySelector(".sumscore");
let sumScr = 0;

let sumNum1 = document.querySelector(".sumNum1");
let sumNum2 = document.querySelector(".sumNum2");
let userInput = document.querySelector(".userInput");
let result = document.querySelector(".result");
let resbtn = document.querySelector(".resbtn");
let nextbtn = document.querySelector(".nextbtn");
let sumVal;
randomeNum()

function randomeNum() {
    let randomeNumber1 = Math.floor(Math.random() * 10 + 9);
    let randomeNumber2 = Math.floor(Math.random() * 6 + 3);
    let val1 = sumNum1.innerHTML = randomeNumber1;
    let val2 = sumNum2.innerHTML = randomeNumber2;
    sumVal = val1 - val2;
}

resbtn.addEventListener('click', () => {
    if (userInput.value == sumVal) {
        result.innerHTML = "Correct!";
        sumScr += 1;
        sumScore.innerHTML = sumScr;
        result.style.color = "green";
    }
    else {
        result.innerHTML = "Incorrect!";
        sumScr = 0;
        sumScore.innerHTML = sumScr;
        result.style.color = "red";
        userInput.value = "";
        userInput.focus();
        randomeNum();
    }
})

nextbtn.addEventListener('click', () => {
    randomeNum()
    result.innerHTML = "RESULT";
    result.style.color = "rgb(183, 183, 183)";
    userInput.value = "";
    userInput.focus();
})
