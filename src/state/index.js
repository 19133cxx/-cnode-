import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

Vue.config.productionTip = false

//Store state
export default new Vuex.Store({
	state:{
        num:20
	},
	mutations:{
		increase:function(state){
			state.num++;
	
		},
		decrease:function(state){
			state.num=state.num-10;
		}
	},
	actions:{
		increaseAction:function(context){
			context.commit('increase')
		}
	},
	getters:{
		getNum(state){
			return state.num>0?state.num:0
		}
	}
})