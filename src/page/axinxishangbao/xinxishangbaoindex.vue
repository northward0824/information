<template>
  <div class="userLogin">
    <van-nav-bar
      title="新建案件"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon name="wap-home-o" size=".5rem" slot="right" />
    </van-nav-bar>
    <div class="overflowauto">
      <div style="font-size:.3rem;">
        <div style="margin:.2rem 0rem;">
          <span style="font-size: .3rem;color: red;margin-left:.3rem;">*</span>
          <span style="font-size:.3rem;">案件管理部门</span>
        </div>
        <el-select style="width:100%;" @change="change1" v-model="value1" placeholder="请选择">
          <el-option v-for="item in options1" :key="item.value" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </div>

      <div style="font-size:.3rem;">
        <div style="margin:.2rem 0rem;">
          <span style="font-size: .3rem;color: red;margin-left:.3rem;">*</span>
          <span style="font-size:.3rem;">案件类型</span>
        </div>
        <el-select style="width:100%;" @change="change2" v-model="value2" placeholder="请选择">
          <el-option v-for="item in options2" :key="item.value" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </div>

      <div style="font-size:.3rem;">
        <div style="margin:.2rem 0rem;">
          <span style="font-size: .3rem;color: red;margin-left:.3rem;">*</span>
          <span style="font-size:.3rem;">大类</span>
        </div>
        <el-select style="width:100%;" @change="change3" v-model="value3" placeholder="请选择">
          <el-option v-for="item in options3" :key="item.value" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </div>

      <div style="font-size:.3rem;">
        <div style="margin:.2rem 0rem;">
          <span style="font-size: .3rem;color: red;margin-left:.3rem;">*</span>
          <span style="font-size:.3rem;">小类</span>
        </div>
        <el-select style="width:100%;" @change="change4" v-model="value4" placeholder="请选择">
          <el-option v-for="item in options4" :key="item.value" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </div>

      <div style="font-size:.3rem;" v-if="showlisd">
        <div style="margin:.2rem 0rem;">
          <span style="font-size: .3rem;color: red;margin-left:.3rem;">*</span>
          <span style="font-size:.3rem;">事件类型</span>
        </div>
        <el-select style="width:100%;" @change="change5" v-model="value5" placeholder="请选择">
          <el-option v-for="item in options5" :key="item.value" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </div>

      <div style="font-size:.3rem;margin-top:.1rem;margin-bottom:.1rem;">
        <div style="margin:.2rem 0rem;">
          <span style="font-size: .3rem;color: red;margin-left:.3rem;">*</span>
          <span style="font-size:.3rem;">近景图照片</span>
        </div>
        <div style="text-align: center;">
          <van-button  style="width: 35%;color:#6A7CFC;border:1px solid #6A7CFC;float:left;height:.7rem;line-height: .7rem;" @click="showActionsheet1">拍照</van-button>
        </div>
        <div style="clear:both;"></div>
        <div v-if="jinjintuimg != ''" style="width: 2.4rem;height: 2.3rem;margin-top: .2rem;"><img style="width:100%;height:100%;" :src="jinjintuimg" alt=""></div>
      </div>

      <div style="font-size:.3rem;">
        <div style="margin:.2rem 0rem;">
          <span style="font-size: .3rem;color: red;margin-left:.1rem;">*</span>
          <span style="font-size:.3rem;">远景图照片</span>
        </div>
        <div style="text-align: center;">
          <van-button  @click="showActionsheet2" style="width: 35%;color:#6A7CFC;border:1px solid #6A7CFC;float:left;height:.7rem;line-height: .7rem;">拍照</van-button>
        </div>
        <div style="clear:both;"></div>
        <div v-if="yuanjintuimg != ''" style="width: 2.4rem;height: 2.3rem;margin-top: .2rem;"><img style="width:100%;height:100%;" :src="yuanjintuimg" alt=""></div>
      </div>

      <div style="font-size:.3rem;">
        <div style="margin:.2rem 0rem;">
          <span style="font-size:.3rem;margin-left:.3rem;">案件描述(选填)</span>
        </div>
        <van-cell-group>
          <van-field v-model="message1" rows="4" autosize type="textarea" placeholder="请填写案件描述" />
        </van-cell-group>
      </div>

      <div style="font-size:.3rem;">
        <div style="font-size:.3rem;" @click="xuanzeweizhi">
          <div style="margin:.2rem 0rem;">
            <span style="font-size: .3rem;color: red;margin-left:.3rem;float:left;">*</span>
            <span style="font-size:.3rem;float:left;">请手动选择位置</span>
            <van-icon style="float:right;margin-top:.1rem;" name="arrow" />
            <div style="clear:both;"></div>
          </div>
        </div>
        <div>
          <span style="font-size: .3rem;float: left;margin-left:.1rem;">
            <img style="width:.25rem;" src="../../assets/dingwei.png" alt />
            <span style="float: right;">{{localkdslighskld}}</span>
          </span>
        </div>
      </div>

      <div>
        <van-button @click="submitsuccess" style="width:100%;background:#6A7CFC;color:white;" >提交</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options1: [],
      value1: "",
      options2: [
        { id: "component", name: "部件" },
        { id: "event", name: "事件" }
      ],
      value2: "",
      options3: [],
      value3: "",
      options4: [],
      value4: "",
      options5: [],
      value5: "",
      id1: "",
      radio: "",
      showlisd: false,
      message1: "",
      message2: "",
      deptId: "",
      bigTypeId: "",
      jinjintuimg: "",
      yuanjintuimg: "",
      localkdslighskld: "财富中心三期"
    };
  },
  beforeDestroy() {
    var map = api.require("bMap");
    map.close();
  },
  destroyed() {
    var map = api.require("bMap");
    map.close();
  },
  created() {
   
    // this.localkdslighskld = window.localStorage.getItem("xinxishanbaolocation");
    this.getpatlist();
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
          window.localStorage.setItem("xinxishangbaodanqianlon", ret.lon);
          window.localStorage.setItem("xinxishangbaodanqianlat", ret.lat);
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
  methods: {
    change1() {
      this.value2 = "";
      this.value3 = "";
      this.value4 = "";
      this.value5 = "";
    },
    change2() {
      this.value3 = "";
      this.value4 = "";
      this.value5 = "";
      this.getda();
      if (this.value2 == "component") {
        this.showlisd = true;
      } else {
        this.value5 = "";
        this.showlisd = false;
      }
    },
    change3() {
      this.value4 = "";
      this.value5 = "";
      this.getxiaolei();
    },
    change4() {
      this.value5 = "";
      this.getshijianbujian();
    },
    change5() {},
    getpatlist() {
      let data = {};
      this.$api
        .deptlist(data)
        .then(res => {
          if (res) {
            if (res.data.code == 0) {
              this.options1 = res.data.data;
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getda() {
      // if (this.value3 == 1) {
      //   var data = {
      //     eventType: "component"
      //   };
      // } else {
        var data = {
          eventType: this.value2
        };
      // }
      this.$api
        .listBigType(data)
        .then(res => {
          if (res) {
            if (res.data.code == 0) {
              this.options3 = res.data.data;
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getxiaolei() {
        var data = {
          eventType: this.value2,
          bigTypeId: this.value3,
          deptId: this.value1
        };
      this.$api
        .listLittleType(data)
        .then(res => {
          if (res) {
            if (res.data.code == 0) {
              this.options4 = res.data.data;
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getshijianbujian() {
      let data = {
        littleTypeId: this.value4
      };
      this.$api
        .listComponentEventType(data)
        .then(res => {
          if (res) {
            if (res.data.code == 0) {
              this.options5 = res.data.data;
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
    bian1() {
      console.log(this.value1);
    },

    //选择位置
    xuanzeweizhi() {
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
            window.localStorage.setItem("xinxishangbaodanqianlon", ret.lon);
            window.localStorage.setItem("xinxishangbaodanqianlat", ret.lat);
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
                                  "xinxishangbaogaibianlon",
                                  ret.lon
                                );
                                window.localStorage.setItem(
                                  "xinxishangbaogaibianlat",
                                  ret.lat
                                );
                                window.localStorage.setItem(
                                  "xinxishanbaolocation",
                                  ret.sematicDescription
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
              // 拍照
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
    submitsuccess() {
      let data = {
        locationLat: window.localStorage.getItem("xinxishangbaodanqianlat"), //定位经度
        imageDetailUrl: this.jinjintuimg, //近景图
        deptId: this.value1, //部门ID
        eventType: this.value2, //	string	非必须		事件类型 event:事件  component 部件
        bigTypeId: this.value3, //	string	非必须		大类ID
        changedLocationLat: window.localStorage.getItem(
          "xinxishangbaogaibianlat"
        ), //	string	非必须		修改后的纬度
        componentEventTypeId: this.value5, //	string	非必须		部件的事件ID
        imagePanoramaUrl: this.yuanjintuimg, //	string	非必须		远景图
        littleTypeId: this.value4, //	string	非必须		事件小类ID
        location: this.localkdslighskld, //	string	非必须		地址
        detail: this.message1, //	string	非必须		详情
        locationLng: window.localStorage.getItem("xinxishangbaodanqianlon"), //	string	非必须		经度
        changedLocationLng: window.localStorage.getItem(
          "xinxishangbaogaibianlon"
        ) //	string	非必须		修改后的经度
      };
      this.$api
        .xinajianaddEvent(data)
        .then(res => {
          if (res) {
            if (res.data.code == 0) {
              window.localStorage.setItem(
                "shangbaoshijianid",
                res.data.data.id
              );
              this.$router.push("/submitsuccess");
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
.van-dropdown-menu__item {
  padding-right: 5rem !important;
}
</style>
<style lang="less" scoped>
.overflowauto {
  overflow: auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 94%;
  top: 1rem;
  margin: auto;
}
</style>
