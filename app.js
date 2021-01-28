
const dashboard = document.querySelector('.dashboard');
const closeBtn = document.querySelector('#closeBtn');
const bars =document.querySelector('.fa-bars');

closeBtn.addEventListener('click', ()=>{
    dashboard.classList.toggle('showDashboard');

})

bars.addEventListener('click', ()=>{
    dashboard.classList.add('showDashboard');
    
})
