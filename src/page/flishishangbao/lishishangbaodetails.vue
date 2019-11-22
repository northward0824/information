<template>
  <div class="userLogin">
    <van-nav-bar
      title="信息详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon name="wap-home-o" size=".5rem" slot="right" />
    </van-nav-bar>
    <div class="overflowauto">
      <div class="headercon">
        <div style="margin: 0rem .2rem .2rem .2rem;">
          <div style="border-bottom:1px solid white;">
            <span>事件编号 :</span>
            <span>{{details.eventCode}}</span>
          </div>
          <div style="border-bottom:1px solid white;margin:.2rem 0rem;">
            <span>位置信息 :</span>
            <span>{{details.location}}</span>
          </div>
          <div style="border-bottom:1px solid white;margin:.2rem 0rem;">
            <span>所属部门 :</span>
            <span>{{details.deptName}}</span>
          </div>
          <div style="border-bottom:1px solid white;margin:.2rem 0rem;">
            <span style="visibility: hidden;">时间</span>
            <span>时间 :</span>
            <span>{{details.createDate}}</span>
          </div>
        </div>
      </div>
      <div class="zhongjian">
        <div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
          <div style="float:left;color:gray;">案件类型 :</div>
          <div style="float:right;width:75%;" v-if="details.eventType == 'event'">事件</div>
          <div style="float:right;width:75%;" v-if="details.eventType == 'component'">部件</div>
          <div style="clear:both;"></div>
        </div>

        <div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
          <div style="float:left;color:gray;">
            大
            <span style="visibility: hidden;">类类</span>类 :
          </div>
          <div style="float:right;width:75%;">{{details.bigTypeName}}</div>
          <div style="clear:both;"></div>
        </div>
        <div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
          <div style="float:left;color:gray;">
            小
            <span style="visibility: hidden;">类类</span>类 :
          </div>
          <div style="float:right;width:75%;">{{details.littleTypeName}}</div>
          <div style="clear:both;"></div>
        </div>
        <div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
          <div style="float:left;color:gray;">案件描述 :</div>
          <div style="float:right;width:75%;">{{details.detail}}</div>
          <div style="clear:both;"></div>
        </div>
        <div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
          <div style="float:left;color:gray;">
            <span style="visibility: hidden;">类</span>上报人 :
          </div>
          <div style="float:right;width:75%;">{{details.reporterName}}</div>
          <div style="clear:both;"></div>
        </div>
        <div>
          <div style="float:left;text-align: center;">
            <div style="color:gray;margin:.1rem 0rem;">近景图(上报)</div>
            <div>
              <img style="width:2.5rem;height:3rem;" :src="details.imageDetailUrl" alt />
            </div>
          </div>
          <div style="float:right;text-align: center;">
            <div style="color:gray;margin:.1rem 0rem;">远景图(上报)</div>
            <div>
              <img style="width:2.5rem;height:3rem;" :src="details.imagePanoramaUrl" alt />
            </div>
          </div>
          <div style="clear:both;"></div>
        </div>

        <div>案件进度 :</div>
        <div>
          <van-steps direction="vertical" :active="active">
            <van-step>
              <h3>案件上报</h3>
              <p>{{details.createDate}}</p>
            </van-step>
            <van-step>
              <div v-show="anjiahecha1" @click="anjianhecha">
                <h3>案件核查</h3>
                <van-icon style="float:right;" name="arrow" />
                <p>{{details.checkDate}}</p>
              </div>
              <div v-show="anjiahecha2">
                <h3>案件核查</h3>
                <p>{{details.checkDate}}</p>
              </div>
            </van-step>
            <van-step>
              <div @click="anjianbanjie" v-show="anjianbanjie1">
                <h3>案件办结</h3>
                <van-icon style="float:right;" name="arrow" />
                <p>{{details.finishDate}}</p>
              </div>
              <div  v-show="anjianbanjie2">
                <h3>案件办结</h3>
                <p>{{details.finishDate}}</p>
              </div>
            </van-step>
          </van-steps>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "1",
      message1: "",
      active: 0,
      details: "",
      anjiahecha1:false,
      anjiahecha2:true,
      anjianbanjie1:false,
      anjianbanjie2:true
    };
  },
  created() {
    this.getlishidetails();
  },
  methods: {
    anjianhecha(){
      this.$router.push("/lishianjianhechadetails");
    },
    anjianbanjie(){
      this.$router.push("/lishianjianbanjiedetails");
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    //跳转首页
    onClickRight() {
      this.$router.push("/index");
    },
    getlishidetails() {
      let data = {
        eventId: window.localStorage.getItem("liishidetailsid")
      };
      this.$api
        .getEventDetailsdf(data)
        .then(res => {
          if (res) {
            if (res.data.code == 0) {
              console.log(res.data.data);
              this.details = res.data.data;
              if (this.details.status == 0 || this.details.status == 1) {
                this.active = 0;
              } else if (this.details.status == 2 || this.details.status == 3) {
                this.active = 1;
                this.anjiahecha1 = true;
                this.anjiahecha2 = false;
              } else if (this.details.status == 4) {
                this.active = 2;
                this.anjianbanjie1 = true;
                this.anjianbanjie2 = false;
                this.anjiahecha1 = true;
                this.anjiahecha2 = false;
              }
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style >
</style>
<style lang="less" scoped>
.overflowauto {
  overflow: auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 1rem;
}
.headercon {
  font-size: 0.3rem;
  color: white;
  // height: 3.2rem;
  padding-bottom: 0.2rem;
  // background: url("../../assets/card_bg.png") no-repeat;
  // background-size: cover;
  background: #6a7cfc;
  padding-top: 0.4rem;
}
.zhongjian {
  background: white;
  padding: 0.5rem 0.4rem;
  font-size: 0.3rem;
  height: 14rem;
}
</style>
