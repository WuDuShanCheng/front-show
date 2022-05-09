<!--
 * @Description:
 * @Autor: ZhiHao
 * @Date: 2022/4/19 16:32
-->
<template>
  <div class="manage">
    <!-- 头部 -->
    <div class="manage-head">
      <div class="manage-head-content">
        <git-control/>
        <el-button size="small" @click="openEdit('-1')">立即创建</el-button>
      </div>
    </div>


    <!-- 内容 -->
    <template v-for="(item) in proType">
      <div class="manage-body" :key="item.id">
        <h2 class="manage-body-title">
          {{item.name}}
          <span>{{item.text}}</span>
        </h2>
        <ul class="list">
          <template v-for="pro in pros">
            <template v-if="pro.typeId == item.id">
              <li class="list-item" :key="pro.id">
                <div class="list-item-content" @click="openEdit(pro.id)">
                  <svg class="icon w50 mt10 h50" aria-hidden="true">
                    <use :href=prefix+pro.icon></use>
                  </svg>
                  <div class="mt25 f20">{{pro.name}}</div>
                  <div class="list-item-content-type">{{pro.date.slice(0,7)}}</div>
                  <el-rate class="mt15" disabled text-color="#ff9900" :value=parseFloat(pro.rate)>
                  </el-rate>
                  <div class="list-item-content-btn">
                    <span @click.stop="openEdit(pro.id)">简介</span>
                    <span @click.stop="openUrl(pro.id)">打开</span>
                  </div>
                </div>
              </li>
            </template>
          </template>
        </ul>
      </div>
    </template>
    <!-- 填充 -->
    <div></div>
    <div v-if="showProEdit">
      <create-pro-dialog ref="proDialog" :curId="curId" @close="closeEdit"></create-pro-dialog>
    </div>
  </div>
</template>

<script>
  import GitControl from "@/components/GitControl/GitControl";
  import CreateProDialog from "@/components/CreateDialog/CreateProDialog";
  import {findProById, findPros, findProTypes} from "@/api/project"

  export default {
    name: "managet",
    components: {GitControl, CreateProDialog},
    data() {
      return {
        //前缀
        prefix:'#',
        //所有项目类型分类
        proType: [],
        //所有项目
        pros: [],
        //当前选择的控件
        curId: '',
        //展示Pro单项弹框
        showProEdit: false
      }
    },
    async created() {
      //项目类型分类
      this.proType = (await findProTypes()).list
      //获取所有项目
      this.pros = (await findPros()).list
    },
    async mounted() {
    },
    methods: {
      openEdit(id) {
        //存储当前选择控件id
        this.curId = id
        // 打开弹框
        this.showProEdit = true
      },
      async openUrl(id){
        //获取项目url
        let pro = (await findProById({id: id})).list
        window.open(pro.url, "_blank");
      },
      async closeEdit(){
        //项目类型分类
        this.proType = (await findProTypes()).list
        //获取所有项目
        this.pros = (await findPros()).list

        this.showProEdit = false
      }
    }
  }
</script>

<style scoped lang="scss">
  .manage {
    position: relative;
    // 隐藏滚动条
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }

    .manage-head {
      position: fixed;
      top: 0;
      left: 0;
      height: 50px;
      width: 100%;
      background: #fff;
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
      z-index: 10;

      .manage-head-content {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 970px;
        height: 100%;
        margin: 0 auto;
        line-height: 50px;
        text-align: right;
      }
    }

    .manage-body {
      width: 1000px;
      margin: 100px auto;

      .manage-body-title {
        font-size: 18px;
        color: #1b1c26;
        margin-bottom: 20px;
        padding: 0 15px;
        font-weight: 700;

        span {
          color: #ced1d6;
        }
      }

      .list {
        display: flex;
        flex-wrap: wrap;

        .list-item {
          height: 300px;

          .list-item-content {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 220px;
            margin: 10px 15px 50px;
            padding-top: 20px;
            border-radius: 10px;
            background-image: linear-gradient(-50deg, #edf1f7, #ebedf4);
            box-shadow: 0 5px 10px 0 rgba(2, 31, 65, 0.05);
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              box-shadow: 0 20px 40px 0 rgba(15, 48, 85, 0.1);
              margin-top: 5px;
            }
          }


          .list-item-content-type {
            position: relative;
            margin-top: 15px;
            font-size: 14px;
            color: #61616a;
            line-height: 24px;

            &::after {
              content: "";
              position: absolute;
              top: 50%;
              right: -50px;
              width: 35px;
              height: 1px;
              background-color: #e1e0e6;
            }

            &::before {
              content: "";
              position: absolute;
              top: 50%;
              left: -50px;
              width: 35px;
              height: 1px;
              background-color: #e1e0e6;
            }
          }

          .list-item-content-btn {
            width: 180px;
            height: 40px;
            margin: 25px auto 25px;
            line-height: 40px;
            border-radius: 100px;
            background-color: hsla(0, 0%, 100%, 0.4);

            span {
              display: inline-block;
              width: 50%;
              height: 100%;
              font-size: 12px;
              color: #61616a;
              text-align: center;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
</style>
