<template>
  <div>
    <van-nav-bar title="西安市信息融合采集系统" />
    <div class="content">
      <div class="post-card" @click="tuichudenglu">
        <div class="info-layout">
          <div class="name">
            <h3>{{name}}</h3>
            <span>
              <i>
                <van-icon name="star" />
              </i>
              {{rolenam}}
            </span>
            <van-icon name="arrow" size="15px" class="icon" />
          </div>
          <div class="time">
            <!-- <span>{{nowtime}}</span> -->
          </div>
        </div>
        <div class="data-layout">
          <div class="pending">
            <span>待处理项</span>
            <span>
              <i>{{todo}}</i>件
            </span>
            <i class="line"></i>
          </div>
          <div class="data-list">
            <ul>
              <li>专项采集：{{special}}项</li>
              <li>案件核查：{{check}}项</li>
              <li>我的巡查：{{checkAround}}项</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="notice" @click="noticelist">
        <van-notice-bar color="#1989fa" :text="text" left-icon="volume-o" />
      </div>

      <div class="list-sort">
        <h3>我的业务</h3>
        <van-grid :gutter="10" :column-num="3">
          <van-grid-item
            v-for="value in list"
            @click="goLink(value.type)"
            :key="value.name"
            :icon="value.pic"
            :text="value.name"
          />
        </van-grid>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "暂无通知内容",
      list: [
        {
          name: "信息上报",
          type: "1",
          pic: require("../../assets/index-01.png")
        },
        {
          name: "信息核实",
          type: "2",
          pic: require("../../assets/index-02.png")
        },
        {
          name: "案件核查",
          type: "3",
          pic: require("../../assets/index-03.png")
        },
        {
          name: "专项采集",
          type: "4",
          pic: require("../../assets/index-04.png")
        },
        {
          name: "我的巡查",
          type: "5",
          pic: require("../../assets/index-05.png")
        },
        {
          name: "历史上报",
          type: "6",
          pic: require("../../assets/index-06.png")
        }
      ],
      name: "",
      rolenam: "",
      todo: 0,
      special: 0,
      check: 0,
      checkAround: 0,
      nowtime: ""
    };
  },

  created() {
    this.getname();
    this.getmeeesgthuizong();
    this.geenodnsl();
    this.getTime();
  },
  methods: {
    getTime() {
      setInterval(() => {
        //new Date() new一个data对象，当前日期和时间
        //toLocaleString() 方法可根据本地时间把 Date 对象转换为字符串，并返回结果。
        this.nowtime = new Date().toLocaleString();
      }, 1000);
    },
    getname() {
      let data = {};
      this.$api
        .gerenmessages(data)
        .then(res => {
          if (res) {
            if (res.data.code == 0) {
              this.name = res.data.data.realName;
              this.rolenam = res.data.data.role;
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getmeeesgthuizong() {
      let data = {};
      this.$api
        .messtslkzong(data)
        .then(res => {
          if (res) {
            if (res.data.code == 0) {
              this.todo = res.data.data.todo;
              this.special = res.data.data.special;
              this.check = res.data.data.check;
              this.checkAround = res.data.data.checkAround;
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    geenodnsl() {
      let data = {
        page: 1,
        limit: 1
      };
      this.$api
        .xiaoxitishi(data)
        .then(res => {
          if (res) {
            if (res.data.code == 0) {
              this.text = res.data.data.list[0].title;
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    goLink(type) {
      if (type === "2") {
        this.$router.push("/xinxiheshiindex");
      } else if (type === "1") {
        this.$router.push("/xinxishangbaoindex");
      } else if (type === "4") {
        this.$router.push("/zhuanxiangcaijiindex");
      } else if (type === "3") {
        this.$router.push("/anjianhechaindex");
      } else if (type === "6") {
        this.$router.push("/lishishangbao");
      } else if (type === "5") {
        this.$router.push("/wodexuncha");
      }
    },
    tuichudenglu() {
      this.$router.push("/personal");
    },
    noticelist() {
      this.$router.push("/noticeindex");
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
  top: 46px;
}

.notice {
  margin: 0 2%;
  padding: 4% 0;
}

.post-card {
  background: #6a7cfc;
  height: 4rem;
  width: 96%;
  background-size: cover;
  margin: 0 2%;
  border-radius: 0.2rem;
  overflow: hidden;
  .info-layout {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .name {
      color: #fff;
      padding-top: 0.3rem;
      padding-left: 0.3rem;
      h3 {
        margin: 0;
        float: left;
        font-size: 0.4rem;
        font-weight: normal;
      }
      .icon {
        float: left;
        margin-top: 0.15rem;
      }
      span {
        float: left;
        font-size: 0.2rem;
        height: 0.4rem;
        line-height: 0.4rem;
        border-radius: 1rem;
        position: relative;
        padding-left: 0.5rem;
        padding-right: 0.25rem;
        background: #aaa;
        margin-left: 0.2rem;
        margin-right: 0.1rem;
        margin-top: 0.1rem;
        i {
          height: 0.4rem;
          width: 0.4rem;
          border-radius: 1rem;
          display: flex;
          background: #fbc65a;
          position: absolute;
          left: 0;
          top: 0;
          align-items: center;
          justify-content: center;
        }
      }
    }
    .time {
      display: flex;
      flex-direction: column;
      color: #fff;
      text-align: center;
      padding-top: 0.4rem;
      padding-right: 0.3rem;
      strong {
        font-size: 0.5rem;
        font-weight: normal;
      }
      span {
        font-size: 0.24rem;
      }
    }
  }
  .data-layout {
    font-size: 0.4rem;
    display: flex;
    color: #fff;
    flex-direction: row;
    justify-content: space-between;
    .pending {
      position: relative;
      font-size: 0.3rem;
      display: flex;
      flex-direction: column;
      color: #fff;
      text-align: center;
      padding-top: 0.6rem;
      padding-left: 1rem;
      line-height: 0.8rem;
      i {
        font-size: 0.5rem;
        font-style: normal;
      }
      .line {
        position: absolute;
        width: 2px;
        height: 1.2rem;
        left: 3.2rem;
        top: 0.9rem;
        display: block;
        background: rgba(255, 255, 255, 0.5);
      }
    }
    .data-list {
      font-size: 0.3rem;
      padding-right: 1rem;
      margin-top: 0.7rem;
      line-height: 0.5rem;
    }
  }
}

.list-sort {
  h3 {
    font-size: 0.3rem;
    margin: 0;
    padding: 4%;
  }
}
</style>