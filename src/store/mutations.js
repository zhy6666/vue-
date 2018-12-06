import * as types from './mutation-types'
export default{
  [types.SAVE_FOOTERCURRENT](state,res){
    state.footerCurrent=res
  }
}
