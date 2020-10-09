

//navbar toggler 
let navToggler = document.getElementById('navbar-toggler');
let navCollapse = document.querySelector('.navbar-collapse');

navToggler.addEventListener('click', () => {
    navCollapse.classList.toggle('showNav');
});

// category filter 
let filterBtns = document.querySelectorAll('.btns-group button');
let filterImgs = document.querySelectorAll('.imgs-group div');

filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        changeFilterBtn();
        btn.classList.add('btn-active');
        let filterID = btn.id;

        filterImgs.forEach((img) => {
            if(img.classList.contains(filterID)){
                img.style.display = "block";
                window.setTimeout(() => {
                    img.style.opacity = '1';
                    img.style.transform = 'scale(1)';
                }, 0);
            } else {
                img.style.opacity = '0';
                img.style.transform = 'scale(0)';
                window.setTimeout(() => {
                    img.style.display = "none";
                }, 0);
            }
        });
    });
});

function changeFilterBtn(){
    filterBtns.forEach((btn) => {
        btn.classList.remove('btn-active');
    });
}

// smooth scroll while clicking
const links = document.querySelectorAll('.navbar-nav .nav-item');

for(const link of links){
    link.addEventListener('click', clickHandler);
}

function clickHandler(e){
    e.preventDefault();
    const href = this.firstElementChild.getAttribute("href");
    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
}