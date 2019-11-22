<template>
  <div>
    <van-nav-bar
      title="个人信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon name="wap-home-o" size=".5rem" slot="right" />
    </van-nav-bar>
    <div class="content">
      <div class="list-collection">
        <van-cell title="姓名" :value="name" />
        <van-cell title="角色" :value="rolenam" />
        <van-cell title="手机号" :value="phone" />
        <van-cell title="所属区域" :value="area" />
        <van-cell title="所属单位" :value="danwei" />
      </div>
      <div style="padding:4%;font-size:0rem">
        <van-button type="info" @click="tuichude" style="width:100%">退出登录</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      rolenam: "",
      phone: "",
      area: "",
      danwei: ""
    };
  },
  created() {
    this.geren();
  },
  methods: {
    geren() {
      let data = {};
      this.$api
        .gerenmessages(data)
        .then(res => {
          if (res) {
            if (res.data.code == 0) {
              console.log(res.data.data.tel);
              this.phone = res.data.data.tel;
              this.name = res.data.data.realName;
              this.rolenam = res.data.data.role;
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    
    onClickLeft() {
      this.$router.go(-1);
    },
    //跳转首页
    onClickRight() {
      this.$router.push("/index");
    },
    //退出
    tuichude() {
      window.localStorage.clear();
      this.$router.push("/");
    }
  }
};
</script>
<style lang="less" scoped>
.content {
  background: #fff;
  padding-top: 2%;
  overflow: auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 46px;
}

.list-collection {
  background: #fff;
  img {
    width: 50%;
    margin-left: 4%;
  }
}

.list-con {
  .text {
    font-size: 0.22rem;
    background: rgb(214, 218, 247);
    color: #666;
    padding: 4%;
    margin: 0;
    line-height: 0.4rem;
  }
  ul {
    li {
      color: #fff;
      background: #6a7cfc;
      padding: 2% 4%;
      font-size: 0.2rem;
      h3 {
        margin: 0;
        font-size: 0.3rem;
        font-weight: normal;
        padding: 2%;
        border-bottom: solid 1px #f1f1f1;
      }
      p {
        font-size: 0.22rem;
        margin: 0;
        line-height: 0.4rem;
        padding: 2%;
      }
    }
  }
}
</style>