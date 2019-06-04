<template>
    <div id="vip">
        <div class="bigbox">
            <div class="leftbox"></div>
            <div class="rightbox">
                <div class="banpro">
                    <img src="http://www.dicos.com.cn/Uploads/Picture/2018-09-17/5b9fceb7591cd.jpg" alt="">
                </div>
                <div class="shopwrap">
                    <div class="itemtitle">会员专享</div>
                    <ul class="zixun">
                            <li>
                                <a href="">
                                    <div class="imgwrap">
                                        <img src="http://www.dicos.com.cn/Uploads/Picture/2018-10-12/5bc050593ef93.png" alt="">
                                    </div>
                                    <div class="grp">
                                        <div class="g-title">卡友日|会员+1元买一赠一！</div>
                                        <div class="g-desc">每月18号卡友狂欢日，尊享会员还有更多福利选择</div>
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
#vip{
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
