<template>
	<div class="userLogin">
		<van-nav-bar title="信息详情" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
			<van-icon name="wap-home-o" size=".5rem" slot="right" />
		</van-nav-bar>
		<div class="overflowauto">
			<div class="headercon">
				<div style="margin: 0rem .2rem .2rem .2rem;">
					<div style="border-bottom:1px solid white;"><span>事件编号 : </span><span>{{detail.code}}</span></div>
					<div style="border-bottom:1px solid white;margin:.2rem 0rem;"><span>位置信息 : </span><span>{{detail.location}}</span></div>
					<div style="border-bottom:1px solid white;margin:.2rem 0rem;"><span style="visibility: hidden;">时间</span><span>时间
							: </span><span>{{detail.createDate}}</span></div>
				</div>
			</div>
			<div class="zhongjian">
				<div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
					<div style="float:left;color:gray;"><span style="visibility: hidden;">类</span>上报人 : </div>
					<div style="float:right;width:75%;">{{detail.sourceName}}</div>
					<div style="clear:both;"></div>
				</div>

				<div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
					<div style="float:left;color:gray;">
						<span style="visibility: hidden;">类</span>手机号 :
					</div>
					<div style="float:right;width:75%;">{{detail.sourcePhone}}</div>
					<div style="clear:both;"></div>
				</div>

				<div style="border-bottom:1px solid #F2F2F2;padding-bottom:.1rem;margin-bottom:.1rem;">
					<div style="float:left;color:gray;">
						信息描述 :
					</div>
					<div style="float:right;width:75%;">{{detail.taskDesc}}</div>
					<div style="clear:both;"></div>
				</div>



				<div style="font-size:.3rem;">
					<div style="margin:.2rem 0rem;">
						<span style="font-size: .3rem;color: red;margin-left:.3rem;">*</span>
						<span style="font-size:.3rem;">信息是否属实</span>
					</div>
					<div style="background:white;height: .3rem;padding: .3rem;">
						<van-radio-group v-model="result" style="font-size:.3rem;">
							<div style="float:left;margin-left: .1rem;">
								<van-radio :name="true">是</van-radio>
							</div>
							<div style="float:right;margin-right: 3.5rem;">
								<van-radio :name="false">否</van-radio>
							</div>
							<div style="clear:both;"></div>
						</van-radio-group>
					</div>
				</div>



				<div v-if="!result">
					<div style="font-size:.3rem;margin-top:.1rem;margin-bottom:.1rem;">
						<div style="margin:.2rem 0rem;">
							<span style="font-size: .3rem;color: red;margin-left:.3rem;">*</span>
							<span style="font-size:.3rem;">近景图照片</span>
						</div>
						<div style="text-align: center;">
							<van-button style="width: 35%;color:#6A7CFC;border:1px solid #6A7CFC;float:left;height:.7rem;line-height: .7rem;"
							 @click="showActionsheet1">拍照</van-button>
						</div>
						<div style="clear:both;"></div>
					</div>

					<div style="font-size:.3;">
						<div style="margin:.2rem 0rem;">
							<span style="font-size: .3rem;color: red;margin-left:.1rem;">*</span>
							<span style="font-size:.3rem;">远景图照片</span>
						</div>
						<div style="text-align: center;">
							<van-button @click="showActionsheet2" style="width: 35%;color:#6A7CFC;border:1px solid #6A7CFC;float:left;height:.7rem;line-height: .7rem;">拍照</van-button>
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
								<div class="van-uploader__preview" v-for="item in fujiaimg">
									<div class="van-image van-uploader__preview-image" style="overflow: hidden; border-radius: 4px;">
										<img :src="item.url" class="van-image__img" style="object-fit: cover;">
									</div>
									<i class="van-icon van-icon-clear van-uploader__preview-delete" @click="deleteImg"></i>
								</div>
								<div class="van-uploader__upload" @click="showActionsheet3">
									<i class="van-icon van-icon-plus van-uploader__upload-icon"></i>
								</div>
							</div>
						</div>
						<div style="clear:both;"></div>
					</div>




					<div style="font-size:.3rem;">
						<div style="margin:.2rem 0rem;">
							<span style="font-size: .3rem;color: red;margin-left:.3rem;">*</span>
							<span style="font-size:.3rem;">核实情况</span>
						</div>
						<van-cell-group>
							<van-field v-model="message1" rows="4" autosize type="textarea" placeholder="请描述问题发生的情况，示例：某路某大厦正门的下水井盖破裂" />
						</van-cell-group>
					</div>

					<div style="font-size:.3rem;">
						<div style="font-size:.3rem;" @click="xuanzeweizhi">
							<div style="margin:.2rem 0rem;line-height: .5rem;">
								<span style="font-size: .3rem;color: red;margin-left:.3rem;float:left;">*</span>
								<span style="font-size:.3rem;float:left;">位置信息</span>
								<!-- <span style="font-size:.1rem;float:left;color: #999999;margin-left:.1rem;">信息如有误差，请点击地图手动定位</span> -->
								<van-icon style="float:right;margin-top:.1rem;" name="arrow" />
								<div style="clear:both;"></div>
							</div>
						</div>
						<div style="overflow: hidden;">
							<span style="font-size: .3rem;float: left;margin-left:.1rem;">
								<img style="width:.5rem;" src="../../assets/dingwei.png" alt />
								<span style="    float: right;">高新三路财富中心3期</span>
							</span>
						</div>
						<div style="font-size:.3rem;">
							<van-cell-group>
								<van-field v-model="verifyLocationDetail" rows="4" maxlength="200" show-word-limit autosize type="textarea"
								 placeholder="请描述具体位置，示例：某路某大厦正门向西50米" />
							</van-cell-group>
						</div>
					</div>

				</div>

				<div>
					<van-button @click="submitsuccess" style="width:100%;margin-top:.5rem;background:#6A7CFC;color:white;">{{!result ? '提交' : '上报此案件'}}</van-button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				radio: "1",
				message1: '',
				yuanjintuimg: 'https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/home/img/qrcode/zbios_x2_5869f49.png',
				fujiaimg: [{
					url: 'https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/home/img/qrcode/zbios_x2_5869f49.png'
				}],
				img_urlF: [],
				jinjintuimg: 'https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/home/img/qrcode/zbios_x2_5869f49.png',
				result: true,
				detail: {},
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
				localkdslighskld: "财富中心三期",
				verifyLocationDetail: ''
			};
		},
		created() {
			this.getInfo()
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
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
			//跳转首页
			onClickRight() {
				this.$router.push("/index");
			},
			//拍照
			showActionsheet1() {
				var photos;
				var that = this;
				api.actionSheet({
						title: "请拍照",
						cancelTitle: "取消",
						buttons: ["拍照"]
					},
					function(ret, err) {
						if (ret) {
							let sourceType = ret.buttonIndex;
							if (sourceType == 1) {
								api.getPicture({
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
											api.ajax({
													url: "http://39.106.161.180:8080/ifcs-admin/sys/oss/upload",
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
				api.actionSheet({
						title: "请拍照",
						cancelTitle: "取消",
						buttons: ["拍照"]
					},
					function(ret, err) {
						if (ret) {
							let sourceType = ret.buttonIndex;
							if (sourceType == 1) {
								// 拍照
								api.getPicture({
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
											api.ajax({
													url: "http://39.106.161.180:8080/ifcs-admin/sys/oss/upload",
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
			showActionsheet3() {
				var photos;
				api.actionSheet({
					title: '请拍照',
					cancelTitle: '取消',
					buttons: ['拍照']
				}, function(ret, err) {
					if (ret) {
						let sourceType = ret.buttonIndex;
						if (sourceType == 1) { // 拍照
							api.getPicture({
								sourceType: 'camera',
								encodingType: 'jpg',
								mediaValue: 'pic',
								allowEdit: false,
								destinationType: 'url',
								quality: 100,
								targetWidth: 200,
								targetHeight: 200,
								saveToPhotoAlbum: true
							}, function(ret, err) {
								if (ret) {
									api.ajax({
											url: "http://39.106.161.180:8080/ifcs-admin/sys/oss/upload",
											method: "post",
											data: {
												files: {
													file: ret.data
												}
											}
										},
										function(ret, err) {
											that.fujiaimg.push({
												urlP: ret.data.src
											});
											that.$toast("上传成功");
										}
									);
								}
							});
						} else {
							return;
						}
					}
				});
			},

			//选择位置
			xuanzeweizhi() {
				var that = this;
				// this.$router.push("/xinxiheshimap");
				//获取位置
				var bMap = api.require("bMap");
				bMap.getLocation({
						accuracy: "100m",
						autoStop: true,
						filter: 1
					},
					function(ret, err) {
						if (ret.status) {
							window.localStorage.setItem("xinxiheshidanqianlon", ret.lon);
							window.localStorage.setItem("xinxiheshidanqianlat", ret.lat);
							bMap.open({
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
										bMap.addEventListener({
												name: "click"
											},
											function(ret) {
												if (ret.status) {
													bMap.getCenter(function(ret) {
														bMap.getNameFromCoords({
																lon: ret.lon,
																lat: ret.lat
															},
															function(ret, err) {
																if (ret.status) {
																	window.localStorage.setItem(
																		"xinxiheshigaibianlon",
																		ret.lon
																	);
																	window.localStorage.setItem(
																		"xinxiheshigaibianlat",
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
			deleteImg(index) {
				var index = index;
				// var img = this.img_urlF.slice(0);
				this.fujiaimg.splice(index, 1)
			},
			xuanzeweizhi() {
				this.$router.push("/xinxiheshimap");
			},
			bian2() {},
			submitsuccess() {
				if (!this.result) {
					if (this.jinjintuimg == '' || this.yuanjintuimg == '' || this.fujiaimg.length == 0) {
						this.$toast('请填写所有必填项');
						return
					}
				} else {
					this.$router.push({
						path: "/xinxishangbaoindex",
						query: {
							eventVerifyTaskId: this.$route.query.id
						}
					});
					// this.$api
					// 	.process({result:true,taskId: this.$route.query.id})
					// 	.then(res => {
					// 		if (res) {
					// 			if (res.data.code == 0) {
					// 				this.$router.push({
					// 					path: "/xinxishangbaoindex",
					// 					query: {
					// 						eventVerifyTaskId: res.data.data.taskId
					// 					}
					// 				});
					// 			}
					// 		}
					// 	})
					// 	.catch(err => {
					// 		console.log(err);
					// 	});
						return
				}
				let data = {
					locationLat: window.localStorage.getItem("xinxiheshidanqianlat"), //定位经度
					imageDetailUrl: this.jinjintuimg, //近景图
					changedLocationLat: window.localStorage.getItem(
						"xinxiheshigaibianlat"
					), //	string	非必须		修改后的纬度
					attaches: this.fujiaimg,
					imagePanoramaUrl: this.yuanjintuimg, //	string	非必须		远景图
					location: this.localkdslighskld, //	string	非必须		地址
					resultDesc: this.message1, //	string	非必须		详情
					locationLng: window.localStorage.getItem("xinxiheshidanqianlon"), //	string	非必须		经度
					changedLocationLng: window.localStorage.getItem(
						"xinxiheshigaibianlon"
					), //	string	非必须		修改后的经度
					verifyLocationDetail: this.verifyLocationDetail,
					result: this.result,
					taskId: this.$route.query.id
				};
				this.$api
					.process(data)
					.then(res => {
						if (res) {
							if (res.data.code == 0) {
								this.$router.push({
									path: "/submitdatshenhe",
									query: {
										id: this.$route.query.id
									}
								});
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
		height: 2.5rem;
		// background: url("../../assets/card_bg.png") no-repeat;
		// background-size: cover;
		background: #6a7cfc;
		padding-top: .4rem;
	}

	.zhongjian {
		background: white;
		padding: 0.5rem 0.4rem;
		font-size: 0.3rem;
		//   height: 65%;
	}
</style>
