<template>
  <div class="userLogin">
      <div>
          <img style="width:2rem;" src="../../assets/tijiaosuccess.png" alt="">
          
      </div>
      <div><span style="font-size:.6rem;">提交成功</span></div>
        <div style="font-size:.4rem;margin-top:.2rem;">
<van-button style="width:40%;" @click="homeindex" type="primary">首页</van-button>
<van-button style="width:40%;" @click="lookdetails" type="info">查看详情</van-button>
        </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
   homeindex(){
       this.$router.push("/index");
   },
   lookdetails(){
       this.$router.push({path:"/yiheshidetails",query:{id:this.$route.query.id}});
   }
  }
};
</script>
<style >
</style>
<style lang="less" scoped>
.userLogin{
    text-align: center;
    margin-top: 2rem;
}
</style>
