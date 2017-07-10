<template>
    <div class="loading"> 
        <img src="./loading.gif" alt="" class="img">
        <p class="desc">{{title}}</p>
    </div>
</template>


<script>
export default {
    props:{
        title:{
            type: String,
            default: '正在载入...'
        }
    }
}
</script>

<style scoped>
    .loading{
        width: 100%;
        text-align: center;
    }

    .desc{
        line-height: 1rem;
        color: red;
        font-size:　1rem;
    }

    .img{
        width: 6rem;
        height: 6rem;
    }



</style>

