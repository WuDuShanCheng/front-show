<!--
 * @Description:
 * @Autor: ZhiHao
 * @Date: 2022/4/20 8:15
-->
<template>
  <el-dialog :visible.sync="show" width="740px" custom-class="dialog" append-to-body :before-close="beforeClose">
    <div class="edit" v-if="curId!=-1">
      <div class="segmented-control">
        <input type="radio" name="tab" value="1" id="tab-1" checked/>
        <label for="tab-1" class="segmented-control__1" @click="type='read'">
          <p>查看</p>
        </label>

        <input type="radio" name="tab" value="2" id="tab-2"/>
        <label for="tab-2" class="segmented-control__2" @click="type='edit'">
          <p>编辑</p>
        </label>

        <input type="radio" name="tab" value="3" id="tab-3"/>
        <label for="tab-3" class="segmented-control__3" @click="deletePro">
          <p>删除</p>
        </label>

        <div class="segmented-control__color"></div>
      </div>
    </div>
    <div class="dialog">
      <div class="manage-body mb50">
        <div class="manage-body-title">
          <svg class="icon w30 h30 mr10" aria-hidden="true">
            <use xlink:href="#icon-jungongyanshou"></use>
          </svg>
          <span>
            项目
          </span>
        </div>
        <div class="manage-body-content">
          <div class="h24 flex row-between">
            <span class="flex">
              <svg class="icon w20 h20 mr10 ml10 mt2" aria-hidden="true">
                <use xlink:href="#icon-xinxiangmuguanli"></use>
              </svg>
              <span>
              项目名称
            </span>
            </span>
            <template v-if="type=='read'">
              <span class="ml20">{{pro.name}}</span>
            </template>
            <template v-else>
              <el-input v-model="pro.name" size="mini"></el-input>
            </template>
          </div>
          <div class="h24 flex row-between mt10">
            <span class="flex">
              <svg class="icon w20 h20 mr10 ml10 mt2" aria-hidden="true">
                <use xlink:href="#icon-Iconfont"></use>
              </svg>
              <span>
              项目图标
            </span>
            </span>
            <span class="ml20 flex">
              <svg class="icon w20 h20 mr10 ml10 mt2" aria-hidden="true">
                <use :href="prefix+pro.icon"></use>
              </svg>
              <template v-if="type=='edit'">
                <el-button size="mini" @click="openIcon">修改</el-button>
              </template>
            </span>
          </div>
          <div class="h24 flex row-between mt10">
            <span class="flex">
              <svg class="icon w20 h20 mr10 ml10 mt2" aria-hidden="true">
                <use xlink:href="#icon-yanchangxuexinianxian"></use>
              </svg>
              <span>
              开始时间
            </span>
            </span>
            <template v-if="type=='read'">
              <span class="ml20">{{pro.date}}</span>
            </template>
            <template v-else>
              <span class="ml20">
                <el-date-picker
                  size="mini"
                  v-model="elTime"
                  type="date"
                  @change="selTime"
                  placeholder="选择日期">
                </el-date-picker>
              </span>
            </template>
          </div>
          <div class="h24 flex row-between mt10">
            <span class="flex">
              <svg class="icon w20 h20 mr10 ml10 mt2" aria-hidden="true">
                <use xlink:href="#icon-canjiaxiaowaijingsai"></use>
              </svg>
              <span>
              项目难度
            </span>
            </span>
            <template v-if="type=='read'">
              <el-rate disabled text-color="#ff9900" :value=parseFloat(pro.rate)>
              </el-rate>
            </template>
            <template v-else>
              <el-rate text-color="#ff9900" v-model="pro.rate">
              </el-rate>
            </template>
          </div>
          <div class="h24 flex row-between mt10">
            <span class="flex">
              <svg class="icon w20 h20 mr10 ml10 mt2" aria-hidden="true">
                <use xlink:href="#icon-fawenguanli"></use>
              </svg>
              <span>
              对应跳转地址
            </span>
            </span>
            <template v-if="type=='read'">
              <span class="ml20">{{pro.url}}</span>
            </template>
            <template v-else>
              <span class="ml20">
                 <el-input v-model="pro.url" size="mini"></el-input>
              </span>
            </template>
          </div>
          <div class="h24 flex row-between mt10">
            <span class="flex">
              <svg class="icon w20 h20 mr10 ml10 mt2" aria-hidden="true">
                <use xlink:href="#icon-keyanxiangmu"></use>
              </svg>
              <span>
              所属项目
            </span>
            </span>
            <template v-if="type=='read'">
              <span class="ml20">{{proType.filter(value => value.id ==pro.typeId)[0]!==undefined?proType.filter(value => value.id ==pro.typeId)[0].name:''}}</span>
            </template>
            <template v-else>
              <el-select v-model="pro.typeId" placeholder="请选择" size="mini">
                <el-option
                  v-for="item in proType"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </template>
          </div>
        </div>
      </div>
      <div class="manage-body">
        <div class="manage-body-title">
          <svg class="icon w30 h30 mr10" aria-hidden="true">
            <use xlink:href="#icon-zhengmingziliaoshuomingshu"></use>
          </svg>
          <span>
            简介
          </span>
        </div>
        <div class="manage-body-content">
          <template v-if="type==='read'">
             <span>
              {{pro.text}}
            </span>
          </template>
          <template v-if="type==='edit'">
            <el-input type="textarea" v-model="pro.text" :autosize="{ minRows: 2, maxRows: 10}">

            </el-input>
          </template>
        </div>
      </div>
      <div class="manage-body mt60">
        <div class="manage-body-title">
          <svg class="icon w30 h30 mr10" aria-hidden="true">
            <use xlink:href="#icon-anquanjishucuoshi"></use>
          </svg>
          <span>
            技能栈
          </span>
        </div>
        <div class="manage-body-content">
          <ul class="list">
            <transition-group class="list" name="skill-item" tag="div"
                              enter-active-class="animate__animated  animate__swing"
                              leave-active-class="animate__animated  animate__bounceOut">
              <template v-for="(item) in skill">
                <!--循环每一个技能-->
                <li class="list-item" :key="item.id">
                  <div class="list-item-content">
                    <div class="delete-icon" v-if="type=='edit'" @click="deleteSkill(item.id)">
                      <svg class="icon w20 h20" aria-hidden="true">
                        <use xlink:href="#icon-shanchuhang"></use>
                      </svg>
                    </div>
                    <svg class="icon w30 mt8 h30" aria-hidden="true">
                      <use :href=prefix+item.icon></use>
                    </svg>
                    <div class="mt15 mb20 f15">{{item.text}}</div>
                  </div>
                </li>
              </template>
              <!--没有添加技能-->
              <li v-show="asyncCreated==true&&type==='read'&&skill.length===0" class="list-item" key="read">
                <div class="list-item-content" @click="addSkiDialog">
                  <svg class="icon w30 mt8 h30" aria-hidden="true">
                    <use xlink:href="#icon-kongbai"></use>
                  </svg>
                  <div class="mt15 mb20 f15">暂无技能</div>
                </div>
              </li>
              <!--最后的添加-->
              <li v-if="type==='edit'" class="list-item" key="add">
                <div class="list-item-content" @click="addSkiDialog">
                  <svg class="icon w30 mt8 h30" aria-hidden="true">
                    <use xlink:href="#icon-tianjia"></use>
                  </svg>
                  <div class="mt15 mb20 f15">添加</div>
                </div>
              </li>
            </transition-group>
          </ul>
        </div>
      </div>
      <div class="manage-body mt60">
        <div class="manage-body-title">
          <svg class="icon w30 h30 mr10" aria-hidden="true">
            <use xlink:href="#icon-yunhangjilu"></use>
          </svg>
          <span>
            运行截图
          </span>
        </div>
        <div class="manage-body-content">
          <div class="list">
            <template v-if="srcList.length>0">
              <template v-for="(item,index) in srcList">
                <div class="image-item" :key="index">
                  <el-card class="image-item-content">
                    <div class="delete-icon" v-if="type=='edit'" @click="deleteImage(item)">
                      <svg class="icon w20 h20" aria-hidden="true">
                        <use xlink:href="#icon-shanchuhang"></use>
                      </svg>
                    </div>
                    <el-image :fit="'contain'"
                              :src="item" :preview-src-list="srcList"></el-image>
                  </el-card>
                </div>
              </template>
            </template>
            <template v-if="srcList.length==0&&type=='read'">
              <el-card class="image-item-content">
                <el-empty :image-size="80" description="暂无图片"></el-empty>
              </el-card>
            </template>
            <template v-if="type=='edit'">
              <div class="image-item">
                <el-card class="image-item-content">
                  <Imgpond
                    v-model="addImgs"
                    :count="10">
                  </Imgpond>
                </el-card>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="flex flex-center mt30" v-if="type=='edit'">
        <div class="flex flex-center w200">
          <el-button @click="save">确定</el-button>
          <el-button @click="cancel">取消</el-button>
        </div>
      </div>
    </div>
    <create-ski-dialog ref="skiDialog" @addSki="addSki"></create-ski-dialog>
    <create-icon-dialog ref="iconDialog" @change="changeIcon"></create-icon-dialog>
  </el-dialog>
