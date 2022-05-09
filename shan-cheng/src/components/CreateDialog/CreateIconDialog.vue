<!--
 * @Description:
 * @Autor: ZhiHao
 * @Date: 2022/4/20 8:15
-->
<template>
  <el-dialog :visible.sync="show" width="640px" custom-class="dialog" append-to-body>
    <div class="icon-content">
      <template v-for="item in icons">
        <div class="icon-content-item" :key="item.id" @click="option(item.id)"
             :class="curId==item.id?'cur-icon-content-item':''">
          <svg class="icon w40 mt8 h40" aria-hidden="true">
            <use :href=prefix+item.icon></use>
          </svg>
          <div class="mt10 mb15 f10"></div>
        </div>
      </template>
    </div>
    <div class="flex flex-center mt30">
      <div class="flex flex-center w200">
        <el-button @click="sure">确定</el-button>
        <el-button @click="show=false">取消</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
  // 导入组件
  import {findIcons} from "@/api/icon"

  export default {
    name: "CreateDialog",
    data() {
      return {
        //dialog展示
        show: false,
        //所有icon信息
        icons: [],
        //前缀
        prefix: '#',
        //当前选择的id
        curId: ''
      }
    },
    async created() {
      //查看所有图标信息
      this.icons = (await findIcons({type:'icon'})).list
    },
    methods: {
      //打开dialog
      open() {
        this.show = true;
      },
      //选择图表
      option(id) {
        this.curId = id
      },
      //点击确定
      sure() {
        if (this.curId != '')
          this.$emit("change", this.icons.filter(value => value.id == this.curId)[0].icon)
        this.show = false
      }
    }
  }
</script>

<style scoped lang="scss">
  ::v-deep .el-dialog {
    max-height: 200px !important;
    overflow: auto;
  }


  .dialog {
    position: relative;

    // 隐藏滚动条
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }

    .icon-content {
      display: flex;
      flex-wrap: wrap;
      width: 600px;

      .icon-content-item {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80px;
        margin: 10px 5px 10px;
        padding-top: 10px;
        box-shadow: inset 0.1rem 0.1rem 0.5rem $greyLight-1, inset -0.1rem -0.1rem 0.5rem $greyLight-1;
        cursor: pointer;
        border-radius: 10px;

        svg {
          transition: transform 0.5s;
        }

        &:hover {
          svg {
            transform: rotate(1turn);
          }
        }
      }

      .cur-icon-content-item {
        box-shadow: inset 0rem 0rem 0.2rem $color-green, inset -0rem -0rem 0.2rem $color-green;
      }
    }
  }

</style>
