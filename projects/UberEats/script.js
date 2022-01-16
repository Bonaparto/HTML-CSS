let screenWidth = window.screen.availWidth;
let login = document.querySelector(".login-and-icon");
if(screenWidth < 760) {
    login.innerHTML = '<span class="login">Войти</span>'; 
}
console.log(login.innerHTML);