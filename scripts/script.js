const searchBtn = document.querySelector('.header-top__search svg');
const searchInput = document.querySelector('.header-top__search input');
const navLinkDivision = document.querySelectorAll('.nav-bar__links-division');
const navLinkDownSvg = document.querySelectorAll('.nav-bar__links a');
const menuBtnBurger = document.querySelector('.header-bottom__media_menu button');
const navBar = document.querySelector('.header-bottom__nav-bar');
const familyToursCardsSlider = document.querySelector('.family-tours__cards_slider');
const whyUsFlexBody = document.querySelector('.whyus__flex_body');





// search btn onclick is search input activ
searchBtn.onclick = () => {
    if(!searchInput.classList.contains('active')){
    searchInput.style.display = 'block';
    }
    else{
         setTimeout(()=>{
            searchInput.style.display = 'none';
            document.querySelector('.header-top__search span').style.display = 'none';
        },200);
         
    }
    setTimeout(() => {
        searchInput.classList.toggle('active');
        document.querySelector('.header-top__search span').style.display = 'block';
    }, 100);   
};


// onclick in division menu
for (let i = 0; i< navLinkDownSvg.length; i++) {
    navLinkDownSvg[i].onclick = (e) => {
        if(e.target.tagName === 'DIV' || e.target.tagName === 'svg' || e.target.tagName === 'path'){
        navLinkDownSvg[i].href = '#';
        navLinkDownSvg[i].querySelector('div').classList.toggle('active');
        navLinkDownSvg[i].parentNode.querySelector('.nav-bar__links-division').classList.toggle('active');
    }else{
        navLinkDownSvg[0].href = 'home.html';
        navLinkDownSvg[1].href = 'home.html';
    }

    }
};

// onclick in menu btn burger height auto navbar 
menuBtnBurger.onclick = () => {
    navBar.classList.toggle('active');
    if(navBar.classList.contains('active')){
        menuBtnBurger.innerHTML = `
        Close 
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
        <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"/>
        </svg>
        `
    }else {
        menuBtnBurger.innerHTML = `
        MENU
        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
        </svg>
        `
    }
    
}

// slider 
(() => {
    $('.home-slider__wrapper').slick({
        infinite: true,
        speed: 1000,
        dots: true,
        autoplay:true,
        autoplaySpeed:2000,
    });
    let sliderArrows = $('.home-slider__wrapper .slick-arrow');
    sliderArrows[0].innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"/>
    </svg>
    `;
    sliderArrows[1].innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"/>
    </svg>
    `;
    
    let sliderDots = $('ul.slick-dots li button');
    for (let i = 0; i < sliderDots.length; i++) {
        sliderDots[i].innerHTML = '';
    };
})();


(()=> {
    $('.family-tours__cards_slider').slick({
        infinite: false,
        speed: 300,
        dots: false,
        autoplay:false,
    });
})();
// arrow in slider card family tours
let familyToursArrows = familyToursCardsSlider.querySelectorAll('.slick-arrow');
familyToursArrows[0].innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
<path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"/>
</svg> 
`;
familyToursArrows[1].innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
<path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"/>
</svg>`;
familyToursArrows[0].style.transform = 'rotate(90deg)';
familyToursArrows[1].style.transform = 'rotate(-90deg)';
setInterval(() => {
    if(familyToursArrows[0].classList.contains('slick-disabled')) {
        familyToursArrows[0].style.display = 'none'; 
    }
    else{
        familyToursArrows[0].style.display = 'flex'; 
    }
    if(familyToursArrows[1].classList.contains('slick-disabled')) {
        familyToursArrows[1].style.display = 'none'; 
    }
    else{
        familyToursArrows[1].style.display = 'flex'; 
    }
}, 100);
// whyus section script
for (let i = 1; i <= 5; i++) {
    whyUsFlexBody.innerHTML += `
    <div class="whyus-body__card">
        <div class="whyus-body__card_svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24">
                <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z" />
            </svg>
            <svg class="whyus__body_svg_card" width="55" height="55">
               <circle class="whyus-body__card_circle" cx="27.5" cy="27.5" r="25.5" />
            </svg>
        </div>
        <div class="whyus-body__card_info">
            <div class="whyus-body__card_info_title">${
                i === 1 ? 'Group discounts':
                i === 2 ? 'Confirm Departure Dates':
                i === 3 ? 'Handpicked Hotels':
                i === 4 ? 'Luxurious Transportation':
                i === 5 ? 'Finest Tour Manager And Guides': ''
            }</div>
            <div class="whyus-body__card_info_text">
            ${
                i === 1 ? 'We offer best discounts when you travel with your group. We guarantee that our prices offer you a great value for your money.':
                i === 2 ? 'We guarantee our European group departures. We make sure that there are no last moment cancellations of tours':
                i === 3 ? 'We handpick finest hotels for all our worldwide destinations with a best ratings providing most relaxing tour experience.':
                i === 4 ? 'We care for your comfort. Our coaches are loaded with state of art equipment including air conditioning, TV, DVD and WC facilities to make your journey as enjoyable as possible.':
                i === 5 ? 'We provide the most experienced and professional tour managers. Our tour guides are local and experts, who will make each destination come alive': ''
            }
            </div>
        </div>
    </div>
    `;
};
