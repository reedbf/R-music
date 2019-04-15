<template>
  <div>
      <div class="m-ctrl">
        <div id="home1" @click="toggleTab(1)" :class="[homeID==1?'m-ctrl-active':'']">推荐</div>
        <div id="home2" @click="toggleTab(2)" :class="[homeID==2?'m-ctrl-active':'']">排行</div>
        <div id="home3" @click="toggleTab(3)" :class="[homeID==3?'m-ctrl-active':'']">歌手</div>
      </div>
  </div>
</template>

<script>
export default {
  mounted (){

    },
  data () {
    return {
      homeID:'',
    }
  },
  created(){
    sessionStorage.getItem('homeID')==null?this.homeID=1:this.homeID=sessionStorage.getItem('homeID')
    // sessionStorage.getItem('add1')==undefined?this.homeID='home1':this.add1=sessionStorage.getItem('add1')
  },
  methods:{
  }
}
</script>
<style scoped>
.m-ctrl{width: 100vw;height: 44px;background: #ffb5b0;color: rgba(255, 255, 255, 0.68);;font-size: 18px;display: flex;align-items: center;justify-content: space-around;box-sizing: border-box;}
.m-ctrl-active{border-bottom: 2px solid #fff;color: #fff;}
</style>