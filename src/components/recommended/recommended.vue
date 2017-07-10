<template>
    <div class="recommend">
        <div class="recommend-content">
    
            <swiper :options="swiperOption">
                <swiper-slide v-for="item in recommends" :key="item.id">
                    <a :href="item.linkUrl">
                        <img :src="item.picUrl" alt="" class="img">
                    </a>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
    
            <div class="middle">
                <h1 class="list-title">热门歌单推荐</h1>
    
                <div class="loading-container" v-show="!discList.length">
                    <Loading></Loading>
                </div>
            </div>
    
            <div class="recommend-list">
                <ul>
                    <li v-for="item in discList" :key="item.dissid" class="item">
                        <div class="icon">
                            <img v-lazy="item.imgurl" alt="" width="60" height="60">
                        </div>
                        <div class="text">
                            <h2 class="name" v-html="item.creator.name"></h2>
                            <p class="dest" v-html="item.dissname"></p>
                        </div>
                    </li>
                </ul>
            </div>
    
        </div>
    </div>
</template>
<script>
import { getRecommend, getDiscList } from '../../api/recommend'
import { ERR_OK } from '../../api/config'
import Slider from '../../base/slider/slider'
import Loading from '../../base/loading/loading.vue'
export default {
    data() {
        return {
            recommends: [],
            discList: [],
            swiperOption: {
                autoplay: 2000,
                loop: true,
                setWrapperSize: true,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                mousewheelControl: true,
                observeParents: true,
                autoplayDisableOnInteraction: false
            },
            swiperSlides: [1, 2, 3, 4, 5]
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    created() {
        this._getRecommend();
        setTimeout(() => {
            this._getDiscList();
        }, 1000)
    },
    mounted() {
        setInterval(() => {
            let swiperSlides = this.swiperSlides
            if (swiperSlides.length < 10) swiperSlides.push(swiperSlides.length + 1)
        }, 1000)

    },
    methods: {
        enableMute() {
            var v = document.getElementById("myVideo");

            console.log(v)
            v.muted = true
        },
        disableMute() {
            var v = document.getElementById("myVideo");
            v.muted = false;
        },
        checkMute() {

        },
        _getRecommend() {
            getRecommend().then((res) => {
                if (res.code === ERR_OK) {
                    console.log(res.data.slider)
                    this.recommends = res.data.slider
                }
            })
        },
        _getDiscList() {
            getDiscList().then((res) => {
                if (res.code === ERR_OK) {
                    console.log(res.data)
                    this.discList = res.data.list
                    // this.recommends = res.data.slider
                }
            })
        },

    },
    components: { Slider, Loading }
}
</script>

<style scoped>
.item {
    font-size: .8rem;
    display: flex;
    padding: 0 1rem 1rem 1rem;
}

.text {
    margin-left: .5rem
}

.dest {
    text-indent: 1rem;
    font-size: .7rem;
    margin-top: .25rem;
    line-height: .8rem;
}

.list-title {
    margin: 1.5rem auto;
    text-align: center;
    color: #FFD700
}

.img {
    width: 100%;
    height: 100%
}

.middle {
    position: relative;
}

.recommend-list {
    margin-top: 2rem
}

.loading-container {
    width: 100%;
    top: 2rem;
    position: absolute;
    transform: translateY(-50%)
}
</style>

