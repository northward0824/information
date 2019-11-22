<template>
  <div>
    <van-nav-bar
      title="专项采集"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon name="wap-home-o" size=".5rem" slot="right" />
    </van-nav-bar>
    <van-search placeholder="请输入搜索关键词" v-model="value" />
    <van-tabs color="#6A7CFC" v-model="active" @click="sldkfjhos">
      <van-tab title="未完成">
        <div class="list-con" v-for="a in list">
          <ul>
            <li>
              <h3>{{a.name}}</h3>
              <p>
                采集类型：{{a.collectionType}}
                <br />开始时间：{{a.beginDate}}
                <br />结束时间：{{a.endDate}}
              </p>
              <van-button type="info" @click="goLink(a)" size="small" style="width:100%;background:#6A7CFC;color:white;">开始采集</van-button>
            </li>
          </ul>
        </div>
      </van-tab>
      <van-tab title="已完成">
        <div class="list-con" v-for="a in list">
          <ul @click="yiwanchengtiaozhuan(a)">
            <li>
              <h3>{{a.name}}</h3>
              <p>
                采集类型：{{a.collectionType}}
                <br />开始时间：{{a.beginDate}}
                <br />结束时间：{{a.endDate}}
              </p>
            </li>
          </ul>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      active: 2,
      list:[]
    };
  },
  created() {
    window.localStorage.setItem("zhuanxiangcaijistatus", "U");
    this.getlist();
  },
  methods: {
    sldkfjhos(title) {
      if (title == 0) {
        window.localStorage.setItem("zhuanxiangcaijistatus", "U");
        this.getlist();
      } else if (title == 1) {
        window.localStorage.setItem("zhuanxiangcaijistatus", "Y");
        this.getlist();
      }
    },
    yiwanchengtiaozhuan(a){
      window.localStorage.setItem("adetailss",JSON.stringify(a));
      window.localStorage.setItem("zhuanxiangcaijiyiwanchengid",a.id);
      this.$router.push("/zhuangxiangcaijiyiwancheng");
    },
    getlist() {
      let data = {};
      this.$api
        .zhuanxiaocaijilist(data)
        .then(res => {
          if (res) {
            if (res.data.code == 0) {
              this.list = res.data.data;
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
    goLink(a) {
      window.localStorage.setItem("adetaslkfj",JSON.stringify(a));
      window.localStorage.setItem("zhuanxiangcaijiyiwanchengid",a.id);
      this.$router.push("/kaishicaiji");
    },
    //跳转首页
    onClickRight() {
      this.$router.push("/index");
    }
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
        color: #666;
      }
    }
  }
}
</style>