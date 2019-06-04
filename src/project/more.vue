<template>
    <div id="more">
        <div class="bigbox">
            <div class="leftbox"></div>
            <div class="rightbox">
                <div class="banpro">
                    <img src="http://www.dicos.com.cn/Uploads/Picture/2018-11-02/5bdbfbd38dffc.jpg" alt="">
                </div>
                <div class="shopwrap">
                    <div class="itemtitle">更多公益项目</div>
                    <ul class="zixun">
                            <li>
                                <a href="">
                                    <div class="imgwrap">
                                        <img src="http://www.dicos.com.cn/Uploads/Picture/2018-09-26/5bab29b288abb.jpg" alt="">
                                    </div>
                                    <div class="grp">
                                        <div class="g-title">德克士、康师傅私房牛肉面加入爱心接力站 为环卫工人送冬日温暖</div>
                                        <div class="g-desc">为了向环卫工人献上冬日感恩，德克士与康师傅私房牛肉面多家上海门店加入上海市绿化市容行业工会“爱心接力站”，为环卫工人提供免费热水服务和休息场所。</div>
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
}
a{
    color: #7f7f7f;
}
#more{
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
