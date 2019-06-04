<template>
    <div id="huodong">
        <div class="bigbox">
            <div class="leftbox"></div>
            <div class="rightbox">
                <div class="banpro">
                    <img src="http://www.dicos.com.cn/Uploads/Picture/2018-09-17/5b9fceb7591cd.jpg" alt="">
                </div>
                <div class="newswrap">
                    <div class="newstab">
                        <div class="itemtitle">活动资讯</div>
                        <ul class="zixun">
                            <li>
                                <a href="">
                                    <div class="imgwrap">
                                        <img src="http://www.dicos.com.cn/Uploads/Picture/2019-04-23/5cbeb5bc0081c.jpg" alt="">
                                    </div>
                                    <div class="grp">
                                        <div class="g-title">强强联手,德克士＆NBA中国今日官宣</div>
                                        <div class="g-desc">确认过眼神，是最爱的CP~</div>
                                        <div class="g-more">更多详情></div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div class="imgwrap">
                                        <img src="http://www.dicos.com.cn/Uploads/Picture/2019-04-23/5cbeb57dac57a.jpg" alt="">
                                    </div>
                                    <div class="grp">
                                        <div class="g-title">听说，90%的D球人都曾被这个组织拯救过……</div>
                                        <div class="g-desc">据说此组织比复联还火？我不信！</div>
                                        <div class="g-more">更多详情></div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div class="imgwrap">
                                        <img src="http://www.dicos.com.cn/Uploads/Picture/2019-04-23/5cbeb54ad281d.jpg" alt="">
                                    </div>
                                    <div class="grp">
                                        <div class="g-title">带上开浪桶，今年五一浪哩个浪~</div>
                                        <div class="g-desc">这个大招，有点厉害！</div>
                                        <div class="g-more">更多详情></div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div class="imgwrap">
                                        <img src="http://www.dicos.com.cn/Uploads/Picture/2019-04-23/5cbeb50d74b71.jpg" alt="">
                                    </div>
                                    <div class="grp">
                                        <div class="g-title">天生“豹”款来袭！限时尝新！这波福利太撩人！</div>
                                        <div class="g-desc">扫码下单，即刻拥有！</div>
                                        <div class="g-more">更多详情></div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div class="imgwrap">
                                        <img src="http://www.dicos.com.cn/Uploads/Picture/2019-04-23/5cbeb4c660acd.jpg" alt="">
                                    </div>
                                    <div class="grp">
                                        <div class="g-title">“豹“款来袭 1元尝新 限时五折！</div>
                                        <div class="g-desc">文末有福利，仅限美团外卖的1元新品&五折套餐等你来享！</div>
                                        <div class="g-more">更多详情></div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div class="tagline"></div>
                        <div style="height:150px;"></div>
                    </div>
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
    /* color: #563117; */
}
#huodong{
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
.banpro img{
    display: inline-block;
    vertical-align: bottom;
    max-width: 100%;
}
.newswrap{
    padding-top: 90px;
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
}
.newstab{
    margin-bottom: 30px;
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
.tagline{
    background: url("http://www.dicos.com.cn/Public/static/images/breakline.png") no-repeat center top;
    height: 58px;
    position: relative;
    text-align: center;
    width: 100%;
}
</style>
