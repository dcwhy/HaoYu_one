import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Faceapp from '../project/Faceapp.vue'
import css from '@/project/app.css'
import appjs from '@/project/faceapp.js'
import leftapp from '../project/leftapp'

import index from '@/project/index'
import cuipi from '@/project/cuipizhaji'
import huodong from '@/project/huodongzixun'
import huiyuan from '@/project/huiyuan'
import family from '@/project/family'
import youshi from '@/project/youshi'
import dekeshi from '@/project/dekeshi'
import love from '@/project/love'
import more from '@/project/more'
import mc from '@/project/mediacenter'
import process from '@/project/process'
import vip from '@/project/vip'
import erweima from '@/project/erweima'
import jie from '@/store/index'
import drink from '@/project/drink'
import coffee from '@/project/coffee'
import lemon from '@/project/lemon'
import classic from '@/project/classic'
import zhaji from '@/project/zhaji';
import mifan from '@/project/mifan';
import juan from '@/project/juan';
import hanbao from '@/project/hanbao';
import xiaoshi from '@/project/xiaoshi';
import tianpin from '@/project/tianpin';
import yinliao from '@/project/yinliao';
import zaocan from '@/project/zaocan';
import future from '@/project/future';
import weixindiancan from '@/project/weixindiancan';
import goodfood from '@/project/goodfood';
import mendian from '@/project/mendian';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path: '/index',
          name: 'index',
          component: index
        },
        {
          path: '/cuipi',
          name: 'cuipi',
          component: cuipi
        },
        {
          path: '/huodong',
          name: 'huodong',
          component: huodong
        },
        {
          path: '/huiyuan',
          name: 'huiyuan',
          component: huiyuan
        },
        {
          path: '/family',
          name: 'family',
          component: family
        },
        {
          path: '/youshi',
          name: 'youshi',
          component: youshi
        },
        {
          path: '/dekeshi',
          name: 'dekeshi',
          component: dekeshi
        },
        {
          path: '/love',
          name: 'love',
          component: love
        },
        {
          path: '/more',
          name: 'more',
          component: more
        },
        {
          path: '/mediacenter',
          name: 'mediacenter',
          component: mc
        },
        {
          path: '/youshi',
          name: 'youshi',
          component: youshi
        },
        {
          path: '/process',
          name: 'process',
          component: process
        },
        {
          path: '/vip',
          name: 'vip',
          component: vip
        },
        {
          path: '/erweima',
          name: 'erweima',
          component: erweima
        },
        {
          path: '/drink',
          name: 'drink',
          component: drink
        },
        {
          path: '/coffee',
          name: 'coffee',
          component: coffee
        },
        {
          path: '/lemon',
          name: 'lemon',
          component: lemon
        },
        {
          path: '/classic',
          name: 'classic',
          component: classic
        },
        {
          path: '/zhaji',
          name: 'zhaji',
          component: zhaji
        },
        {
          path: '/mifan',
          name: 'mifan',
          component: mifan
        },
        {
          path: '/juan',
          name: 'juan',
          component: juan
        },
        {
          path: '/hanbao',
          name: 'hanbao',
          component: hanbao
        },
        {
          path: '/xiaoshi',
          name: 'xiaoshi',
          component: xiaoshi
        },
        {
          path: '/tianpin',
          name: 'tianpin',
          component: tianpin
        },
        {
          path: '/yinliao',
          name: 'yinliao',
          component: yinliao
        },
        {
          path: '/zaocan',
          name: 'zaocan',
          component: zaocan
        },
        {
          path: '/future',
          name: 'future',
          component: future
        },
        {
          path: '/weixindiancan',
          name: 'weixindiancan',
          component: weixindiancan
        },
        {
          path: '/goodfood',
          name: 'goodfood',
          component: goodfood
        },
        {
          path: '/mendian',
          name: 'mendian',
          component: mendian
        }
      ]
    }
    // ,
    // {
    //   path: '/',
    //   name: 'jie',
    //   component: jie
    // }
    
  ]
})
// router.replace('/HelloWorld/index')