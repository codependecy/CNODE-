<template>
    <div>
        <div class="header">
            <ul>
                <li><a href="">全部</a></li>
                <li><a href="">精华</a></li>
                <li><a href="">分享</a></li>
                <li><a href="">问答</a></li>
                <li><a href="">招聘</a></li>
                <li><a href="">客户端测试</a></li>
            </ul>
        </div>
        <div class="content">
            <ul>
                <li v-for="post in posts">
                    <a href="" class="logo"><img :src="post.author.avatar_url" alt=""></a>
                    <span class="reply"><span>{{post.reply_count}}</span>/<span>{{post.visit_count}}</span></span>
                    <span class="top">置顶</span>
                    <a href="" class="title">{{post.title}}</a>
                    <a href="" class="last-time">
                        <img src="https://avatars1.githubusercontent.com/u/48700701?v=4&s=120" alt="">
                        <span>18小时前</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
Vue.prototype.$http = axios
import axios from 'axios'

export default {
    name: 'conbox',
    data () {
        return {
        posts: []
        }
    },
    methods: {
        getData(){
        self = this
        // this.$http.get('https://cnodejs.org/api/v1/topics?page=1&limit=15')
        this.$http.get('https://cnodejs.org/api/v1/topics',{
            params:{
            page: 1,
            limit: 40
            }
        })
        .then(function(res){
            self.posts = res.data.data
            console.log(res.data.data[0])
        })
        .catch(function(){

        })
        }
    },
    beforeMount(){
        // this.isLoading = true;//加载成功之前显示加载动画
        this.getData();//在页面加载之前获取数据
      }

}
</script>
<style scoped>
.header{
    height: 40px;
    background: #f6f6f6;
}
.header li{
    display: inline-block;
    margin:10px;
    margin-top: 8px;
    height: 23px;
    background: #000;
    border-radius: 3px;
    padding: 0 5px;
}
.header li a{
    font-size: 14px;
    color: #80bd01;
    line-height: 23px;
}
.content .logo img{
    width: 30px;
    height: 30px;
    border-radius: 2px;
    margin-left: 10px;
}
.content li{
    height: 30px;
    padding: 10px 0;
    font-size: 14px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    /* justify-content: start; */
}
.reply{
    width: 70px;
    text-align: center;
    font-size: 12px;
}
.top{
    display: inline-block;
    background: #80bd01;
    font-size: 12px;
    padding: 2px 4px;
    color: #fff;
    border-radius: 2px;
    margin-right: 4px;
}
.last-time{
    margin-left: auto;
    margin-right: 10px;
}
.title{
    font-size: 16px;
}
.last-time img{
    width: 18px;
    height: 18px;
    border-radius: 2px;
    vertical-align: middle;
}
.last-time span{
    font-size: 12px;
    color: #778087;
}
</style>

