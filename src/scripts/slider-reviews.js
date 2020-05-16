import Vue from "vue";
import Flickity from 'vue-flickity';

new Vue({
    el: "#reviews__component",
    template: "#reviews",

    components: {
        Flickity
    },

    data() {
        return {
            reviews: [],

            flickityOptions: {
                initialIndex: 0,
                prevNextButtons: false,
                pageDots: false,
                wrapAround: false,
                groupCells: true,
                freeScroll: false,
                contain: true
            }
        }
    },
    created() {
        const data = require("../data/reviews.json");
        this.reviews = data;  
    },

    methods: {
        next() {
          this.$refs.flickity.next();
        },
        
        previous() {
          this.$refs.flickity.previous();
        }
    }
}); 

