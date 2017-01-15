<template>
  <table>
    {{qnss}}
    <thead>
      <tr>
        <th>标题</th>
        <th>时间</th>
        <th>状态</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="qns in qnss">
        <td>{{qns.title}}</td>
        <td>{{qns.deadline}}</td>
        <td>{{qns.status}}</td>
        <td><span>发布/填写</span><span>数据</span><span>删除</span></td>
      </tr>
    </tbody>
  </table>
</template>
<script>
  import bus from '../main';

  export default {
    name: 'list',
    data() {
      return {
        msg: {},
        qnss: [
          {
            title: 'aaa',
            deadline: '1900',
            status: 'dead',
            qns: [],
          },
          {
            title: 'bbb',
            deadline: '1991',
            status: 'alive',
            qns: [],
          },
        ],
      };
    },
    beforeCreated() {
      bus.$on('save', (data) => {
        this.msg = data;
      });
    },
  };

</script>
<style lang="scss" scoped>
  .blank {
    width: 70%;
    position: absolute;
    top: 20%;
    left: 15%;
    background: #fff;
    box-shadow: 0 5px 15px #999;
    border-radius: 5px;
  }

</style>
