console.log('jai shree ram');
let btn = document.querySelector('.themebtn');
let mainbox = document.querySelector('.mainbox3');
let inputbox = document.querySelector('.input');
let time = document.querySelector('.time');

btn.addEventListener('click' , () => {
    mainbox.classList.toggle('dark');
    inputbox.classList.toggle('inputBoxDark');
});

let date = new Date();

let hours = date.getHours();
let minutes = date.getMinutes();

minutes = minutes < 10 ? "0" + minutes : minutes;

time.innerHTML = hours + ":" + minutes;

//dark mode code end 


let buttons = document.querySelectorAll('.box');
let string = "";
let arr = Array.from(buttons);
arr.forEach((btns) => {
    btns.addEventListener('click' , (e) => {
        if(e.target.innerHTML == "="){
            string = eval(string);
            inputbox.value = string;
        }else if(e.target.innerHTML == "AC") {
            string = "";
            inputbox.value = string;
        }
        else{
            string += e.target.innerHTML;
            inputbox.value = string;
        }
    })
})