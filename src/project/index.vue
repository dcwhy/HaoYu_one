<template>
    <div id="index">
        <div class="bigbox">
            <!-- 左侧导航条 -->
            <div class="leftbox"></div>
            <!-- 右侧 -->
            <div class="rightbox">
                <div class="colindex">
                    <div class="col01">
                        <div class="col-1" @click="aboutcpj()">
                            <router-link to='/cuipi'>
                                <img src="http://www.dicos.com.cn/Uploads/Picture/2018-12-18/5c1858b7f1fce.png" alt="">
                            </router-link>
                        </div>
                        <div style="width:15px;height:413px;float:left;"></div>
                        <div class="col-2">
                            <router-link to='/huodong'>
                                <img src="http://www.dicos.com.cn/Uploads/Picture/2018-12-18/5c1858ef7b91a.png" alt="">
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="colindex2">
                    <div class="col-3">
                        <router-link to='/huiyuan'>
                            <img src="http://www.dicos.com.cn/Public/static/images/img03.jpg" alt="">
                        </router-link>
                    </div>
                    <div style="width:15px;"></div>
                    <div class="col-4">
                        <router-link to='/family'>
                            <img src="http://www.dicos.com.cn/Public/static/images/img05.jpg" alt="">
                        </router-link>
                    </div>
                    <div style="width:15px;"></div>
                    <div class="col-5">
                        <router-link to='/youshi'>
                            <img src="http://www.dicos.com.cn/Public/static/images/img04.jpg" alt="">
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return this
    },
    created() {
        
    },
    methods:{
        
    }
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
    font-family: "Gotham", Helvetica, Arial, PingFangSC-Regular, "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
}
a{
    color: #7f7f7f;
}
#index{
    height: 100%;
}
.bigbox{
    width: 100%;
    height: 100%;
    /* overflow: hidden; */
}
.rightbox{
    height: 100%;
    margin-left: 20%;
    background: url('http://www.dicos.com.cn/Public/static/images/probg.jpg') repeat;
}
.rightbox img{
    display: inline-block;
    max-width: 100%;
}
.col01{
    height: 413px;
    border-bottom: 12px solid #fff;
    border-top: 12px solid #fff;
    position: relative;
}
.col01 a{
    display: block;
    height: 100%;
}
.col-1{
    width: 48%;
    height: 100%;
    float: left;
    cursor: pointer;
}
.col01 img{
    width: 100%;
    height: 100%;
}
.col-2{
    width: 50%;
    height: 100%;
    float: left;
}
.colindex2{
    width: 100%;
    height: 300px;
    overflow: hidden;
}
.colindex2>div{
    float: left;
    height: 100%;
}
.col-3{
    width: 32%;
}
.col-4{
    width: 32%;
}
.col-5{
    width: 32%;
    height: 340px;
}

</style>

