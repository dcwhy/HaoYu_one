<template>
    <div id="huiyuan">
        <div class="bigbox">
            <div class="leftbox"></div>
            <div class="rightbox">
                <div class="banpro">
                    <img src="http://www.dicos.com.cn/Uploads/Picture/2018-09-17/5b9fceb7591cd.jpg" alt="">
                </div>
                <div class="concat">
                    <div>
                        <div class="photo">
                            <img src="http://www.dicos.com.cn/Uploads/image/20181012/1539315914128985.png" alt="">
                        </div>
                        <div class="photo">
                            <img src="http://www.dicos.com.cn/Uploads/image/20181012/1539315799689986.gif" alt="">
                        </div>
                        <div class="photo">
                            <a href="">
                                <img src="http://www.dicos.com.cn/Public/static/images/card_btn.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
                <div style="height:150px;"></div>
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
#huiyuan{
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
.concat{
    padding-top: 90px;
    width: 80%;
    margin: 0 auto;
    text-align: left;
}
.photo{
    text-align: center;
    width: 100%;
}
.photo{
    display: inline-block;
    vertical-align: bottom;
    max-width: 100%;
}
</style>
