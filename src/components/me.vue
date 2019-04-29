<template>
  <div id="me">
    <div ref="Mbox">
      <div>
        <div class="cellMenu" v-for="(item,index) of menuList" :key="index">
          <i class="fa" v-bind:class="[item.icon]"></i>
          <p class="menuName">{{item.name}}</p>
          <p class="sumData">({{item.name}})</p>
        </div>
      </div>
      <div @click="playSong(1315718569)">点这里</div>
      <div>
        <div class="menuCtrl" @click="mySonglist=!mySonglist"><div><i class="el-icon-arrow-right" :class="[mySonglist?'menuOn':'menuOff']"></i>创建的歌单</div><i class="fa fa-cog"></i></div>
        <div v-if="mySonglist">
          <div class="songList-list" v-for="(item,index) of allList" :key="index" @click="openSongList(item.id)">
            <div style="display: flex;align-items: center;">
              <img class="songListBg" :src="item.coverImgUrl" alt="">
              <div v-if="index<1">创建的歌单</div>
              <div v-if="index>0">{{item.name}}</div>
            </div>
            <i class="el-icon-more SLL-more"></i>
          </div>
        </div>
      </div>
      <div>
        <div class="menuCtrl" @click="mySonglist1=!mySonglist1"><div><i class="el-icon-arrow-right" :class="[mySonglist1?'menuOn':'menuOff']"></i>创建的歌单</div><i class="fa fa-cog"></i></div>
        <div v-if="mySonglist1">
          <div class="songList-list" v-for="(item,index) of allList" :key="index" @click="openSongList(item.id)">
            <div style="display: flex;align-items: center;">
              <img class="songListBg" :src="item.coverImgUrl" alt="">
              <div v-if="index<1">收藏的歌单</div>
              <div v-if="index>0">{{item.name}}</div>
            </div>
            <i class="el-icon-more SLL-more"></i>
          </div>
        </div>
      </div>
    </div>
    <musicList :song="songCont" v-if="songCont" ref="mySong"></musicList>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import musicList from '@/components/musicList'
export default {
  mounted (){
    this.getData();
  },
  data () {
    return {
      allList:[],
      menuList:[
        {name:'最近播放',icon:'fa-envelope-open-o'},
        {name:'我的收藏',icon:'fa-android'},
        
      ],
      menu1:[],
      mySonglist:true,
      mySonglist1:false,
      songCont:'',
    }
  },
  components:{
    "musicList":musicList,
  },
  methods:{
    getData(){
      var userId = JSON.parse(localStorage.getItem('userInfo')).userId;
      var that = this
      this.$axios.get('http://120.79.162.149:3000/user/record?uid='+ userId +'&type=0')
      .then(re =>{
        that.menu1=re.data
      })
      this.$axios.get('http://120.79.162.149:3000/user/playlist?uid='+ userId)
      .then(re =>{
        that.allList=re.data.playlist
      })
      this.$nextTick(() => {
        //$refs绑定元素
        if(!this.scroll){
          this.scroll = new BScroll(this.$refs.Mbox, {
          click:true   //开启点击事件 默认为false
        })
        console.log(this.scroll)
        }else if(!this.$refs.Mbox){
          return
        }
        else{
          this.scroll.refresh()
        }
      })

    }
  }
}
</script>
<style scoped>
#me{top: 44px;height: calc(100vh - 44px);overflow: auto;}
.cellMenu{text-align: left;background: #fff;padding: 14px 10px;display: flex;}
.cellMenu-.cellMenu{border-bottom: 1px solid #f3f3f3}
.menuCtrl{background: #f3f3f3;display: flex;align-items: center;justify-content: space-between;padding: 4px 10px;}
.cellMenu i{color: #e14439;width: 30px;text-align: center;font-size: 22px;margin-right: 10px;}
.menuName{font-weight: bold;}
.sumData{color: #a1a1a1;margin-left: 6px;}
.songList-list{padding: 5px 8px 5px;text-align: left;display: flex;align-items: center;justify-content: space-between;}
.songListBg{width: 50px;height: 50px;border-radius: 3px;margin-right: 8px;;}
.SLL-more{float: right;margin-right: 8px;}
.menuOn{
  margin-right: 3px;
transition: all 0.2s ease;
transform: rotate(90deg);
-ms-transform: rotate(90deg); /* IE 9 */
-webkit-transform: rotate(90deg); /* Safari and Chrome */}
.menuOff{
  margin-right: 3px;
transition: all 0.2s ease;
transform: rotate(0deg);
-ms-transform: rotate(0deg); /* IE 9 */
-webkit-transform: rotate(0deg); /* Safari and Chrome */
}

</style>