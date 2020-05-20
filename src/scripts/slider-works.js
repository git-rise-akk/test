import Vue from "vue";

const btns = {
    template: "#slider-btns"
};

const thumbs = {
    template: "#slider-thumbs"
};

const display = {
    template: "#slider-display",
    components: {thumbs, btns}
};

const tags = {
    template: "#slider-tags"
};

const info = {
    template: "#slider-info",
    components: {tags},
};

new Vue({
    el: "#slider-component",
    template: "#slider-container",
    components: {display, info},
    data() {
        return {
            works: []
        }   
    },
    
});