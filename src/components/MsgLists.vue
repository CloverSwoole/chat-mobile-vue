<template>
  <div class="msg-lists">
    <div class="header">
      <span>微信</span>
      <img src="./../assets/images/add.png">
    </div>
    <div class="search">
      <input type="text" placeholder="搜索">
    </div>
    <div class="tips">
      XXXX设备已经登录
    </div>
    <hr style="margin: 5px 0;">
    <div class="msg-box">
      <div class="msg-item" v-on:click="goDetail">
        <div class="left">
          <img class="head_img" src="./../assets/images/head_img.png">
        </div>
        <div class="right">
          <span class="item-name">测试名称</span>
          <!--<span class="last-msg">[五条]测试消息，你好在吗？</span>-->
          <span class="last-msg">在吗？</span>
        </div>
      </div>
      <div class="msg-item" v-on:click="goDetail">
        <div class="left">
          <img class="head_img" src="./../assets/images/head_img.png">
        </div>
        <div class="right">
          <span class="item-name">测试名称</span>
          <!--<span class="last-msg">[五条]测试消息，你好在吗？</span>-->
          <span class="last-msg">在吗？</span>
        </div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
  import foot from "./foot";

  export default {
    name: "MsgLists",
    data() {
      return {};
    },
    components: {foot},
    methods: {
      goDetail() {
        this.$router.push({name: "Chat"});
      },
    },
  }
</script>

<style scoped>
  .msg-lists .header {
    display: flex;
    background: #ececec;
    height: 30px;
    align-items: center;
  }

  .msg-lists .header span {
    flex: 1;
    width: 80%;
  }

  .msg-lists .header img {
    width: 20px;
    height: 20px;
  }
  .msg-box{
    display: flex;
    flex-direction: column;
  }

  .msg-box .msg-item .left .head_img {
    width: 40px;
    height: 40px;
  }

  .search {
    margin: 5px 0;
  }

  .search input {
    outline: none;
    text-align: center;
  }

  .tips {
    width: 100%;
    text-align: center;
    background: #eee;
  }

  .msg-box {
    display: flex;
  }

  .msg-item {
    background: #eee;
    flex: 1;
    display: flex;
    flex-direction: row;
    margin: 1px 0;
    padding: 3px;
  }


  .msg-item .left {
    padding: 0 10px;
  }
  .msg-item .right {
    flex: 1;
    text-align: left;
    display: flex;
    flex-direction: column;
  }
  .msg-item .right .item-name{

  }
  .msg-item .right .last-msg{

  }

</style>