</template>

<script>
  // 导入组件
  import {deleteSki, findSkiById, insertSki} from "@/api/skill";
  import {findProById, updateProById, insertPro, findProTypes, deletePro} from "@/api/project"
  import CreateSkiDialog from "@/components/CreateDialog/CreateSkiDialog";
  import CreateIconDialog from "@/components/CreateDialog/CreateIconDialog";

  export default {
    name: "CreateDialog",
    props: ['curId'],
    components: {CreateSkiDialog, CreateIconDialog},
    data() {
      return {
        //create方法是否结束
        asyncCreated: false,
        //所有项目分类
        proType: [],
        //el控件选择的时间
        elTime: "",
        //dialog固定设置
        show: true,
        //新添加的img
        addImgs: [],
        //当前状态
        type: 'read',
        //产品
        pro: {
          images: ""
        },
        //技能数组
        skill: [],
        //图片数组
        srcList: [],
        //前缀
        prefix: '#',
      }
    },
    async created() {
      //项目类型分类
      this.proType = (await findProTypes()).list
      if (this.curId != -1) {
        //选择项目信息获取
        this.pro = (await findProById({id: this.curId})).list
        //技能获取
        this.skill = (await findSkiById({id: this.curId})).list
        //图片获取
        this.srcList = this.pro.images.split(',').filter(value => value != "")
        //时间转化
        this.elTime = this.pro.date

      } else {
        this.pro = {
          name: '默认名称',
          icon: 'icon-youxuanjingpin',
          typeId: 0,
          date: this.$getdate(new Date()),
          rate: 1,
          url: 'https://www.baidu.com/',
          text: '默认简介'
        }
        this.elTime = this.$getdate(new Date())

        //设置等于编辑
        this.type = 'edit'
      }
      this.asyncCreated = true
    },
    methods: {
      //关闭之前的回调
      beforeClose(done) {
        if (this.type == 'edit') {
          // eslint-disable-next-line no-unused-vars
          this.$confirm('如果关闭修改不会自动保存，确认关闭吗?').then(value => {
            done();
            this.$emit("close")
          })
        } else {
          done()
          this.$emit("close")
        }
      },
      //打开项目图标弹框
      openIcon() {
        this.$refs["iconDialog"].open();
      },
      //改变项目icon
      changeIcon(icon) {
        this.pro.icon = icon
      },
      //选择时间
      selTime() {
        this.pro.date = this.$getdate(this.elTime)
      },
      //取消
      cancel() {
        this.$message.info("已取消修改")
        this.$emit("close")
      },
      //删除技能
      deleteSkill(id) {
        let skill = this.skill.filter(value => value.id != id)
        this.skill = skill
      },
      //删除图片
      deleteImage(url) {
        this.srcList = this.srcList.filter(val => val != url)
      },
      //打开添加框
      addSkiDialog() {
        this.$refs["skiDialog"].open();
      },
      //增加技能
      addSki(ski) {
        ski = {
          id: this.$getRandomCode(8),
          icon: ski['icon'],
          text: ski['text'],
          proId: this.curId,
        }
        this.skill.push(ski)
      },
      //保存
      async save() {
        if (this.curId == '-1') {
          //新增
          let id = this.$getRandomCode(8)
          //图片数组
          let img = [...this.srcList, ...this.addImgs].toString()


          await insertPro(
            {
              name: this.pro.name,
              date: this.pro.date,
              id: id,
              text: this.pro.text,
              url: this.pro.url,
              typeId: this.pro.typeId,
              rate: this.pro.rate,
              icon: this.pro.icon,
              images: img
            }
          )



          //存储技能
          let skill = []
          this.skill.forEach(value => {
            value.proId = id;
            skill.push(value)
          })
          await insertSki(skill)
        } else {
          // 修改
          await deleteSki({proId: this.curId})
          await insertSki(this.skill)

          //图片数组
          let img = [...this.srcList, ...this.addImgs].toString()
          await updateProById(
            {
              name: this.pro.name,
              date: this.pro.date,
              proId: this.curId,
              text: this.pro.text,
              url: this.pro.url,
              typeId: this.pro.typeId,
              rate: this.pro.rate,
              icon: this.pro.icon,
              images: img
            }
          )
        }
        this.$message.success('保存成功')
        this.$emit("close")
      },
      //删除
      async deletePro() {
        if (this.curId == '-1') {
          this.$message.warning('还未编辑保存,目前没有记录在库')
        } else {
          // eslint-disable-next-line no-unused-vars
          this.$confirm('确认删除吗?').then(async value => {
            let res = await deletePro({id: this.curId})
            this.$message.success(res.messsage)
            this.$emit("close")
          })
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  ::v-deep .el-dialog {
    max-height: 700px !important;
    overflow: auto;
  }

  ::v-deep .el-card {
    width: 310px !important;
  }

  ::v-deep .el-textarea__inner {
    font-size: 8px;
    color: $greyLight-3;
  }

  ::v-deep .el-input--mini .el-input__inner {
    height: 24px;
  }

  ::v-deep .el-input {
    width: 140px;
  }

  ::v-deep .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 140px;
  }


  .dialog {
    position: relative;

    // 隐藏滚动条
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }

    .manage-body {
      width: 660px;
      margin: 10px auto;

      .manage-body-title {
        display: flex;
        align-items: center;
        font-size: 17px;
        color: #1b1c26;
        margin-bottom: 20px;
        padding: 0 10px;
        font-weight: 700;

        span {
          color: #ced1d6;
        }
      }


      .manage-body-content {
        font-size: 12px;
        color: $greyLight-3;

        span {
          line-height: 24px;
        }

        .list {
          display: flex;
          flex-wrap: wrap;

          .list-item {


            .list-item-content {
              position: relative;
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 100px;
              margin: 10px 5px 10px;
              padding-top: 20px;
              border-radius: 10px;
              box-shadow: inset 0.1rem 0.1rem 0.5rem $greyLight-1, inset -0.1rem -0.1rem 0.5rem $greyLight-1;
              cursor: pointer;
              transition: all 0.5s;

              .delete-icon {
                position: absolute;
                right: -10px;
                top: -10px;

                svg {
                  transition: transform 0s;
                }
              }

              svg {
                transition: transform 0.5s;
              }

              &:hover {
                box-shadow: inset 0.4rem 0.4rem 0.5rem $greyLight-1, inset -0.4rem -0.4rem 0.5rem $greyLight-1;

                svg {
                  transform: rotate(1turn);
                }
              }
            }

          }

          .image-item {
            margin: 0px 10px 0px;

            .image-item-content {

              .delete-icon {
                position: absolute;
                right: 0px;
                top: 0px;

                svg {
                  transition: transform 0s;
                }
              }

              position: relative;
              display: flex;
              flex-direction: column;
              align-items: center;
              cursor: pointer;

              .image {
                width: 310px;
              }

              &:hover {

              }
            }

          }
        }
      }
    }

    .edit {
      position: fixed;
      margin-left: 710px;
      margin-top: 150px;
    }
  }


  .segmented-control {
    position: relative;
    width: 80px;
    height: 150px;
    background-color: $white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;

    input {
      display: none;
    }

    #tab-1:checked ~ &__color {
      transform: translateX(0);
      // 规定设置过渡效果的 CSS 属性的名称。 	规定完成过渡效果需要多少秒或毫秒。 规定速度效果的速度曲线。
      transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    #tab-2:checked ~ &__color {
      transform: translateY(50px);
      transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }


    &__color {
      position: absolute;
      height: 50px;
      width: 80px;
      border-radius: 10px;
      box-shadow: inset 0.2rem 0.2rem 0.5rem $greyLight-1, inset -0.2rem -0.2rem 0.5rem $white;
    }

    &__1,
    &__2,
    &__3 {
      user-select: none;
      width: 80px;
      height: 50px;
      font-size: 9.8px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: $greyLight-3;

      &:hover {
        color: $color-theme;
      }
    }
  }
</style>
