/*
全局过滤器
*/
const filters={
  numToThousands(num){
    return num ? num.toString().replace(/(\d{1,3})(?=(\d{3})+$)/g,'$1,') : num;
  }
}
export default filters
