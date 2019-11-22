<template>
  <div>
    <!-- <van-nav-bar title="位置查看" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <van-icon name="wap-home-o" size=".5rem" slot="right" />
    </van-nav-bar>
    <div class="list-con">
         <div id="myMap"  class="map-con"></div>
    </div>-->
    <van-button style="margin-top:650px;" size="large" type="info" @click="quedisoh">确定</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  beforeDestroy() {
    var map = api.require("bMap");
    map.close();
  },
  destroyed() {
    var map = api.require("bMap");
    map.close();
  },
  mounted() {
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
                h: 650
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
                              window.localStorage.setItem("xinxishanbaolocation",ret.sematicDescription);
                              alert("位置更新至" + ret.sematicDescription);
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
  methods: {
    quedisoh() {
      var map = api.require("bMap");
      map.close();
      this.$router.push("/xinxishangbaoindex");
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    goLink() {
      this.$router.push("/notice-detail");
    },
    //跳转首页
    onClickRight() {
      this.$router.push("/index");
    }
  }
};
</script>
<style lang="less" scoped>
.map-con {
  background: #fff;
  padding-top: 2%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0.25rem;
}

.list-con {
  ul {
    padding: 4%;
    li {
      background: #fff;
      padding: 2% 4%;
      margin-bottom: 4%;
      font-size: 0.2rem;
      position: relative;
      h3 {
        margin: 0;
        font-size: 0.3rem;
        font-weight: normal;
        padding: 2%;
        border-bottom: solid 1px #f1f1f1;
      }
      i {
        position: absolute;
        right: 0.2rem;
        top: 0.55rem;
      }
      p {
        font-size: 0.22rem;
        margin: 0;
        line-height: 0.4rem;
        padding: 2%;
        color: #666;
      }
    }
  }
}
</style>