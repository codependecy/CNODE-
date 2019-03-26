<template>
    <div class="header">
        <div>
            <img src="../assets/cnodejs_light.svg" alt="">
                <ul>
                    <li><a href="">首页</a></li>
                    <li><a href="">新手入门</a></li>
                    <li><a href="">API</a></li>
                    <li><a href="">关于</a></li>
                    <li><a href="">注册</a></li>
                    <li><a href="">登录</a></li>
                </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Header'
}
</script>
<style scoped>
.header{
    background-color: #5a5555;
    height: 50px;
}
.header>div{
    width: 1400px;
    margin: auto;
}
img{
    max-width: 120px;
    margin-top: 10px;
}
ul{
    list-style: none;
    float: right;
    margin: 4px;
}
li{
    display: inline-block;
    padding: 10px 15px;
}
a{
    text-decoration: none;
    color: #ccc;
    font-size: 14px;
    text-shadow: none;
}
</style>
