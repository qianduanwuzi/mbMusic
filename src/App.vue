<template>
  <div id="app">
    <Mheader></Mheader>
    <Tab></Tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Mheader from "components/m-header/m-header";
import Tab from "components/tab/tab";

export default {
  components: { Mheader, Tab }
}
</script>

<style lang="stylus">
  @import '~com/base.styl' 

  #app 
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #FFC1C1;
    margin-top: 60px;
    width: 100%;
    box-sizing border-box
    overflow hidden
  html
    font-size: 20px
</style>
