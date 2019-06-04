<template>
    <div id="family">
        <div class="bigbox">
            <div class="leftbox"></div>
            <div class="rightbox">
                <div class="banpro">
                    <img src="http://www.dicos.com.cn/Uploads/Picture/2018-11-02/5bdbfbd38dffc.jpg" alt="">
                </div>
                <div class="shopwrap">
                    <div class="col-shop">
                        <div class="title">德克士家庭日</div>
                        <p>自2014年起，德克士响应国际家庭日，每年在全国各地持续常态性举办德克士家庭日，已成为亲子共享温馨时光的标志性活动，每年有超过20万家庭参与，累计惠及全国逾百万个家庭。</p>
                        <div class="photo">
                            <img src="http://www.dicos.com.cn/Public/static/images/family06.jpg" alt="">
                        </div>
                        <p>作为业内率先开展家庭日活动的西式快餐品牌之一，德克士通过多年积累，逐渐将家庭日活动打造成为了具有广泛影响力的家庭亲子互动平台，引发业内关注。德克士家庭日活动也成为了品牌与消费者沟通的重要渠道，其鼓励家庭团聚和亲子关系和谐的品牌文化也成为一股正能量在全国范围内传播和流动。</p>
                        <div class="photo">
                            <img src="http://www.dicos.com.cn/Public/static/images/family07.jpg" alt="">
                        </div>
                        <p>从2016年开始，德克士家庭日加入融合公益元素，邀请特殊家庭一起参与家庭日活动，共享欢乐时光。</p>
                        <div class="photo">
                            <img src="http://www.dicos.com.cn/Public/static/images/family08.jpg" alt="">
                        </div>
                    </div>
                    <div class="itemtitle">相关新闻</div>
                    <ul class="zixun">
                            <li>
                                <a href="">
                                    <div class="imgwrap">
                                        <img src="http://www.dicos.com.cn/Uploads/Picture/2018-10-12/5bc064d629e6c.png" alt="">
                                    </div>
                                    <div class="grp">
                                        <div class="g-title">德克士家庭日一起“画出我们的她”，传递爱与陪伴</div>
                                        <div class="g-desc">母亲节前夕，德克士推出的“画出我们的她”H5互动游戏在微信朋友圈刷屏，引发“万人画妈”热潮，为今年的德克士家庭日增添趣味。</div>
                                        <div class="g-more">更多详情></div>
                                    </div>
                                </a>
                            </li>
                    </ul>
                    <div style="height:150px;"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}
html,body{
    height: 100%;
}
body{
    font-size: 14px;
    color: #563117;
    font-family: "Gotham", Helvetica, Arial, PingFangSC-Regular, "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    z-index: 1000;
    overflow: hidden;
}
a{
    color: #7f7f7f;
}
#family{
    height: 100%;
}
.bigbox{
    width: 100%;
    height: 100%;
}
.rightbox{
    height: 100%;
    margin-left: 20%;
    overflow-y: auto;
    background: url('http://www.dicos.com.cn/Public/static/images/probg.jpg') repeat;
}
.title{
    font-size: 24px;
    font-weight: bold;
    line-height: 44px;
    margin-bottom: 28px;
    text-align: center;
    width: 100%;
}
.shopwrap{
    width: 80%;
    margin: 0 auto;
    padding-top: 80px;
}
.col-shop{
    padding-bottom: 50px;
}
.title{
    letter-spacing: 4px;
}
.col-shop p{
    line-height: 28px;
    margin-bottom: 20px;
    font-size: 14px;
}
.itemtitle{
    font-size: 18px;
    line-height: 30px;
    font-weight: bold;
    letter-spacing: 4px;
    margin-bottom: 20px;
}
.zixun{
    width: 100%;
    padding-top: 0;
    clear: both;
}
.zixun li{
    margin-bottom: 50px;
    position: relative;
    background: #eee;
    overflow: hidden;
    height: 140px;
}
.imgwrap{
    width: 30%;
    position: absolute;
}
.imgwrap img{
    width: 100%;
    display: inline-block;
    vertical-align: bottom;
}
.grp{
    margin-left: 33%;
    margin-right: 3%;
    padding-bottom: 15px;
}
.g-title{
    padding: 15px 0 10px 0;
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: bold;
    color: #563117;
    line-height: 20px;
}
.g-desc{
    height: 50px;
    overflow: hidden;
    margin-bottom: 10px;
    color: #50331b;
    line-height: 24px;
}
.g-more{
    text-align: right;
    color: #79ba28;
    font-size: 14px;
}
.photo{
    margin-bottom: 20px;
    text-align: center;
    width: 100%;
}
</style>
