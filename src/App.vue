<template>
  <div id="app">
    <div id="box1">
      <LeftMenu/>
    </div>
    <div id="box2"> 
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import LeftMenu from "./components/LeftMenu";
  export default {
    name:'App',
    components:{
      LeftMenu
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#app
 width 100%
 height 100%
 display flex 
 #box1
  width 200px
  height 100%
 #box2
  width calc(100% - 200px)
    
</style>
