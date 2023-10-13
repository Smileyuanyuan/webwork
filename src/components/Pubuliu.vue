<template>
  <div class="waterfull">
    <div class="v-waterfall-content" id="v-waterfall" v-masonry>
      <div
        v-masonry-tile
        v-for="(img, index) in imgArr"
        :key="index"
        class="v-waterfall-item wow bounceIn"
        :style="{
          top: img.top + 'px',
          left: img.left + 'px',
          width: waterfallImgWidth + 'px',
          height: img.height,
        }"
      >
        <!-- <br> -->
		<div class="img" style="margin: 0; border-end-start-radius: 0; border-end-end-radius: 0;">
			<img :src="img.src" />
		</div>
        <p style="font-size: small; color: #666; margin: 4px; text-align: left">
          {{ img.title }}
        </p>
        <p
          style="
            font-size: x-small;
            color: #9e9e9e;
            margin: 4px;
            padding-bottom: 6px;
            text-align: left;
          "
        >
          {{ img.info }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-waterfall",
  data() {
    return {
      waterfallList: [],
      imgArr: [
        {
          title: "宜宾",
          src: require("../assets/1.jpg"),
          info: "万里长江第一城",
        },
        {
          title: "宜宾",
          src: require("../assets/2.jpg"),
          info: "万里长江第一城",
        },
        {
          title: "宜宾",
          src: require("../assets/3.jpg"),
          info: "万里长江第一城",
        },
        {
          title: "宜宾",
          src: require("../assets/4.jpg"),
          info: "万里长江第一城",
        },
        {
          title: "宜宾",
          src: require("../assets/5.jpg"),
          info: "万里长江第一城",
        },
        {
          title: "宜宾",
          src: require("../assets/6.jpg"),
          info: "万里长江第一城",
        },
        {
          title: "宜宾",
          src: require("../assets/g1.jpg"),
          info: "万里长江第一城",
        },
        {
          title: "宜宾",
          src: require("../assets/g2.jpg"),
          info: "万里长江第一城",
        },
        {
          title: "宜宾",
          src: require("../assets/a.png"),
          info: "万里长江第一城",
        },
        {
          title: "宜宾",
          src: require("../assets/b.jpg"),
          info: "万里长江第一城",
        },
        {
          title: "宜宾",
          src: require("../assets/d.jpg"),
          info: "万里长江第一城",
        },
        {
          title: "宜宾",
          src: require("../assets/yinhua.jpg"),
          info: "万里长江第一城",
        },
        {
          title: "宜宾",
          src: require("../assets/g2.jpg"),
          info: "万里长江第一城",
        },
        {
          title: "宜宾",
          src: require("../assets/a.png"),
          info: "万里长江第一城",
        },
        {
          title: "宜宾",
          src: require("../assets/b.jpg"),
          info: "万里长江第一城",
        },
        {
          title: "宜宾",
          src: require("../assets/d.jpg"),
          info: "万里长江第一城",
        },
        {
          title: "宜宾",
          src: require("../assets/yinhua.jpg"),
          info: "万里长江第一城",
        },
      ],
      // waterfallImgWidth: 100,
      waterfallImgWidth: 260, // 每个盒子的宽度
      // waterfallImgCol: 5,// 瀑布流的列数
      waterfallImgCol: 3, // 瀑布流的列数
      waterfallImgRight: 10, // 每个盒子的右padding
      waterfallImgBottom: 10, // 每个盒子的下padding
      waterfallDeviationHeight: [],
      imgList: [],
    };
  },
  created() {
    // 触发入口
    // for (let i = 0; i < this.imgArr.length; i++) {
    // 	// this.imgList.push(this.imgArr[Math.round(Math.random() * 8)]);// 图片随机显示
    // 	this.imgList.push(this.imgArr[i]);
    // }
  },
  mounted() {
    // this.calculationWidth();
      new this.$wow.WOW().init();
  },
  methods: {
    //计算每个图片的宽度或者是列数
    calculationWidth() {
      let domWidth = document.getElementById("v-waterfall").offsetWidth;
      if (!this.waterfallImgWidth && this.waterfallImgCol) {
        this.waterfallImgWidth =
          (domWidth - this.waterfallImgRight * this.waterfallImgCol) /
          this.waterfallImgCol;
      } else if (this.waterfallImgWidth && !this.waterfallImgCol) {
        this.waterfallImgCol = Math.floor(
          domWidth / (this.waterfallImgWidth + this.waterfallImgRight)
        );
      }
      //初始化偏移高度数组
      this.waterfallDeviationHeight = new Array(this.waterfallImgCol);
      for (let i = 0; i < this.waterfallDeviationHeight.length; i++) {
        this.waterfallDeviationHeight[i] = 0;
      }
      this.imgPreloading();
    },
    //图片预加载
    imgPreloading() {
      for (let i = 0; i < this.imgList.length; i++) {
        let aImg = new Image();
        aImg.src = this.imgList[i];
        aImg.onload = aImg.onerror = (e) => {
          let imgData = {};
          imgData.height = (this.waterfallImgWidth / aImg.width) * aImg.height;
          imgData.src = this.imgList[i].src;
          imgData.title = this.imgList[i].title; // 说明文字（也可以自己写数组，或者封装json数据，都可以，但是前提是你会相关操作，这里不赘述）
          imgData.info = this.imgList[i].info; // 说明文字
          this.waterfallList.push(imgData);
          this.rankImg(imgData);
        };
      }
    },
    //瀑布流布局
    rankImg(imgData) {
      let {
        waterfallImgWidth,
        waterfallImgRight,
        waterfallImgBottom,
        waterfallDeviationHeight,
        waterfallImgCol,
      } = this;
      let minIndex = this.filterMin();
      imgData.top = waterfallDeviationHeight[minIndex];
      imgData.left = minIndex * (waterfallImgRight + waterfallImgWidth);
      // waterfallDeviationHeight[minIndex] += imgData.height + waterfallImgBottom;// 不加文字的盒子高度
      waterfallDeviationHeight[minIndex] += imgData.height + waterfallImgBottom + 56; // 加了文字的盒子高度，留出文字的地方（这里设置56px）
      // console.log(imgData);
    },
    /**
     * 找到最短的列并返回下标
     * @returns {number} 下标
     */
    filterMin() {
      const min = Math.min.apply(null, this.waterfallDeviationHeight);
      return this.waterfallDeviationHeight.indexOf(min);
    },
  },
};
</script>

<style scoped>
.waterfull {
  width: 100%;
}
.v-waterfall-content {
  /* 主要 */
  width: 100%;
  height: 400px;
  position: relative;
  /* 次要：设置滚动条，要求固定高度 */
  /*overflow-y: auto;*/
  /* border: 1px solid red;*/
}

.v-waterfall-content div {
  border-radius: 10px;
  background-color: rgb(240, 248, 255, 0.8);
  margin: 10px;
}

.img{
	overflow: hidden;
}

img {
  border-top-left-radius: 10px !important;
  border-top-right-radius: 10px !important;
  border-end-end-radius: 0px !important;
  border-end-start-radius: 0px !important;
  position: relative;
  left: 0;
  width: 100% !important;
  transition: transform 0.3s ease; 
}

.img:hover img{
	transform: scale(1.2);
}

.v-waterfall-item{
  /* 主要 */
  width: 100%;
  float: left;
  position: absolute;
}

.v-waterfall-item:hover {
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 1);
}

.v-waterfall-item img {
  /* 主要 */
  /* width: auto;height: auto; */
  width: 90%;
  height: auto;
  /* 次要 */
  border-radius: 6px;
}
</style>
