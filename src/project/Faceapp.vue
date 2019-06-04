<template>
    <div class="face">
      <div class="face-left">
        <div class="topside">
          <a href="" class="logo">
            <img src="http://www.dicos.com.cn/Public/static/images/logo.png" alt="">
          </a>
          <!-- <div class="back">返回</div> -->
          <div class="dks-dc">
            <p tabindex='1' class="onedc" @click="fn()"><span class="ol"></span>德克士Dicos</p>
            <span v-if="willShow"><b style="display:inline-block;width:40px"></b>关于我们</span>
            <span v-if="willShow"><b style="display:inline-block;width:40px"></b>企业社会责任</span>
            <span v-if="willShow"><b style="display:inline-block;width:40px"></b>媒体中心</span>
            <span v-if="willShow"><b style="display:inline-block;width:40px"></b>加盟Dicos</span>
            <span v-if="willShow"><b style="display:inline-block;width:40px"></b>吹哨人举报</span>
            <b style="height:5px;display:block"></b>
            <p tabindex='1' class="twodc" @click="fn1()"><span class="kl"></span>新鲜舒食</p>
            <span v-if="will1"><b style="display:inline-block;width:40px"></b>新鲜系列</span>
            <span v-if="will1"><b style="display:inline-block;width:40px"></b>经典餐食</span>
            <span v-if="will1"><b style="display:inline-block;width:40px"></b>未来体验</span>
            <span v-if="will1"><b style="display:inline-block;width:40px"></b>食品安全公示</span>
            <b style="height:5px;display:block"></b>
            <p tabindex='1' class="threedc" @click="fn2()"> <span class="pl"></span> 尊享体验</p>
            <span v-if="will2"><b style="display:inline-block;width:40px"></b>得克士集享卡</span>
            <span v-if="will2"><b style="display:inline-block;width:40px"></b>乐享生活</span>
            <span v-if="will2"><b style="display:inline-block;width:40px"></b>门店查询</span>
            <span v-if="will2"><b style="display:inline-block;width:40px"></b>联系我们</span>
          </div>
        </div>
        <div class="ewm">
          <img v-if="yul1" class="ewmimg" src="http://www.dicos.com.cn/Public/static/images/pop_ewm.png" alt="">
          <img class="ewmimg" src="http://www.dicos.com.cn/Public/static/images/jxlm.png" alt="">
          <img class="ewmx" src="http://www.dicos.com.cn/Public/static/images/close.png" alt="">
        </div>
          <div class="box01">
            <div class="searchbox">
              <div class="searchbtnleft"></div>
              <input type="text" placeholder="可输入关键词进行搜索" name="keyword" id="keyword" class="text">
            </div>
            <div class="deng-lu">
              <div class="lu1" @click="lu1()"></div>
              <div class="lu2"></div>
              <div class="lu3"></div>
            </div>
            <p class="part01-side">
              <a href="">门店查询</a>
              
              <a href="">帮助中心</a>
            </p>
            <div class="part02-side">
              <p>消费者满意热线：4006639797</p>
              <a href="http://www.miibeian.gov.cn/state/outPortal/loginPortal.action;jsessionid=AEbIkWf2uFVxoHEH0xwzFAkOH7vB8XyOQ18aTKh2dZqWsbYdAItM!390409286">津ICP备 09004462号-5</a>
            </div>
          </div>
      </div>
      <div class="face-right">
        <vipcard></vipcard>
      </div>
    </div>
</template>

<script>
import vipcard from './vip-card';
export default {
  components:{
    vipcard
  },
  data() {
    return {
      willShow:false,
      will1:false,
      will2:false,
      yul1:false
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
    }
  }
}
</script>
