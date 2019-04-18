<template>
	<!--排行榜-->
	<div id="paihang">
		 <!--v-if="musicList"-->
		<div class="music-list">
			<div class="ml-head " :class="{headTop:istop}">
				<div class="back" @click="$router.go(-1)"><i class="el-icon-back"></i></div>
				<div class="songListTop">
					<div class="SLT-top">排行榜</div>
					<div class="SLT-bot">{{musicList.description}}</div>
				</div>
				<div class="Tright-ctrl" @click="musiclistToggle()"><i class="el-icon-search"></i></div>
				<div class="Tright-ctrl" @click="musiclistToggle()"><i class="el-icon-more"></i></div>
			</div>
			<!-- :style="{background-image:songList.coverImgUrl}" -->
			<div class="songList-box" >
				<div class="songListInfo" >
					<div class="SLB-maskBg" v-bind:style="{backgroundImage:'url(' + musicList.coverImgUrl + ')'}"></div>
					<div class="songList-bg-box">
						<img class="songList-bg" :src="musicList.coverImgUrl"/>
						<div class="songList-bg-icon" style="top: 4px;"><i class="el-icon-search"></i>{{Math.round(12323213/10000)}}万</div>
						<i  class="el-icon-info songList-bg-icon" style="bottom:4px;"></i>
					</div>
					<div class="songListName">
						<div class="SLN-top">{{musicList.name}}</div>
						<div class="SLN-bot">
								<!--<img :src="songList.creator.avatarUrl" alt="">-->
								<div>{{musicList.creator.nickname}}<i class="el-icon-arrow-right"></i></div>
						</div>
					</div>
				</div>
				<div class="functionBtn">
					<div class="Tright-ctrl" @click="musiclistToggle()" v-if="ishide"><i class="fa fa-commenting-o"></i></div>
					<div class="Tright-ctrl" @click="musiclistToggle()" v-if="ishide"><i class="el-icon-share"></i></div>
					<div class="Tright-ctrl" @click="musiclistToggle()" v-if="ishide"><i class="el-icon-download"></i></div>
					<div class="Tright-ctrl" @click="musiclistToggle()" v-if="ishide"><i class="el-icon-edit-outline"></i></div>
				</div>
				<div class="song-list" :class="{SLfixed:isfixed}">
					<div class="allPlay">
						<div><i class="fa fa-play-circle-o"></i>播放全部<div class="c-hui">(共{{musicList.tracks.length}}首)</div></div>
						<div class="collection"><i class="el-icon-plus"></i>收藏({{Math.floor(musicList.subscribedCount/10000)}}万)</div>
					</div>
					<div class="song-list-box">
						<div class="cell-song" @click="playSong(item.id,item.name,item.ar[0].name,item.al.picUrl)" v-for="(item,index) of musicList.tracks" :key="index" :id="item.id">
							<div class="songindex">{{index+1}}</div>
							<div class="songInfo">
								<div class="songName">{{item.name}}</div>
								<div class="songartist c-hui">{{item.ar[0].name}}</div>
							</div>
							<div class="songindex"><i class="fa fa-ellipsis-v"></i></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
    name: 'Home2',
    mounted (){
    	this.getData();
    	this.$nextTick(() => {
	        this.scroll = new Bscroll(this.$refs.wrapper, {})
	    })
    },
    
    data () {
    	return {
    		musicList:[],
    		artistsId:0,
    		songList:[],
    		istop:'',
			ishide:true,
			isfixed:false,
    	}
    },
    methods:{
    	getData:function(){
    		var PHindex = this.$route.query.PHindex
    		this.musicList=this.$parent._data.arr0[PHindex]
    		
    	}
    }
}
</script>

<style scoped>
#paihang{background: #fff;position: fixed;top: 0;width: 100%;height: 100vh;overflow: auto;}
.music-list{position: flex;top: 0;left: 0;width: 100%;height: 100%;background: #fff;z-index: 500;}
.ml-head{width: 100%;height: 44px;display: flex;align-items: center;position: fixed;top: 0;z-index: 800;}
.back{width: 44px;height: 44px;display: flex;align-items: center;justify-content: center;color: black;}
.song-list{background: #f2f3f4;width: 100vw;border-radius: 12px 12px 0 0 ;}
.song-list-box,.allPlay{display: flex;border-bottom: 1px solid #e4e4e4;}
.allPlay{align-items: center;height: 44px;font-size: 15px;display: flex;justify-content: space-between;}
.allPlay>div:first-child {display: flex;}
.cell-song{width: 100%;height: 44px;display: flex;align-items: center;border-bottom: 1px solid #e4e4e4;}
.songindex,.allPlay i{width: 44px;}
.song-list-box{flex-wrap: wrap;}
.songList-box{z-index: 600;}
.songList-bg{width: 100px;height: 100px;border-radius: 4px;}
.songInfo{width: calc(100vw - 88px);}
.songartist{font-size: 12px;display: flex;}
.songName{font-size: 13px;display: flex;}

.Tright-ctrl{width: 44px;height: 44px;display: flex;align-items: center;justify-content: center;color: black;float: right;font-size: 18px;}
.songListInfo{display: flex;padding: 54px 18px 0;color: #fff;}
.songListTop{width: calc(100vw - 132px);text-align: left;display: flex;flex-wrap: wrap;}
.SLT-top{width: 100%;height: 66.66%;}
.SLT-bot{width: 100%;height: 33.33%;font-size: 8px;overflow: hidden;text-overflow: ellipsis;height: 16px;white-space: nowrap;}
.songListName{padding: 10px 20px;width: calc(100% - 136px)}
.SLN-top{text-align: left; font-size: 16px;height: 46px;overflow: hidden;text-overflow: ellipsis;}
.SLN-bot{display: flex;align-items: center;margin: 8px 0;}
.SLN-bot>img{width: 28px;height: 28px;;border-radius: 50px;margin-right: 10px;}
.SLN-bot>div{font-size: 10px; }
.SLB-maskBg{content:'';position:absolute;top:0;left:0;width:100%;height:100vw;filter:blur(90px);z-index:-1;background-size:cover;}
.functionBtn{color: #fff;display: flex;align-items: center;justify-content: space-around;height: 44px;}
.functionBtn div{width: 25%;}

.SLfixed{position: fixed;top: 44px;height: calc(100vh - 44px);overflow: auto;}
.headTop{position: fixed;top: 0;}
.collection i{width: 17px !important;}
.collection{height: 100%;line-height: 45px;color:#fff;background-image: linear-gradient(to right, #fe594a 0%, #d43b32 100%);border-radius: 0 12px 0 0 ;padding: 0 10PX;font-size: 12px;}
.songList-bg-box{position: relative;width: 100px;height: 100px;}
.songList-bg-icon{position: absolute;right: 4px;font-size: 10px;}
</style>
