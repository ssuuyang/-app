<template>
  <div id="app">
    <router-view></router-view>
    <div>
      <van-tabbar
        v-model="active"
        active-color="black"
        inactive-color="#CECECE"
      >
        <van-tabbar-item replace to="/" icon="home-o"
          >书架</van-tabbar-item
        >
        <van-tabbar-item replace to="/shop" icon="bag-o"
          >书城</van-tabbar-item
        >
        <van-tabbar-item replace to="/classify" icon="apps-o"
          >分类</van-tabbar-item
        >
        <van-tabbar-item replace to="/my" icon="contact">我的</van-tabbar-item>
      </van-tabbar>
    </div>
    <!-- <div class="bottom">
        <router-link to="/" tag="li">书架</router-link>
        <router-link to="/shop" tag="li">书城</router-link>
        <router-link to="/classify" tag="li">分类</router-link>
        <router-link to="/my" tag="li">我的</router-link>
      </div> -->
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    
    return {
      active: 0,
      logolist:[]
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },

    
  },
};
</script>

