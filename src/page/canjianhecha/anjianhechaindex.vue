<template>
  <div>
    <van-nav-bar
      title="案件核查"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon name="wap-home-o" size=".5rem" slot="right" />
    </van-nav-bar>
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>

    <div
      style="
  overflow: auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 2rem;
"
    >
      <van-tabs color="#6A7CFC" @click="onClick">
        <van-tab title="未完成">
          <div class="list-con" v-for="item in list">
            <ul @click="weiwanchengdetails(item.eventId,item.id)">
              <li style="margin-bottom:0">
                <h3>{{item.eventCode}}</h3>
                <div class="righslskos">
                  <img src="../../assets/dingwei.png" alt />
                  <span>{{item.eventLocation}}</span>
                </div>
                <div class="righslskos">
                  <img src="../../assets/time.png" alt />
                  <span>{{item.createDate}}</span>
                </div>
              </li>
              <li style="background:rgb(234, 233, 233)">
                <div class="conbottom">
                  <div>
                    <span>大类 : {{item.bigTypeName}}</span>
                  </div>
                  <div>
                    <span>小类 : {{item.littleTypeName}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </van-tab>
        <van-tab title="已完成">
          <div class="list-con" v-for="item in list">
            <ul @click="yiwancheng(item.eventId)">
              <li style="margin-bottom:0">
                <h3>{{item.eventCode}}</h3>
                <div class="righslskos">
                  <img src="../../assets/dingwei.png" alt />
                  <span>{{item.eventLocation}}</span>
                </div>
                <div class="righslskos">
                  <img src="../../assets/time.png" alt />
                  <span>{{item.createDate}}</span>
                </div>
              </li>
              <li style="background:rgb(234, 233, 233)">
                <div class="conbottom">
                  <div>
                    <span>大类 : {{item.bigTypeName}}</span>
                  </div>
                  <div>
                    <span>小类 : {{item.littleTypeName}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      active: 2,
      list: []
    };
  },
  created() {
    window.localStorage.setItem("statusuy", "U");
    this.getweiwanclist();
  },
  methods: {
    onClick(name, title) {
      if (title == "未完成") {
        window.localStorage.setItem("statusuy", "U");
        this.getweiwanclist();
      } else if (title == "已完成") {
        window.localStorage.setItem("statusuy", "Y");
        this.getweiwanclist();
      }
    },
    onSearch() {
      this.getweiwanclist();
    },
    getweiwanclist() {
      let data = {
        key: this.value,
        page: 1,
        limit: 100
      };
      this.$api
        .anjianhechalists(data)
        .then(res => {
          if (res) {
            if (res.data.code == 0) {
              this.list = res.data.data.list;
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
    goLink() {
      this.$router.push("/collection-detail");
    },
    //跳转首页
    onClickRight() {
      this.$router.push("/index");
    },
    weiwanchengdetails(id,ids) {
      window.localStorage.setItem("anjianhechaderailsUid",id);
      window.localStorage.setItem("anjianhecharenwuid",ids);
      this.$router.push("/anjianhechaweiwanc");
    },
    yiwancheng(id){
       window.localStorage.setItem("anjianhechaderailsUid",id);
      this.$router.push("/anjianyiwancehn");
    }
  }
};
</script>
<style lang="less" scoped>
.righslskos {
  margin: 0.2rem 0rem;
  img {
    width: 0.3rem;
    margin-right: 0.1rem;
    vertical-align: middle;
  }
}
.conbottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
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
    // padding: 4%;
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