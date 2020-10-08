<template>
    <transition id="ritui" name="fade">
        <div class="music-list" ref="Mbox" v-show="showDetail">
            <div class="ml-head " :class="{headTop:isTop}">
				<div class="back" @click="showToggle(1)"><i class="el-icon-back"></i></div>
				<div class="songListTop">
					<div class="SLT-top">每日推荐</div>
					<!-- <div class="SLT-bot">{{songList.description}}</div> -->
				</div>
				<div class="Tright-ctrl" @click="musiclistToggle()"><i class="el-icon-search"></i></div>
				<div class="Tright-ctrl" @click="musiclistToggle()"><i class="el-icon-more"></i></div>
			</div>
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
        artistsId:0,
        songList:[],
        isfixed:false,
        ishide:true,
        isTop:false,
        showDetail:false,
        songInfo:{}
    }
  },
    methods:{
        getData:function(){
			var that = this
			if(this.song!= undefined&&this.song!=null&&this.song!=''){
				this.$axios.get('/recommend/songs')
				.then(re =>{
					this.songList=re.data.result
					that.$store.state.songList=re.data.result.tracks
					console.log(that.$store.state.songList[1])
					this.btScroll();
                    this.$nextTick(() => {
                        //$refs绑定元素
                        if(!this.scroll){
                            this.scroll = new BScroll(this.$refs.page, {
                            click:true   //开启点击事件 默认为false
                        })
                        console.log(this.scroll)
                        }else if(!this.$refs.page){
                            return
                        }
                        else{
                            this.scroll.refresh()
                        }
                    })
				})
				
			}
        },
        sollorder() {
            this.detailWrapper = new BScroll(this.$refs.wrapper, {
                click: true //开启点击事件 默认为false
            });
        },
    }
}
</script>
<style scoped>
#Mbox{height: 100vh;overflow: auto;top: 0;}
.fade-enter-active, .fade-leave-active {
	transition: all 0.2s ease;
	transform:translate3d(0,0,0);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	transition: all 0.4s ease;
	transform:translate3d(0,100%,0);
	opacity: 0;
}
#ritui{position: fixed;top: 0;z-index: 300;}
.music-list{position: fixed;top: 0;left: 0;width: 100vw;height: 100vh;background: #f3f3f3;z-index: 500;}
.ml-head{width: 100%;height: 44px;display: flex;align-items: center;position: fixed;top: 0;z-index: 800;color: #fff;}
.back{width: 44px;height: 44px;display: flex;align-items: center;justify-content: center;color: #fff;}
.song-list{background: #fff;min-height: calc(100vh - 138px);width: 100vw;border-radius: 12px 12px 0 0 ;position: relative;}
.song-list-box,.allPlay{display: flex;border-bottom: 1px solid #e4e4e4;}
.allPlay{align-items: center;height: 44px;font-size: 15px;display: flex;justify-content: space-between;}
.allPlay>div:first-child {display: flex;}
.cell-song{width: 100%;height: 44px;display: flex;padding: 4px 0;align-items: center;border-bottom: 1px solid #e4e4e4;}
.songindex,.allPlay i{width: 44px;}
.song-list-box{flex-wrap: wrap;}
.songList-box{z-index: 600;}
.songList-bg{width: 100px;height: 100px;border-radius: 4px;}
.songInfo{width: calc(100vw - 88px);}
.songartist{font-size: 12px;display: flex;}
.songName{font-size: 13px;display: flex;text-align: left;}
.songListTop{width: calc(100vw - 132px);text-align: left;display: flex;flex-wrap: wrap;}
.SLT-top{width: 100%;height: 66.66%;}
.SLT-bot{width: 100%;height: 33.33%;font-size: 8px;overflow: hidden;text-overflow: ellipsis;height: 16px;white-space: nowrap;}
.Tright-ctrl{width: 44px;height: 44px;display: flex;align-items: center;justify-content: center;float: right;font-size: 18px;}






</style>