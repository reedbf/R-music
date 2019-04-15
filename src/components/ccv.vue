<template>
  <div>
    ccvvvvvv
    <div
      id="app"
      class="box"
      v-tap="vuetouch"
      v-longtap="{fn:vuetouch,name:'长按'}"
      v-swipeleft="{fn:vuetouch,name:'左滑'}"
      v-swiperight="{fn:vuetouch,name:'右滑'}"
      v-swipeup="{fn:vuetouch,name:'上滑'}"
      v-swipedown="{fn:vuetouch,name:'下滑'}"
    >{{ name }}</div>
  </div>
</template>

<script>
export default {
 el:"#app",
			    data:{
			        name:"开始"
			    },
			    methods:{
			        vuetouch:function(s,e){
			            this.name=s.name;
			        }
			    }
};
</script>
<style scoped>
</style>