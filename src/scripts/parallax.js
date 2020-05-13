//верх

const parallax = document.querySelector('.parallax');
const layers = parallax.children;

function moveLayersDependsOnScroll(wScroll) {

    Array.from(layers).forEach(layer => {
        const divider = layer.dataset.speed;
        const strafe = wScroll * divider / 10;

        layer.style.transform = `translateY(-${strafe}%)`
    })
}

window.addEventListener('scroll', e => {
    const wScroll = window.pageYOffset;
    moveLayersDependsOnScroll(wScroll);
})

//низ

const parallax__bottom = document.querySelector(".parallax__bottom");
const bottom__layer = parallax__bottom.children;

function moveLayersBottomDependsOnScroll(wScrollTwo) {

    Array.from(bottom__layer).forEach(bottom__layer => {
        const dividerTwo = bottom__layer.dataset.speed;
        const strafeTwo = wScrollTwo * dividerTwo / 10;

        bottom__layer.style.transform = `translateY(-${strafeTwo}%)`
    })
}

window.addEventListener('scroll', e => {
    const wScrollTwo = window.pageYOffset;
    moveLayersBottomDependsOnScroll(wScrollTwo);
})