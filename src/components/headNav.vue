<template>
  <mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="首页" @click.native="$router.push('/home')">
      <img slot="icon" src="../assets/logo.png">
      首页
    </mt-tab-item>
    <mt-tab-item id="理财" @click.native="$router.push('/productList')">
      <img slot="icon" src="../assets/logo.png">
      理财
    </mt-tab-item>
    <mt-tab-item id="我的" @click.native="$router.push('/myAccount')">
      <img slot="icon" src="../assets/logo.png">
      我的
    </mt-tab-item>
    <mt-tab-item id="更多" @click.native="$router.push('/more')">
      <img slot="icon" src="../assets/logo.png">
      更多
    </mt-tab-item>
  </mt-tabbar>
</template>

<script type="es6">
  import { Navbar, TabItem } from 'mint-ui';
  export default {
    data () {
      return {
        selected: '首页'
      }
    },
    components: { Navbar, TabItem }
  }
</script>

<style>

</style>
