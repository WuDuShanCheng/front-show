<!--
 * @Description:
 * @Autor: ZhiHao
 * @Date: 2022/4/19 16:50
-->
<template>
  <img
    src="http://110.42.184.128:8090/img/1639557056903.png"
    @click="toGit"
  />
</template>

<script>
  export default {
    name: "GitControl",
    methods: {
      toGit() {
        console.log("toGit");

        window.open("https://github.com/WuDuShanCheng/front-show", "_blank");
      },
    },
  }
</script>

<style scoped>
  img {
    width: 30px;
    margin-right: 15px;
    cursor: pointer;
  }
</style>
