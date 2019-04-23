<template>
  <div id="app">
  	<Phead></Phead>
    <app-tab></app-tab>
    <router-view @playSong='playSong' class="child-view" :pass="songId"></router-view>
    
    <play :pass="songId" v-show="$store.state.pPage" ref="playPage"></play>
    <div class="bottomBox" v-if="$store.state.audio" @click="playMusic()" ref="playPage">
      <img class="BBbg" :src="$store.state.playInfo.bgurl" alt="">
      <div class="BBinfo">
        <div>{{$store.state.playInfo.name}}</div>
        <p>{{$store.state.playInfo.art}}</p>
      </div>
      <i class="fa fa-play BBbtn flex" @click.stop="playCtrl" v-if="!$store.state.playing"></i>
      <i class="fa fa-pause BBbtn flex" @click.stop="playCtrl" v-if="$store.state.playing"></i>
      <i class="fa fa-headphones BBbtn flex"></i>
    </div>
    
  </div>
    
</template>

<script>
import BScroll from 'better-scroll'
import Phead from "./components/p-head"
import AppTab from "./components/tab"
import leftMenu from '@/components/search'
import play from '@/components/play'
export default {
  name: 'App',
  data () {
    return {
      songId:'',
      playSong:'', 
      playInfo:''
    }
  },
  created(){
    var ex =sessionStorage.getItem("playInfo");
    if(ex !== 'undefined' && ex !== null){
      this.playInfo = JSON.parse(sessionStorage.getItem("playInfo"))
    }
    console.log(this.$store.state.playInfo+'0001')
    sessionStorage.getItem('themeColor')==null?this.$store.state.zColor='#ffb5b0':this.$store.state.zColor=sessionStorage.getItem('themeColor')
    
  },
  // watch(){
  //   playInfo(){

  //   }
  // },
  components: {
    "Phead": Phead,
    "app-tab": AppTab,
    "leftMenu": leftMenu,
    "play":play
  },
  
  watch: {
    '$route' (to, from){
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
	},
  methods:{
  	playMusic(){
      this.$store.commit('togglePlay')
      
    },
    playCtrl(){
      this.$refs.playPage.startPlayOrPause();
    }
	}
  
}
</script>
<style>
body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select{margin:0;padding:0}
body{font:16px "宋体","Arial Narrow",HELVETICA;background:#fff;-webkit-text-size-adjust:100%}
a{color:#172c45;text-decoration:none}
a:hover{color:#cd0200;text-decoration:underline}
em{font-style:normal}
li{list-style:none}
img{border:0;vertical-align:middle}
table{border-collapse:collapse;border-spacing:0}
p{word-wrap:break-word}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  overflow-x: hidden;
  width:100%;height:100%;overflow:hidden
}
ul{list-style: none;margin: 0;padding: 0;}
a{text-decoration: none;}
html{width: 100%;height:100%;}
body{width: 100%;height: 100%;margin: 0;}
input:focus{outline:none;}
.flex{display: flex;align-items: center;justify-content: center;}
.back{width: 44px;height: 44px;display: flex;align-items: center;justify-content: center;color: #fff;}
.child-view{background: #fff;width: 100vw;overflow: hidden;position: fixed;}
.cl6{width: 60%;}
.cl3{width: 30%;}


.bottomBox{z-index: 800;width: 100vw;height: 52px;position: fixed;bottom: 0;left: 0;background: white;border-top: 1px solid #cecece;display: flex;align-items: center;}
.BBbg{width: 42px;height: 42px;border-radius: 50%;padding: 5px 10px;}
.BBinfo{width: calc(100% - 150px);height: auto;text-align: left;padding: 6px 10px;}
.BBbtn{width: 50px;height: 50px;}
.BBinfo p{font-size: 10px;color: #93a1a1;}
/* .recommend-cont{width: 100%;height: 100%;} */




.el-slider__runway {
    margin: 6px 0;
}
</style>
