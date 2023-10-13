<template>
  <div id="life">
  <video src="../assets/v1.mp4" autoplay loop muted></video>
    <span class="backfont">Welcome to my blog.</span>
    <div class="big">
      <div class="board">
        <div class="left">
          <!-- <Personal v-if="isPer"></Personal> -->
            <router-view></router-view>
        </div>
        <div class="right" :class="{'fixed': isFixed}">
          <div class="r-top">
            <el-avatar class="avatar" :size="100" :src="require('../assets/m2.png')"></el-avatar>
            <p class="note">媛媛.</p>
            <span class="note">Welcome to Yuanyuan's blog.</span>
          </div>
          <Pernav v-if="$route.meta.ShowPernav"></Pernav>
          <Pasnav v-if="$route.meta.ShowPasnav"></Pasnav>
          <Webinform></Webinform>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Personal from '@/components/Personal'
import Pernav from '@/components/Pernav.vue'
import Webinform from '@/components/Webinform.vue'
import Pasnav from '@/components/Pasnav.vue';

export default {
  components: {
    Personal,
    Pernav,
    Webinform,
    Pasnav
  },
  data() {
    return {
      isFixed: false,
      page: 'passage',
      avatar: {
        url: "../assets/m1.jpg",
      },
    };
  },
  created() {
    this.changeSider(this.page)
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    // toPerson() {
    //   this.$router.push({path: '/life/personal'})
    // },
    changeSider(path) {
        this.$router.push(path)
    },
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      // 当滚动超过一定位置时，添加固定样式
      this.isFixed = scrollTop > 160;
    },
  },
  // created() {
  //   this.changeSider(this.page)
  // }
  mounted() {
    new this.$wow.WOW().init()
  }
};
</script>

<style scoped>
#life {
  /*border: 1px solid #ffc8d5;*/
  /*background-image: url('../assets/d.jpg');
  background-color: rgb(238, 223, 226, 0.7);
  background-repeat: no-repeat; 
  background-size: 100% 100%;*/
  width: 100%;
  height: 100%; 
  z-index: -1;
}

video{
  position: fixed;
  object-fit: cover;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
}
.backfont{
  /*border: 1px solid red;*/
  position: fixed;
  top: 150px;
  left: 60px;
  color: #f598aa;
  font-size: 60px;
  opacity: 0.6;
  cursor: default;
  z-index: -9;

  animation: bounceInLeft 5s;

}

.per{
  /*border: 1px solid red;*/
}

.big{
  /*background-color:#fed8e1; */
  width: 100%;
  margin-top: 20%;
  margin-right: 0px;
  margin-left: 0;
}

.board {
  /*border: 1px solid red;*/
  margin-left: 15%;
  width: 70%;  
  /*background-color: #fed8e1;*/
  display: flex;
  opacity: 1;
}

.left{
  /*border: 1px solid red;*/
  width: 80%;
}

.right {
  /*border: 1px solid green;*/
  width: 20%;
}

.right.fixed{
  width: 14%;
  position: fixed;
  left: 70.8%;
  top: 15%;
}

.r-top{
  background-color: #f598aa;
  /*border-top-right-radius: 20px;
  border-top-left-radius: 20px;*/
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 1px 3px 0px #626262;
}

.r-top:hover{
  box-shadow: 0px 0px 8px  #737272;
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


.el-avata {
  /*border: 1px solid red;*/
  cursor: pointer;
  position: relative;
  top: -60px;
  object-fit: cover;
}

.el-avatar:hover{
  animation: pulse 2s;
}

.note-p{
  font-weight: 200;
}
.note{
  cursor: pointer;
  position: relative;
  top: -20px;
  color: #fed8e1;
}
</style>
