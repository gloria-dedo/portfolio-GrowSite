//declare variable to store nav bar element

const navElement = document.getElementById('nav-bar');
// detect scroll event on document
document.addEventListener('scroll', function(){
    // console.log( window.scrollY);
    if(window.scrollY > 70){
        //change the the navigation bar color to blue
       navElement.style.backgroundColor = '#0779E4';
    }else{
        navElement.style.backgroundColor = 'transparent';
    }
})