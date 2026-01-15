console.log('jai shree ram');

let sumScore = document.querySelector(".sumscore");
let subScore = document.querySelector(".subscore");
let mulScore = document.querySelector(".mulscore");
let dvScore = document.querySelector(".dvscore");
let sumScr = 0;
let subScr = 0;
let mulScr = 0;
let dvScr = 0;

let sumNum1 = document.querySelector(".sumNum1");
let sumNum2 = document.querySelector(".sumNum2");
let userInput = document.querySelector(".userInput");
let result = document.querySelector(".result");
let resbtn = document.querySelector(".resbtn");
let nextbtn = document.querySelector(".nextbtn");
let sumVal;
randomeNum()

function randomeNum() {
    let randomeNumber1 = Math.floor(Math.random() * 8 + 2);
    let randomeNumber2 = Math.floor(Math.random() * 9 + 1);
    let val1 = sumNum1.innerHTML = randomeNumber1;
    let val2 = sumNum2.innerHTML = randomeNumber2;
    sumVal = val1 + val2;
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


// substract code start -->

let subNum1 = document.querySelector(".subNum1");
let subNum2 = document.querySelector(".subNum2");
let subuserInput = document.querySelector(".subuserInput");
let subresult = document.querySelector(".subresult");
let subresbtn = document.querySelector(".subresbtn");
let subnextbtn = document.querySelector(".subnextbtn");
let subVal;
subrandomeNum()

function subrandomeNum() {
    let subrandomeNumber1 = Math.floor(Math.random() * 3 + 6);
    let subrandomeNumber2 = Math.floor(Math.random() * 5 + 1);
    let subval1 = subNum1.innerHTML = subrandomeNumber1;
    let subval2 = subNum2.innerHTML = subrandomeNumber2;
    subVal = subval1 - subval2;
}

subresbtn.addEventListener('click', () => {
    if (subuserInput.value == subVal) {
        subresult.innerHTML = "Correct!";
        subScr += 1;
        subScore.innerHTML = subScr;
        subresult.style.color = "green";
    }
    else {
        subresult.innerHTML = "Incorrect!";
        subScr = 0;
        subScore.innerHTML = subScr;
        subresult.style.color = "red";
        subuserInput.value = "";
        subuserInput.focus();
        subrandomeNum();
    }
})

subnextbtn.addEventListener('click', () => {
    subrandomeNum()
    subresult.innerHTML = "RESULT";
    subresult.style.color = "rgb(183, 183, 183)";
    subuserInput.value = "";
    subuserInput.focus();
})


// multiply code start -->

let mulNum1 = document.querySelector(".mulNum1");
let mulNum2 = document.querySelector(".mulNum2");
let muluserInput = document.querySelector(".muluserInput");
let mulresult = document.querySelector(".mulresult");
let mulresbtn = document.querySelector(".mulresbtn");
let mulnextbtn = document.querySelector(".mulnextbtn");
let mulVal;
mulrandomeNum()

function mulrandomeNum() {
    let mulrandomeNumber1 = Math.floor(Math.random() * 8 + 1);
    let mulrandomeNumber2 = Math.floor(Math.random() * 7 + 1);
    let mulval1 = mulNum1.innerHTML = mulrandomeNumber1;
    let mulval2 = mulNum2.innerHTML = mulrandomeNumber2;
    mulVal = mulval1 * mulval2;
}

mulresbtn.addEventListener('click', () => {
    if (muluserInput.value == mulVal) {
        mulresult.innerHTML = "Correct!";
        mulScr += 1;
        mulScore.innerHTML = mulScr;
        mulresult.style.color = "green";
    }
    else {
        mulresult.innerHTML = "Incorrect!";
        mulScr = 0;
        mulScore.innerHTML = mulScr;
        mulresult.style.color = "red";
        muluserInput.value = "";
        muluserInput.focus();
        mulrandomeNum();
    }
})

mulnextbtn.addEventListener('click', () => {
    mulrandomeNum()
    mulresult.innerHTML = "RESULT";
    mulresult.style.color = "rgb(183, 183, 183)";
    muluserInput.value = "";
    muluserInput.focus();
})


// Devide code start -->

let dvNum1 = document.querySelector(".dvNum1");
let dvNum2 = document.querySelector(".dvNum2");
let dvuserInput = document.querySelector(".dvuserInput");
let dvresult = document.querySelector(".dvresult");
let dvresbtn = document.querySelector(".dvresbtn");
let dvnextbtn = document.querySelector(".dvnextbtn");
let dvVal;
dvrandomeNum()

function dvrandomeNum() {
    let dvrandomeNumber1 = Math.floor(Math.random() * 31) * 2 + 20;
    let dvrandomeNumber2 = Math.floor(Math.random() * 4) * 2 + 2;
    let dvval1 = dvNum1.innerHTML = dvrandomeNumber1;
    let dvval2 = dvNum2.innerHTML = dvrandomeNumber2;
    dvVal = dvval1 / dvval2;
}

dvresbtn.addEventListener('click', () => {
    if (dvuserInput.value == dvVal) {
        dvresult.innerHTML = "Correct!";
        dvScr += 1;
        dvScore.innerHTML = dvScr;
        dvresult.style.color = "green";dv
    }else {
        dvresult.innerHTML = "Incorrect!";
        dvScr = 0;
        dvScore.innerHTML = dvScr;
        dvresult.style.color = "red";
        dvuserInput.value = "";
        dvuserInput.focus();
        mulrandomeNumdv
    }
})

dvnextbtn.addEventListener('click', () => {
    dvrandomeNum()
    dvresult.innerHTML = "RESULT";
    dvresult.style.color = "rgb(183, 183, 183)";
    dvuserInput.value = "";
    dvuserInput.focus();
})





