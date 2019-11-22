<template>
  <div class="userLogin">
    <van-nav-bar
      title="案件详情"
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
              <div style="border-bottom:1px solid white;"><span >事件编号 : </span><span>635468435132</span></div>
              <!-- <div style="margin:.2rem 0rem;"><img style="width: .4rem;" src="../../assets/dingwei2.png" alt=""><span>高新三路财富中心</span></div>
              <div style="margin:.2rem 0rem;"><img style="width:.4rem;" src="../../assets/time2.png" alt=""><span>2019-05-12 12:56</span></div>
              <div style="margin:.2rem 0rem;"><img style="width: .4rem;" src="../../assets/ren2.png" alt=""><span>城管部</span></div> -->
              <div style="border-bottom:1px solid white;margin:.2rem 0rem;"><span >位置信息 : </span><span>高新三路财富中心</span></div>
              <div style="border-bottom:1px solid white;margin:.2rem 0rem;"><span >所属部门 : </span><span>城管部</span></div>
              <div style="border-bottom:1px solid white;margin:.2rem 0rem;"><span style="visibility: hidden;">时间</span><span >时间 : </span><span>2019-05-12 12:56</span></div>
          </div>
            <!-- <div style="float:right;margin-top: .3rem;margin-right: .2rem;">
                <img style="width: 3rem;" src="../../assets/57ce235acf003.png" alt="">
            </div> -->
      </div>
      <div class="zhongjian">
        <div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
          <div style="float:left;color:gray;">案件类型</div>
          <div style="float:right;width:75%;">部件</div>
          <div style="clear:both;"></div>
        </div>

        <div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
          <div style="float:left;color:gray;">
            大
            <span style="visibility: hidden;">类型</span>类
          </div>
          <div style="float:right;width:75%;">01公共设施</div>
          <div style="clear:both;"></div>
        </div>

        <div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
          <div style="float:left;color:gray;">
            小
            <span style="visibility: hidden;">类型</span>类
          </div>
          <div style="float:right;width:75%;">02水晶爱</div>
          <div style="clear:both;"></div>
        </div>

        <div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
          <div style="float:left;color:gray;">案件描述</div>
          <div style="float:right;width:75%;">有破损</div>
          <div style="clear:both;"></div>
        </div>

        <div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
          <div style="float:left;color:gray;">
            上
            <span style="visibility: hidden;">类</span>报人
          </div>
          <div style="float:right;width:75%;">邵超</div>
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
  // height: 3.4rem;
  // background: url("../../assets/card_bg.png") no-repeat;
  // background-size: cover;
  background: #6a7cfc;
  padding-top: .4rem;
  padding-bottom: .2rem;
}
.zhongjian {
  background: white;
  padding: 0.5rem 0.4rem;
  font-size: 0.3rem;
  height: 10rem;
}
</style>
