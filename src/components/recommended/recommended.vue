<template>
    <div class="recommend">
        <div class="recommend-content">
            <div class="slider-wrapper">
                <slider>
                    <div v-for="item in recommends" :key="item.id">
                        <a :href="item.linkUrl">
                            <img :src="item.picUrl" alt="">
                        </a>
                    </div>
                </slider>
            </div>
            <div class="recommend-list">
                <ul>
                    <li v-for="item in discList" :key="item.dissid" class="item">
                        <div class="icon">
                            <img :src="item.imgurl" alt="" width="60" height="60">
                        </div>
                        <div class="text">
                            <h2 class="name" v-html="item.creator.name"></h2>
                            <p class="dest" v-html="item.dissname"></p>
                        </div>
                    </li>
                </ul>
                <h1 class="list-title">热门歌单推荐</h1>
            </div>
        </div>
    </div>
</template>
<script>
import { getRecommend, getDiscList } from '../../api/recommend'
import { ERR_OK } from '../../api/config'
import Slider from '../../base/slider/slider'

export default {
    data() {
        return {
            recommends: [],
            discList: []
        }
    },
    created() {
        this._getRecommend();
        this._getDiscList();
    },
    methods: {
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
    components: { Slider }
}
</script>

<style scoped>
    .item{
        font-size: .8rem;
        display: flex;
        margin: 0 1rem 1rem 1rem;
    }

    .text{
        margin-left: .5rem
    }

    .dest{
        text-indent: 1rem;
        font-size: .7rem;
        margin-top: .25rem;
        line-height: .8rem
    }

    .list-title{
        text-align: center
    }
</style>

