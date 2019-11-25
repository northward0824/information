<template>
	<div class="userLogin">
		<van-nav-bar title="案件详情" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
			<van-icon name="wap-home-o" size=".5rem" slot="right" />
		</van-nav-bar>

		<div class="overflowauto">

			<div class="headercon">
				<div style="margin: 0rem .2rem .2rem .2rem;">
					<div style="border-bottom:1px solid white;">
						<span>事件编号 :</span>
						<span>{{aa.eventCode}}</span>
					</div>
					<div style="border-bottom:1px solid white;margin:.2rem 0rem;">
						<span>位置信息 :</span>
						<span>{{aa.location}}</span>
					</div>
					<div style="border-bottom:1px solid white;margin:.2rem 0rem;">
						<span>所属部门 :</span>
						<span>{{aa.deptName}}</span>
					</div>
					<div style="border-bottom:1px solid white;margin:.2rem 0rem;">
						<span style="visibility: hidden;">时间</span>
						<span>时间 :</span>
						<span>{{aa.createDate}}</span>
					</div>
				</div>
			</div>
			<div style="height: 1rem;background: #D6DAF7;display: flex;align-items: center;">
				<div style="font-size: .3rem;color: #333;float: left;margin:0 .4rem;border-left: 4px solid #6A7CFC;height: .4rem;padding-left: .1rem;">案件描述</div>
				<div style="font-size: .28rem;float: left;">{{aa.createDate || '无'}}</div>
			</div>
			<div class="zhongjian">
				<div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
					<div style="float:left;color:gray;">案件类型 :</div>
					<div style="float:right;width:75%;" v-if="aa.eventType == 'component'">部件</div>
					<div style="float:right;width:75%;" v-if="aa.eventType == 'event'">事件</div>
					<div style="clear:both;"></div>
				</div>

				<div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
					<div style="float:left;color:gray;">
						大
						<span style="visibility: hidden;">类型</span>类 :
					</div>
					<div style="float:right;width:75%;">{{aa. bigTypeName}}</div>
					<div style="clear:both;"></div>
				</div>

				<div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
					<div style="float:left;color:gray;">
						小
						<span style="visibility: hidden;">类型</span>类 :
					</div>
					<div style="float:right;width:75%;">{{aa.littleTypeName}}</div>
					<div style="clear:both;"></div>
				</div>

				<div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
					<div style="float:left;color:gray;">案件描述 :</div>
					<div style="float:right;width:75%;">{{aa.detail}}</div>
					<div style="clear:both;"></div>
				</div>

				<div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
					<div style="float:left;color:gray;">
						上
						<span style="visibility: hidden;">类</span>报人 :
					</div>
					<div style="float:right;width:75%;">{{aa.reporterName}}</div>
					<div style="clear:both;"></div>
				</div>

				<div>
					<div style="float:left;text-align: center;">
						<div style="color:gray;margin:.1rem 0rem;">近景图(上报)</div>
						<div>
							<img style="width:2.5rem;" :src="aa.imageDetailUrl" alt />
						</div>
					</div>
					<div style="float:right;text-align: center;">
						<div style="color:gray;margin:.1rem 0rem;">远景图(上报)</div>
						<div>
							<img style="width:2.5rem;" :src="aa.imagePanoramaUrl" alt />
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
							<div class="van-uploader__preview" v-for="item in aa.attaches">
								<div class="van-image van-uploader__preview-image" style="overflow: hidden; border-radius: 4px;">
									<img :src="item.url" class="van-image__img" style="object-fit: cover;">
								</div>
							</div>
						</div>
					</div>
					<div style="clear:both;"></div>
				</div>


				<div style="font-size:.3rem;">
					<div style="font-size:.3rem;">
						<div style="margin:.2rem 0rem;line-height: .5rem;">
							<span style="font-size:.3rem;">位置信息</span>
						</div>
					</div>
					<div style="overflow: hidden;">
						<span style="font-size: .3rem;float: left;margin-left:.1rem;">
							<img style="width:.3rem;" src="../../assets/dingwei.png" alt />
							<span style="    float: right;">高新三路财富中心3期</span>
						</span>
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
				aa: ''
			};
		},
		created() {
			this.getsldkfja();
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			},
			getsldkfja() {
				let data = {
					eventId: window.localStorage.getItem("shangbaoshijianid")
				};
				this.$api
					.getProcessDetail({eventId:this.$route.query.eventId,processId:this.$route.query.processId})
					.then(res => {
						if (res) {
							if (res.data.code == 0) {
								this.aa = res.data.data.processDetail;
							}
						}
					})
					.catch(err => {
						console.log(err);
					});
			},
			//跳转首页
			onClickRight() {
				this.$router.push("/index");
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
	}

	.headercon {
		font-size: 0.3rem;
		color: white;
		// height: 3.4rem;
		// background: url("../../assets/card_bg.png") no-repeat;
		// background-size: cover;
		background: #6a7cfc;
		padding-top: 0.4rem;
		padding-bottom: .2rem;
	}

	.zhongjian {
		background: white;
		padding: 0.5rem 0.4rem;
		font-size: 0.3rem;
	}
</style>
