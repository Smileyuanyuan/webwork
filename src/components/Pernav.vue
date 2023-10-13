<template>
<div id="pernav">
        <el-menu
          :default-active="page"
          class="el-menu"
          text-color="#fed8e1"
          background-color="#f598aa"
          active-text-color="#f598aa"
          @select="changeSider"
        >
          <el-menu-item index="personal">
              <i class="el-icon-user-solid"></i>
              <span>个人信息</span>
          </el-menu-item>
          <el-menu-item index="pubuliu" >
            <i class="el-icon-s-home"></i>
            <span slot="title">家乡</span>
          </el-menu-item>
          <el-menu-item index="hoby" >
            <i class="el-icon-sugar"></i>
            <span slot="title">兴趣</span>
          </el-menu-item>
          <!-- <el-menu-item index="music" >
            <i class="el-icon-mic"></i>
            <span slot="title">音乐盒</span>
          </el-menu-item>
          <el-menu-item index="sticker">
            <i class="el-icon-document-add"></i>
            <span slot="title">随心贴</span>
          </el-menu-item> -->
        </el-menu>
</div>
</template>

<script>
export default {
    data(){
        return {
            page: 'personal'
        };
    },
    methods: {
    changeSider(path) {
        this.$router.push(path)
    },
},
};
</script>

<style scoped lang='less'>
#pernav{
    margin-top: 10px;
    border: 1px solid #f598aa;
    border-radius: 10px;
    background-color: #f598aa;
    padding-bottom: 10px;
}
.el-menu{
  /*border: 1px solid red;*/
  /*height: 300px;*/
  /*border-radius: 20px!important;*/
  margin-top: 10px;
}

.el-menu-item{
 /* border: 1px solid green;*/
  text-align: left;
  font-size: 18px!important;
}

.el-menu-item:hover,.el-nue-item:focus{
  background-color: #fed8e1;
}
.el-menu-item.is-active{
  background-color: #fed8e1!important;
}
</style>