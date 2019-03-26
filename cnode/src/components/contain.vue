<template>
    <div class="contain">
        <div>
            <conbox class="conbox"></conbox>
            <slidebar class="slidebar"></slidebar>
        </div>
    </div>

</template>
<script>
import conbox from './conbox'
import slidebar from './slidebar'
export default {
    name: 'contain',
    components: {
        conbox,slidebar
    }
    
}
</script>
<style scoped>
.contain{
    background: #e1e1e1;
    padding: 15px 0;
}
.contain>div{
    width: 1400px;
    margin: 0 auto;
    zoom: 1;
}
.contain>div::after{
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
}
.conbox{
    width: 1095px;
    float: left;
    background: #fff;
}
.slidebar{
    width: 290px;
    float: right;
    background: #fff;
}
</style>
