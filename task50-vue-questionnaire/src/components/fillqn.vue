<template>
  <div class="new-qn" v-if="fillQns">
    <h2 class="title">{{fillQns.title}}</h2>
    <hr>
    <div class="qnlist" v-for="(qn, index1) in fillQns.qns">
      <div><span>{{'Q' + (index1 + 1) + '：'}}</span><span class="qn-title">{{qn.question}}</span></div>
      <ul v-if="qn.type != 'textarea'">
        <li class="item" v-for="(item, index2) in qn.options">
          <input class="type" type="radio" :name="'item' + index1" v-if="qn.type === 'radio'" :value="index2" v-model="qn.value">
          <input class="type" type="checkbox" :name="'item' + index1" v-if="qn.type === 'checkbox'" :value="index2" @click="checkValue(qn, $event)">
          <span class="options">{{qn.options[index2]}}</span>
        </li>
      </ul>
      <div v-if="qn.type === 'textarea'">
        <p>{{qn.options}}</p>
        <textarea class="textarea" v-model="text" @blur="textValue(qn)"></textarea>
      </div>
    </div>
    <hr>
    <footer>
      <a class="btns" @click="saveFill"><span>提交问卷</span></a>
    </footer>
  </div>
</template>
<script>
  export default {
    name: 'fillqn',
    data() {
      return { text: '' };
    },
    computed: {
      fillQns() {
        return this.$store.state.fillQns;
      },
    },
    // 当fillQns = null时跳list页
    created() {
      if (!this.fillQns) {
        this.$router.push('/list');
      }
    },
    methods: {
      // checkValue(qn, e) {
      //   if (e.target.checked) {
      //     qn.value.push(e.target.value);
      //   }
      // },
      textValue(qn) {
        const obj = qn;
        if (this.text) {
          obj.value += 1;
        }
      },
      saveFill() {
        this.$store.commit('saveFill');
        this.$router.push('/list');
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
