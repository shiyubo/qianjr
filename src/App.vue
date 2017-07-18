<template>
  <div id="app">
    <!--<mt-header title="仅图标">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>-->
    <v-header></v-header>
    <v-tabbar></v-tabbar>
    <div class="container">
      <!--<keep-alive>-->
        <router-view></router-view>
      <!--</keep-alive>-->
    </div>
  </div>
</template>

<script type="es6">
  import header from './components/header.vue'
  import tabbar from './components/tabbar.vue'
  export default {
    data () {
      return {

      }
    },
    components: {
      'v-header': header,
      'v-tabbar': tabbar
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    position: absolute;
    top: 40px;
    bottom: 55px;
    width: 100%;
    overflow: hidden;
  }
</style>
