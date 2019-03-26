<template>
    <div class="footer">
        <div>
            <div class="links"><a href="">RSS</a><span>|</span><a href="">源码地址</a></div>
            <div class="sup">
                <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                <p></p>
                <p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="https://www.digitalocean.com/?refcode=eba02656eeb3" target="_blank">DigitalOcean(https://www.digitalocean.com/)</a></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
.footer{
}
.footer>div{
    width: 1400px;
    margin: auto;
}
.links{
    font-size: 13px;
    color: #e2e2e2;
    line-height: 2em;
}

.links a{
    color: #666;
}
.links span{
    margin: 5px;
}
.sup p{
    color: #ababab;
    line-height: 20px;
    vertical-align: bottom;
    margin: 0 0 10px;
    font-size: 14px;
}
.sup p a{
    color: #08c;
}

</style>
