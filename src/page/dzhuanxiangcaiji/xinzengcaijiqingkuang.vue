<template>
  <div>
    <van-nav-bar
      title="专项采集详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon name="wap-home-o" size=".5rem" slot="right" />
    </van-nav-bar>
    <div class="overflowauto">
      <div class="list-con">
        <ul>
          <li>
            <h3>{{a.name}}</h3>
            <p>
              采集类型：{{a.collectionType}}
              <br />
              开始时间：{{a.beginDate}}
              <br />
              结束时间：{{a.endDate}}
            </p>
          </li>
        </ul>
        <p class="text">采集要求：{{a.detail}}</p>
      </div>

      <div style="font-size:.3rem;">
        <div style="margin:.2rem 0rem;">
          <span style="font-size: .3rem;color: red;margin-left:.3rem;">*</span>
          <span style="font-size:.3rem;">当前状态</span>
        </div>
        <el-select style="width: 94%;margin-left: .2rem;" v-model="value1" placeholder="请选择">
          <el-option
            v-for="item in option1"
            :key="item.value"
            :label="item.name"
            :value="item.name"
          ></el-option>
        </el-select>
      </div>

      <div style="font-size:.3rem;margin-top:.1rem;margin-bottom:.1rem;">
        <div style="margin:.2rem 0rem;">
          <span style="font-size: .3rem;color: red;margin-left:.3rem;">*</span>
          <span style="font-size:.3rem;">近景图照片</span>
        </div>
        <div style="text-align: center;">
          <van-button  @click="showActionsheet1" style="width: 35%;color:#6A7CFC;border:1px solid #6A7CFC;float:left;height:.7rem;line-height: .7rem;margin-left:.3rem;">拍照</van-button>
        </div>
        <div style="clear:both;"></div>
        <div v-if="jinjintuimg != ''" style="width: 2.4rem;height: 2.3rem;margin-top: .2rem;margin-left:.3rem;"><img style="width:100%;height:100%;" :src="jinjintuimg" alt=""></div>
      </div>

      <div style="font-size:.3rem;">
        <div style="margin:.2rem 0rem;">
          <span style="font-size: .3rem;color: red;margin-left:.1rem;">*</span>
          <span style="font-size:.3rem;">远景图照片</span>
        </div>
        <div style="text-align: center;">
          <van-button  @click="showActionsheet2" style="width: 35%;color:#6A7CFC;border:1px solid #6A7CFC;float:left;height:.7rem;line-height: .7rem;margin-left:.3rem;">拍照</van-button>
        </div>
        <div style="clear:both;"></div>
        <div v-if="yuanjintuimg != ''" style="width: 2.4rem;height: 2.3rem;margin-top: .2rem;margin-left:.3rem;"><img style="width:100%;height:100%;" :src="yuanjintuimg" alt=""></div>
      </div>

      <div style="font-size:.3rem;">
        <div style="margin:.2rem 0rem;">
          <span style="font-size: .3rem;color: red;margin-left:.3rem;">*</span>
          <span style="font-size:.3rem;">是否作为案件上报</span>
        </div>
        <el-select v-model="value2" style="width: 94%;margin-left: .2rem;" placeholder="请选择">
          <el-option v-for="item in option2" :key="item.value" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </div>

      <div style="font-size:.3rem;">
        <div style="margin:.2rem 0rem;">
          <span style="font-size:.3rem;margin-left:.3rem;">案件描述(选填)</span>
        </div>
        <van-cell-group>
          <van-field v-model="message1" rows="4" autosize type="textarea" placeholder="请填写案件描述" />
        </van-cell-group>
      </div>

      <div style="font-size:.3rem;" @click="xuanzeweizhi">
        <div style="margin:.2rem 0rem;">
          <span style="font-size: .3rem;float: left;margin-left:.1rem;">
            <img style="width:.5rem;" src="../../assets/dingwei.png" alt />
          </span>
          <span style="font-size:.3rem;">请确认位置</span>
          <van-icon style="float:right;" name="arrow" />
        </div>
        <span style="margin-left:.2rem;">{{localkdslighskld}}</span>
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
      value1: "",
      option1: [],
      value2: "",
      option2: [{ name: "是", id: 0 }, { name: "否", id: 1 }],
      message1: "",
      a: "",
      localkdslighskld:'',
      jinjintuimg:'',
      yuanjintuimg:''
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
          window.localStorage.setItem("xinzengcaijilon", ret.lon);
          window.localStorage.setItem("xinzengcaijilat", ret.lat);
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
  created() {
    

    this.a = JSON.parse(window.localStorage.getItem("adetaslkfj"));
    this.getcaijistatus();
  },
  methods: {
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
            bMap.open(
              {
                rect: {
                  x: 0,
                  y: 0,
                  w: api.frameWidth,
                  // h: api.frameHeight
                  h:1200
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
                                  "xinzengcaijigaibianlon",
                                  ret.lon
                                );
                                window.localStorage.setItem(
                                  "xinzengcaijigaibianlat",
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
    //采集转态
    getcaijistatus() {
      let data = {};
      this.$api
        .caijistatuslsds(data)
        .then(res => {
          if (res) {
            if (res.data.code == 0) {
              console.log(res.data.data);
              this.option1 = res.data.data;
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
    submitsuccess() {
      // let data = {
      //   currentStatus: this.value1, //	是	Json传参	当前状态，来源于【采集状态】接口,传name的值
      //   imageDetailUrl: this.jinjintuimg, //	是		近景图片
      //   imagePanoramaUrl: this.yuanjintuimg, //	是		远景图片
      //   comment: this.message1, //	否		备注
      //   is_event: this.value2, //	是		是否新建案件 0-是 1-否
      //   locationLng: window.localStorage.getItem("xinzengcaijilon"), //	是		非用户填写经度
      //   locationLat: window.localStorage.getItem("xinzengcaijilat"), //	是		非用户填写纬度
      //   location: this.localkdslighskld, //	否		用户填写的具体地址详情
      //   lng: window.localStorage.getItem("xinzengcaijigaibianlon"), //	是		用户可移动填写的经度
      //   lat: window.localStorage.getItem("xinzengcaijigaibianlat"), //	是		用户可移动填写的纬度
      // id:window.localStorage.getItem("zhuanxiangcaijiyiwanchengid")
      // };
      let data = {
        currentStatus: this.value1, //	是	Json传参	当前状态，来源于【采集状态】接口,传name的值
        imageDetailUrl: "https://www.veer.com/favorites/266820_26720_d8edd81dd8e34abe98c673791d9b0f80", //	是		近景图片
        imagePanoramaUrl: "https://www.veer.com/favorites/266820_26720_d8edd81dd8e34abe98c673791d9b0f80", //	是		远景图片
        comment: this.message1, //	否		备注
        is_event: this.value2, //	是		是否新建案件 0-是 1-否
        locationLng: 108.212564, //	是		非用户填写经度
        locationLat: 102.355845, //	是		非用户填写纬度
        location: "高新三路财富中心", //	否		用户填写的具体地址详情
        lng: 102.1564, //	是		用户可移动填写的经度
        lat: 102468791, //	是		用户可移动填写的纬度
      specialId:Number(window.localStorage.getItem("zhuanxiangcaijiyiwanchengid"))
      };
      this.$api
        .addzengcaiji(data)
        .then(res => {
          if (res) {
            if (res.data.code == 0) {
              this.$toast("采集成功");
              this.$router.push("/kaishicaiji")
            }
          }
        })
        .catch(err => {
          console.log(err);
        });

      // this.$router.push("/submitsuccess");
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
          // console.log(JSON.stringify(ret))
          // console.log("1111111")
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

.list-collection {
  padding: 4%;
}

.list-con {
  .text {
    font-size: 0.22rem;
    background: rgb(214, 218, 247);
    color: #666;
    padding: 4%;
    margin: 0;
    line-height: 0.4rem;
  }
  ul {
    li {
      color: #fff;
      background: #6a7cfc;
      padding: 2% 4%;
      font-size: 0.2rem;
      h3 {
        margin: 0;
        font-size: 0.3rem;
        font-weight: normal;
        padding: 2%;
        border-bottom: solid 1px #f1f1f1;
      }
      p {
        font-size: 0.22rem;
        margin: 0;
        line-height: 0.4rem;
        padding: 2%;
      }
    }
  }
}

.overflowauto {
  overflow: auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 1rem;
}
</style>
<style>
.van-dropdown-menu__item {
  padding-right: 5rem !important;
}
</style>