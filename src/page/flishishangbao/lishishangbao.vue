<template>
  <div class="userLogin">
    <van-nav-bar title="历史上报" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <div class="overflowauto">



      <div v-for="item in list" class="contnet" @click="lishidlskdoslg(item.id)">
        <div class="contop">
          <div class="conlisl">
            <span style="float:left;color: #afaaaa;">{{item.eventCode}}</span>
            <span v-if="item.status != 4" style="float:right;color:green;">处理中</span>
            <span v-if="item.status == 4" style="float:right;color:red;">已完成</span>
            <div style="clear:both;"></div>
          </div>
        </div>
        <div class="contnetzhong">
          <div class="conzhongleft" style="border: 1px solid #F2F2F2">
            <img style :src="item.imageDetailUrl" alt />
          </div>
          <div class="coonzhongright">
            <div class="righslskos">
              <img src="../../assets/dingwei.png" alt />
              <span>{{item.location}}</span>
            </div>
            <div class="righslskos">
              <img src="../../assets/time.png" alt />
              <span>{{item.createDate}}</span>
            </div>
            <div class="righslskos">
              <img src="../../assets/ren.png" alt />
              <span>{{item.deptName}}</span>
            </div>
          </div>
          <div style="clear:both;"></div>
        </div>
        <div class="conbottom">
          <div class="bottomleft">
            <span>大类:{{item.bigTypeName}}</span>
          </div>
          <div class="bottomright">
            <span>小类:{{item.littleTypeName}}</span>
          </div>
          <div style="clear:both;"></div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      list:[]
    };
  },
  created(){
    this.getlisthilist();
  },
  methods: {
    getlisthilist() {
      let data = {
        key: this.value,
        page: 1,
        limit: 100
      };
      this.$api
        .lishishangbaolist(data)
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
    lishidlskdoslg(id) {
      window.localStorage.setItem("liishidetailsid",id);
      this.$router.push("/lishishangbaodetails");
    },
    //搜索
    onSearch() {
      this.getlisthilist();
    }
  }
};
</script>
<style lang="less" scoped>
.dingweifixed {
  position: fixed;
  bottom: 0.5rem;
  right: 0.1rem;
  z-index: 10000;
  background: #2b88ff;
  color: white;
  font-size: 0.4rem;
  border-radius: 5rem;
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  opacity: 0.9;
}
.overflowauto {
  overflow: auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 2rem;
}
.userLogin {
  overflow-y: scroll;
}
.contnet {
  padding: 0.3rem;
  background: white;
  margin-top: 0.2rem;
  .contop {
    background: white;
  }
  .conlisl {
    border-bottom: 1px solid #afaaaa;
    padding-bottom: 0.2rem;
    margin-bottom: 0.2rem;
    span {
      font-size: 0.3rem;
    }
  }
  .conzhongleft {
    float: left;
    float: left;
    width: 2rem;
    height: 2rem;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .coonzhongright {
    float: right;
    width: 60%;
    font-size: 0.25rem;
    .righslskos {
      margin: 0.2rem 0rem;
      img {
        width: 0.3rem;
        margin-right: 0.1rem;
        vertical-align: middle;
      }
    }
  }
  .conbottom {
    margin-top: 0.1rem;
  }
  .bottomleft {
    float: left;
    font-size: 0.25rem;
  }
  .bottomright {
    float: right;
    font-size: 0.25rem;
  }
}
</style>
