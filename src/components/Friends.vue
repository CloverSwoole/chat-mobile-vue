<template>
  <div class="friends">
    <div class="header-title">
      <span>通讯录</span>
      <img style="width: 20px;height: 20px;" src="./../assets/images/addfriend.png">
    </div>
    <foot></foot>
  </div>
</template>

<script>
  import foot from "./foot";
    export default {
        name: "Friends",
      components:{foot},
    }
</script>

<style scoped>

</style>
