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
                <h1 class="list-title">热门歌单推荐</h1>
                <ul>

                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { getRecommend } from '../../api/recommend'
import { ERR_OK } from '../../api/config'
import Slider from '../../base/slider/slider'

export default {
    data() {
        return {
            recommends: []
        }
    },
    created() {
        this._getRecommend()
    },
    methods: {
        _getRecommend() {
            getRecommend().then((res) => {
                if(res.code === ERR_OK){
                    console.log(res.data.slider)
                    this.recommends = res.data.slider
                }
            })
        }
    },
    components:{Slider}
}
</script>

<style>

</style>

