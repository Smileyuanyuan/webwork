<template>
<div id="webinform">
    <div class="top">
        <span class="el-icon-s-data"> 网站资讯</span>
    </div>
    <div class="bottom">
        <div>
            文章数目：
            <span>8</span>
        </div>
        <div>
            本站访客数：
            <span>98</span>
        </div>
        <div>
            本站总访问量：
            <span>118</span>
        </div>
        <div>
            最后更新时间：
            <span>2天前</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
        };
    },
methods: {},
};
</script>

<style scoped lang='less'>
#webinform{
    margin-top: 10px;
    background-color: #f598aa;
    border-radius: 10px;
}
#webinform:hover{
    box-shadow: 0px 0px 8px  #737272;
}
.top{
    padding: 10px;
    text-align: left;
    color: #fed8e1;
    font-size: 18px;
}

.bottom{
    color: #fed8e1;
    padding-left: 25px;
    padding-right: 20px;
    padding-bottom: 10px;
    text-align: left;
    font-size: 13px;
}

.bottom div{
    margin-top: 10px;
}
.bottom span{
    float: right;
}
</style>