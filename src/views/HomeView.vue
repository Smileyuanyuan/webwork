<template>
  <div class="home">
    <!-- <h1>This is Home page!</h1> -->
    <video src="../assets/v2.mp4" autoplay="autoplay" loop="loop" muted></video>
    <div class="text">
      <div class="t1">WELCOME TO</div>
      <div class="t2">Yuanyuan's Blog</div>
      <div style="text-align: left;">Hi, this is my personal blog to show my thoughts or</div>
      <div style="text-align: left;">record my own blog diary.</div>
      <el-button @click="toAbout()">TO NOW!</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  },
  data() {
    return {
      paly: "autopaly"
    }
  },
  methods: {
    toAbout() {
      this.$router.push({ path: '/life/personal' });
      console.log("/life");
    },
  },
  
};

</script>

<style scoped>
.home {
  /*border: 1px red solid;
  /*width: 100px;*/
  width: 100%;
  height: 100%;
  /*background-image: url("../assets/b.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;*/
}

video{
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: -10;
}

.text{
  position: fixed;
  top: 60%;
  left: 5%;
}

.el-button {
  position: relative;
  left: -130px;
  color: rgb(0, 0, 0);
  border: 2px solid rgb(254, 254, 254);
  background-color: rgb(255, 255, 255);
  text-align: left;
  font-size: large;
  margin-top: 10px;
  /*animation: wobble 1s;*/
}

.el-button:hover {
  color: aliceblue;
  background-color: #ffb7c6;
  border: rgba(255, 235, 240);
}

.el-button:focus {
  color: aliceblue;
  background-color: rgb(255, 183, 198);
  border: rgba(255, 235, 240);
}
.t1 {
  text-align: left;
  font-size: xx-large;
  font-weight: bolder;
  color: rgb(236, 236, 236);
  /*animation: rubberBand 2s;*/
}
.t2 {
  color: #ffaebe;
  font-size: xxx-large;
  font-weight: bold;
  padding-bottom: 10px;
  text-align: left;
  /*animation: rubberBand 2s;*/
}

</style>
