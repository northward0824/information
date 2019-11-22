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
            <span>635468435132</span>
          </div>
          <div style="border-bottom:1px solid white;margin:.2rem 0rem;">
            <span >位置信息 :</span>
            <span>高新三路财富中心</span>
          </div>
          <div style="border-bottom:1px solid white;margin:.2rem 0rem;">
            <span style="visibility: hidden;">时间</span>
            <span >时间 :</span>
            <span>2019-05-12 12:56</span>
          </div>
        </div>
      </div>
      <div class="zhongjian">
        <div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
          <div style="float:left;color:gray;">
            <span style="visibility: hidden;">类</span>上报人 :
          </div>
          <div style="float:right;width:75%;">邵超</div>
          <div style="clear:both;"></div>
        </div>

        <div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
          <div style="float:left;color:gray;">
            <span style="visibility: hidden;">类</span>手机号 :
          </div>
          <div style="float:right;width:75%;">15929905860</div>
          <div style="clear:both;"></div>
        </div>

        <div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
          <div style="float:left;color:gray;">信息描述 :</div>
          <div style="float:right;width:75%;">134564胜多负少</div>
          <div style="clear:both;"></div>
        </div>

        <div>
          <div style="float:left;text-align: center;">
            <div style="color:gray;margin:.1rem 0rem;">近景图(上报)</div>
            <div>
              <img style="width:2.5rem;" src="../../assets/57ce235acf003.png" alt />
            </div>
          </div>
          <div style="float:right;text-align: center;">
            <div style="color:gray;margin:.1rem 0rem;">近景图(上报)</div>
            <div>
              <img style="width:2.5rem;" src="../../assets/57ce235acf003.png" alt />
            </div>
          </div>
          <div style="clear:both;"></div>
        </div>

        <div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
          <div style="float:left;color:gray;">信息是否属实 :</div>
          <div style="float:right;width:75%;">134564胜多负少</div>
          <div style="clear:both;"></div>
        </div>
        <div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
          <div style="float:left;color:gray;">核实情况 :</div>
          <div style="float:right;width:75%;">134564胜多负少</div>
          <div style="clear:both;"></div>
        </div>
        <div style="font-size:.3rem;">
          <div style="font-size:.3rem;">
            <div style="margin:.2rem 0rem;">
              <span style="font-size: .3rem;color: red;margin-left:.3rem;float:left;">*</span>
              <span style="font-size:.3rem;float:left;">位置信息</span>
              <div style="clear:both;"></div>
            </div>
          </div>
          <div>
            <span style="font-size: .3rem;float: left;margin-left:.1rem;">
              <img style="width:.5rem;" src="../../assets/dingwei.png" alt />
              <span style="    float: right;">高新三路财富中心3期</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
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
  height: 2.5rem;
  // background: url("../../assets/card_bg.png") no-repeat;
  // background-size: cover;
  background: #6a7cfc;
  padding-top: 0.4rem;
}
.zhongjian {
  background: white;
  padding: 0.5rem 0.4rem;
  font-size: 0.3rem;
  height: 75%;
}
</style>
