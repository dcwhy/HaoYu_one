<template>
  <div class="face">
      <div class="face-left">
        <div class="topside">
          <a href="" class="logo">
            <img @click="index" src="http://www.dicos.com.cn/Public/static/images/logo.png" alt="">
          </a>
          <div class="dks-dc">
            <!-- <leftapp v-if="gowill"></leftapp> -->
            <div v-if="gowill" class="dks-dh">
              <p tabindex='1' class="onedc" @click="fn()"><span class="ol"></span>德克士Diocs</p>
            <span v-if="willShow" @click="aboutdks()"><b class="dhb"></b>关于我们</span>
            <span v-if="willShow" @click="fandm()"><b class="dhb"></b>企业社会责任</span>
            <span v-if="willShow" @click="media()"><b class="dhb"></b>媒体中心</span>
            <span v-if="willShow" @click="jiameng()"><b class="dhb"></b>加盟Dicos</span>
            <span v-if="willShow" @click="openjb()"><b class="dhb"></b>吹哨人举报</span>
            <b style="height:5px;display:block"></b>
            <p tabindex='1' class="twodc" @click="fn1()"><span class="kl"></span>新鲜舒食</p>
            <span v-if="will1" @click="drink()"><b class="dhb"></b>新鲜系列</span>
            <span v-if="will1" @click="jdcs()"><b class="dhb"></b>经典餐食</span>
            <span v-if="will1" @click="future()"><b class="dhb"></b>未来体验</span>
            <span v-if="will1" @click="spaq()"><b class="dhb"></b>食品安全公示</span>
            <b style="height:5px;display:block"></b>
            <p tabindex='1' class="threedc" @click="fn2()"> <span class="pl"></span> 尊享体验</p>
            <span v-if="will2" tabindex='1' @click="card()"><b class="dhb"></b>得克士集享卡</span>
            <span v-if="will2" tabindex='1' @click="life()"><b class="dhb"></b>乐享生活</span>
            <span v-if="will2" @click="mendian()"><b class="dhb"></b>门店查询</span>
            <span v-if="will2" @click="ewmlx()"><b class="dhb"></b>联系我们</span>
            </div>
          <div v-if="outwill">
            <div tabindex='1' @click="goback()" class="back"><router-link to="/">返回</router-link></div>
            
              <div class="guanyu" v-if="guanyu">
                <p class="aboutus">关于我们</p>
                <p class="about" @click="aboutdks()">关于德克士</p>
                <p class="about" @click="aboutcpj()">关于脆皮炸鸡</p>
              </div>
              
              <div class="guanyu" v-if="love">
                <p class="aboutus">企业社会责任</p>
                <p class="about" @click="fandm()">家庭日</p>
                <p class="about" @click="children()">关爱留守儿童</p>
                <p class="about" @click="more()">更多</p>
              </div>
              
              <div class="guanyu" v-if="league">
                <p class="aboutus">加盟Dicos</p>
                <p class="about" @click="jiameng()">优势介绍</p>
                <p class="about" @click="liucheng()">加盟流程</p>
                <p class="about" @click="interm()">我要加盟</p>
              </div>

              <div class="guanyu" v-if="showdrink">
                <p class="about" @click="ningmeng()">柠檬饮</p>
                <p class="about" @click="coffee()">有机咖啡</p>
              </div>
              
              <div class="guanyu" v-if="lexiang">
                <p class="aboutus">乐享生活</p>
                <p class="about" @click="zhuanxiang()">会员专享</p>
                <p class="about" @click="zixun()">活动咨询</p>
              </div>

              <div class="guanyu" v-if="zuichan">
                <p class="aboutus">经典餐食</p>
                <p class="about" @click="zhaji()">炸鸡</p>
                <p class="about" @click="mifan()">米饭</p>
                <p class="about" @click="juan()">卷</p>
                <p class="about" @click="hanbao()">汉堡</p>
                <p class="about" @click="xiaoshi()">小食</p>
                <p class="about" @click="tianpin()">甜品</p>
                <p class="about" @click="yl()">饮料</p>
                <p class="about" @click="zaocan()">早餐系列</p>
              </div>
              
              <div class="guanyu" v-if="wlty">
                <p class="aboutus">未来体验</p>
                <p class="about" @click="future()">未来店</p>
                <p class="about" @click="diancan()">微信点餐</p>
              </div>

              <div class="guanyu" v-if="showfood">
                <p class="aboutus">食品安全公示</p>
                <p class="about" @click="haoweidao()">严选好食材 自然好味道</p>
                <p class="about" @click="mingdan()">供应商名单公示</p>
              </div>

              <div class="guanyu" v-if="lianxi">
                <p class="aboutus">联系我们</p>
                <p class="about" @click="skrme()">关注我们</p>
                <p class="about" @click="help()">帮助中心</p>
              </div>

            </div>
          </div>
        </div>
        <div v-if="out" class="ewm">
          <img v-if="yul1" class="ewmimg" src="http://www.dicos.com.cn/Public/static/images/pop_ewm.png" alt="">
          <img v-if="yul2" class="ewmimg" src="http://www.dicos.com.cn/Public/static/images/jxlm.png" alt="">
          <div class="ewmx" @click="over()"><img src="http://www.dicos.com.cn/Public/static/images/close.png" alt=""></div>
        </div>
          <div class="box01">
            <div class="searchbox">
              <div class="searchbtnleft"></div>
              <input type="text" placeholder="可输入关键词进行搜索" name="keyword" id="keyword" class="text">
            </div>
            <div class="deng-lu">
              <div tabindex='1' class="lu1" @click="lu1()"></div>
              <div tabindex='1' class="lu2" @click="lu2()"></div>
              <div class="lu3" @click="openwb()"></div>
            </div>
            <p class="part01-side">
              <a @click="mendian()">门店查询</a>
              
              <a href="">帮助中心</a>
            </p>
            <div class="part02-side">
              <p>消费者满意热线：4006639797</p>
              <a href="http://www.miibeian.gov.cn/state/outPortal/loginPortal.action;jsessionid=AEbIkWf2uFVxoHEH0xwzFAkOH7vB8XyOQ18aTKh2dZqWsbYdAItM!390409286">津ICP备 09004462号-5</a>
            </div>
          </div>
      </div>
      <div class="face-right">
        <router-view></router-view>
        <index class="indexmo"></index>
      </div>
    </div>
