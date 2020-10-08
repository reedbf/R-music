<template>
	<div id="">
		<div class="m-body" ref="Mbox">
			<div id="" v-if="HotArtistsList!=''">
				<ul class="allBox">
					<li class="cellAlphabet" v-for="(item,index) of artistsList" :key="index">
						<h2 :ref="item.name">{{item.name}}</h2>
						<ul>
							<li class="cellArtidsts" v-for="(item,index) of item.event" :key="index" @click="jumpArtists(item.id)">
								<img :src="item.img1v1Url" alt="">
								<span>{{item.name}}</span>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<ul class="shouzimu">
			<li v-for="(item,index) of artistsList" :key="index" @click="position(item.name)">{{item.name}}</li>
		</ul>
		<artists :pass="artId" v-if="artId" ref="artists"></artists>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
import artists from '@/components/artists'
export default {
	mounted(){
		this.getData();
	},
	data () {
		return {
			HotArtistsList:[],
			artistsList:[],
			artId:true,
		}
	},
	components:{
		"artists":artists
	},
	created(){
		// window.addEventListener('scroll', this.handleScroll) 
	},
	methods:{
		getData: function(e){
			this.$axios.get('/top/artists?limit=100')
			.then(re => {
				this.HotArtistsList=re.data.artists.slice(0,10)
				this.artistsList=re.data.artists
				var Alist  = re.data.artists
				for (const i in Alist) {
					var SZM = Mtils.utils.makePy(Alist[i].name.slice(0,1), true);
					var szm = {'SZM':SZM}
					Object.assign(Alist[i],szm)
				}
				var resultArray = Alist.sort(
						function compareFunction(param1, param2) {
								return param1.SZM.localeCompare(param2.SZM,"zh");
						}
				);
				var lingshiA={name:'A',event:[]},endA=[{name:'热',event:this.HotArtistsList}]
				lingshiA.event.push(resultArray[0])
				for (var j in resultArray) {
					var a1 = resultArray[j].SZM 
					var x = parseInt(j)+1
					if(parseInt(j) == resultArray.length-1){
						--x
					}
					var a2 = resultArray[x].SZM
					if(a1 == a2){
						lingshiA.event.push(resultArray[x])
					}else{
						endA.push(lingshiA)
						lingshiA = {name:'',event:[]}
						lingshiA.event.push(resultArray[x])
						lingshiA.name=a2
					}
				}
				endA.push(lingshiA)
				this.artistsList=endA
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
			})
		},
		jumpArtists:function(e){
			// this.$router.push({ path: 'artists' ,query:{id:e}}) ;
			this.artId = e;
			this.$nextTick(() => {
				this.$refs.artists.showToggle(0);
			});
		},
		handleScroll:function () {
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
			console.log(scrollTop)
			if(scrollTop>=210){
				this.isTop='headTop',
				this.isfixed=true
			}else{
				this.isTop=''
				this.isfixed=false
			}
		},
		position(e){
			var dx = this.$refs[e][0].offsetTop
			console.log(dx)
			this.scroll.scrollTo(0, -1*dx, 300, ease['swipeBounce'])
		}
	}
}
export const ease = {
	// easeOutQuint
	swipe: {
		style: 'cubic-bezier(0.23, 1, 0.32, 1)',
		fn: function (t) {
			return 1 + (--t * t * t * t * t)
		}
	},
	// easeOutQuard
	swipeBounce: {
		style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
		fn: function (t) {
			return t * (2 - t)
		}
	},
	// easeOutQuart
	bounce: {
		style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
		fn: function (t) {
			return 1 - (--t * t * t * t)
		}
	}
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
	transition: all 0.2s ease;
	transform:translate3d(0,0,0);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	transition: all 0.4s ease;
	transform:translate3d(100%,0,0);
	opacity: 0;
}
.m-body{height: calc(100vh - 88px);}
.shouzimu{position: fixed;right: 0;top: 88px;width: 22px;height: calc(100vh - 88px);display: flex;justify-content: center;flex-direction: column;}
.shouzimu li{padding: 5px;line-height: 1;color: #757575;font-size: 11px;font-weight: 700;}
.allBox{width: 100vw;overflow: auto;}
.cellAlphabet h2{width: 100%;height: 20px;background: #d9dadb;margin: 0;font-size: 12px;line-height: 20px;text-align: left;color: #fff;padding-left: 12px;}

.cellArtidsts{width: 100%;height: 60px;border-bottom: 1px solid #e4e4e4;display: flex;align-items: center;}
.cellArtidsts img{width: 50px;height: 50px;border-radius: 3px;margin: 0 12px;}
</style>