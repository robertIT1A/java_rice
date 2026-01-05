const wrapper = document.querySelector('.wrapper');
const btnLogin = document.querySelector('.btnLogin');
const btnClose = document.querySelector('.close');


// para sa log in button
btnLogin.addEventListener('click', ()=>{
    wrapper.classList.add('active-pop');
});


// para sa x button
btnClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-pop');
});