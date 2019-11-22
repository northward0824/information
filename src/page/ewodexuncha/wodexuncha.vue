<template>
  <div>
    <van-nav-bar title="我的巡查" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <van-icon name="wap-home-o" size=".5rem" slot="right" />
    </van-nav-bar>
    <div style="padding:20px;text-align:center;font-size:16px">
      开发中,敬请期待!
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: '',
        active: 2
      };
    },
    created() {

    },
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      },
      goLink(){
        this.$router.push('/collection-detail')
      },
      //跳转首页
      onClickRight() {
        this.$router.push("/index");
      },
    }
  };
</script>
<style lang="less" scoped>
  .content {
    background: #fff;
    padding-top: 2%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 100px;
  }

  .list-con {
    ul {
      padding: 4%;
      li {
        background: #fff;
        padding: 2% 4%;
        margin-bottom: 4%;
        font-size:.2rem;
        h3 {
          margin: 0;
          font-size: .3rem;
          font-weight: normal;
          padding: 2%;
          border-bottom: solid 1px #f1f1f1;
        }
        p {
          font-size: .22rem;
          margin: 0;
          line-height: .4rem;
          padding: 2%;
          color: #666
        }
      }
    }
  }
</style>