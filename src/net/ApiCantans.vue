<script>
  let BASE_URL;
  // let BASE_URL = 'http://172.18.101.118:10000';//开发地址（内部开发和测试的地址）
  // const BASE_URL = 'http://10.50.180.111:10000';//测试地址（正式提测的地址）
  // const BASE_URL = 'http://bi.jieyuechina.com/api'; //正式环境地址, #***###记得修改我的-关于-版本号

  //我的-精准画像的网址
  // const  PORTRAIT_URL = 'http://172.18.101.163:8080/uranus/sn/#/search?userid=';//内部测试地址
  // const  PORTRAIT_URL = 'http://10.50.180.116:8080/uranus/sn/#/search?userid=';//业务测试地址
  const  PORTRAIT_URL = 'http://urs.jieyuechina.com/sn/#/search?userid=';//正式环境地址


  if(process.env.NODE_ENV === 'development'){
    BASE_URL = 'http://172.18.101.118:10000';//开发地址（内部开发和测试的地址）
  }
  if(process.env.NODE_ENV === 'test'){
    BASE_URL = 'http://10.50.180.111:10000';//测试地址（正式提测的地址）
  }
  if(process.env.NODE_ENV === 'production'){
    BASE_URL = 'http://bi.jieyuechina.com/api'; //正式环境地址
  }
  export default{
    BASE_URL,
    PORTRAIT_URL
  };
</script>

