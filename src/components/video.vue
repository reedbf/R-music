<template>
  <transition>
    <div class="maxBox" ref="Mbox">
      <div class="videoP">
        <div class="cellVidio" v-for="(item,index) of vidioA" :key="index">
          <video class="videoC" :src="item.url"></video>
          <p class="videoName">{{item.name}}</p>
        </div>
      </div>
      
    </div>
  </transition>
</template>

<script>
import BScroll from "better-scroll";
// import Phead from "./components/p-head"

export default {
  mounted() {
    this.getData();
  },
  data() {
    return {
      bigData: [],
      vidioA: [
        {
          name: "街头艺人现场吉他弹唱《 Let Her Go》开口就爱上，好听的版本。",
          url:
            "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/hdjPduK7_90766812_hd.mp4?wsSecret=eb7b2f45b84ccda6faf7c0e80e3d8aaa&wsTime=1556516292&ext=NnR5gMvHcZNcbCz592mDGfjklWGMONP9mGOo58B465hcvUKiVSvdbLWWy1%2BKEQUfmAnpqwMcTz8hUXDbDX84OuTs%2B0UybXtlYgVdjFhd3KpNobegCQqAZ23pafwUIScFTPHmwbILLoOWTnoDekvAOdA%2BfrdrQq%2BtTeTDHWvJEqZv3lFDO5kwWa4wOFEKHyvtUazEDUylXb7W7K2TFVHbMeVKqDtOsesayrVDo0t0aZqWJwm%2BiXTE3p1Qu2Gd7sMuu3GWqky1KgLCLEbdeNdgggc%2BSITwyzMh5LH4rFpgRa7jUzpXMhYdLJd2zjy9IR9FVdsa9Mkljk3qNzeYaVac17o9QPphQjlPkgFuaVFMVv74Ol7AMraeAwQPc3n8oM36QwDYz0W9Q2rA%2FgwtNM96MuLSnSnLNoiFN2u4PJ6IzEUKMdAk9p6mBDDb0PgZwraBioAr6GEkIimFghf9nZLG%2FrWOzFq9OqXq%2FL%2F5LfKyZ2L7yDeBIRUSCo7G%2FW84JKQx4yRe9Xjik09LJN5eSdjp0Q%3D%3D"
        },
        {
          name: "街头艺人现场吉他弹唱《 Let Her Go》开口就爱上，好听的版本。",
          url:
            "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/hdjPduK7_90766812_hd.mp4?wsSecret=eb7b2f45b84ccda6faf7c0e80e3d8aaa&wsTime=1556516292&ext=NnR5gMvHcZNcbCz592mDGfjklWGMONP9mGOo58B465hcvUKiVSvdbLWWy1%2BKEQUfmAnpqwMcTz8hUXDbDX84OuTs%2B0UybXtlYgVdjFhd3KpNobegCQqAZ23pafwUIScFTPHmwbILLoOWTnoDekvAOdA%2BfrdrQq%2BtTeTDHWvJEqZv3lFDO5kwWa4wOFEKHyvtUazEDUylXb7W7K2TFVHbMeVKqDtOsesayrVDo0t0aZqWJwm%2BiXTE3p1Qu2Gd7sMuu3GWqky1KgLCLEbdeNdgggc%2BSITwyzMh5LH4rFpgRa7jUzpXMhYdLJd2zjy9IR9FVdsa9Mkljk3qNzeYaVac17o9QPphQjlPkgFuaVFMVv74Ol7AMraeAwQPc3n8oM36QwDYz0W9Q2rA%2FgwtNM96MuLSnSnLNoiFN2u4PJ6IzEUKMdAk9p6mBDDb0PgZwraBioAr6GEkIimFghf9nZLG%2FrWOzFq9OqXq%2FL%2F5LfKyZ2L7yDeBIRUSCo7G%2FW84JKQx4yRe9Xjik09LJN5eSdjp0Q%3D%3D"
        },
        {
          name: "街头艺人现场吉他弹唱《 Let Her Go》开口就爱上，好听的版本。",
          url:
            "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/hdjPduK7_90766812_hd.mp4?wsSecret=eb7b2f45b84ccda6faf7c0e80e3d8aaa&wsTime=1556516292&ext=NnR5gMvHcZNcbCz592mDGfjklWGMONP9mGOo58B465hcvUKiVSvdbLWWy1%2BKEQUfmAnpqwMcTz8hUXDbDX84OuTs%2B0UybXtlYgVdjFhd3KpNobegCQqAZ23pafwUIScFTPHmwbILLoOWTnoDekvAOdA%2BfrdrQq%2BtTeTDHWvJEqZv3lFDO5kwWa4wOFEKHyvtUazEDUylXb7W7K2TFVHbMeVKqDtOsesayrVDo0t0aZqWJwm%2BiXTE3p1Qu2Gd7sMuu3GWqky1KgLCLEbdeNdgggc%2BSITwyzMh5LH4rFpgRa7jUzpXMhYdLJd2zjy9IR9FVdsa9Mkljk3qNzeYaVac17o9QPphQjlPkgFuaVFMVv74Ol7AMraeAwQPc3n8oM36QwDYz0W9Q2rA%2FgwtNM96MuLSnSnLNoiFN2u4PJ6IzEUKMdAk9p6mBDDb0PgZwraBioAr6GEkIimFghf9nZLG%2FrWOzFq9OqXq%2FL%2F5LfKyZ2L7yDeBIRUSCo7G%2FW84JKQx4yRe9Xjik09LJN5eSdjp0Q%3D%3D"
        },
        {
          name: "街头艺人现场吉他弹唱《 Let Her Go》开口就爱上，好听的版本。",
          url:
            "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/hdjPduK7_90766812_hd.mp4?wsSecret=eb7b2f45b84ccda6faf7c0e80e3d8aaa&wsTime=1556516292&ext=NnR5gMvHcZNcbCz592mDGfjklWGMONP9mGOo58B465hcvUKiVSvdbLWWy1%2BKEQUfmAnpqwMcTz8hUXDbDX84OuTs%2B0UybXtlYgVdjFhd3KpNobegCQqAZ23pafwUIScFTPHmwbILLoOWTnoDekvAOdA%2BfrdrQq%2BtTeTDHWvJEqZv3lFDO5kwWa4wOFEKHyvtUazEDUylXb7W7K2TFVHbMeVKqDtOsesayrVDo0t0aZqWJwm%2BiXTE3p1Qu2Gd7sMuu3GWqky1KgLCLEbdeNdgggc%2BSITwyzMh5LH4rFpgRa7jUzpXMhYdLJd2zjy9IR9FVdsa9Mkljk3qNzeYaVac17o9QPphQjlPkgFuaVFMVv74Ol7AMraeAwQPc3n8oM36QwDYz0W9Q2rA%2FgwtNM96MuLSnSnLNoiFN2u4PJ6IzEUKMdAk9p6mBDDb0PgZwraBioAr6GEkIimFghf9nZLG%2FrWOzFq9OqXq%2FL%2F5LfKyZ2L7yDeBIRUSCo7G%2FW84JKQx4yRe9Xjik09LJN5eSdjp0Q%3D%3D"
        },
        {
          name: "街头艺人现场吉他弹唱《 Let Her Go》开口就爱上，好听的版本。",
          url:
            "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/hdjPduK7_90766812_hd.mp4?wsSecret=eb7b2f45b84ccda6faf7c0e80e3d8aaa&wsTime=1556516292&ext=NnR5gMvHcZNcbCz592mDGfjklWGMONP9mGOo58B465hcvUKiVSvdbLWWy1%2BKEQUfmAnpqwMcTz8hUXDbDX84OuTs%2B0UybXtlYgVdjFhd3KpNobegCQqAZ23pafwUIScFTPHmwbILLoOWTnoDekvAOdA%2BfrdrQq%2BtTeTDHWvJEqZv3lFDO5kwWa4wOFEKHyvtUazEDUylXb7W7K2TFVHbMeVKqDtOsesayrVDo0t0aZqWJwm%2BiXTE3p1Qu2Gd7sMuu3GWqky1KgLCLEbdeNdgggc%2BSITwyzMh5LH4rFpgRa7jUzpXMhYdLJd2zjy9IR9FVdsa9Mkljk3qNzeYaVac17o9QPphQjlPkgFuaVFMVv74Ol7AMraeAwQPc3n8oM36QwDYz0W9Q2rA%2FgwtNM96MuLSnSnLNoiFN2u4PJ6IzEUKMdAk9p6mBDDb0PgZwraBioAr6GEkIimFghf9nZLG%2FrWOzFq9OqXq%2FL%2F5LfKyZ2L7yDeBIRUSCo7G%2FW84JKQx4yRe9Xjik09LJN5eSdjp0Q%3D%3D"
        },
        {
          name: "街头艺人现场吉他弹唱《 Let Her Go》开口就爱上，好听的版本。",
          url:
            "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/hdjPduK7_90766812_hd.mp4?wsSecret=eb7b2f45b84ccda6faf7c0e80e3d8aaa&wsTime=1556516292&ext=NnR5gMvHcZNcbCz592mDGfjklWGMONP9mGOo58B465hcvUKiVSvdbLWWy1%2BKEQUfmAnpqwMcTz8hUXDbDX84OuTs%2B0UybXtlYgVdjFhd3KpNobegCQqAZ23pafwUIScFTPHmwbILLoOWTnoDekvAOdA%2BfrdrQq%2BtTeTDHWvJEqZv3lFDO5kwWa4wOFEKHyvtUazEDUylXb7W7K2TFVHbMeVKqDtOsesayrVDo0t0aZqWJwm%2BiXTE3p1Qu2Gd7sMuu3GWqky1KgLCLEbdeNdgggc%2BSITwyzMh5LH4rFpgRa7jUzpXMhYdLJd2zjy9IR9FVdsa9Mkljk3qNzeYaVac17o9QPphQjlPkgFuaVFMVv74Ol7AMraeAwQPc3n8oM36QwDYz0W9Q2rA%2FgwtNM96MuLSnSnLNoiFN2u4PJ6IzEUKMdAk9p6mBDDb0PgZwraBioAr6GEkIimFghf9nZLG%2FrWOzFq9OqXq%2FL%2F5LfKyZ2L7yDeBIRUSCo7G%2FW84JKQx4yRe9Xjik09LJN5eSdjp0Q%3D%3D"
        },
        {}
      ],
      dialogVisible: false
    };
  },
  components: {
    // "Phead": Phead
  },
  methods: {
    getData: function() {
      this.$axios.get('/video/url?id=89ADDE33C0AAE8EC14B99F6750DB954D')
      .then(re=>{
        this.bigData = re
        console.log(this.bigData)
      })
      // (function(doc, win) {
      //   var resizeEvt =
      //       "orientationchange" in window ? "orientationchange" : "resize",
      //     setRemResponse = function() {
      //       var vM = 750;
      //       var vfontSize = 16;
      //       var html = doc.documentElement;
      //       var newfontSize = (vfontSize * html.clientWidth) / vM;
      //       html.style.fontSize = newfontSize + "px";
      //     };
      //   doc.addEventListener("DOMContentLoaded", setRemResponse, false);
      //   win.addEventListener(resizeEvt, setRemResponse, false);
      // })(document, window);

      // this.$axios.get('/banner')
      // .then(re =>{
      this.$nextTick(() => {
        //$refs绑定元素
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.Mbox, {
            click: true //开启点击事件 默认为false
          });
          console.log(this.scroll);
        } else if (!this.$refs.Mbox) {
          return;
        } else {
          this.scroll.refresh();
        }
      });
      // })
    },
    sollorder() {
      this.detailWrapper = new BScroll(this.$refs.Mbox, {
        click: true //开启点击事件 默认为false
      });
    },
  }
};
</script>
<style scoped>
/* calc(100vh - 44px) */
.maxBox {
  width: 100vw;
  height: calc(100vh - 44px);
  background: #fff;
  top: 44px;
}
.videoP {
  width: 100vw;
  top: 0;
  margin-top: 20px;
}
.cellVidio {
  margin: 10px 0;
}
.videoC {
  width: calc(100vw - 20px);
  border-radius: 8px;
  background: #fffae8;
}
.videoName {
  text-align: left;
  margin: 0 10px;
}
</style>