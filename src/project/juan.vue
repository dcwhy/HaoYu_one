<template>
    <div id="more">
        <div class="bigbox">
            <div class="leftbox"></div>
            <div class="rightbox">
                <div class="banpro">
                    <img src="http://www.dicos.com.cn/Uploads/Picture/2018-10-12/5bc0b2a4bf956.jpg" alt="">
                </div>
                <div class="yorn">
                    <div class="wrappro">
                        <div class="pro">
                            <div class="itemcol2">卷</div>
                        </div>
                    </div>
                    <div class="he-fun">
                        <p class="fun-p">
                            <img src="http://www.dicos.com.cn/Uploads/Picture/2018-10-12/5bc0592247d77.png" alt="">
                            <span class="fun-nm">酱烧肥牛酥皮卷</span>
                        </p>
                        <p class="fun-p">
                            <img src="http://www.dicos.com.cn/Uploads/Picture/2018-10-12/5bc058d671ed4.png" alt="">
                            <span class="fun-nm">南洋鸡肉酥皮卷</span>
                        </p>
                    </div>
                    <div style="height:100px"></div>
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
.wrappro{
    width: 89%;
    margin: 0 auto;
    padding-top: 44px;
}
.itemcol2{
    display: inline-block;
    background: url(http://www.dicos.com.cn/Public/static/images/sub_3_zs.png) no-repeat 0 5px;
    padding-left: 30px;
    background-size: 22px auto;
}
.pro{
    height: 38px;
    color: #5a2e11;
    line-height: 38px;
    background: #fff;
    padding: 0 18px;
    display: inline-block;
    /* margin-left: 38px; */
    font-size: 18px;
    font-weight: bold;
    text-align: left;
}

.fun-p{
    width: 170px;
    display: inline-block;
    padding: 25px 0;
    margin-left: 26px !important;
    text-align: center;
    cursor: pointer;
}
.yorn{
    margin-left: 38px;
}
.fun-nm{
    text-align: center;
    display: block;
    margin-top: 20px;
}
</style>
