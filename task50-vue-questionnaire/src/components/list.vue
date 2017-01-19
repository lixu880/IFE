<template>
  <table v-if="qnss.length != 0">
    <thead>
      <tr>
        <th class="title">标题</th>
        <th class="time">截止日期</th>
        <th class="status">状态</th>
        <th class="handle">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="qns in qnss">
        <td>{{qns.title}}</td>
        <td>{{qns.deadline}}</td>
        <td :class="statusStyle(qns)">{{statusText(qns)}}</td>
        <td class="handle-btns"><span v-if="qns.status == 0" @click="publish(qns)">发布问卷</span><span v-if="qns.status == 0" @click="editQns(qns)">编辑问卷</span><span
            v-if="qns.status == 1" @click="fillQns(qns)">填写问卷</span><span v-if="qns.status != 0" @click="viewData(qns)">查看数据</span><span @click="delQns(qns)">删除问卷</span></td>
      </tr>
    </tbody>
  </table>
</template>
<script>
  export default {
    name: 'list',
    // 如果没有数据跳空白页

    computed: {
      qnss() {
        return this.$store.state.qnss;
      },
    },
    created() {
      if (this.qnss.length === 0) {
        this.$router.push('/');
      }
    },
    methods: {
      statusText(qns) {
        const status = qns.status;
        switch (status) {
          case 0:
            return '已保存';
          case 1:
            return '已发布';
          case 2:
            return '已截止';
          default:
            return '';
        }
      },
      statusStyle(qns) {
        const status = qns.status;
        switch (status) {
          case 0:
            return 'red';
          case 1:
            return 'green';
          case 2:
            return 'gray';
          default:
            return '';
        }
      },
      delQns(qns) {
        this.$store.commit('delQns', qns);
      },
      publish(qns) {
        this.$store.commit('updateQns', qns);
      },
      editQns(qns) {
        this.$store.commit('editQns', qns);
        this.$router.push('/newqn');
      },
      fillQns(qns) {
        this.$store.commit('fillQns', qns);
        this.$router.push('/fillqn');
      },
      viewData(qns) {
        this.$store.commit('viewData', qns);
        this.$router.push('/viewdata');
      },
    },
    watch: {
      // 监控qnss，删除至空的时候跳空白页
      qnss(curval) {
        if (curval.length === 0) {
          this.$router.push('/');
        }
      },
    },
  };

</script>
<style lang="scss" scoped>
  table {
    width: 60%;
    margin: 10% auto;
    // padding: 30px;
    background: #fff;
    border: 2px solid #42b983;
    // box-shadow: 0 5px 15px #999;
    border-radius: 5px;
    position: relative;
    text-align: center;
    line-height: 1.5;
    th {
      height: 50px;
      color: #fff;
      background: #42b983;
      font-size: 18px;
      font-weight: 700;
      &.title {
        width: 30%;
      }
      &.time {
        width: 20%;
      }
      &.status {
        width: 10%;
      }
      &.handle {
        width: 40%;
      }
    }
    td {
      height: 50px;
      background: #d4f6fc;
      &.status-color {
        color: #f00;
      }
      &.handle-btns {
        >span {
          margin: 0 10px;
          padding: 5px 10px;
          border: 1px solid rgba(0, 0, 0, .6);
          border-radius: 5px;
          cursor: pointer;
        }
      }
      &.red {
        color: red;
      }
      &.green {
        color: green;
      }
      &.gray {
        color: gray;
      }
    }
  }

</style>
