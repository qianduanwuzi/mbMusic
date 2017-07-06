<template>
    <div class="tab">
        <router-link tag="div" class="tab-item" to="/recommended">
            <span class="tab-link">推荐</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/singer">
            <span class="tab-link">歌手</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/rank">
            <span class="tab-link">排行</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/search">
            <span class="tab-link">搜索</span>
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .tab{
        display: flex;
        height: 44px;
        line-height: 44px;
        font-size: 18px;
    }

    .tab-item{
        text-align: center;
        flex: 1
    }

    .tab-link{
        padding-bottom: 5px;
    }

    .router-link-active{
        color: #FFD700;
        border-bottom: 2px solid #FFD700;
    }
</style>


