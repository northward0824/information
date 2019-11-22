<template>
  <div class="userLogin">
    <div class="logo_box">
      <div class="logo_icon">
        <img src="../assets/57ce235acf003.png" alt />
      </div>
      <span class="logo_name">您好!</span>
      <span class="logo_name">请重置登录密码</span>
    </div>
    <form class="loginMsg">
      <!-- <van-field
        v-model="telephone"
        required
        clearable
        label="手机号"
        right-icon="question-o"
        placeholder="请输入手机号"
        @click-right-icon="$toast('用户手机号')"
      />-->
      <div style="width:100%;height:.4rem;"></div>
      <van-field
        v-model="startmima"
        required
        clearable
        label="初始密码"
        right-icon="question-o"
        placeholder="请输入初始密码"
        @click-right-icon="$toast('用户初始密码')"
      />
      <div style="width:100%;height:.4rem;"></div>
      <van-field
        v-model="newmima"
        required
        clearable
        label="设置新密码"
        right-icon="question-o"
        placeholder="请输入新密码"
        @click-right-icon="$toast('设置新密码')"
      />
      <div style="width:100%;height:.4rem;"></div>
      <van-field
        v-model="querenmima"
        required
        clearable
        label="确认新密码"
        right-icon="question-o"
        placeholder="请确认新密码"
        @click-right-icon="$toast('用户新密码')"
      />
      <div style="width:100%;height:.4rem;"></div>
      <van-button size="large" style="background:#6A7CFC;" class="login_btn" @click.prevent="success()" type="info">完成</van-button>
    </form>

    
  </div>
</template>
<script>
export default {
  data() {
    return {
      startmima: "",
      newmima: "",
      querenmima: "",
      Verificationcode: "",
      timer: 60,
      showBtn: true,
      sms: 60
    };
  },
  methods: {
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
    success() {
      let data = {
        pwd: this.startmima,
        pwdNew: this.newmima,
        pwdConfirm: this.querenmima
      };
       this.$api
        .chongzhimima(data)
        .then(res => {
          if(res){
            if(res.data.code == 0){
             this.$toast('密码设置成功');
             this.$router.push("/index");
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
    float: right;
    width: 2rem;
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
