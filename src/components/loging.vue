<template>
  <div id="loging">
      <div class="back" @click="$router.go(-1)"><i class="fa fa-angle-left fa-2x"></i></div>
      <div class="logingBox">
          <div class="logingTitle">登入</div>
          <el-input v-model="userId" placeholder="请输入账户"></el-input>
          <el-input v-model="userPw" placeholder="密码"  type="password"></el-input>
          <el-button class="lBtn" type="danger" @click="loging()" size="small" round>登入</el-button>
      </div>
  </div>
</template>

<script>
export default {
  mounted (){

    },
  data () {
    return {
        userId:'',
        userPw:'',
        LoginMethod:'',
    }
},
  methods:{
      loging:function(){
        var that = this
        var pattern = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]*\.)+[A-Za-z]{2,14}$/;
        //   判断登入方式
        pattern.test(this.userId)?this.LoginMethod = '?email=':this.LoginMethod = '/cellphone?phone='
        this.$axios.get('http://120.79.162.149:3000/login'+this.LoginMethod+this.userId+'&password='+ this.userPw)
        .then(re=>{
            that.$router.go(-1);
            localStorage.setItem('userInfo', JSON.stringify(re.data.profile));
            // sessionStorage.setItem('userInfo',re.data.profile)
            // var d = new Date();
            // d.setDate(d.getDate());
            // document.cookie = "userInfo="+re.data.profile
        })
        
            
      }
  }
}
</script>
<style scoped>
#loging{top: 0;}
.back{color: #252525}
.logingBox{width: 80vw;margin: 60px auto;}
.logingTitle{margin: 16px;}
.el-input{margin-bottom: 10px;}
.lBtn{width: 100%;}
</style>