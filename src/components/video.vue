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
    this.getData();
    
  },
  data () {
    return {
      bigData:[],
    }
  },
  methods:{
    getData:()=>{
        this.$axios.get('http://120.79.162.149:3000/personalized/privatecontent')
        .then(re=>{
          this.bigData = re
          alert (this.bigData)
        })
        (function(doc, win) {
          var resizeEvt =
              "orientationchange" in window ? "orientationchange" : "resize",
            setRemResponse = function() {
              var vM = 750;
              var vfontSize = 16;
              var html = doc.documentElement;
              var newfontSize = (vfontSize * html.clientWidth) / vM;
              html.style.fontSize = newfontSize + "px";
            };
          doc.addEventListener("DOMContentLoaded", setRemResponse, false);
          win.addEventListener(resizeEvt, setRemResponse, false);
        })(document, window);
    }
  }
}
</script>
<style scoped>
.videoP{width: 100vw;height: calc(100vh - 44px);background: white;position: fixed;top: 44px;}
</style>