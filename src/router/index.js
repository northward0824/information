import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes: [{
        path: "/",
        name: "login",
        component: resolve => require(["../page/login.vue"], resolve)
    },
    {
      path: "/zhuce",
      name: "zhuce",
      component: resolve => require(["../page/zhuce.vue"], resolve)
  },
    {
        path: "/index",
        name: "index",
        component: resolve => require(["../page/index/index.vue"], resolve)
    },

{
        path: "/xinxishangbaoindex",
        name: "xinxishangbaoindex",
        component: resolve => require(["../page/axinxishangbao/xinxishangbaoindex.vue"], resolve)
    },
    {
      path: "/xinxishangbaomap",
      name: "xinxishangbaomap",
      component: resolve => require(["../page/axinxishangbao/xinxishangbaomap.vue"], resolve)
  },
    {
      path: "/submitsuccess",
      name: "submitsuccess",
      component: resolve => require(["../page/axinxishangbao/submitsuccess.vue"], resolve)
  },
  {
    path: "/xinjiananjiandetails",
    name: "xinjiananjiandetails",
    component: resolve => require(["../page/axinxishangbao/xinjiananjiandetails.vue"], resolve)
},

{
  path: "/xinxiheshiindex",
  name: "xinxiheshiindex",
  component: resolve => require(["../page/bxinxiheshi/xinxiheshiindex.vue"], resolve)
},
{
  path: "/daiheshidetails",
  name: "daiheshidetails",
  component: resolve => require(["../page/bxinxiheshi/daiheshidetails.vue"], resolve)
},
{
  path: "/xinxiheshimap",
  name: "xinxiheshimap",
  component: resolve => require(["../page/bxinxiheshi/xinxiheshimap.vue"], resolve)
},

{
  path: "/submitdatshenhe",
  name: "submitdatshenhe",
  component: resolve => require(["../page/bxinxiheshi/submitdatshenhe.vue"], resolve)
},
{
  path: "/chakandetailsdaishenhe",
  name: "chakandetailsdaishenhe",
  component: resolve => require(["../page/bxinxiheshi/chakandetailsdaishenhe.vue"], resolve)
},
{
  path: "/yiheshidetails",
  name: "yiheshidetails",
  component: resolve => require(["../page/bxinxiheshi/yiheshidetails.vue"], resolve)
},


{
  path: "/anjianhechaindex",
  name: "anjianhechaindex",
  component: resolve => require(["../page/canjianhecha/anjianhechaindex.vue"], resolve)
},
{
  path: "/anjianhechaweiwanc",
  name: "anjianhechaweiwanc",
  component: resolve => require(["../page/canjianhecha/anjianhechaweiwanc.vue"], resolve)
},
{
  path: "/anjianyiwancehn",
  name: "anjianyiwancehn",
  component: resolve => require(["../page/canjianhecha/anjianyiwancehn.vue"], resolve)
},
{
  path: "/anjianhechesubmit",
  name: "anjianhechesubmit",
  component: resolve => require(["../page/canjianhecha/anjianhechesubmit.vue"], resolve)
},
{
  path: "/anjianhechadetails",
  name: "anjianhechadetails",
  component: resolve => require(["../page/canjianhecha/anjianhechadetails.vue"], resolve)
},
{
  path: "/anjianhechamap",
  name: "anjianhechamap",
  component: resolve => require(["../page/canjianhecha/anjianhechamap.vue"], resolve)
},
{
  path: "/noticeindex",
  name: "noticeindex",
  component: resolve => require(["../page/notice/index.vue"], resolve)
},
{
  path: "/notice-detail",
  name: "notice-detail",
  component: resolve => require(["../page/notice/detail.vue"], resolve)
},
{
  path: "/zhuanxiangcaijiindex",
  name: "zhuanxiangcaijiindex",
  component: resolve => require(["../page/dzhuanxiangcaiji/zhuanxiangcaijiindex.vue"], resolve)
},
{
  path: "/kaishicaiji",
  name: "kaishicaiji",
  component: resolve => require(["../page/dzhuanxiangcaiji/kaishicaiji.vue"], resolve)
},
{
  path: "/caijidetails",
  name: "caijidetails",
  component: resolve => require(["../page/dzhuanxiangcaiji/caijidetails.vue"], resolve)
},
{
  path: "/zhuangxiangcaijiyiwancheng",
  name: "zhuangxiangcaijiyiwancheng",
  component: resolve => require(["../page/dzhuanxiangcaiji/zhuangxiangcaijiyiwancheng.vue"], resolve)
},
{
  path: "/xinzengcaijiqingkuang",
  name: "xinzengcaijiqingkuang",
  component: resolve => require(["../page/dzhuanxiangcaiji/xinzengcaijiqingkuang.vue"], resolve)
},
{
  path: "/wodexuncha",
  name: "wodexuncha",
  component: resolve => require(["../page/ewodexuncha/wodexuncha.vue"], resolve)
},

{
  path: "/lishishangbao",
  name: "lishishangbao",
  component: resolve => require(["../page/flishishangbao/lishishangbao.vue"], resolve)
},
{
  path: "/lishishangbaodetails",
  name: "lishishangbaodetails",
  component: resolve => require(["../page/flishishangbao/lishishangbaodetails.vue"], resolve)
},
{
  path: "/lishianjianbanjiedetails",
  name: "lishianjianbanjiedetails",
  component: resolve => require(["../page/flishishangbao/lishianjianbanjiedetails.vue"], resolve)
},
{
  path: "/lishianjianhechadetails",
  name: "lishianjianhechadetails",
  component: resolve => require(["../page/flishishangbao/lishianjianhechadetails.vue"], resolve)
},
{
  path: "/anjianchulidetails",
  name: "anjianchulidetails",
  component: resolve => require(["../page/oanjianchuli/anjianchulidetails.vue"], resolve)
},




      {
        path: "/assessment",
        name: "assessment",
        component: resolve => require(["../page/assessment/assessment.vue"], resolve)
      },
     
      {
        path: "/personal",
        name: "personal",
        component: resolve => require(["../page/personal/index.vue"], resolve)
      },
      























  

]
})
export default router;