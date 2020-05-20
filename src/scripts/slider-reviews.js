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
          this.checkArrows();
        },
        
        previous() {
          this.$refs.flickity.previous();
          this.checkArrows();
        },

        checkArrows() {
            if (this.$refs.flickity.selectedIndex() == 0) {
                this.$el.querySelector(".reviews__switch-left").disabled = true;
            } else {
                this.$el.querySelector(".reviews__switch-left").disabled = false;
            }
            
            if (this.$refs.flickity.selectedIndex() == this.$refs.flickity.slides().length -1) {
                this.$el.querySelector(".reviews__switch-right").disabled = true;
            } else {  
                this.$el.querySelector(".reviews__switch-right").disabled = false;
            }
        }
    }
}); 

