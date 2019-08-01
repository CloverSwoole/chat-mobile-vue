<template>
  <div id="foot">
    <ul>
      <li v-for="item in footer" v-on:click="go_to(item.path)"><img v-bind:src="item.img" v-bind:alt="item.text"><span>{{item.text}}</span></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "foot",
    data() {
      return {
        footer: [
          {img: require('./../assets/images/msg.png'), text: "消息",path:"MsgLists"},
          {img: require('./../assets/images/firend.png'), text: "通讯录",path:"Friends"},
          {img: require('./../assets/images/find.png'), text: "发现",path:"Find"},
          {img: require('./../assets/images/my.png'), text: "我的",path:"My"},
        ]
      };
    },
    methods:{
      /**
       * 跳转到指定的导航页
       * @param path
       */
      go_to(path){
        this.$router.push({path:path});
      }
    }
  }
</script>

<style scoped>
  #foot {
    width: 100%;
    height: 55px;
    position: fixed;
    background: #eee;
    bottom: 0;
  }

  #foot ul {
    height: 100%;
    display: flex;
  }
  #foot ul li {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1;
    list-style-type: none;
    align-items: center;
    justify-content: center;
  }
  #foot ul li img {
    width: 20px;
  }
</style>
