import service from "./fetch";
import Vue from "vue";
import jsonAxios from "./jsonFetch";

function jsonFetch(options) {
  // 请求处理
  return new Promise((resolve, reject) => {
    jsonAxios
      .jsonAxios(options)
      .then(res => {
        // if (res.status == 200) {
        resolve(res);
        // }
      })
      .catch(error => {
        reject(error);
      });
  });
}

function fetch(options) {
  // 请求处理
  return new Promise((resolve, reject) => {
    service
      .service(options)
      .then(res => {
        // if (res.status == 200) {
        resolve(res);
        // }
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
}

// ***************************************************下面写路径方法即可***************************************************************************************
//图片验证码
const imgyanz = params => {
  return fetch({
    url: `/ifcs-api/api/captcha`,
    method: "get",
    params: params
  });
};
//账号密码登录
const userlogin = params => {
  return jsonAxios.jsonAxios.post("/ifcs-api/api/collector/pwdLogin", params);
};
//重置密码
const chongzhimima = params => {
    return jsonAxios.jsonAxios.post("/ifcs-api/api/collector/resetPwd", params);
  };
  //个人信息
  const gerenmessages = params => {
    return fetch({
      url: `/ifcs-api/api/collector/getUserInfo`,
      method: "get",
      params: params
    });
  };
  //信息汇总
  const messtslkzong = params => {
    return fetch({
      url: `/ifcs-api/api/collector/getDataStatisticsInfo`,
      method: "get",
      params: params
    });
  };
  //消息提示http://39.106.161.180/ifcs-api/api/notify/listNotifyInfo
  const xiaoxitishi = params => {
    return fetch({
      url: `/ifcs-api/api/collector/listNotifyInfo`,
      method: "get",
      params: params
    });
  };
  //消息详情
  const xiaoxidsdklsl = params => {
    return fetch({
      url: `/ifcs-api/api/collector/getNotifyInfoDetail/`+window.localStorage.getItem('messageid'),
      method: "get",
      params: params
    });
  };
  //案件管理下拉列表
  const deptlist = params => {
    return fetch({
      url: `/ifcs-api/api/dept/list`,
      method: "get",
      params: params
    });
  };
  //获取大类数据
  const listBigType = params => {
    return fetch({
      url: `/ifcs-api/api/event/listBigType`,
      method: "get",
      params: params
    });
  };
  //获取小类
  const listLittleType = params => {
    return fetch({
      url: `/ifcs-api/api/event/listLittleType`,
      method: "get",
      params: params
    });
  };
  //获取部件事件 
  const listComponentEventType = params => {
    return fetch({
      url: `/ifcs-api/api/event/listComponentEventType`,
      method: "get",
      params: params
    });
  };
  //新建案件提交
  const xinajianaddEvent = params => {
    return jsonAxios.jsonAxios.post("/ifcs-api/api/event/addEvent", params);
  };
  //案件核查列表
  const anjianhechalists = params => {
    return fetch({
      url: `/ifcs-api/api/event/check/listChecks/`+window.localStorage.getItem("statusuy"),
      method: "get",
      params: params
    });
  };
  //案件核查详情
  const anjianhechadetails = params => {
    return fetch({
      url: `/ifcs-api/api/event/check/getCheckDetail/`+window.localStorage.getItem("anjianhechaderailsUid"),
      method: "get",
      params: params
    });
  };
  const anjianhechadsuccesslkd = params => {
    return fetch({
      url: `/ifcs-api/api/event/check/getCheckDetail/`+window.localStorage.getItem("submitsuccessId"),
      method: "get",
      params: params
    });
  };
  //历史上报详情
  const lishishangbaohechabanjiedetials = params => {
    return fetch({
      url: `/ifcs-api/api/event/check/getCheckDetail/`+window.localStorage.getItem("liishidetailsid"),
      method: "get",
      params: params
    });
  };
  //案件核查提交 
  const anjiaohechatiao = params => {
    return jsonAxios.jsonAxios.post("/ifcs-api/api/event/check/commit", params);
  };
  //历史上报
  const lishishangbaolist = params => {
    return fetch({ 
      url: `/ifcs-api/api/event/listReported`,
      method: "get",
      params: params
    });
  };
  //历史详情
  const getEventDetailsdf = params => {
    return fetch({
      url: `/ifcs-api/api/event/getEventDetail`,
      method: "get",
      params: params
    });
  };
  //专项采集列表
  const zhuanxiaocaijilist = params => {
    return fetch({
      url: `/ifcs-api/api/special/listSpecialTask/`+window.localStorage.getItem("zhuanxiangcaijistatus"),
      method: "get",
      params: params
    });
  };
  //专项采集已完成详情
  const zhuanxianyiwanchengtdlsis = params => {
    return fetch({
      url: `/ifcs-api/api/special/listPointCollection/`+window.localStorage.getItem("zhuanxiangcaijiyiwanchengid"),
      method: "get",
      params: params
    });
  };
  //专项采集点的详情
  const zhuanxiangcaijidiandetails = params => {
    return fetch({
      url: `/ifcs-api/api/special/getDetailSpecialTask/`+window.localStorage.getItem("zhuanxiangcaijiyiwanchengid")+'/'+window.localStorage.getItem("caijidianisdsid"),
      method: "get",
      params: params
    });
  };
  //采集转态http://39.106.161.180/ifcs-api/api/special/listCollectionState
  const caijistatuslsds = params => {
    return fetch({
      url: `/ifcs-api/api/special/listCollectionState`,
      method: "get",
      params: params
    });
  };
	
	
	//案件核实
	//获取详情
	const getVerifyTaskDetail = params => {
	  return fetch({
	    url: `/ifcs-api/api/event/verifyTask/getVerifyTaskDetail/${params.id}`,
	    method: "get",
	    params: params
	  });
	};
	//列表
	const getVerifyTasks = params => {
	  return fetch({
	    url: `/ifcs-api/api/event/verifyTask/getVerifyTasks/${params}`,
	    method: "get",
	  });
	};
  //新增采集http://39.106.161.180/ifcs-api/api/special/addSpecial
  const addzengcaiji = params => {
    return jsonAxios.jsonAxios.post("/ifcs-api/api/special/addSpecial", params);
  };
const imgeuplod = params => {
  return jsonAxios.jsonAxios.post("/ifcs-admin/sys/oss/upload", params);
};
//****************************************************************************************************************************************************** */
const apiList = {
  //最后导出的方法名
  imgyanz,
  userlogin,
  chongzhimima,
  gerenmessages,
  messtslkzong,
  xiaoxitishi,
  xiaoxidsdklsl,
  deptlist,
  listBigType,
  listLittleType,
  listComponentEventType,
  xinajianaddEvent,
  anjianhechalists,
  lishishangbaolist,
  getEventDetailsdf,
  anjianhechadetails,
  anjiaohechatiao,
  anjianhechadsuccesslkd,
  zhuanxiaocaijilist,
  zhuanxianyiwanchengtdlsis,
  imgeuplod,
  caijistatuslsds,
  zhuanxiangcaijidiandetails,
  addzengcaiji,
  lishishangbaohechabanjiedetials,
	
	
	getVerifyTasks,
	getVerifyTaskDetail
};
export default apiList;
