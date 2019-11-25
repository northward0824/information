<template>
	<div class="userLogin">
		<van-nav-bar title="信息详情" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
			<van-icon name="wap-home-o" size=".5rem" slot="right" />
		</van-nav-bar>
		<div class="overflowauto">
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
									<div class='proRight-list' v-for="item in processList" v-if="processList">
										<div class='proCon'>
											<span v-if="item.processType == 'process'">处理结果</span>
											<span v-if="item.processType == 'check'">核查结果</span>
											<span v-if="item.processType == 'verify'">核实结果</span>
											<span>{{item.processTime || '无'}}</span>
										</div>
										<div @click="goDetail(item.processType,item.id)">
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
				<div class="zhongjian" style="background: #f4f4f4;">

					<div style="font-size:.4rem;margin-top:.1rem;margin-bottom:.1rem;">
						<div style="margin:.2rem 0rem;">
							<span style="font-size: .3rem;color: red;margin-left:.1rem;">*</span>
							<span style="font-size:.3rem;">近景图照片</span>
						</div>
						<div style="text-align: center;">
							<van-button style="width: 35%;color:#6A7CFC;border:1px solid #6A7CFC;float:left;height:.7rem;line-height: .7rem;"
							 @click="showActionsheet1">拍照</van-button>
						</div>
						<div style="clear:both;"></div>
						<div v-if="jinjintuimg != ''" style="width: 2.4rem;height: 2.3rem;margin-top: .2rem;"><img style="width:100%;height:100%;"
							 :src="jinjintuimg" alt=""></div>
					</div>

					<div style="font-size: .3rem;">
						<div style="margin:.2rem 0rem;">
							<span style="font-size:  .3rem;color: red;margin-left:.1rem;">*</span>
							<span style="font-size: .3rem;">远景图照片</span>
						</div>
						<div style="text-align: center;">
							<van-button @click="showActionsheet2" style="width: 35%;color:#6A7CFC;border:1px solid #6A7CFC;float:left;height:.7rem;line-height: .7rem;">拍照</van-button>
						</div>
						<div style="clear:both;"></div>
						<div v-if="yuanjintuimg != ''" style="width: 2.4rem;height: 2.3rem;margin-top: .2rem;"><img style="width:100%;height:100%;"
							 :src="yuanjintuimg" alt=""></div>
					</div>

					<div style="font-size:.3;">
						<div style="margin:.2rem 0rem;">
							<span style="font-size: .3rem;color: red;margin-left:.1rem;">*</span>
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



					<div style="font-size: .3rem;">
						<div style="margin:.2rem 0rem;">
							<span style="font-size:  .3rem;color: red;margin-left:.1rem;">*</span>
							<span style="font-size: .3rem;">案件是否完成</span>
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
							<span style="font-size: .3rem;color: red;margin-left:.1rem;">*</span>
							<span style="font-size: .3rem;">核查情况</span>
						</div>
						<van-cell-group>
							<van-field v-model="message1" rows="4" maxlength="200" show-word-limit autosize type="textarea" placeholder="请描述问题发生的情况，示例：某路某大厦正门的下水井盖破裂" />
						</van-cell-group>
					</div>

					<div style="font-size:.3rem;">
						<div style="font-size: .3rem;" @click="xuanzeweizhi">
							<div style="margin:.2rem 0rem;">
								<span style="font-size: .3rem;color: red;margin-left:.1rem;float:left;">*</span>
								<span style="font-size:.3rem;float:left;">请手动选择位置</span>
								<van-icon style="float:right;margin-top:.1rem;" name="arrow" />
								<div style="clear:both;"></div>
							</div>
						</div>
						<div style="overflow: hidden;">
							<span style="font-size: .3rem;float: left;margin-left:.1rem;">
								<img style="width:.3rem;" src="../../assets/dingwei.png" alt />
								<span style="float: right;">{{localkdslighskld}}</span>
							</span>
						</div>
						<div style="font-size:.3rem;margin-top: 0.2rem;">
							<van-cell-group>
								<van-field v-model="locationDetail" rows="4" maxlength="200" show-word-limit autosize type="textarea"
								 placeholder="请描述具体位置，示例：某路某大厦正门向西50米" />
							</van-cell-group>
						</div>
					</div>

					<div>
						<van-button @click="submitsuccess" style="width:100%;margin-top:.5rem;background:#6A7CFC;color:white;">提交</van-button>
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
				radio: "0",
				message1: "",
				dd: "",
				cc: "",
				jinjintuimg: "'https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/home/img/qrcode/zbios_x2_5869f49.png'",
				yuanjintuimg: "'https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/home/img/qrcode/zbios_x2_5869f49.png'",
				fujiaimg: [{
					url: 'https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/home/img/qrcode/zbios_x2_5869f49.png'
				}],
				localkdslighskld: '高新三路财富中心',
				processList: [],
				details: '',
				locationDetail: ''
			};
		},
		created() {
			this.getdetails();
			this.getlishidetails()
		},
		mounted() {
			var that = this;
			var bMap = api.require("bMap");
			bMap.getLocation({
					accuracy: "100m",
					autoStop: true,
					filter: 1
				},
				function(ret, err) {
					if (ret.status) {
						window.localStorage.setItem("anjianhechadangqianlon", ret.lon);
						window.localStorage.setItem("anjianhechadanqianlat", ret.lat);
						var map = api.require("bMap");
						map.getNameFromCoords({
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
			
			deleteImg(index) {
				var index = index;
				// var img = this.img_urlF.slice(0);
				this.fujiaimg.splice(index, 1)
			},
			getlishidetails() {
				let data = {
					eventId: window.localStorage.getItem("anjianhechaderailsUid")
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
			goDetail(type, id) {
				if (type == 'process') {
					this.$router.push({
						path: "/anjianchulidetails",
						query: {
							eventId: window.localStorage.getItem("liishidetailsid"),
							processId: id
						}
					});
				} else if (type == 'check') {
					this.$router.push({
						path: "/anjianhechadetails",
						query: {
							eventId: window.localStorage.getItem("liishidetailsid"),
							processId: id
						}
					});
				}
			},
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
			xuanzeweizhi() {
				// this.$router.push("/anjianhechamap");
				var that = this;
				// this.$router.push("/xinxishangbaomap");
				//获取位置
				var bMap = api.require("bMap");
				bMap.getLocation({
						accuracy: "100m",
						autoStop: true,
						filter: 1
					},
					function(ret, err) {
						if (ret.status) {
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
					attaches: this.fujiaimg,
					location: this.localkdslighskld, //	string	非必须		地址
					detail: this.message1, //	string	非必须		详情
					locationLng: window.localStorage.getItem("anjianhechadangqianlon"), //	string	非必须
					isFinished: this.radio, //	number	必须		是否完成0否 1是
					changedLocationLng: window.localStorage.getItem(
						"anjianhechagaibianlon"
					), //	string	非必须		改变后的经度
					attaches: null, //ring	必须
					taskId: window.localStorage.getItem("anjianhecharenwuid"), //	string	必须		任务ID
					locationDetail: this.locationDetail
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
<style>
</style>
<style lang="less" scoped>
	.overflowauto {
		overflow: auto;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0.5rem;
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
</style>
<style>
	.van-cell.van-cell--clickable.van-collapse-item__title {
		background: rgb(214, 218, 247);
	}
</style>
