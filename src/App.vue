<template>
  <div>
    <mt-header title="仅图标">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页" @click.native="$router.push('/home')">
        <img slot="icon" src="./assets/logo.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="理财" @click.native="$router.push('/productList')">
        <img slot="icon" src="./assets/logo.png">
        理财
      </mt-tab-item>
      <mt-tab-item id="我的" @click.native="$router.push('/myAccount')">
        <img slot="icon" src="./assets/logo.png">
        我的
      </mt-tab-item>
      <mt-tab-item id="更多" @click.native="$router.push('/more')">
        <img slot="icon" src="./assets/logo.png">
        更多
      </mt-tab-item>
    </mt-tabbar>
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>

</script>

<style>

</style>
