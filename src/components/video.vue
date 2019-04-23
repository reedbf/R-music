<template>
  <transition>
        <div class="videoP">
            ccvvv
        </div>
  </transition>
</template>

<script>
export default {
  mounted (){
    this.getData()
  },
  data () {
    return {
      bigData:[],
    }
  },
  methods:{
    getData:()=>{
        this.$axios.post('http://120.79.162.149:3000/personalized/privatecontent')
        .then(re=>{
          this.bigData = re
        })
    }
  }
}
</script>
<style scoped>
.videoP{width: 100vw;height: calc(100vh - 44px);background: white;position: fixed;top: 44px;}
</style>