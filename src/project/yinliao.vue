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
                            <div class="itemcol6">饮料</div>
                        </div>
                    </div>
                    <div class="he-fun">
                        <p class="fun-p">
                            <img src="http://www.dicos.com.cn/Uploads/Picture/2018-10-12/5bc04eaf7f638.png" alt="">
                            <span class="fun-nm">营养热豆浆</span>
                        </p>
                        <p class="fun-p">
                            <img src="http://www.dicos.com.cn/Uploads/Picture/2018-10-12/5bc0485a2c043.png" alt="">
                            <span class="fun-nm">热牛奶</span>
                        </p>
                        <p class="fun-p">
                            <img src="http://www.dicos.com.cn/Uploads/Picture/2018-10-26/5bd2fa41d34d8.png" alt="">
                            <span class="fun-nm">热咖啡</span>
                        </p>
                        <p class="fun-p">
                            <img src="http://www.dicos.com.cn/Uploads/Picture/2018-10-26/5bd2eaf53ef7f.png" alt="">
                            <span class="fun-nm">幸福热奶茶</span>
                        </p>
                        <p class="fun-p">
                            <img src="http://www.dicos.com.cn/Uploads/Picture/2018-12-18/5c185d62949d2.png" alt="">
                            <span class="fun-nm">热香橙</span>
                        </p>
                        <p class="fun-p">
                            <img src="http://www.dicos.com.cn/Uploads/Picture/2018-12-18/5c18625fa83f5.png" alt="">
                            <span class="fun-nm">热奶茶</span>
                        </p>
                        <p class="fun-p">
                            <img src="http://www.dicos.com.cn/Uploads/Picture/2018-10-26/5bd2ee116138a.png" alt="">
                            <span class="fun-nm">鲜橙汁</span>
                        </p>
                        <p class="fun-p">
                            <img src="http://www.dicos.com.cn/Uploads/Picture/2018-10-26/5bd2ecd5d83a5.png" alt="">
                            <span class="fun-nm">七喜</span>
                        </p>
                        <p class="fun-p">
                            <img src="http://www.dicos.com.cn/Uploads/Picture/2018-10-26/5bd2ec4e545e4.png" alt="">
                            <span class="fun-nm">美年达</span>
                        </p>
                        <p class="fun-p">
                            <img src="http://www.dicos.com.cn/Uploads/Picture/2018-10-26/5bd2ec29a5337.png" alt="">
                            <span class="fun-nm">康师傅冰红茶</span>
                        </p>
                        <p class="fun-p">
                            <img src="http://www.dicos.com.cn/Uploads/Picture/2018-10-26/5bd2f7df75d1d.png" alt="">
                            <span class="fun-nm">可乐</span>
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
.itemcol6{
    display: inline-block;
    background: url(http://www.dicos.com.cn/Public/static/images/sub_7_zs.png) no-repeat 0 5px;
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
