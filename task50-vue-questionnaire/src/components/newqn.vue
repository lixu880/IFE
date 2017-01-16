<template>
  <div class="new-qn">
    <input class="title" type="text" autocomplete="off" placeholder="请填写问卷标题" v-model="aQns.title">
    <hr>
    <div class="qnlist" v-for="(qn, index1) in aQns.qns">
      <div><span>{{'Q' + (index1 + 1) + '：'}}</span><input class="qn-title" type="text" v-model="qn.question" @focus="select"></div>
      <ul v-if="qn.type != 'textarea'">
        <li class="item" v-for="(item, index2) in qn.options">
            <input class="type" :type="qn.type" :name="'item' + index1">
            <input class="options" type="text" v-model="qn.options[index2]" @focus="select">
            <i class="iconfont icon-x" @click="removeOp(item, qn)" v-if="qn.options.length > 2"></i>
        </li>
        <li class="addOp" @click="addOp(qn)"><i class="iconfont icon-jia"></i></li>
      </ul>
      <textarea class="textarea" v-model="qn.options[0]" v-if="qn.type == 'textarea'" @focus.once="select"></textarea>
      <div>
        <button @click="removeQn(qn)">删除</button>
        <button @click="copyQn(qn)">复用</button>
        <button @click="moveUp(qn)" :disabled="index1 == 0">上移</button>
        <button @click="moveDown(qn)" :disabled="index1 == aQns.qns.length - 1">下移</button>
      </div>
    </div>
    <section class="qn-tag" :class="{show: tag}">
      <div class="radio" @click="addRadio"><i class="iconfont icon-1"></i>单选</div>
      <div class="checkbox" @click="addCheckBox"><i class="iconfont icon-duoxuan"></i>多选</div>
      <div class="text" @click="addText"><i class="iconfont icon-c_icon2"></i>简答</div>
    </section>
    <section class="add-qn" @click="tag = !tag"><i class="iconfont icon-jia"></i>添加问题</section>
    <hr>
    <footer>
      <div class="deadline"><span>问卷截止日期：</span><input type="text"></div>
      <a class="btns" @click="saveQns" href="#/list"><span>保存问卷</span></a>
    </footer>
  </div>
</template>
<script>
  export default {
    name: 'newQn',
    data() {
      return {
        tag: false,
        aQns: {
          title: '',
          deadline: '',
          status: 1,
          qns: [],
        },
      };
    },
    methods: {
      addRadio() {
        this.aQns.qns.push({
          question: '单选题',
          type: 'radio',
          options: ['选项1', '选项2', '选项3'],
        });
      },
      addCheckBox() {
        this.aQns.qns.push({
          question: '多选题',
          type: 'checkbox',
          options: ['选项1', '选项2', '选项3'],
        });
      },
      addText() {
        this.aQns.qns.push({
          question: '简答题',
          type: 'textarea',
          options: ['问题描述'],
        });
      },
      removeQn(qn) {
        const tQns = this.aQns.qns;
        tQns.splice(tQns.indexOf(qn), 1);
      },
      moveDown(qn) {
        const tQns = this.aQns.qns;
        const qnIndex = tQns.indexOf(qn);
        tQns.splice(qnIndex, 1);
        tQns.splice(qnIndex + 1, 0, qn);
      },
      moveUp(qn) {
        const tQns = this.aQns.qns;
        const qnIndex = tQns.indexOf(qn);
        tQns.splice(qnIndex, 1);
        tQns.splice(qnIndex - 1, 0, qn);
      },
      copyQn(qn) {
        const tQns = this.aQns.qns;
        tQns.splice(tQns.indexOf(qn) + 1, 0, qn);
      },
      select(e) {
        e.target.select();
      },
      removeOp(item, qn) {
        if (qn.options.length > 2) {
          qn.options.splice(qn.options.indexOf(item), 1);
        }
      },
      addOp(qn) {
        qn.options.push(`选项${qn.options.length + 1}`);
      },
      saveQns() {
        this.$store.commit('saveQns', this.aQns);
      },
    },
  };

</script>
<style lang="scss" scoped>
  .new-qn {
    width: 60%;
    margin: 10% auto;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 5px 15px #999;
    border-radius: 5px;
    padding: 25px;
    position: relative;
    .title {
      width: 100%;
      height: 40px;
      border: none;
      text-align: center;
      font-size: 30px;
    }
    // 分割线
    >hr {
      margin: 20px 0;
    }
    // 添加问卷的大框
    .add-qn {
      height: 100px;
      margin: 20px;
      text-align: center;
      background: #eee;
      border: 1px solid #ccc;
      cursor: pointer;
      background: rgba(250, 255, 158, 0.59);
      &:before {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
      }
      .icon-jia:before {
        content: "\e618";
        font-size: 24px;
        vertical-align: middle;
        margin-right: 10px;
      }
    }
    // 日期选择
    .deadline {
      float: left;
      margin-left: 40px;
    }
    // 保存发布按钮
    .btns {
      float: right;
      margin-right: 40px;
      >span {
        margin: 0 10px;
        padding: 5px 15px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 3px 6px #999;
        &:hover {
          color: #fff;
          background: #42B983;
        }
      }
    }
    // 需要添加问卷的类型
    .qn-tag {
      height: 0;
      margin-top: 20px;
      overflow: hidden;
      text-align: center;
      transition: height .3s ease;
      &.show {
        height: 55px;
      }
      >div {
        display: inline-block;
        margin: 0 10px;
        padding: 10px 20px;
        background: #eee;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 3px 6px #999;
        cursor: pointer;
        >i {
          margin-right: 5px;
          font-size: 18px;
          vertical-align: middle;
        }
        .icon-1:before {
          content: "\e624";
        }
        .icon-duoxuan:before {
          content: "\e608";
        }
        .icon-c_icon2:before {
          content: "\e602";
        }
      }
    }
    // 问卷列表
    .qnlist {
      padding: 20px 40px;
      font-size: 18px;
      &:hover {
        background: #fef1e8;
        input,
        textarea {
          background: #fef1e8;
        }
      }
      input {
        border: none;
      }
      .item {
        height: 25px;
        margin: 10px 0 10px 30px;
        &:hover {
          .icon-x:before {
            content: "\e62a";
            color: #f00;
          }
        }
        .type {
          width: 20px;
          height: 20px;
        }
      }
      // 添加选项
      .addOp {
        height: 25px;
        text-align: center;
        cursor: pointer;
        &:hover {
          border: 1px dashed #000;
          .icon-jia:before {
            content: "\e618";
            vertical-align: middle;
          }
        }
      }
      .qn-title {
        height: 25px;
        font-size: 20px;
      }
      .type {
        margin-right: 5px;
        vertical-align: middle;
      }
      .options {
        height: 20px;
        font-size: 16px;
      }
      .textarea {
        width: 100%;
        height: 60px;
        margin: 10px 0;
        font-size: 16px;
      }
    }
  }

</style>
