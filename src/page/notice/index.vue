<template>
  <div>
    <van-nav-bar title="消息中心" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <van-icon name="wap-home-o" size=".5rem" slot="right" />
    </van-nav-bar>
    <div class="list-con">
        <ul>
          <div v-for="lists in list">
            <li style="text-align:center;background:none;margin-bottom:0">{{lists.updaterDate}}</li>
          <li @click="goLink(lists.id)">
            <h3>{{lists.title}}</h3>
            <p style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                {{lists.content}}
            </p>
            <i><van-icon name="arrow" /></i>
          </li>
          </div>
        </ul>
      </div>


  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: '',
        active: 2,
        list:[]
      };
    },
    created() {
this.geenodnsls();
    },
    methods: {
        geenodnsls(){
       let data = {
         page:1,
         limit:100
       };
      this.$api
        .xiaoxitishi(data)
        .then(res => {
          if(res){
            if(res.data.code == 0){
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
      goLink(id){
        window.localStorage.setItem("messageid",id);
        this.$router.push('/notice-detail')
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
        position: relative;
        h3 {
          margin: 0;
          font-size: .3rem;
          font-weight: normal;
          padding: 2%;
          border-bottom: solid 1px #f1f1f1;
        }
        i{
          position: absolute;
          right: .2rem;
          top: .5rem;
        }
        p {
          font-size: .22rem;
          margin: 0;
          line-height: .4rem;
          padding: 2%;
          color: #666;
          width:88%;

        }
      }
    }
  }
</style>