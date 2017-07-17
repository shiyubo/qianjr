<template>
  <div class="hello" ref="wrapper">
    <div class="content">
      <h1>1111111</h1>
      <h1>1111111</h1>
      <h1>1111111</h1>
      <h1>1111111</h1>
      <h1>1111111</h1>
      <h1>1111111</h1>
      <h1>1111111</h1>
      <h1>1111111</h1>
      <h1>1111111</h1>
      <h1>1111111</h1>
      <h1>1111111</h1>
      <h1>1111111</h1>
      <h1>1111111</h1>
      <h1>1111111</h1>
      <h1>1111111</h1>
      <h1>1111111</h1>
      <h1>1111111</h1>
      <h1>1111111</h1>
      <h1>1111111</h1>
      <h1>1111111</h1>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: 3
      })
//      this.scroll.on('scroll', (pos) => {
//        this.scrollY = Math.abs(Math.round(pos.y))
//      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    height: 54px;
  }
</style>
