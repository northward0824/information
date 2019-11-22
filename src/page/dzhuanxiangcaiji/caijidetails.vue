<template>
  <div>
    <van-nav-bar title="专项采集详情" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <van-icon name="wap-home-o" size=".5rem" slot="right" />
    </van-nav-bar>
    <div class="content">
      <div class="list-con">
        <ul>
          <li>
            <h3>{{bic.name}}</h3>
            <p>
              采集类型：{{bic.collectionType}}
              <br/> 开始时间：{{bic.beginDate}}
              <br/> 结束时间：{{bic.endDate}}
            </p>
          </li>
        </ul>
        <p class="text">采集要求：{{bic.detail}}</p>
      </div>

      <div class="list-collection">
        <van-cell title="当前状况" value="有缺失" />
        <van-cell title="近景图照片" />
        <div class="">
          <img :src="bic.imageDetailUrl" />
        </div>
        <van-cell title="远景图照片" />
        <div>
          <img :src="bic.imagePanoramaUrl" />
        </div>
        <van-cell title="是否作为案件上报" value="是" />
        <van-cell title="所在位置" :value="bic.location" />
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        bic:''
      };
    },
    created() {
this.getdlskcaijidetails();
    },
    methods: {
      getdlskcaijidetails(){
         let data = {};
      this.$api
        .zhuanxiangcaijidiandetails(data)
        .then(res => {
          if(res){
            if(res.data.code == 0){
              console.log(res.data.data);
              this.bic = res.data.data;
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
      width: 60%;
      height: 100%;
      margin-left: 4%;
    }
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