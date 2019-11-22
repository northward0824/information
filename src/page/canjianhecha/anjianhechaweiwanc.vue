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
            <span>{{dd.eventCode}}</span>
          </div>

          <div style="border-bottom:1px solid white;margin:.2rem 0rem;">
            <span>位置信息 :</span>
            <span>{{dd.location}}</span>
          </div>
          <div style="border-bottom:1px solid white;margin:.2rem 0rem;">
            <span>所属部门 :</span>
            <span>{{dd.deptName}}</span>
          </div>
          <div style="border-bottom:1px solid white;margin:.2rem 0rem;">
            <span style="visibility: hidden;">时间</span>
            <span>时间 :</span>
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
        <div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
          <div style="float:left;color:gray;">
            <span style="visibility: hidden;">类</span>上报人 :
          </div>
          <div style="float:right;width:75%;">{{dd.reporterName}}</div>
          <div style="clear:both;"></div>
        </div>
        <div>
          <div style="float:left;text-align: center;">
            <div style="color:gray;margin:.1rem 0rem;">近景图(上报)</div>
            <div>
              <img style="width:2.5rem;height:3rem;" :src="dd.imageDetailUrl" alt />
            </div>
          </div>
          <div style="float:right;text-align: center;">
            <div style="color:gray;margin:.1rem 0rem;">近景图(上报)</div>
            <div>
              <img style="width:2.5rem;height:3rem;" :src="dd.imagePanoramaUrl" alt />
            </div>
          </div>
          <div style="clear:both;"></div>
        </div>
        <div style="font-size:.4rem;margin-top:.1rem;margin-bottom:.1rem;">
          <div style="margin:.2rem 0rem;">
            <span style="font-size: .3rem;color: red;margin-left:.3rem;">*</span>
            <span style="font-size:.3rem;">近景图照片</span>
          </div>
          <div style="text-align: center;">
            <van-button style="width: 35%;color:#6A7CFC;border:1px solid #6A7CFC;float:left;height:.7rem;line-height: .7rem;" @click="showActionsheet1">拍照</van-button>
          </div>
          <div style="clear:both;"></div>
          <div v-if="jinjintuimg != ''" style="width: 2.4rem;height: 2.3rem;margin-top: .2rem;"><img style="width:100%;height:100%;" :src="jinjintuimg" alt=""></div>
        </div>

        <div style="font-size: .3rem;">
          <div style="margin:.2rem 0rem;">
            <span style="font-size:  .3rem;color: red;margin-left:.1rem;">*</span>
            <span style="font-size: .3rem;">远景图照片</span>
          </div>
          <div style="text-align: center;">
            <van-button  @click="showActionsheet2" style="width: 35%;color:#6A7CFC;border:1px solid #6A7CFC;float:left;height:.7rem;line-height: .7rem;">拍照</van-button>
          </div>
          <div style="clear:both;"></div>
          <div v-if="yuanjintuimg != ''" style="width: 2.4rem;height: 2.3rem;margin-top: .2rem;"><img style="width:100%;height:100%;" :src="yuanjintuimg" alt=""></div>
        </div>
        <div style="font-size: .3rem;">
          <div style="margin:.2rem 0rem;">
            <span style="font-size:  .3rem;color: red;margin-left:.3rem;">*</span>
            <span style="font-size: .3rem;">信息是否属实</span>
          </div>
          <div style="background:white;height:  .3rem;padding: .3rem;">
            <van-radio-group @change="bian2" v-model="radio" style="font-size: .3rem;">
              <div style="float:left;margin-left: .1rem;">
                <van-radio name="1">是</van-radio>
              </div>
              <div style="float:right;margin-right: 3.5rem;">
                <van-radio name="0">否</van-radio>
              </div>
              <div style="clear:both;"></div>
            </van-radio-group>
          </div>
        </div>

        <div style="font-size: .3rem">
          <div style="margin:.2rem 0rem;">
            <span style="font-size: .3rem;margin-left:.3rem;">核查情况(选填)</span>
          </div>
          <van-cell-group>
            <van-field v-model="message1" rows="4" autosize type="textarea" placeholder="请填写案件描述" />
          </van-cell-group>
        </div>

        <div style="font-size:.3rem;">
          <div style="font-size: .3rem;" @click="xuanzeweizhi">
            <div style="margin:.2rem 0rem;">
              <span style="font-size: .3rem;color: red;margin-left:.3rem;float:left;">*</span>
              <span style="font-size:.3rem;float:left;">请手动选择位置</span>
              <van-icon style="float:right;margin-top:.1rem;" name="arrow" />
              <div style="clear:both;"></div>
            </div>
          </div>
          <div>
            <span style="font-size: .3rem;float: left;margin-left:.1rem;">
              <img style="width:.3rem;" src="../../assets/dingwei.png" alt />
              <span style="float: right;">{{localkdslighskld}}</span>
            </span>
          </div>
        </div>

        <div>
          <van-button @click="submitsuccess" style="width:100%;margin-top:.5rem;background:#6A7CFC;color:white;" >提交</van-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "0",
      message1: "",
      dd: "",
      cc: "",
      jinjintuimg: "",
      yuanjintuimg: "",
      localkdslighskld:'高新三路财富中心'
    };
  },
  created() {
    this.getdetails();
  },
  mounted() {
    var that = this;
    var bMap = api.require("bMap");
    bMap.getLocation(
      {
        accuracy: "100m",
        autoStop: true,
        filter: 1
      },
      function(ret, err) {
        if (ret.status) {
          window.localStorage.setItem("anjianhechadangqianlon", ret.lon);
          window.localStorage.setItem("anjianhechadanqianlat", ret.lat);
          var map = api.require("bMap");
          map.getNameFromCoords(
            {
              lon: ret.lon,
              lat: ret.lat
            },
            function(ret, err) {
              if (ret.status) {
                that.localkdslighskld = ret.sematicDescription;
              }
            }
          );
        } else {
          alert(err.code);
        }
      }
    );
  },
  beforeDestroy() {
    var map = api.require("bMap");
    map.close();
  },
  destroyed() {
    var map = api.require("bMap");
    map.close();
  },
  methods: {
    getdetails() {
      let data = {};
      this.$api
        .anjianhechadetails(data)
        .then(res => {
          if (res) {
            if (res.data.code == 0) {
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
    },
    //拍照
    showActionsheet1() {
      var photos;
      var that = this;
      api.actionSheet(
        {
          title: "请拍照",
          cancelTitle: "取消",
          buttons: ["拍照"]
        },
        function(ret, err) {
          if (ret) {
            let sourceType = ret.buttonIndex;
            if (sourceType == 1) {
              api.getPicture(
                {
                  sourceType: "camera",
                  encodingType: "jpg",
                  mediaValue: "pic",
                  allowEdit: false,
                  destinationType: "url",
                  quality: 100,
                  targetWidth: 200,
                  targetHeight: 200,
                  saveToPhotoAlbum: true
                },
                function(ret, err) {
                  if (ret) {
                    api.ajax(
                      {
                        url:
                          "http://39.106.161.180:8080/ifcs-admin/sys/oss/upload",
                        method: "post",
                        data: {
                          files: {
                            file: ret.data
                          }
                        }
                      },
                      function(ret, err) {
                        that.jinjintuimg = ret.data.src;
                        that.$toast("上传成功");
                      }
                    );
                  }
                }
              );
            } else {
              return;
            }
          }
        }
      );
    },
    //拍照
    showActionsheet2() {
      var photos;
      var that = this;
      api.actionSheet(
        {
          title: "请拍照",
          cancelTitle: "取消",
          buttons: ["拍照"]
        },
        function(ret, err) {
          if (ret) {
            let sourceType = ret.buttonIndex;
            if (sourceType == 1) {
              api.getPicture(
                {
                  sourceType: "camera",
                  encodingType: "jpg",
                  mediaValue: "pic",
                  allowEdit: false,
                  destinationType: "url",
                  quality: 100,
                  targetWidth: 200,
                  targetHeight: 200,
                  saveToPhotoAlbum: true
                },
                function(ret, err) {
                  if (ret) {
                    api.ajax(
                      {
                        url:
                          "http://39.106.161.180:8080/ifcs-admin/sys/oss/upload",
                        method: "post",
                        data: {
                          files: {
                            file: ret.data
                          }
                        }
                      },
                      function(ret, err) {
                        that.yuanjintuimg = ret.data.src;
                        that.$toast("上传成功");
                      }
                    );
                  }
                }
              );
            } else {
              return;
            }
          }
        }
      );
    },
    xuanzeweizhi() {
      // this.$router.push("/anjianhechamap");
      var that = this;
      // this.$router.push("/xinxishangbaomap");
      //获取位置
      var bMap = api.require("bMap");
      bMap.getLocation(
        {
          accuracy: "100m",
          autoStop: true,
          filter: 1
        },
        function(ret, err) {
          if (ret.status) {
            bMap.open(
              {
                rect: {
                  x: 0,
                  y: 0,
                  w: api.frameWidth,
                  // h: api.frameHeight
                  h: 1200
                },
                center: {
                  lon: ret.lon,
                  lat: ret.lat
                },
                zoomLevel: 18,
                showUserLocation: true,
                fixed: true
              },
              function(ret) {
                if (ret.status) {
                  // 监听地图点击
                  bMap.addEventListener(
                    {
                      name: "click"
                    },
                    function(ret) {
                      if (ret.status) {
                        bMap.getCenter(function(ret) {
                          bMap.getNameFromCoords(
                            {
                              lon: ret.lon,
                              lat: ret.lat
                            },
                            function(ret, err) {
                              if (ret.status) {
                                window.localStorage.setItem(
                                  "anjianhechagaibianlon",
                                  ret.lon
                                );
                                window.localStorage.setItem(
                                  "anjianhechagaibianlat",
                                  ret.lat
                                );
                                alert("位置更新至" + ret.sematicDescription);
                                that.localkdslighskld = ret.sematicDescription;
                                var map = api.require("bMap");
                                map.close();
                              } else {
                                alert("失败");
                              }
                            }
                          );
                        });
                      }
                    }
                  );
                }
              }
            );
          } else {
            alert(err.code);
          }
        }
      );

      //是否在地图上显示用户位置，会自动移动地图可视区域中心点到用户当前坐标位置，自带地图移动动画效果
      var map = api.require("bMap");
      map.showUserLocation({
        isShow: true,
        trackingMode: "none"
      });
      //设置百度地图缩放等级，此接口自带动画效果
      var map = api.require("bMap");
      map.setZoomLevel({
        level: 25
      });
    },
    bian2() {},
    submitsuccess() {
      let data = {
        eventId: window.localStorage.getItem("anjianhechaderailsUid"),
        locationLat: window.localStorage.getItem("anjianhechadanqianlat"), //	string	非必须		纬度
        imageDetailUrl: this.jinjintuimg, //	string	非必须		近景图
        changedLocationLat: window.localStorage.getItem(
          "anjianhechagaibianlat"
        ), //	string	非必须		改变后的纬度
        imagePanoramaUrl: this.yuanjintuimg, //	string	非必须		远景图
        location: this.localkdslighskld, //	string	非必须		地址
        detail: this.message1, //	string	非必须		详情
        locationLng: window.localStorage.getItem("anjianhechadangqianlon"), //	string	非必须
        isFinished: this.radio, //	number	必须		是否完成0否 1是
        changedLocationLng: window.localStorage.getItem(
          "anjianhechagaibianlon"
        ), //	string	非必须		改变后的经度
        attaches: null, //ring	必须
        taskId: window.localStorage.getItem("anjianhecharenwuid") //	string	必须		任务ID
      };
      this.$api
        .anjiaohechatiao(data)
        .then(res => {
          if (res) {
            if (res.data.code == 0) {
              window.localStorage.setItem("submitsuccessId", res.data.data.id);
              this.$router.push("/anjianhechesubmit");
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
  //   height: 65%;
}
</style>
