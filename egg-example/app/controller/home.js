'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let homes = [
        {
           imgurl:'http://www.dicos.com.cn/Public/static/images/logo.png',
        }
    ]
    ctx.body = homes;
  }
  async Diocs(){
  const { ctx } = this;
    let title = [
      {
        text:'德克士Diocs'
      },
      {
        text:'关于我们'
      },
      {
        text:'企业社会责任'
      },
      {
        text:'媒体中心'
      },
      {
        text:'加盟Dicos'
      },
      {
        text:'吹哨人举报'
      },
      {
        text:'新鲜舒食'
      },
      {
        text:'新鲜系列'
      },
      {
        text:'经典餐食'
      },
      {
        text:'未来体验'
      },
      {
        text:'食品安全公示'
      },
      {
        text:'尊享体验'
      },
      {
        text:'得克士集享卡'
      },
      {
        text:'乐享生活'
      },
      {
        text:'门店查询'
      },
      {
        text:'联系我们'
      },
    ]
    ctx.body = homes;
  }
}

module.exports = HomeController;
