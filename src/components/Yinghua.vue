<template>
  <div class="sakura-container">
    <img v-for="(sakura, index) in sakuras" :key="index" class="sakura" :src="sakura.image" :style="sakura.style">
  </div>
</template>

<script>
export default {
  data() {
    return {
      sakuras: []
    };
  },
  mounted() {
    // 预加载樱花图片
    const sakuraImage = new Image();
      sakuraImage.src = "111";

    // 在画面中随机生成樱花，并设置初始位置、速度等属性
    for (let i = 0; i < 20; i++) {
      this.sakuras.push({
        image: sakuraImage.src,
        style: {
          left: Math.random() * 100 + '%',
          animationDelay: Math.random() * 5 + 's',
          animationDuration: Math.random() * 5 + 5 + 's',
          animationTimingFunction: 'linear'
        }
      });
    }
  }
}
</script>

<style>
.sakura-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.sakura {
  position: absolute;
  width: 20px;
  height: 20px;
  animation-name: sakura-fall;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
}

@keyframes sakura-fall {
  from {
    transform: translate3d(0, -50%, 0);
  }
  to {
    transform: translate3d(0, 150%, 0);
  }
}
</style>