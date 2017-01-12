<template>
  <div class="new-qn">
    <input class="title" type="text" autocomplete="off" placeholder="请填写问卷标题">
    <hr>
    <section class="qn-tag" :class="{show: tag}">
      <div class="radio"><i class="iconfont icon-1"></i>单选</div>
      <div class="checkbox"><i class="iconfont icon-duoxuan"></i>多选</div>
      <div class="text"><i class="iconfont icon-c_icon2"></i>简答</div>
    </section>
    <section class="add-qn" @click="tag = !tag"><i class="iconfont icon-jia"></i>添加问题</section>
    <hr>
    <footer>
      <div class="deadline"><span>问卷截止日期：</span><input type="text"></div>
      <div class="btns"><a>保存问卷</a><a>发布问卷</a></div>
    </footer>
  </div>
</template>
<script>
  export default {
    name: 'newQn',
    data() {
      return {
        tag: false,
      };
    },
  };

</script>
<style lang="scss" scoped> 
  .new-qn {
    width: 70%;
    position: absolute;
    top: 20%;
    left: 15%;
    background: #fff;
    box-shadow: 0 5px 15px #999;
    border-radius: 5px;
    text-align: center;
    padding: 25px;
    .title {
      width: 100%;
      height: 40px;
      border: none;
      text-align: center;
      font-size: 30px;
    }
    >hr {
      margin: 20px 0;
    }
    .add-qn {
      height: 100px;
      margin: 20px;
      background: #eee;
      border: 1px solid #ccc;
      cursor: pointer;
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
    .deadline {
      float: left;
      margin-left: 40px;
    }
    .btns {
      float: right;
      margin-right: 40px;
      >a {
        margin: 0 10px;
        padding: 5px 15px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 3px 6px #999;
        &:hover {
          color: #fff;
          background: #23b1e8;
        }
      }
    }
    .qn-tag {
      height: 0;
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
  }

</style>