</template>
<script>
import index from '../project/index';
export default {
  components:{
    index
  }
  ,
  data() {
    return {
      willShow:false,
      will1:false,
      will2:false,
      yul1:false,
      yul2:false,
      out:false,
      gowill:true,
      outwill:false,
      guanyu:false,
      zuichan:false,
      wlty:false,
      showdrink:false,
      showfood:false,
      lexiang:false,
      lianxi:false
    }
  },
  methods: {
    fn:function(){
      if(this.willShow==true){
        this.willShow=false;
      }else{
        this.willShow=true;
        this.will1=false;
        this.will2=false;
      }
    },
    fn1:function(){
      if(this.will1==true){
        this.will1=false;
      }else{
        this.will1=true;
        this.will2=false;
        this.willShow=false;
      }
    },
    fn2:function(){
      if(this.will2==true){
        this.will2=false;
      }else{
        this.will2=true;
        this.willShow=false;
        this.will1=false;
      }
    },
    lu1:function(){
      this.yul1=true;
      this.yul2=false;
      this.out=true
    },
    lu2:function(){
      this.yul2=true;
      this.yul1=false;
      this.out=true;
    },
    over:function(){
      this.out=false
    },
    goback:function(){
      this.$router.push('/index');
      this.gowill=true;
      this.outwill=false;
      this.showdrink=false;
      this.guanyu=false;
      this.love=false;
      this.lexiang=false;
      this.wlty=false;
      this.zuichan=false;
      this.showfood=false;
      this.lianxi=false;
    },
    index(){
      this.$router.push('/index')
    },
    card:function(){
      this.$router.push('/huiyuan')
    },
    life:function(){
        this.$router.push('/vip');
        this.lexiang=true;
        this.gowill=false;
        this.outwill=true;
    },
    media:function(){
        this.$router.push('/mediacenter');
    },
    aboutdks:function(){
        this.$router.push('/dekeshi');
        this.gowill=false;
        this.league=false;
        this.outwill=true;
        this.guanyu=true;
    },
    aboutcpj:function(){
        this.$router.push('/cuipi');
        this.guanyu=true;
    },
    ewmlx:function(){
        this.$router.push('/erweima');
        this.gowill=false;
        this.outwill=true;
        this.lianxi=true;
    },
    skrme:function(){
        this.$router.push('/erweima');
    },
    fandm:function(){
        this.$router.push('/family');
        this.gowill=false;
        this.league=false;
        this.outwill=true;
        this.love=true;
    },
    children:function(){
        this.$router.push('/love');
    },
    more:function(){
        this.$router.push('/more');
        this.gowill=false;
        this.outwill=true;
    },
    jiameng:function(){
        this.$router.push('/youshi');
        this.league=true;
        this.gowill=false;
        this.outwill=true;
    },
    liucheng:function(){
        this.$router.push('/process');
    },
    drink:function(){
        this.$router.push('./drink');
        this.face=false;
        this.league=false;
        this.gowill=false;
        this.outwill=true;
        this.showdrink=true;
    },
    ningmeng:function(){
      this.$router.push('./lemon')
    },
    coffee:function(){
        this.$router.push('./coffee')
    },
    openjb:function() {
      window.open('http://fb.dicos.com.cn/');
    },
    zhuanxiang:function(){
        this.$router.push('./vip')
    },
    zixun:function(){
        this.$router.push('./huodong')
    },
    jdcs:function(){
      this.$router.push('./classic');
      this.face=false;
      this.gowill=false;
      this.league=false;
      this.outwill=true;
      this.zuichan=true;
    },
    zhaji:function(){
      this.$router.push('./zhaji');
      this.face=false;
    },
    mifan:function(){
      this.$router.push('./mifan');
    },
    juan:function() {
      this.$router.push('./juan');
    },
    hanbao:function() {
      this.$router.push('./hanbao');
    },
    xiaoshi:function() {
      this.$router.push('./xiaoshi');
    },
    tianpin:function() {
      this.$router.push('./tianpin');
    },
    yl:function() {
      this.$router.push('./yinliao');
    },
    zaocan:function() {
      this.$router.push('./zaocan');
    },
    future:function(){
      this.$router.push('./future');
      this.wlty=true;
      this.gowill=false;
      this.outwill=true;
    },
    diancan:function(){
      this.$router.push('/weixindiancan')
    },
    spaq:function(){
      this.$router.push('./goodfood')
      this.showfood=true;
      this.gowill=false;
      this.outwill=true;
    },
    openwb:function(){
      window.open('https://weibo.com/dicos');
    },
    mendian:function(){
      this.$router.push('./mendian')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
