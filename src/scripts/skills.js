import Vue from "vue";

const skill = {
    template: "#skills-row"
}

const skillsRow = {
    template: "#skills-row",
    components: {
        skill,
    },
}

new Vue({
    el: "#skills-component",
    template: "#skills-list",
    components: {
        skillsRow,
    },
});