<template>
    <div>
        歌手页面
        <div v-for="one in singers" :key="one.Fsinger_name">
            {{one.Fsinger_name}}
        </div>
    </div>
</template>
<script>
import { getSingerList } from '../../api/recommend'
export default {
    data() {
        return {
            singers: []
        }
    },
    computed: {

    },
    created() {

    },
    mounted() {
        this._getSingerList()
    },
    methods: {
        _getSingerList() {
            getSingerList().then(res => this.singers = res.data.list)
        }
    }
}
</script>

<style>

</style>

