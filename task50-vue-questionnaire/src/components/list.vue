<template>
  <div class="blank">
    <a class="new" href="#/newqn"><i class="iconfont icon-jia"></i>新建问卷</a>
  </div>
</template>
<script>
  import bus from '../main';

  export default {
    name: 'list',
    data() {
      return {
        qnss: []
      }
    },
    created() {
      bus.$on('save', (data) => {
        qnss.push(data);
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
