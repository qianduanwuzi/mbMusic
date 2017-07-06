<template>
    <div class="slider" ref="slider">
        <div class="slider-group" ref="sliderGroup">
            <slot></slot>
            <div class="dots"></div>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll';
export default {
    props: {
        loop: {
            type: Boolean,
            default: true
        },
        autoPlay: {
            type: Boolean,
            default: true
        },
        interval: {
            type: Number,
            default: 4000
        }
    },
    mounted() {
        // this.$nextTick
        setTimeout(() => {
            this._setSliderWidth();
            this._initSlider();
        }, 20)
    },
    methods: {
        _setSliderWidth() {
            this.children = this.$refs.sliderGroup.children;
            let width = 0 ;
            let sliderWidth = this.$refs.slider.clientWidth;
            for(let i = 0; i< this.children.length; i++){
                let child = this.children[i]
            }
        },
        _initSlider() {

        }
    }
}
</script>

<style scoped>
.slider {
    min-height: 1px;
}

.slider-group {
    /*position: relative;*/
    overflow: hidden;
    white-space: nowrap;
}

.slider-item {
    float: left;
    box-sizing: border-box;
    overflow: hidden;
    text-align: center;
}

a {
    display: block;
    width: 100%;
    overflow: hidden;
    text-decoration: none;
}

img {
    display: block;
    width: 100%;
}

.dots {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 12px;
    text-align: center;
    font-size: 0
}
</style>
