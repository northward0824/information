<template>
  <div>
    <van-nav-bar title="专项采集详情" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <van-icon name="wap-home-o" size=".5rem" slot="right" />
    </van-nav-bar>
  <div class="overflowauto">
      <div class="list-con">
      <ul>
        <li>
          <h3>{{a.name}}</h3>
          <p>
            采集类型：{{a.collectionType}}
            <br/> 开始时间：{{a.beginDate}}
            <br/> 结束时间：{{a.endDate}}
          </p>
        </li>
      </ul>
      <p class="text">采集要求：{{a.detail}}</p>
    </div>

    <div class="list-collection">
      <div v-for="item in lists">
        <van-cell :title="item.comment"  @click="previesls(item.id)" is-link :value="item.createDate" />
      </div>
    </div>
  </div>


  </div>
</template>
<script>
  export default {
    data() {
      return {
          a:'',
          lists:[]
      };
    },
    created() {
this.getdlskdos();
    },
    mounted(){
      this.a = JSON.parse(window.localStorage.getItem("adetailss"))
    },
    methods: {
        getdlskdos(){
             let data = {};
      this.$api
        .zhuanxianyiwanchengtdlsis(data)
        .then(res => {
          if(res){
            if(res.data.code == 0){
              this.lists = res.data.data;
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
      previesls(id){
        window.localStorage.setItem("caijidianisdsid",id)
        this.$router.push("/caijidetails");
      }
    }
  };
</script>
<style lang="less" scoped>
.overflowauto {
  overflow: auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 1rem;
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
  .list-collection {
    padding: 4%
  }

  .list-con {
    .text {
      font-size: .22rem;
      background: rgb(214, 218, 247);
      color: #666;
      padding: 4%;
      margin: 0;
      line-height: .4rem;
    }
    ul {
      li {
        color: #fff;
        background: #6a7cfc;
        padding: 2% 4%;
        font-size: .2rem;
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
        }
      }
    }
  }
</style>