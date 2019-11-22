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


    <div style="text-align: center;background: #00abff;color: white;height: 1.5rem;padding-top: .5rem;">
        <div style="    font-size: .4rem;">李小明2019年11月份考核成绩</div>
        <div style="    font-size: .3rem;">(考评时间:2019-11-1 17:50:20)</div>
    </div>

    <div style="padding:.2rem;">
        <div style="float: left;font-size: .5rem;">得分: <span style="color:#6a7cfc;">90</span> </div>
        <div style="float: right;font-size: .5rem;">测评: <span style="color:#6a7cfc;">优秀</span></div>
    <div style="clear:both;"></div>
    </div>

    <div>
        <div style="border-bottom:1px solid #F2F2F2;font-size: .4rem;padding-left: .2rem;margin-bottom:.3rem;">
            <span>日常采集</span>
            <span>90</span>
        </div>
         <div style="border-bottom:1px solid #F2F2F2;font-size: .4rem;padding-left: .2rem;margin-bottom:.3rem;">
            <span>专项采集</span>
            <span>90</span>
        </div>
         <div style="border-bottom:1px solid #F2F2F2;font-size: .4rem;padding-left: .2rem;margin-bottom:.3rem;">
            <span>案件处理</span>
            <span>90</span>
        </div>
    </div>


    <div id="main" style="width: 100%;height:4rem;"></div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "",
  data() {
    return {
      charts: "",
      /*  opinion: ["1", "3", "3", "4", "5"],*/
      opinionData: ["3", "2", "4", "4", "5"]
    };
  },
  methods: {
      onClickLeft(){
          this.$router.go(-1);
      },
       onClickRight() {
      this.$router.push("/index");
    },
    drawLine(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["2019年下半年考核成绩曲线图"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },

        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["1", "2", "3", "4", "5"]
        },
        yAxis: {
          type: "value"
        },

        series: [
          {
            name: "2019年下半年考核成绩曲线图",
            type: "line",
            stack: "总量",
            data: this.opinionData
          }
        ]
      });
    }
  },
  //调用
  mounted() {
    this.$nextTick(function() {
      this.drawLine("main");
    });
  }
};
</script>
<style lang="less" scoped>

</style>