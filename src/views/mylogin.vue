
<template>
  <div >
    
    <!-- 头顶 -->
    <div style="background-color:#F26763;height: 150px;;width: 100%;padding-top:50px;padding-left:25px;box-sizing: border-box;">
      <van-sticky >
        <van-cell is-link @click="showPopup" style="background-color:#F26763;">
          <van-image width="50" height="50" style="float:left;margin-right:20px"  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.05sun.com%2Fattachment%2Fsoft%2F2021%2F0727%2F111118_78655911.png&refer=http%3A%2F%2Fimg.05sun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672975055&t=7972e52edaa47be4a604a5e4fd4b6559"/>
          <div style="color:white;font-size:20px;"><strong>游客_123</strong></div>
          <div style="color:white;margin-top:5px">ID：1234567890</div>
        </van-cell>
        <van-popup v-model="show" round position="bottom" :style="{ height: '90%' }">
          <div style="text-align: center;margin-top:50px">内容</div>
        </van-popup>
      </van-sticky>
      
    </div>
    <!-- 头顶下方 -->
    <div style="background-color:#F4F4F4;width:100%;height:500px;">
      <div>
        <van-cell is-link @click="showPopup"><strong>我的账户</strong>
          <div style="color: #cecece;">书币：0 书券：0 金币：0</div>
        </van-cell>
        <van-popup v-model="show" round position="bottom" :style="{ height: '90%' }">
          <div style="text-align: center;margin-top:50px">内容</div>
        </van-popup>
      </div>
      <div style="margin-top:5px">
        <van-cell is-link @click="showPopup"><strong>我的信息</strong>
        </van-cell>
        <van-popup v-model="show" round position="bottom" :style="{ height: '90%' }">
          <div style="text-align: center;margin-top:50px">内容</div>
        </van-popup>
      </div>
      <div style="margin-top:5px">
        <van-cell is-link @click="showPopup"><strong>阅读历史</strong>
        </van-cell>
        <van-popup v-model="show" round position="bottom" :style="{ height: '90%' }">
          <div style="text-align: center;margin-top:50px">内容</div>
        </van-popup>
      </div>
      <div style="margin-top:5px">
        <van-cell is-link @click="showPopup"><strong>我的话题</strong>
        </van-cell>
        <van-popup v-model="show" round position="bottom" :style="{ height: '90%' }">
          <div style="text-align: center;margin-top:50px">内容</div>
        </van-popup>
      </div>
      <div style="margin-top:5px">
        <van-cell is-link @click="showPopup"><strong>我的书单</strong>
        </van-cell>
        <van-popup v-model="show" round position="bottom" :style="{ height: '90%' }">
          <div style="text-align: center;margin-top:50px">内容</div>
        </van-popup>
      </div>
      <div style="margin-top:5px">
        <van-cell is-link @click="showPopup"><strong>意见反馈</strong>
        </van-cell>
        <van-popup v-model="show" round position="bottom" :style="{ height: '90%' }">
          <div style="text-align: center;margin-top:50px">内容</div>
        </van-popup>
      </div>
      <div style="margin-top:5px">
        <van-cell is-link @click="showPopup"><strong>青少年模式</strong>
        </van-cell>
        <van-popup v-model="show" round position="bottom" :style="{ height: '90%' }">
          <div style="text-align: center;margin-top:50px">内容</div>
        </van-popup>
      </div>
      
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
  },
};
</script>
