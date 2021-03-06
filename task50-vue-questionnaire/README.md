<a href="http://win5do.cc/jianqn/#/" target="_blank"><h3 id="readme">vue.js打造的问卷管理webapp</h3></a>

1. 简介

    这是根据<a href="http://ife.baidu.com/2016/task/detail?taskId=50" target="_blank">百度前端技术学院第50项任务</a>写的一个小型问卷网站，用vue.js打造成单页面web应用。可以创建、保存、填写问卷，能够统计填写结果并以图表统计的方式呈现出来。

2. 技术栈
  - vue全家桶：vue.js + vuex + vue-router
  - es6
  - 数据从localstore存取
  - 小图标：fonticon
  - 数据图表：echarts
  - 动画引入了animate.css
  - 日历组件：vue-datepicker
  - 工程化：vue-cli + webpack + npm构建及打包，eslint校验代码规范

3. 主要功能
  - 大致结构：一个主界面，有新建问卷、问卷列表、编辑问卷、填写问卷、查看数据这五个主组件，组件通过路由跳转。一个modal弹框提示公用组件。
  - 新建问卷：可以选择单选、多选、简答三种问题，问题和选项内容input里修改，通过v-model双向绑定。选择题可以添加和删除选项，问题可以删除、上下移动排序。
  - 问卷列表：对已保存的问卷进行，编辑、发布、删除、查看数据等操作。问卷有已保存、已发布、已过期三种状态，根据不同的状态渲染不同的操作按钮，比如发布之后就不能编辑了。
  - 编辑问卷：跟新建问卷功能相同，将之前保存的问卷数据传递编辑页二次编辑保存。
  - 填写问卷：填写发布的问卷，保存时将填写的结果保存进数据中。
  - 查看数据：处理填写问卷的数据，处理成echarts配置所需的data格式，用echarts生成图表，单选是饼图，多选是雷达图，简答是柱形图。
  - 弹框：根据各组件中不同的场景给出相应的提示

4. 碰到和解决的问题
  - 组件间的数据传递：开始的时候没打算用vuex，因为没用过(⊙﹏⊙)b，vue文档里提到非父子组件通信的一种方法是创建一个空的vue实例作为bus，通过$emit和$on触发和监听事件，在回调中传输数据，但是两个组件是路由跳转的关系，通信失败只好考虑vuex了。看了下vuex文档大概了解下用法，就用到了项目里了，在vue的chrome dev插件里也能监控store中的数据变化。文档中提到更改 Vuex 的 store 中的状态的唯一方法是提交 mutation，但我发现我的数据都是obj，直接修改键值也是可以更改store中的状态的，但是为了更好的追踪数据动向，还是选择遵守vuex的规矩。不过编辑问卷组件中，对问题的编辑没有采用Mutation提交更改，而是直接通过input的v-model直接修改了。如果每个input的编辑都去Mutation，是不是搞复杂了？
  - 处理问卷填写的结果：问卷填写完成，需要得到选中的选项，监听点击事件或者双向绑定radio或checkbox的数据似乎都不好使，这个时候就怀念起jquery的好了，点击提交直接检查checked属性就可以得到结果了。好在vue也能通过ref直接操作dom，将结果存入数组中，然后查看数据时再通过计算处理成echarts图表所需的配置项。echarts是很炫酷，不过一大堆配置项搞得头都大了。
  - 日历组件：本以为github上这种组件应该有一大堆，找了半天不是vue1.0老组件的就是没有文档，终于找到一个文档写的挺全的还是中国人写的，虽然有个小bug，就是设置了起始日期但是可以选中上个月的日期。吐槽一句，看api不如自己造轮子有快感，但是写业务的话还是轮子快。
  - 单机的问卷：任务需要应该大部分满足了，但是有个很尴尬的问题就是问卷虽然能填能看但是只能自己填，数据储存在本地localstore里，岂不是一个单机的问卷。于是乎想着怎么把数据弄到服务器上去，在填写也通过ajax请求数据。但是对数据库和后端的知识欠缺，只好现学现卖。在慕课上跟着sccot老师学nodejs，刚捣腾了一下fs模块，然后发现我买的阿里云虚拟主机并不能部署node，只支持php，作为一个前端门都没入的菜鸡还是先专注前端吧，卒！

5. 总结

    几个月前做IFE前面的任务时偷瞄了一下后面的任务，看到别的同学提交的用react完成的作品，感觉好炫酷好高大上，看了一下任务要求顿时让我望而却步。后来听说只会jq已经找不到工作了，开始接触react、vue，学react的时候感觉一脸懵逼，有着中文文档且更好上手的vue显得更可爱。vue教程看了一遍，尤大的几个官方demo都让我学到了不少，想找个东西练练手，于是想起了这个任务，这种频繁变更dom的场景很适合这种mvvm框架。花了三四个星期，边学变做，开始只想试试vue，最后router、vuex都用上了，感觉很炫酷的图表也借助echarts实现了，之前感觉不可能的任务终于完成，成就感满满。vue这种数据驱动的mvvm框架，除了写一些式样、模板，大部分精力放在数据和逻辑上，这种编程体验真的非常爽！尤大写出这种框架真是太厉害了，真让人自惭形秽。不过想想自己之前看一些入门的教程都觉得吃力，现在去看就觉得挺简单了，冰冻三尺非一日之寒，别总待在舒适区，每天进步一点，可能离大神还很遥远，但也比今天更好！
