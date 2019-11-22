<template>
  <div class="userLogin">
    <div class="logo_box">
      <div class="logo_icon">
        <img src="../assets/57ce235acf003.png" alt />
      </div>
      <span class="logo_name">您好!</span>
      <span class="logo_name">欢迎进入西安市信息融合采集系统</span>
    </div>
    <form class="loginMsg">
      <van-field
        v-model="telephone"
        required
        clearable
        label="手机号"
        right-icon="question-o"
        placeholder="请输入手机号"
        @click-right-icon="$toast('用户手机号')"
      />
      <div style="width:100%;height:.5rem;"></div>
      <div>
        <van-field
          v-model="mima"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />
      </div>
      <div style="width:100%;height:.5rem;"></div>
      <div>
        


<van-field
class="informessage"
          v-model="Verificationcode"
          required
          clearable
          label="验证码"
          right-icon="question-o"
          placeholder="请输入验证码"
          @click-right-icon="$toast('请输入验证码')"
        />



        <div class="getinfmessbut" v-show="showBtn" type="info">
          <img
            :src="imgsrc"
            @click="jyhgfjhfd"
            style="width: 100%;height: 100%;position: absolute;"
            alt
          />
        </div>
        <van-button class="login_btn" style="background:#6A7CFC;" @click.prevent="login()" type="info">登录</van-button>
      </div>
      
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      telephone: "",
      Verificationcode: "",
      timer: 60,
      showBtn: true,
      sms: 60,
      imgsrc: "",
      uuid: "",
      mima: ""
    };
  },
  created() {
    this.uuid = this.getRandomCode(11);
    this.getimgyanz();
  },
  methods: {
    jyhgfjhfd() {
      this.uuid = this.getRandomCode(11);
      this.getimgyanz();
    },
    startTimer() {
      //倒计时
      let time1 = setInterval(() => {
        this.timer--;
        if (this.timer == 0) {
          clearInterval(time1);
          this.showBtn = true;
          this.timer = 60;
        }
      }, 1000);
    },
    //获取验证码
    getVercode() {
      if (this.telephone == "") {
        this.$toast("请输入手机号");
        return;
      }
      if (!/^1[3456789]\d{9}$/.test(this.telephone)) {
        this.$toast("手机号输入错误");
        return;
      }
      this.showBtn = false;
      this.startTimer();
      this.$notify({ type: "primary", message: "正在发送" });
    },
    login() {
      let data = {
        mobile: this.telephone,
        pwd: this.mima,
        captcha: this.Verificationcode,
        uuid: this.uuid
      };
      this.$api
        .userlogin(data)
        .then(res => {
          if(res){
            if(res.data.code == 0){
              window.localStorage.setItem("accessToken",res.data.data.refresh_token);
              if(res.data.data.state == "F"){
                this.$router.push("/zhuce");
              }else if(res.data.data.state == "N"){
                this.$router.push("/index");
              }
            }else{
               this.uuid = this.getRandomCode(11);
    this.getimgyanz();
            }
          }
        })
        .catch(err => {
          this.uuid = this.getRandomCode(11);
          this.getimgyanz();
          console.log(err);
        });
    },
    getRandomCode(length) {
      if (length > 0) {
        var data = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z"
        ];
        var nums = "";
        for (var i = 0; i < length; i++) {
          var r = parseInt(Math.random() * 61);
          nums += data[r];
        }
        return nums;
      } else {
        return false;
      }
    },
    //获取验证码
    getimgyanz() {
      let data = {
        uuid: this.uuid
      };
      this.$api
        .imgyanz(data)
        .then(res => {
          this.imgsrc =
            `http://39.106.161.180:8081/ifcs-api/api/captcha?uuid=` + this.uuid;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.userLogin {
  background: #f0f9fe;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20rem;
  overflow: hidden;
  .informessage {
    width: 4.7rem;
    float: left;
  }
  .getinfmessbut {
    height: 0.7rem;
    float: right;
    width: 2rem;
    border: 1px solid #F2F2F2;
    position: relative;
  }
  .timebut {
    width: 2rem;
  }
  .logo_box {
    margin-top: 1.4rem;
    text-align: center;
    .logo_icon {
      width: 2.02rem;
      height: 2.02rem;
      // border: 1px solid #0e97db;
      border-radius: 50%;
      display: inline-block;
      padding: 0.1rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .logo_name {
      font-size: 0.36rem;
      color: #333333;
      display: block;
      text-align: center;
      margin-top: 0.2rem;
      font-weight: bold;
    }
  }
  .loginMsg {
    width: 100%;
    padding: 0 0.3rem;
    margin-top: 0.7rem;
    box-sizing: border-box;
    .marginTop {
      margin-top: 0.18rem;
    }
    .verCode_box {
      display: flex;
      justify-content: space-between;
      .input {
        width: 60%;
      }
      .verCodeImg {
        margin-top: 0.18rem;
        width: 30%;
        border: 1px solid #ccc;
        height: 0.78rem;
      }
    }
    .input {
      border: 1px solid #e3e9ec;
      background: #fff;
      width: 100%;
      height: 0.8rem;
      display: flex;
      align-items: center;
      position: relative;
      input {
        border: none;
        outline: 0;
        height: 100%;
        width: 5.35rem;
        font-size: 0.26rem;
      }
      .verCode {
        width: 60%;
      }
      :-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #bbbbbb;
      }

      ::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #bbbbbb;
      }

      input:-ms-input-placeholder {
        color: #bbbbbb;
      }

      input::-webkit-input-placeholder {
        color: #bbbbbb;
      }
      .input_icon {
        height: 0.3rem;
        width: 0.3rem;
        margin: 0 0.2rem;
      }
      .showPwd {
        height: 0.2rem;
        width: 0.3rem;
        // background: url("../../../static/img/login/pwd_hide.png") no-repeat center center;
        background-size: cover;
        margin-left: 0.3rem;
        transition: all 0.3s;
      }
      .active {
        // background: url("../../../static/img/login/pwd_show.png") no-repeat center center;
        background-size: cover;
      }
    }
    .login_btn {
      width: 100%;
      // margin-left:1%;
      height: 0.88rem;
      background: #0e97db;
      line-height: 0.88rem;
      text-align: center;
      color: #fff;
      font-size: 0.36rem;
      border: none;
      outline: 0;
      margin-top: 0.6rem;
      border-radius: 0.05rem;
    }
    .login_help {
      margin-top: 0.2rem;
      padding: 0 0.2rem;
      display: flex;
      justify-content: space-between;
      span {
        font-size: 0.24rem;
        color: #868686;
        display: block;
      }
    }
  }
  .name_login {
    margin: 0.88rem 0;
    display: flex;
    justify-content: center;
    span {
      font-size: 0.32rem;
      color: #01aaff;
    }
  }
  .qzPhone {
    position: absolute;
    width: 6.11rem;
    height: 3.21rem;
    background: #fff;
    z-index: 99;
    top: 50%;
    left: 50%;
    margin-top: -1.605rem;
    margin-left: -3.055rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0.4rem 0.34rem;
    box-sizing: border-box;
    border-radius: 0.05rem;
    h3 {
      font-size: 0.28rem;
      color: #0e97db;
    }
    p {
      font-size: 0.26rem;
      color: #868686;
      line-height: 0.44rem;
      letter-spacing: 0.012rem;
    }
    .close {
      position: absolute;
      top: 0.2rem;
      right: 0.2rem;
      height: 0.21rem;
      width: 0.21rem;
    }
  }
  #mask {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #000;
    opacity: 0.5;
    z-index: 10;
  }
}
</style>
