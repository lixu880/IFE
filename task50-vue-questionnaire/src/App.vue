<template>
  <div class="app">
    <header><a href="#"><i class="iconfont icon-wen"></i><h1>简问卷</h1></a>
      <a href="#/newqn">
        <h2>新建问卷</h2>
      </a>
      <a href="#/list">
        <h2>我的问卷</h2>
      </a>
    </header>
    <router-link to="/"></router-link>
    <router-link to="/newqn"></router-link>
    <router-link to="/list"></router-link>
    <transition enter-active-class="animated zoomIn">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'app',
  };

</script>
<style lang="scss">
  body,
  div,
  h1,
  h2,
  h3,
  h4,
  form,
  input,
  img,
  ul,
  ol,
  li,
  dl,
  dt,
  dd,
  p {
    margin: 0;
    padding: 0;
    font-family: "Microsoft Yahei";
  }
  
  li {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
  
  html,
  body {
    width: 100%;
    height: 100%;
    background: #efefef;
  }
  
  @font-face {
    font-family: "iconfont";
    src: url('./fonts/icons/iconfont.eot?t=1484105018974');
    /* IE9*/
    src: url('./fonts/icons/iconfont.eot?t=1484105018974#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('./fonts/icons/iconfont.woff?t=1484105018974') format('woff'), /* chrome, firefox */
    url('./fonts/icons/iconfont.ttf?t=1484105018974') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./fonts/icons/iconfont.svg?t=1484105018974#iconfont') format('svg');
    /* iOS 4.1- */
  }
  
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    color: #2c3e50;
    position: relative;
    >header {
      background: #23b1e8;
      width: 100%;
      height: 50px;
      line-height: 50px;
      a {
        height: 100%;
        display: inline-block;
        color: #fff;
        h1,
        h2 {
          font-weight: 400;
          margin-left: 20px;
        }
        .icon-wen:before {
          content: "\e80b";
          font-size: 40px;
          color: #fff;
          vertical-align: middle;
          margin-left: 20px;
        }
        h1 {
          font-size: 25px;
          display: inline;
        }
        h2 {
          font-size: 16px;
        }
      }
    }
  }

</style>
