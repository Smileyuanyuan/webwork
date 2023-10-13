<template>
  <transition leave-active-class="animate__animated animate__fadeOutUp" enter-active-class="animate__animated animate__fadeInDown">
    <div v-show="showHeader" class="header">
      <div class="left">
        <span class="icon iconfont icon-backHome" @click="toHome()"> Lyy 的梦幻屋</span>
      </div>
      <div class="right">
        <span class="el-icon-search" @click="dialogVisible = true"> 搜索</span>
        <span class="icon iconfont icon-backHome" @click="toHome1()"> 首页</span>
        <span class="el-icon-user-solid" @click="toPerson()"> 个人</span>
        <span class="el-icon-notebook-2" @click="toPassage()"> 文章</span>
        <span class="icon iconfont icon-willing" @click="toSticker()"> 随心贴</span>
        <span class="icon iconfont icon-l079aiqing" @click="toAboutme()"> 关于</span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      showHeader: true,
      lastScrollPosition: 0,
      scrollTimeout: null,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    clearTimeout(this.scrollTimeout);
  },
  methods: {
    handleScroll() {
      clearTimeout(this.scrollTimeout);
      this.scrollTimeout = setTimeout(() => {
        const currentScrollPosition =
          window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollPosition > this.lastScrollPosition) {
          // 向下滚动
          this.showHeader = false;
        } else {
          // 向上滚动
          this.showHeader = true;
        }

        this.lastScrollPosition = currentScrollPosition;
      },50); // 延迟250毫秒执行滚动事件处理以减少滚动事件频率
      },
    toHome() {
      // console.log(this.$route)
      this.$router.push({ path: "/" });
    },
    toHome1() {
      this.$router.push({path: "/life/personal"})
    },
    toSticker() {
      this.$router.push({name: "sticker"})
    },
    toPerson() {
      this.$router.push({name: "personal"})
    },
    toPassage() {
      this.$router.push({name: "passage"})
    },
    toAboutme() {
      this.$router.push({name: "aboutme"})
    }
  },
};
</script>

<style scoped lang="less">
.header {
  /*border: 1px solid black;*/
  background-color: rgba(255, 255, 255, 0.7);
  width: 100%;
  height: 30px;
  padding: 15px;
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  enter-active: "animate__animated animate__backInUp";
}

.left span {
  position: relative;
  left: 0;
  z-index: 99;
  font-size: 20px;
  color: #f598aa;
  cursor: pointer;
}

.right {
  position: relative;
  left: 58%;
  
}

span:hover{
    color: #f598aa;
  }
.right span {
  /*border: 1px solid red;*/
  position: relative;
  font-size: 18px;
  padding-right: 15px;
  z-index: 99;
  cursor: pointer;
}

/deep/.el-dialog {
  background-color: rgba(255, 234, 237, 0.85);
  border: 0;
}
</style>
