import { createStore } from 'vuex'

export default createStore({
  state: {
    // 데이터값 정의(변수 만드는 곳)
    count: 10
  },
  getters: {
    // 정의된 데이터값을 가공 (읽기 전용)
    limit(state){
      return state.count === 20
    }

  },
  mutations: {
    // 정의된 데이터값을 수정
    changeCount( state, num ){
      state.count = num;
    }
  },
  actions: {
    // 2번을 수정해라, 3번을 수정해라...(mutations에 요청)
    // 증가? 감소?
    requestCount( {commit}, action){
      let num = 0;
      if(action.type == '증가'){
        num = action.num + 1;
      } else {
        num = action.num - 1;
      }
      commit('changeCount', num);
    }
  },
  modules: {
    // 데이터 유형이 한 개 이상일 때 
    // ex) 멤버데이터, 장바구니데이터, 
  }
})
