
<template>
  <div >
    <router-view class="index"/>
    <div style="background-color:#F26763;height: 150px;;width: 100%;padding-top:50px;padding-left:25px;box-sizing: border-box;">
      <van-sticky >
        <van-cell @click="login" is-link  style="background-color:#F26763;">
            <div style="color:white;font-size:20px;"><strong>未登录</strong></div>
            <div style="color:white;margin-top:5px">ID：？？？</div>
        
          
        </van-cell>
        
      </van-sticky>
      
    </div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
    login(){
      this.$router.push({path:'/mylogin'});
    }
  },
};
</script>

<style>

</style>