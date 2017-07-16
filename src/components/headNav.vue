<template>
  <mt-tabbar v-model="headNav" fixed>
    <mt-tab-item id="tabbar1" @click.native="goRouter(1)">
      <img slot="icon" src="../assets/logo.png">
      首页
    </mt-tab-item>
    <mt-tab-item id="tabbar2" @click.native="goRouter(2)">
      <img slot="icon" src="../assets/logo.png">
      理财
    </mt-tab-item>
    <mt-tab-item id="tabbar3" @click.native="goRouter(3)">
      <img slot="icon" src="../assets/logo.png">
      我的
    </mt-tab-item>
    <mt-tab-item id="tabbar4" @click.native="goRouter(4)">
      <img slot="icon" src="../assets/logo.png">
      更多
    </mt-tab-item>
  </mt-tabbar>
</template>

<script type="es6">
  import { Navbar, TabItem } from 'mint-ui'
  import{ mapState } from 'vuex'
  export default {
    /*data () {
      return {
        selected: '首页'
      }
    },*/
    components: { Navbar, TabItem },
    computed: {
      ...mapState(['headNav'])
    },
    methods: {
      goRouter(index){
        this.$store.commit('setHeadNav', index);
        switch (index) {
          case 1:
            this.$router.push({path: '/home'});
            break;
          case 2:
            this.$router.push({path: '/product'});
            break;
          case 3:
            this.$router.push({path: '/account'});
            break;
          case 4:
            this.$router.push({path: '/more'});
            break;
        }
      }
    }
  }
</script>

<style>

</style>
