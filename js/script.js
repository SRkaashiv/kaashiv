document.querySelector('.menu-toggle').addEventListener('click',()=>{
    document.querySelector('.nav-links').classList.toggle('active');
});
document.getElementById('contactForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    alert("Thank you")
})