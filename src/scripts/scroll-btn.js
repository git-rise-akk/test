const hiddenElement = document.querySelector(".about__title");
const btn = document.querySelector('.hero__bottom-btn');

function handleButtonClick() {
   hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
}

btn.addEventListener('click', handleButtonClick);