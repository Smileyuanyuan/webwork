<template>
  <div id="passage">
    <div 
    class="box wow animated" 
    :class="index % 2 === 0 ? 'slideInLeft' : 'slideInRight'"
    v-for="(item, index) in passages" 
    :key="index"
    >
      <div class="title">{{ item.title }}</div>
      <div class="detail">
        <span class="el-icon-date"> 发表于{{ item.sendt }}</span>
        <el-divider direction="vertical"></el-divider>
        <span class="el-icon-edit"> 更新于{{ item.updatet }}</span>
        <el-divider direction="vertical"></el-divider>
        <span class="el-icon-collection"> {{ item.about }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      passages: [
        {
          title: "CF ROUND 878 (Div.3)",
          sendt: "2023-10-10",
          updatet: "2023-10-10",
          about: "算法 c++",
        },
        {
          title: "CF ROUND 878 (Div.3)",
          sendt: "2023-10-09",
          updatet: "2023-10-10",
          about: "算法 c++",
        },
        {
          title: "CF ROUND 878 (Div.3)",
          sendt: "2023-10-08",
          updatet: "2023-10-10",
          about: "前端 Vuex",
        },
        {
          title: "CF ROUND 878 (Div.3)",
          sendt: "2023-10-07",
          updatet: "2023-10-10",
          about: "算法 c++",
        },
        {
          title: "CF ROUND 878 (Div.3)",
          sendt: "2023-10-05",
          updatet: "2023-10-10",
          about: "前端 Vuex",
        },
      ],
    };
    },
    mounted() {
        new this.$wow.WOW().init();
  },
  methods: {},
};
</script>

<style scoped lang="less">
#passage {
  margin-right: 10px;
  margin-bottom: 10px;
}

.box {
  background-color: rgba(255, 220, 229,0.8);
  box-shadow: 0px 1px 3px 0px #a3a3a3;
  margin-bottom: 10px;
  padding-left: 40px;
  padding-right: 20px;
  padding-top: 80px;
  padding-bottom: 80px;
  border-radius: 20px;
  transition: transform 0.3s ease; 
}

.box:hover .box{
  transform: scale(1.2);
}

.title {
  /*border: 1px solid green;*/
  text-align: left;
  font-size: 25px;
}

.detail {
  /*border: 1px solid red;*/
  text-align: left;
  font-size: 12px;
}

/deep/.el-divider {
  background-color: black !important;
}
</style>
