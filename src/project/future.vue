<template>
    <div id="future">
        <div class="bigbox">
            <div class="leftbox"></div>
            <div class="rightbox">
                <div class="banpro">
                    <img src="http://www.dicos.com.cn/Uploads/Picture/2018-09-25/5ba9a65f12f6d.jpg" alt="">
                </div>
                <div class="shopwrap">
                    <div class="col-shop">
                        <div class="title">德克士未来店</div>
                        <p>2017年，德克士首家无人智慧餐厅，向“智能、新鲜、尊享”的方向持续升级。德克士未来店秉承“Fresh & Future智能舒食、新鲜乐享”的用餐理念，将未来智能化的科技应用与健康营养的新鲜美味结合，打造自助自取、自由自在的用餐体验，同时将现点现做、均衡饮食、多蔬果更健康用餐观念传递给消费者。德克士未来店改变了消费者原有的用餐模式，没有服务员、也没有收银员，通过微信支付智慧餐饮解决方案，将点餐、下单、支付、通知及自助取餐形成闭环，使点餐的过程变得更加高效，使消费者的用餐体验更加便捷。全智能的点餐系统让消费者可以根据自己的喜好自主选购美味，点餐过程更加简单，用餐环境更加舒适自在。</p>
                        <br><br>
                        <video autoplay="autoplay" class="video" src="http://www.dicos.com.cn/Public/static/images/v2.mp4" controls="controls">
                        您的浏览器不支持 video 标签。
                        </video>
                        <br><br>
                        <p>
                            德克士未来店新推出德克士非常堡，无论是麻辣脆皮鸡排，菠萝鸡腿排，照烧鸡肉或酱烧肥牛，搭配鲜脆罗曼生菜，色，香，味俱全的新享受。现场制作各式沙拉，看得到的新鲜，吃得到的健康。特有小红莓甜点系列，试试小红莓酸奶冰激淋圣代，司康及松饼冰激淋套餐，幸福感倍增。新鲜鲜榨果昔，大量蔬果加味全酸奶调制，时时补充维他命及纤维质，健康满分。
                            <br><br>
                            德克士未来店将全新餐饮概念、智能化微信点餐系统运用于餐厅的运营中，未来，德克士将“智能化无人自助点餐”的新概念拓展至全国。
                        </p>
                    </div>
                    <div class="see">
                        <a href="">
                            <img src="http://www.dicos.com.cn/Public/static/images/seeall.png" alt="">
                        </a>
                    </div>
                    <div class="itemtitle">相关新闻</div>
                    <ul class="zixun">
                            <li>
                                <a href="">
                                    <div class="imgwrap">
                                        <img src="http://www.dicos.com.cn/Uploads/Picture/2018-09-26/5bab363810fd7.jpg" alt="">
                                    </div>
                                    <div class="grp">
                                        <div class="g-title">德克士首家未来店！入局新餐饮：更智能、更新鲜、更尊享</div>
                                        <div class="g-desc">2017年对德克士而言是成果丰硕、积极蜕变的一年，德克士在2018年以“智能、新鲜、尊享”为升级方向，加速入局“新餐饮”。</div>
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
#future{
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
.see{
    margin-bottom: 50px;
    text-align: center;
    width: 100%;
}
.see{
    display: inline-block;
    vertical-align: bottom;
    max-width: 100%;
}
.video{
    width:860px;
    height:480px;
}
</style>
