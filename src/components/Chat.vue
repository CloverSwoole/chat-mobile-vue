<template>
  <div class="chat">
    <div class="head-title">
      <img class="back" v-on:click="back()" v-bind:src="header.back_button.img" v-bind:alt="header.back_button.alt">
      <span class="title">{{header.title.text}}</span>
      <img class="more" v-bind:src="header.more.img" v-bind:alt="header.more.alt">
    </div>
    <div class="msg-lists-body">
      <div class="msg-item" :class="[item.location=='left'?'msg-left':'msg-right']" v-for="item in body_lists">
        <img v-bind:src="item.head_img" alt="">
        <span>{{item.content.body}}</span>
      </div>
    </div>
    <div class="input-box">
      <img class="audio" v-bind:src="input_box.audio.img">
      <input type="text">
      <img class="icon" v-bind:src="input_box.icon.img">
      <img class="add" v-bind:src="input_box.add.img">
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    name: "Chat",
    data() {
      return {
        header: {
          back_button: {
            img: require('./../assets/images/back.png'),
            alt: '返回'
          },
          title: {
            text: "测试吧"
          },
          more: {
            img: require('./../assets/images/icon_more.png'),
            alt: '更多'
          }
        },
        body_lists: [
          {
            location: "left",
            head_img: require('./../assets/images/head_img.png'),
            content: {
              type: "text", // 消息类型 img video text link audio location
              body: "测试消息",
            }
          },
          {
            location: "right",
            head_img: require('./../assets/images/head_img.png'),
            content: {
              type: "text", // 消息类型 img video text link audio location
              body: "测试消息",
            }
          },
          {
            location: "left",
            head_img: require('./../assets/images/head_img.png'),
            content: {
              type: "text", // 消息类型 img video text link audio location
              body: "测试消息",
            }
          },
          {
            location: "right",
            head_img: require('./../assets/images/head_img.png'),
            content: {
              type: "text", // 消息类型 img video text link audio location
              body: "测试消息",
            }
          },
          {
            location: "left",
            head_img: require('./../assets/images/head_img.png'),
            content: {
              type: "text", // 消息类型 img video text link audio location
              body: "测试消息",
            }
          },
          {
            location: "right",
            head_img: require('./../assets/images/head_img.png'),
            content: {
              type: "text", // 消息类型 img video text link audio location
              body: "测试消息",
            }
          },
        ],
        input_box: {
          audio: {
            img: require('./../assets/images/audio.png')
          },
          input: {},
          // 表情
          icon: {
            img: require('./../assets/images/biaoqing.png')
          },
          // 附加选项
          add: {
            img: require('./../assets/images/add.png')
          }
        }
      };
    },
    methods:{
      back:function () {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>
  .chat {
  }

  .chat .head-title {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 5%;
    position: fixed;
    top: 0;
    background: #eaeaea;
    align-items: center;
  }

  .chat .head-title .back {
    width: 20px;
    height: 20px;
    margin: 0 8px;
  }

  .chat .head-title .title {
    flex: 1;
  }

  .chat .head-title .more {
    width: 20px;
    height: 20px;
    margin: 0 8px;
  }

  .msg-lists-body {
    margin-top: 46px;
    margin-bottom: 20px;
    background: #fbfbfb;
    height: auto;
  }

  .input-box {
    position: fixed;
    bottom: 0;
    background: #ccc;
    width: 100%;
    display: flex;
  }

  .input-box input {
    flex: 1;
    outline: none;
    background: #eee;
    border: 1px solid #ccc;
  }

  .msg-item {
    margin: 10px 0;
  }

  .msg-item img {
    width: 30px;
    height: 30px;
    margin: 0 5px;
  }

  .msg-item span {
    background: #fff;
    border-radius: 5px;
    max-width: 200px;
    display: flex;
    align-items: center;
    text-align: left;
    padding: 0 10px;
  }

  .input-box .audio {
    width: 20px;
  }

  .input-box .icon {
    width: 20px;
  }

  .input-box .add {
    width: 20px;
  }

  .msg-left {
    display: flex;
  }

  .msg-right {
    display: flex;
    flex-direction: row-reverse;
  }
</style>
