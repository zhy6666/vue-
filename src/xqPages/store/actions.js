import  * as types from './mutation-types'
export default {
  async saveFooterCurrent({commit},payload){
    commit(types.SAVE_FOOTERCURRENT,payload)
  }
}
