<template>
	<div class="userLogin">
		<van-nav-bar title="案件详情" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
			<van-icon name="wap-home-o" size=".5rem" slot="right" />
		</van-nav-bar>

		<div class="overflowauto">
			<div class="headercon">
				<div style="margin: 0rem .2rem .2rem .2rem;">
					<div style="border-bottom:1px solid white;"><span>事件编号 : </span><span>{{detail.code}}</span></div>
					<!-- <div style="margin:.2rem 0rem;"><img style="width: .4rem;" src="../../assets/dingwei2.png" alt=""><span>高新三路财富中心</span></div>
              <div style="margin:.2rem 0rem;"><img style="width:.4rem;" src="../../assets/time2.png" alt=""><span>2019-05-12 12:56</span></div>
              <div style="margin:.2rem 0rem;"><img style="width: .4rem;" src="../../assets/ren2.png" alt=""><span>城管部</span></div> -->
					<div style="border-bottom:1px solid white;margin:.2rem 0rem;"><span>位置信息 : </span><span>{{detail.location}}</span></div>
					<div style="border-bottom:1px solid white;margin:.2rem 0rem;"><span style="visibility: hidden;">时间</span><span>时间
							: {{detail.createDate}}</span><span></span></div>
				</div>
				<!-- <div style="float:right;margin-top: .3rem;margin-right: .2rem;">
                <img style="width: 3rem;" src="../../assets/57ce235acf003.png" alt="">
            </div> -->
			</div>
			<div class="zhongjian">
				<div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
					<div style="float:left;color:gray;">
						上报人
					</div>
					<div style="float:right;width:75%;">{{detail.sourceName}}</div>
					<div style="clear:both;"></div>
				</div>
				<div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
					<div style="float:left;color:gray;">
						手 机 号
					</div>
					<div style="float:right;width:75%;">{{detail.sourcePhone}}</div>
					<div style="clear:both;"></div>
				</div>
				<div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
					<div style="float:left;color:gray;">
						信息描述
					</div>
					<div style="float:right;width:75%;">{{detail.taskDesc}}</div>
					<div style="clear:both;"></div>
				</div>
			</div>
			<div style="height: 1rem;background: #D6DAF7;display: flex;align-items: center;">
				<div style="font-size: .3rem;color: #333;float: left;margin:0 .4rem;border-left: 4px solid #6A7CFC;height: .4rem;padding-left: .1rem;">核实结果</div>
				<div style="font-size: .28rem;float: left;">{{detail.verifyDate || '无'}}</div>
			</div>
			<div class="zhongjian">
				<div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
					<div style="float:left;color:gray;">是否属实</div>
					<div style="float:right;width:75%;">{{detail.result ? '是' :'否'}}</div>
					<div style="clear:both;"></div>
				</div>
				<div v-if="detail.result" @click="goDetail" style="margin-top: .5rem;background: #6A7CFC;font-size: .28rem;height: .8rem;text-align: center;line-height: .8rem;color: #fff;border-radius: .12rem;">点击查看案件描述</div>

				<div v-else>
					<div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
						<div style="float:left;color:gray;">
							信 息 描 述
						</div>
						<div style="float:right;width:75%;">{{detail.resultDesc}}</div>
						<div style="clear:both;"></div>
					</div>
					
					<div>
						<div style="float:left;text-align: center;">
							<div style="color:gray;margin:.1rem 0rem;">近景图(核实)</div>
							<div>
								<img style="width:2.5rem;" :src="detail.imageDetailUrl" alt />
							</div>
						</div>
						<div style="float:right;text-align: center;">
							<div style="color:gray;margin:.1rem 0rem;">近景图(核实)</div>
							<div>
								<img style="width:2.5rem;" :src="detail.imagePanoramaUrl" alt />
							</div>
						</div>
						<div style="clear:both;"></div>
					</div>
					<div style="font-size:.3;">
						<div style="margin:.2rem 0rem;">
							<span style="font-size: .3rem;color: red;margin-left:.3rem;">*</span>
							<span style="font-size:.3rem;">附加照片</span>
						</div>
						<div class="van-uploader">
							<div class="van-uploader__wrapper">
								<div class="van-uploader__preview" v-for="item in detail.attaches">
									<div class="van-image van-uploader__preview-image" style="overflow: hidden; border-radius: 4px;">
										<img :src="item.url" class="van-image__img" style="object-fit: cover;">
									</div>
								</div>
							</div>
						</div>
						<div style="clear:both;"></div>
					</div>
								
				</div>
				
			</div>


		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				detail: {}
			};
		},
		created() {
			this.getInfo()
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			},
			//跳转首页
			onClickRight() {
				this.$router.push("/index");
			},
			//获取详情
			getInfo() {
				this.$api
					.getVerifyTaskDetail({
						id: this.$route.query.id
					})
					.then(res => {
						if (res) {
							if (res.data.code == 0) {
								this.detail = res.data.data
								// this.$router.push("/submitsuccess");
							}
						}
					})
					.catch(err => {
						console.log(err);
					});
			},
			goDetail() {
				this.$router.push( "/xinjiananjiandetails");
				window.localStorage.setItem("shangbaoshijianid",this.detail.resultEventId)
			},
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
	}
</style>
