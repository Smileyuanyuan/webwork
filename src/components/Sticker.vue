<template>
  <div id="sticker" class="sticker">
    <div class="edit" :class="{ fixed: isFixed }">
      <i
        class="el-icon-circle-plus"
        @click="dialogVisible = true"
        style="color: #ff7a95"
      ></i>
    </div>
    <!-- 无缝滚动效果 -->
    <div class="marquee-wrap" v-masonry>
      <div
        v-masonry-tile
        v-for="(item, index) in listData"
        :key="index"
        class="sticker-item wow bounceIn"
      >
        <span>{{ item.text }}</span>
        <p style="font-size: xx-small; color: #909090; margin: 4px; text-align: left">
          {{ item.name }}
        </p>
        <p style="font-size: xx-small; color: #909090; margin: 4px; text-align: left">
          {{ item.time }}
        </p>
      </div>
    </div>
    <!-- 对话框 -->
    <el-dialog title="留言" :visible.sync="dialogVisible" width="40%" class="dialog">
      <el-form :model="formData">
        <el-form-item label="名字" :label-width="formLabelWidth" size="small">
          <el-input
            v-model="formData.name"
            autocomplete="off"
            placeholder="不填则匿名"
          ></el-input>
        </el-form-item>
        <el-form-item label="留言" :label-width="formLabelWidth" size="small">
          <el-input
            v-model="formData.text"
            autocomplete="off"
            type="textarea"
            placeholder="请输入你的留言"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="send()"
          style="background-color: #f598aa; border: 1px solid #f598aa"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "sticker",
  components: {},
  data() {
    return {
      formLabelWidth: "100px",
      dialogVisible: false,
      isFixed: false,
      listData: [
        {
          text: "相寻梦里路，飞雨落花中。",
          time: "2023-10-8 13:10:53",
          name: "LYY",
        },
        {
          text:
            "紫色小笺，仍有花香。一些泪痕，悄然留下，月光里，案上轻置，上面余了半阙诗词。曾记否，谁青案挥毫，水墨丹青;谁撰字如狂，诗显风流，洒写春秋。独倚凭窗，漫想如前，只余月光下，送你的半笺诗词",
          time: "2023-10-8 13:10:53",
          name: "LYY",
        },
        {
          text: "画堂人静雨蒙蒙",
          time: "2023-10-8 13:10:53 ",
          name: "匿名",
        },
        {
          text:
            " 一场秋雨过后，酷热的天气被微冷的秋给取代了，望向那西窗户，几片残霞似乎还剩一丝气息，垂挂天边，此刻虽有无限夕阳的美景，却到了已是近黄昏的时刻",
          time: "2023-10-8 13:10:53",
          name: "匿名",
        },
        {
          text: "人生若只如初见",
          time: "2023-10-8 13:10:53",
          name: "梁媛媛",
        },
        {
          text:
            "风花雪月载流水，醉意且满夜光杯。飘然而去的，只是一个凄美的传奇。怅然间，错过了一段风景，错过了一段情缘。美酒浸泪，人生苦短谁狂笑，萧萧冷月风断刀。",
          time: "2023-10-8 13:10:53",
          name: "LYY",
        },
        {
          text: "青青子衿，悠悠我心。",
          time: "2023-10-8 13:10:53",
          name: "媛媛",
        },
        {
          text: "但为君故，沉吟至今。",
          time: "2023-10-8 13:10:53",
          name: "匿名",
        },
        {
          text:
            "花一样的年纪，花一样的少年，在这美丽的四月让它绽放，让展示它的美。天生独有的美，让人羡慕，让人嫉妒。",
          time: "2023-10-8 13:10:53",
          name: "LYY",
        },
        {
          text: "青青子衿，悠悠我心。",
          time: "2023-10-8 13:10:53",
          name: "媛媛",
        },
        {
          text: "但为君故，沉吟至今。",
          time: "2023-10-8 13:10:53",
          name: "媛媛",
        },
        {
          text: "众里寻他千百度，蓦然回首。",
          time: "2023-10-8 13:10:53",
          name: "媛媛",
        },
        {
          text: "那人却在，灯火阑珊处",
          time: "2023-10-8 13:10:53",
          name: "媛媛",
        },
        {
          text: "那人却在，灯火阑珊处",
          time: "2023-10-8 13:10:53",
          name: "匿名",
        },
        {
          text: "那人却在，灯火阑珊处",
          time: "2023-10-8 13:10:53",
          name: "媛媛",
        },
      ],
      formData: {
        text: "",
        time: "",
        name: "",
      },
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    new this.$wow.WOW().init();
    // this.dmList()
    // this.timer = setInterval(this.scrollAnimate, 1500);
  },
  methods: {
    getNowTime() {
      var _this = this;
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes();
      let ss = new Date().getSeconds() < 10 ? "0" + new Date().getSeconds() : new Date().getSeconds();
      _this.gettime = yy + "-" + mm + "-" + dd + " " + hh + ":" + mf + ":" + ss;
      // console.log(_this.gettime);
      this.formData.time = _this.gettime;
      // console.log(time);
    },
    send() {
      // console.log(this.formData.text);
      // console.log(this.formData)
      if (this.formData.text) {
        this.getNowTime();
        var text = this.formData.text;
        if (this.formData.name) {
          var name = this.formData.name;
        } else {
          var name = "匿名";
        }
        var time = this.formData.time;
        this.listData.push({ text, name, time });
        this.$message({
          message: "发送成功",
          type: "success",
          duration: 1000,
        });
        this.dialogVisible = false;
        this.formData.text = "";
        this.formData.name = "";
        this.formData.time = "";
      } else {
        this.$message({
          message: "请输入留言",
          type: "error",
          duration: 1000,
        });
      }
    },
    handleScroll() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 当滚动超过一定位置时，添加固定样式
      this.isFixed = scrollTop > 160;
    },
  },
};
</script>
<style lang="less" scoped>
#sticker {
  /*border: 1px solid green;*/
}
.sticker-item {
  background-color: rgba(255, 220, 229,0.8);;
  padding: 12px;
  margin: 5px;
  border-radius: 10px;
  cursor: pointer;
  width: calc(28.33% - 5px);
  text-align: left;

  span{
   /*border: 1px solid red;*/
   text-align: left;
  }
}
.edit {
  position: relative;
  left: 93%;
  /*border: 1px solid red;*/
  padding: 10px;
  font-size: xx-large;
  width: 50px;
}
/deep/.el-dialog {
  background-color: rgba(255, 234, 237, 0.85);
  border: 0;
}

.edit.fixed {
  /*border: 1px solid red;*/
  width: 14%;
  position: fixed;
  left: 61.8%;
  top: 15%;
  z-index: 10;
}
</style>
