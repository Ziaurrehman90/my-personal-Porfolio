var typed= new Typed(".multiple-text",{
    strings:["Full Stack Developer","Competitive Programmer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
const toggleIcon= document.querySelector('.toggle-icon');
toggleIcon.addEventListener('click',()=>{
toggleIcon.classList.toggle('bx-sun');
document.body.classList.toggle('dark-mode');
});
const navbarMenu=document.querySelector('.navbar');
const menuLinks=document.querySelectorAll('.menu-links');
menuLinks.forEach((menulink)=>{
    menulink.addEventListener('click',()=>{
        navbarMenu.classList.remove('active');
    })
})
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');
window.onscroll=()=>{
    sections.forEach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>=offset && top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            })
     }
    })
}
function toggleMode() {
    document.body.classList.toggle('toggle-icon');
    // You can add additional logic to toggle other elements if needed
}

