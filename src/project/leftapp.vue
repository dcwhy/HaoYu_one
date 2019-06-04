<template>
    <div>
        <p tabindex='1' class="onedc" @click="fn()"><span class="ol"></span>德克士Dicos</p>
            <span v-if="willShow"><b style="display:inline-block;width:40px"></b>关于我们</span>
            <span v-if="willShow"><b style="display:inline-block;width:40px"></b>企业社会责任</span>
            <span v-if="willShow"><b style="display:inline-block;width:40px"></b>媒体中心</span>
            <span v-if="willShow"><b style="display:inline-block;width:40px"></b>加盟Dicos</span>
            <span v-if="willShow"><b style="display:inline-block;width:40px"></b>吹哨人举报</span>
            <b style="height:15px;display:block"></b>
            <p tabindex='1' class="twodc" @click="fn1()"><span class="kl"></span>新鲜舒食</p>
            <span v-if="will1"><b style="display:inline-block;width:40px"></b>新鲜系列</span>
            <span v-if="will1"><b style="display:inline-block;width:40px"></b>经典餐食</span>
            <span v-if="will1"><b style="display:inline-block;width:40px"></b>未来体验</span>
            <span v-if="will1"><b style="display:inline-block;width:40px"></b>食品安全公示</span>
            <b style="height:15px;display:block"></b>
            <p tabindex='1' class="threedc" @click="fn2()"> <span class="pl"></span> 尊享体验</p>
            <span v-if="will2" @click="card()"><b style="display:inline-block;width:40px"></b>得克士集享卡</span>
            <span v-if="will2"><b style="display:inline-block;width:40px"></b>乐享生活</span>
            <span v-if="will2"><b style="display:inline-block;width:40px"></b>门店查询</span>
            <span v-if="will2"><b style="display:inline-block;width:40px"></b>联系我们</span>
    </div>
</template>
<script>
export default {
  data() {
    return {
      willShow:false,
      will1:false,
      will2:false,
      yul1:false,
      yul2:false,
      out:false,
      gowill:false,
      outwill:true,
      card:false,
      vipfun:false
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
      this.gowill=true;
      this.outwill=false;
    },
    card:function(){
        if (this.vipc=false) {
            this.vipc=true
        }else{
            this.vipc=false
        }
    },
    card2:function(){
        if (this.vipfun=false) {
            this.vipfun=true
        }else{
            this.vipfun=false
        }
        this.vipc=false
    },
    card3:function(){
      
    }
  }
}
</script>

