<template>
	<div class="userLogin">
		<van-nav-bar title="信息详情" left-span="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
			<van-icon name="wap-home-o" size=".5rem" slot="right" />
		</van-nav-bar>
		<div class="overflowauto">
			<div class="headercon">
				<div style="margin: 0rem .2rem .2rem .2rem;">
					<div style="border-bottom:1px solid white;">
						<span>事件编号 :</span>
						<span>{{details.eventCode}}</span>
					</div>
					<div style="border-bottom:1px solid white;margin:.2rem 0rem;">
						<span>位置信息 :</span>
						<span>{{details.location}}</span>
					</div>
					<div style="border-bottom:1px solid white;margin:.2rem 0rem;">
						<span>所属部门 :</span>
						<span>{{details.deptName}}</span>
					</div>
					<div style="border-bottom:1px solid white;margin:.2rem 0rem;">
						<span style="visibility: hidden;">时间</span>
						<span>时间 :</span>
						<span>{{details.createDate}}</span>
					</div>
				</div>
			</div>
			<div style="height: 1rem;background: #D6DAF7;display: flex;align-items: center;">
				<div style="font-size: .3rem;color: #333;float: left;margin:0 .4rem;border-left: 4px solid #6A7CFC;height: .4rem;padding-left: .1rem;">案件描述</div>
				<div style="font-size: .28rem;float: left;">{{details.createDate || '无'}}</div>
			</div>
			<div class="zhongjian">
				<div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
					<div style="float:left;color:gray;">案件类型 :</div>
					<div style="float:right;width:75%;" v-if="details.eventType == 'event'">事件</div>
					<div style="float:right;width:75%;" v-if="details.eventType == 'component'">部件</div>
					<div style="clear:both;"></div>
				</div>
				<div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
					<div style="float:left;color:gray;">
						大
						<span style="visibility: hidden;">类类</span>类 :
					</div>
					<div style="float:right;width:75%;">{{details.bigTypeName}}</div>
					<div style="clear:both;"></div>
				</div>
				<div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
					<div style="float:left;color:gray;">
						小
						<span style="visibility: hidden;">类类</span>类 :
					</div>
					<div style="float:right;width:75%;">{{details.littleTypeName}}</div>
					<div style="clear:both;"></div>
				</div>
				<div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
					<div style="float:left;color:gray;">案件描述 :</div>
					<div style="float:right;width:75%;">{{details.detail}}</div>
					<div style="clear:both;"></div>
				</div>
				<div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
					<div style="float:left;color:gray;">
						<span style="visibility: hidden;">类</span>上报人 :
					</div>
					<div style="float:right;width:75%;">{{details.reporterName}}</div>
					<div style="clear:both;"></div>
				</div>
				<div>
					<div style="float:left;span-align: center;">
						<div style="color:gray;margin:.1rem 0rem;">近景图(上报)</div>
						<div>
							<img style="width:2.5rem;height:3rem;" :src="details.imageDetailUrl" alt />
						</div>
					</div>
					<div style="float:right;span-align: center;">
						<div style="color:gray;margin:.1rem 0rem;">远景图(上报)</div>
						<div>
							<img style="width:2.5rem;height:3rem;" :src="details.imagePanoramaUrl" alt />
						</div>
					</div>
					<div style="clear:both;"></div>
				</div>

				<!-- 废弃进度条 -->
				<!-- <div>
				* 				<div>案件进度 :</div>
          <van-steps direction="vertical" :active="active">
            <van-step>
              <h3>案件上报</h3>
              <p>{{details.createDate}}</p>
            </van-step>
            <van-step>
              <div v-show="anjiahecha1" @click="anjianhecha">
                <h3>案件核查</h3>
                <van-icon style="float:right;" name="arrow" />
                <p>{{details.checkDate}}</p>
              </div>
              <div v-show="anjiahecha2">
                <h3>案件核查</h3>
                <p>{{details.checkDate}}</p>
              </div>
            </van-step>
            <van-step>
              <div @click="anjianbanjie" v-show="anjianbanjie1">
                <h3>案件办结</h3>
                <van-icon style="float:right;" name="arrow" />
                <p>{{details.finishDate}}</p>
              </div>
              <div  v-show="anjianbanjie2">
                <h3>案件办结</h3>
                <p>{{details.finishDate}}</p>
              </div>
            </van-step>
          </van-steps>
        </div> -->
			</div>

			<!-- 进度条 -->
			<van-collapse v-model="radio" style="background: #D6DAF7;" accordion>
				<van-collapse-item name="1" style="background: #D6DAF7;">
					<div slot="title" style="background: #D6DAF7;display: flex;align-items: center;height: 100%;">
						<div style="font-size: .3rem;color: #333;float: left;border-left: 4px solid #6A7CFC;height: .4rem;padding-left: .1rem;">案件进度</div>
					</div>
					<!-- 进度条 -->
					<div class='proContainer'>
						<div class='proBox'>
							<div class='pro-left'>
								<div class='ok' v-for="(item,index) in processList" v-if="processList&&index != processList.length-1">
									<div class='okImg'></div>
									<div class='line-ok'></div>
								</div>
								<div class='now' v-if="processList&&processList.length>0">
									<div class='nowImg'>当前</div>
									<!-- <div class='line-no'></div> -->
								</div>
							</div>

							<div class='proRight'>
								<div class='proRight-list' v-for="item in processList"  v-if="processList">
									<div class='proCon' >
										<span v-if="item.processType == 'process'">处理结果</span>
										<span v-if="item.processType == 'check'">核查结果</span>
										<span v-if="item.processType == 'verify'">核实结果</span>
										<span>{{item.processTime || '无'}}</span>
									</div>
									<div  @click="goDetail(item.processType,item.id)">
										<van-icon name="arrow" size=".2rem" />
									</div>
								</div>
							</div>

							<!-- 清除浮动 -->
							<div style='clear:both;'></div>
						</div>
					</div>


				</van-collapse-item>
			</van-collapse>

		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				radio: "1",
				message1: "",
				active: 0,
				details: "",
				anjiahecha1: false,
				anjiahecha2: true,
				anjianbanjie1: false,
				anjianbanjie2: true,
				processList: []
			};
		},
		created() {
			this.getlishidetails();
		},
		methods: {
			anjianhecha() {
				this.$router.push("/lishianjianhechadetails");
			},
			anjianbanjie() {
				this.$router.push("/lishianjianbanjiedetails");
			},
			onClickLeft() {
				this.$router.go(-1);
			},
			//跳转首页
			onClickRight() {
				this.$router.push("/index");
			},
			getlishidetails() {
				let data = {
					eventId: window.localStorage.getItem("liishidetailsid")
				};
				this.$api
					.lishishangbaohechabanjiedetials(data)
					.then(res => {
						if (res) {
							if (res.data.code == 0) {
								this.details = res.data.data.event;
								this.processList = res.data.data.process;

								// if (this.details.status == 0 || this.details.status == 1) {
								// 	this.active = 0;
								// } else if (this.details.status == 2 || this.details.status == 3) {
								// 	this.active = 1;
								// 	this.anjiahecha1 = true;
								// 	this.anjiahecha2 = false;
								// } else if (this.details.status == 4) {
								// 	this.active = 2;
								// 	this.anjianbanjie1 = true;
								// 	this.anjianbanjie2 = false;
								// 	this.anjiahecha1 = true;
								// 	this.anjiahecha2 = false;
								// }
							}
						}
					})
					.catch(err => {
						console.log(err);
					});
			},
			goDetail(type,id){
				if(type == 'process'){
					this.$router.push({path:"/anjianchulidetails",query:{eventId:window.localStorage.getItem("liishidetailsid"),processId:id}});
				}else if(type == 'check'){
					this.$router.push({path:"/anjianhechadetails",query:{eventId:window.localStorage.getItem("liishidetailsid"),processId:id}});
				}
			}
		}
	};
