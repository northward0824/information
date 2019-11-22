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
            <span >事件编号 :</span>
            <span>{{dd.eventCode}}</span>
          </div>
          <div style="border-bottom:1px solid white;margin:.2rem 0rem;">
            <span >位置信息 :</span>
            <span>{{dd.location}}</span>
          </div>
          <div style="border-bottom:1px solid white;margin:.2rem 0rem;">
            <span >所属部门 :</span>
            <span>{{dd.deptName}}</span>
          </div>
          <div style="border-bottom:1px solid white;margin:.2rem 0rem;">
            <span style="visibility: hidden;">时间</span>
            <span >时间 :</span>
            <span>{{dd.createDate}}</span>
          </div>
        </div>
      </div>
      <div class="zhongjian">
        <div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
          <div style="float:left;color:gray;">案件类型 :</div>
          <div style="float:right;width:75%;" v-if="dd.eventType == 'event'">普通事件</div>
          <div style="float:right;width:75%;" v-if="dd.eventType == 'component'">部件事件</div>
          <div style="clear:both;"></div>
        </div>

        <div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
          <div style="float:left;color:gray;">
            大
            <span style="visibility: hidden;">类类</span>类 :
          </div>
          <div style="float:right;width:75%;">{{dd.bigTypeName}}</div>
          <div style="clear:both;"></div>
        </div>
        <div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
          <div style="float:left;color:gray;">
            小
            <span style="visibility: hidden;">类类</span>类 :
          </div>
          <div style="float:right;width:75%;">{{dd.littleTypeName}}</div>
          <div style="clear:both;"></div>
        </div>
        <div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
          <div style="float:left;color:gray;">案件描述 :</div>
          <div style="float:right;width:75%;">{{dd.detail}}</div>
          <div style="clear:both;"></div>
        </div>

        <div>
          <div style="float:left;text-align: center;">
            <div style="color:gray;margin:.1rem 0rem;">近景图(上报)</div>
            <div>
              <img style="width:2.5rem;height: 3rem;" :src="dd.imageDetailUrl" alt />
            </div>
          </div>
          <div style="float:right;text-align: center;">
            <div style="color:gray;margin:.1rem 0rem;">远景图(上报)</div>
            <div>
              <img style="width:2.5rem;height: 3rem;" :src="dd.imagePanoramaUrl" alt />
            </div>
          </div>
          <div style="clear:both;"></div>
        </div>
        <div style="text-align: center;float:left;" v-if="dd.attaches != null ">
          <div style="color:gray;margin:.1rem 0rem;" v-if="dd.attaches != 'cc' ">附加照片(上报)</div>
          <div v-for="items in dd.attaches">
            <img style="width:2.5rem;height: 3rem;" :src="items.url" alt />
          </div>
        </div>
        <div style="clear:both;"></div>
        <div>
          <div style="float:left;text-align: center;">
            <div style="color:gray;margin:.1rem 0rem;">近景图(核实)</div>
            <div>
              <img style="width:2.5rem;height: 3rem;" :src="cc.imageDetailUrl" alt />
            </div>
          </div>
          <div style="float:right;text-align: center;">
            <div style="color:gray;margin:.1rem 0rem;">远景图(核实)</div>
            <div>
              <img style="width:2.5rem;height: 3rem;" :src="cc.imagePanoramaUrl" alt />
            </div>
          </div>
          <div style="clear:both;"></div>
        </div>
         <div style="text-align: center;float:left;" v-if="cc.attaches != null ">
          <div style="color:gray;margin:.1rem 0rem;" v-if="cc.attaches != '' ">附加照片(上报)</div>
          <div v-for="items in cc.attaches">
            <img style="width:2.5rem;height: 3rem;" :src="items.url" alt />
          </div>
        </div>
         <div style="clear:both;"></div>
        <div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
          <div style="float:left;color:gray;">位置是否属实 :</div>
          <div style="float:right;width:65%;" v-if="cc.isFinished == 0">否</div>
          <div style="float:right;width:65%;" v-if="cc.isFinished == 1">是</div>
          <div style="clear:both;"></div>
        </div>
        <div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
          <div style="float:left;color:gray;">核实情况 :</div>
          <div style="float:right;width:65%;">{{cc.detail}}</div>
          <div style="clear:both;"></div>
        </div>
        <div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
          <div style="float:left;color:gray;">位置信息 :</div>
          <div style="float:right;width:65%;">{{cc.location}}</div>
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
      radio: "1",
      message1: "",
      dd:'',
      cc:''
    };
  },
  created() {
    this.getdetails();
  },
  methods: {
    getdetails() {
      let data = {};
      this.$api
        .anjianhechadetails(data)
        .then(res => {
          if (res) {
            if (res.data.code == 0) {
              console.log(res.data.data);
              this.dd = res.data.data.apiEventDTO;
              this.cc = res.data.data.apiEventProcessDTO;
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
  padding-bottom: .2rem;
  // background: url("../../assets/card_bg.png") no-repeat;
  // background-size: cover;
  background: #6a7cfc;
  padding-top: 0.4rem;
}
.zhongjian {
  background: white;
  padding: 0.5rem 0.4rem;
  font-size: 0.3rem;
  //   height: 65%;
  height: 12rem;
}
</style>
