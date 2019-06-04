<template>
    <div id="love">
        <div class="bigbox">
            <div class="leftbox"></div>
            <div class="rightbox">
                <div class="banpro">
                    <img src="http://www.dicos.com.cn/Uploads/Picture/2018-11-02/5bdbfbd38dffc.jpg" alt="">
                </div>
                <div class="shopwrap">
                    <div class="col-shop">
                        <div class="title">关爱留守儿童</div>
                        <p style="margin-left:25px;">德克士常与福利院、特殊学校、公益组织合作，将关爱传递给更多特殊儿童和家庭，并持续投入留守儿童关爱事业，给留守儿童送去温暖。</p>
                        <div class="photo">
                            <img src="http://www.dicos.com.cn/Public/static/images/lset01.png" alt="">
                        </div>
                    </div>
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
#love{
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
