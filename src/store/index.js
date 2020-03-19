import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state={//要设置的全局访问的state对象
    showFooter: true,
    changableNum:0,
    pPage:false,
    cPage:false,
    songInfo:'',
    playInfo:{}, // id:'',name:'',bgurl:'',audio:''
    audio:'',
    playing:false,
    zColor:'',
    songList:[],
  };
const getters = {   //实时监听state值的变化(最新状态)
    isShow(state) {  //方法名随意,主要是来承载变化的showFooter的值
       return state.showFooter
    },
    getChangedNum(){  //方法名随意,主要是用来承载变化的changableNum的值
       return state.changebleNum
    }
};
const mutations = {
    toggleC(state) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
        state.cPage = !state.cPage;
    },
    togglePlay(state) {  //同上
        // console.log(state.pPage)
        state.pPage = !state.pPage;
    },
    newNum(state,sum){ //同上，这里面的参数除了state之外还传了需要增加的值sum
       state.changableNum+=sum;
    }
};
const store = new Vuex.Store({
       state,
       getters,
       mutations
});
export default store;