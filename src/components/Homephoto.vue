<template>
<div id="homephoto">
    <div v-masonry class="out">
        <div v-masonry-tile>
            <img src="../assets/1.jpg">
        </div>
        <div v-masonry-tile>
            <img src="../assets/2.jpg">
        </div>
        <div v-masonry-tile>
            <img src="../assets/4.jpg">
        </div>
        <div v-masonry-tile>
            <img src="../assets/b.jpg">
        </div>
        <div v-masonry-tile>
            <img src="../assets/2.jpg">
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

<style scoped>
#homephoto{
    border: 1px solid red;
}
.out div{
}


img {
    border-radius: 10px;
    width: 150px!important;
    margin: 10px;
    display: flex;
     display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
}
img:hover{
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>