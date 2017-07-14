<template>
  <div id="app">
    <!--<mt-header title="仅图标">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>-->
    <head-logo></head-logo>
    <head-nav></head-nav>
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import headLogo from './components/headLogo.vue'
  import headNav from './components/headNav.vue'
  export default {
    components: {
      headLogo, headNav
    }
  }
</script>

<style>

</style>