</script>
<style>
</style>
<style lang="less" scoped>
	.overflowauto {
		overflow: auto;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 1rem;
		background: #fff;
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
	}

	.proContainer {
		height: auto;
	}

	.proTitle {
		font-size: 0.32rem;
		color: #999;
	}

	.pro-left {
		width: 1rem;
		float: left;
		padding: .8rem 0;
		/* height: 200rem; */
	}

	.ok,
	.now,
	.no {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		width: 100%;
	}

	.pro-left .line-ok {
		width: .1rem;
		height: 1.1rem;
		background: #6a7cfc;
		margin: 0 .40rem;
	}

	.pro-left>view:nth-child(3) view:last-child {
		display: none;
	}

	.pro-left .line-no {
		width: .10rem;
		height: 1.10rem;
		background: #e4e4e4;
		margin: 0 .40rem;
	}

	.nowImg {
		width: .80rem;
		height: .80rem;
		background: #6a7cfc;
		border-radius: 50%;
		font-size: .28rem;
		text-align: center;
		line-height: .80rem;
		color: #fff;
	}

	.okImg,
	.noImg {
		width: .20rem;
		height: .20rem;
		border: .10rem solid #6a7cfc;
		border-radius: 50%;
	}

	.noImg {
		border: .10rem solid #e4e4e4;
	}

	.proRight {
		width: calc(100% - 1.20rem);
		float: right;
		padding: .20rem 0;
	}

	.proRight-list {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: .20rem;
		margin-bottom: .66rem;
	}

	.proRight-list .proCon {
		width: calc(100% - 1.00rem);
	}

	.proRight-list .proCon span {
		display: block;
		width: 100%;
	}

	.proRight-list .proCon span:first-child {
		color: #333;
		font-size: .32rem;
		line-height: .70rem;
	}

	.proRight-list .proCon span:last-child {
		color: #999;
		font-size: .28rem;
	}

	.proRight-list .icon {
		color: #999;
	}


	.contain {
		padding: 0 .40rem;
		box-sizing: border-box;
		background: #fff;
	}

	.image {
		width: 30%;
		height: 0;
		padding-bottom: 30%;
		margin-right: 3%;
		margin-bottom: 3%;
		position: relative;
	}

	.image image {
		width: 100%;
		height: 100%;
		/* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
	}

	.image:nth-child(3n) {
		margin-right: 0%;
	}

	.moment_img {
		width: 100%;
		min-height: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.add_img {
		position: absolute;
		width: 100%;
	}

	.image_content {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		margin-top: .20rem;
	}

	.imgContainer1 {
		width: 100%；;
	}

	.addressTitle {
		font-size: .32rem;
		color: #999;
		margin: .10rem 0;
	}
</style>
<style>
	.van-cell.van-cell--clickable.van-collapse-item__title {
		background: rgb(214, 218, 247);
	}
</style>
