<template>
	<!--排行-->
  <div class="">
    <div class="m-body">
      <div>
        <div class="cellLeaderboard" v-for="(item,index) of arr0" :key="index" @click="goSongList(index)">
          <img :src="item.coverImgUrl" alt="">
          <div class="leaderboardInfo">
            <div class=""  v-for="(item,index) of item.tracks.slice(0,3)"  :key="index">{{index+1}}.{{item.name}}</div>
          </div>
        </div>
      </div>
	  	<router-view id="paihang"></router-view>
	  	
    </div>
  </div>
  
</template>

<script>
export default {
  mounted (){
    this.getData();
    	      
  },
  data () {
    return {
      PHBarr:[3,0,1,2,6],
      arr0:[],
    }
  },
  methods:{
    getData:function(){
      var that =this
      for (const i of that.PHBarr) {
        var duix = 'that.arr'+i
        this.$axios.get('/top/list?idx='+i)
        .then(re =>{
            var list=re.data.playlist
            that.arr0.push(list);
        })
        
      }
    },
    goSongList(e){
      this.$router.push({ 
        path:'/home2/paihang',
        query:{
          PHindex:e
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cellLeaderboard{width: 100vw;height: 100px;display: flex;}
.cellLeaderboard img{width: 94px;height: 94px;margin: 3px}
.leaderboardInfo{width: calc(100vw - 100px);text-align: left;display: flex;flex-wrap: wrap;align-items: center;padding: 20px 6px;}
.leaderboardInfo div{height: 20px;overflow: hidden;width: 100%;text-overflow: ellipsis;white-space: nowrap;font-size: 10px;}
</style>
