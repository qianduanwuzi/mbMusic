<template>
  <div id="app">
    <Mheader></Mheader>
    <Tab></Tab>
    <router-view></router-view>
  </div>
</template>

<script>
import Mheader from "components/m-header/m-header";
import Tab from "components/tab/tab";

export default {
  components: {Mheader, Tab}
}
</script>

<style lang="stylus">
  @import '~com/base.styl' 

  #app 
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #FFC1C1;
    margin-top: 60px;
  
</style>
