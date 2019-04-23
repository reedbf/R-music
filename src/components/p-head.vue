<template>
  <div class="recommend_content" id="pHead" ref="pHead">
    <div class="homeTabbar" :style="{background:$store.state.zColor}">
      <!-- ;border-bottom:1px solid $store.state.zColor -->
      <div class="m-head">
        <div class="m-h-btn" @click="geto('menu')">
          <i class="fa fa-bars"></i>
        </div>
        <div class="m-c-btn">
          <div @click="topChange('me')" class="m-h-btn" :class="[add1=='me'?'add1Active':'']" id="2" >
            <i class="fa fa-music"></i>
          </div>
          <div @click="topChange('home')" class="m-h-btn" :class="[add1=='home'?'add1Active':'']" id="1" >
            <i class="fa fa-star"></i>
          </div>
          <div @click="topChange('video')" class="m-h-btn" :class="[add1=='video'?'add1Active':'']" id="3" >
            <i class="fa fa-video-camera"></i>
          </div>
        </div>
        <div class="m-h-btn" @click="geto('search')">
          <i class="fa fa-search"></i>
        </div>
      </div>
    </div>
    <leftMenu  v-if="menuEvent" ref="leftMenu"></leftMenu>
    <searchS v-if="searchEvent" ref="search"></searchS>
  </div>
</template>
// 
<script>
import BScroll from "better-scroll";
import leftMenu from "@/components/menu";
import searchS from "@/components/search";
export default {
  mounted() {},
  data() {
    return {
      add1: "",
      menuEvent: "",
      searchEvent: ""
      // menu:false,
    };
  },
  components: {
    "leftMenu": leftMenu,
    "searchS": searchS
    // menu,search
  },
  created() {
    sessionStorage.getItem("add1") == undefined
      ? (this.homeID = "home1")
      : (this.add1 = sessionStorage.getItem("add1"));
    this.$nextTick(() => {
      //$refs绑定元素
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.pHead, {
          click: true //开启点击事件 默认为false
        });
        console.log(this.scroll);
      } else if (!this.$refs.pHead) {
        return;
      } else {
        this.scroll.refresh();
      }
    })
  },
  methods: {
    topChange: function(e) {
      sessionStorage.setItem("add1", e);
      this.add1 = e;
      if(e=='home'){
        var homeID= sessionStorage.getItem('homeID')
        homeID==null?homeID=1:''
        this.$router.push({ path: 'home'+homeID });
      }else{
        this.$router.push({ path: e });
      }
    },
    geto(e) {
      if (e == "menu") {
        this.menuEvent = e;
        this.$nextTick(() => {
          this.$refs.leftMenu.showToggle(0);
        });
      } else if (e == "search") {
        this.searchEvent = e;
        this.$nextTick(() => {
          this.$refs.search.showToggle(0);
        });
      }
    }
  }
};
</script>
<style scoped>
/* .homeTabbar {
  border-bottom: 1px solid #ffb5b0;
} */
.c-hui {
  color: #a7a7a7;
}
.m-head {
  width: 100vw;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.m-name {
  line-height: 44px;
  font-weight: 700;
  color: #f1f1f1;
  letter-spacing: 3px;
  line-height: 44px;
}
.m-h-btn {
  width: 44px;
  height: 44px;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.68);
  font-size: 20px;
  line-height: 44px;
  border-radius: 50px;
}
.m-h-btn:active {
  background: rgba(0, 0, 0, 0.15);
}
.m-c-btn {
  display: flex;
}
.add1Active {
  color: #fff;
}
</style>