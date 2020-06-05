//home
const hiddenElement = document.querySelector(".user-data__name");
const btn = document.querySelector('.menu__link--home-desc');

function handleButtonClick() {
   hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
}

btn.addEventListener('click', handleButtonClick);

//about__my

const hiddenElementTwo = document.querySelector(".about__title");
const btnTwo = document.querySelector('.menu__link--about__my-desc');

function handleButtonClickTwo() {
   hiddenElementTwo.scrollIntoView({block: "center", behavior: "smooth"});
}

btnTwo.addEventListener('click',  handleButtonClickTwo);

//skills
const hiddenElementThree = document.querySelector(".values__section__title");
const btnThree = document.querySelector('.menu__link--skills__nav-desc');

function handleButtonClickThree() {
   hiddenElementThree.scrollIntoView({block: "center", behavior: "smooth"});
}

btnThree.addEventListener('click',  handleButtonClickThree);

//works
const hiddenElementFour = document.querySelector(".big__cover");
const btnFour = document.querySelector('.menu__link--works__nav-desc');

function handleButtonClickFour() {
   hiddenElementFour.scrollIntoView({block: "center", behavior: "smooth"});
}

btnFour.addEventListener('click',  handleButtonClickFour);


//reviews
const hiddenElementFive = document.querySelector(".reviews__container-overflow");
const btnFive = document.querySelector('.menu__link--reviews__nav-desc');

function handleButtonClickFive() {
   hiddenElementFive.scrollIntoView({block: "center", behavior: "smooth"});
}

btnFive.addEventListener('click',  handleButtonClickFive);

//contact
const hiddenElementSix = document.querySelector(".form");
const btnSix = document.querySelector('.menu__link--contact__nav-desc');

function handleButtonClickSix() {
   hiddenElementSix.scrollIntoView({block: "center", behavior: "smooth"});
}

btnSix.addEventListener('click',  handleButtonClickSix);