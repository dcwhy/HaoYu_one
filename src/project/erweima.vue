<template>
    <div id="erweima">
        <div class="bigbox">
            <div class="leftbox"></div>
            <div class="rightbox">
                <div class="banpro">
                    <img src="http://www.dicos.com.cn/Uploads/Picture/2018-09-18/5ba10e09d09d6.jpg" alt="">
                </div>
                <div class="concat">
                    <div>
                        <div class="photo">
                            <img src="http://www.dicos.com.cn/Uploads/image/20181116/1542346163832236.jpg" alt="">
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
}
a{
    color: #7f7f7f;
}
#erweima{
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
