 const Button = document.querySelector("#action1");
const Button2 = document.querySelector("#action2");
const Button3 = document.querySelector("#action3");
const Button4 = document.querySelector("#action4");

const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");
const modal4 = document.querySelector(".modal4");

const close = document.querySelector(".close");
const close2 = document.querySelector(".close2");
const close3 = document.querySelector(".close3");
const close4 = document.querySelector(".close4");

Button.addEventListener("click", toggleModal);
Button2.addEventListener("click", toggleModal2);
Button3.addEventListener("click", toggleModal3);
Button4.addEventListener("click", toggleModal4);

close.addEventListener("click", toggleModal);
close2.addEventListener("click", toggleModal2);
close3.addEventListener("click", toggleModal3);
close4.addEventListener("click", toggleModal4);

function toggleModal (){
    modal.classList.toggle("is-open");
}
function toggleModal2 (){
    modal2.classList.toggle("is-open");
}
function toggleModal3 (){
    modal3.classList.toggle("is-open");
}
function toggleModal4 (){
    modal4.classList.toggle("is-open");
}
