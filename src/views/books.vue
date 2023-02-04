<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-12-04 17:35:26
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-12-10 14:29:54
 * @FilePath: \粤嵌上课记录\阅读app\bookapp\src\views\books\books.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- <van-nav-bar
      left-text="饭团追书"
      right-text="按钮"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    /> -->
    <div style="height: 50px;width: 100%;padding:10px;box-sizing: border-box;">
      <img class="fl" style="line-height: 50px;height: 40px;width: 40px;" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.05sun.com%2Fattachment%2Fsoft%2F2021%2F0727%2F111118_78655911.png&refer=http%3A%2F%2Fimg.05sun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672975055&t=7972e52edaa47be4a604a5e4fd4b6559" alt="">
      <span class="fl" style="color:#FEBB19;font-size: 20px;line-height: 50px;">饭团追书</span>
    </div>
      <!-- 好书尝鲜 内容-->
    <div @click="showPopup(obj)" v-for="obj in one"
        :key="obj.id"
        style="height: 100px; width: 100%;margin-bottom:30px">
          <!-- 封面 -->
          <img
            :src="obj.cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <p style="font-size: 15px">{{ obj.title }}</p>
          <!-- 简介 -->
          <div
            style="
              font-size: 12px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              color: #919398;
              margin-top: -8px;
            "
          >
            {{ obj.shortIntro }}
          </div>
          <!-- 作者 -->
          <div style="font-size: 12px;margin-top:8px;#919398" class="fl">
            {{ obj.author }}
          </div>
          <!-- 评分 -->
          <div
            class="fr"
            style="
              height: 17px;
              width: 50px;
              font-size: 12px;
              color: red;
              margin-top: 8px;
              border: 1px solid red;
              border-radius: 5px;
              text-align: center;
              font-weight: bolder;
            "
          >
            {{ obj.rating.score }}分
          </div>
          <!-- 类型 -->
          <div
            class="fr"
            style="
              height: 17px;
              width: 60px;
              font-size: 12px;
              color: #919398;
              margin-top: 8px;
              border: 1px solid #e6e6e6;
              border-radius: 5px;
              text-align: center;
            "
          >
            {{ obj.minorCate }}
          </div>
      </div>
      <van-popup v-model="show" round closeable position="bottom" :style="{ height: '90%' }" style="padding:10px;box-sizing: border-box;">
          <div class="vimg" v-html="img"></div>
          <div class="vtitle" v-html="title"></div>
          <div class="vauthor" v-html="author"></div>
          <div class="vtag" v-html="tag"></div>
          <van-button type="primary" block @click="directory">查看目录</van-button>
          <div class="vintro" v-html="intro"></div>

          <div v-for="(item ,index) in directorylist" :key="index" style="font-size: 20px;margin-top: 2px;padding: 20px;box-sizing: border-box;" @click="text">{{item.title}}</div>
      </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      one:[],
      onetitle:[],
      show: false,
      img:'',
      title:'',
      author:'',
      tag:'',
      intro:'',
      id:'',
      directorylist:''
    }
  },
   created() {
    this.axios({
      method: "GET",
      url: "https://b.zhuishushenqi.com/category/minlist?node=2b1d0dc5324245bba6cd60fc3a55740e&sex=male&token=faYPP8McRevTQ1R3456b98ea43196be4dd25cd6b028131be739f0aedb6ea123e6b0477f4cddf55e9cc1e8c0ece8485567c5737d4ca991439ae739eac48fafa2e4295f600382f5156086f37aa49d9e0ea563359e3a89eed8c&userId=638dd3eb5a3077210093d0aa&groupid=0,-1,-1&cv=&pl=ios&type=main_free&packageName=com.ifmoc.DouKouYueDu",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    this.axios({
      method: "GET",
      url: "https://b.zhuishushenqi.com/category/minlist?node=86f8e5840e434f2ea69284359b7c46c0&sex=male&token=faYPP8McRevTQ1R3456b98ea43196be4dd25cd6b028131be739f0aedb6ea123e6b0477f4cddf55e9cc1e8c0ece8485567c5737d4ca991439ae739eac48fafa2e4295f600382f5156086f37aa49d9e0ea563359e3a89eed8c&userId=638dd3eb5a3077210093d0aa&groupid=0,-1,-1&cv=&pl=ios&type=main_free&packageName=com.ifmoc.DouKouYueDu",
    })
      .then((res) => {
        console.log(res);
        this.onetitle = res.data.data.nodes[1];
        this.one = res.data.data.nodes[1].books;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    showPopup(e) {
      this.show = true;
      this.img = '<img  style="height: 150px; width: 100px; margin-right: 10px;float:left;margin-right:10px" src="'+e.cover+'" alt="">'
      this.title = '<p><strong>'+e.title+'</strong></p>'
      this.author = '<p style="margin-top:40px;color:grey">作者:'+e.author+'</p>'
      this.tag = '<span style="color:grey">'+e.tags[0]+'·'+e.tags[1]+'·'+e.tags[2]+'·</span><span style="color:red">'+e.rating.score+'分</span>'
      this.intro = '<div style="margin-top:40px;font-size:25px;margin-left:20px;margin-bottom:15px;"><strong>简介</strong></div><div style="line-height: 35px;">'+e.shortIntro+'</div>'
      
      console.log(e)
      this.id = e._id
    },
    
    directory(){
      console.log(this.id);
        this.axios({
        method: "GET",
        url: "https://bookapi01.zhuishushenqi.com/ntoc/directory?",
        params: {bookId:this.id}
        })
        .then((res) => {
          console.log(res.data.chapters);
          this.directorylist = res.data.chapters

          //让书本数据隐藏
          this.img = ''
          this.title = ''
          this.author = ''
          this.tag = ''
          this.intro = ''
        })
        .catch((err) => {
          console.log(err);
        });
    },
    text(){
      console.log("这是文本内容");
    }
  },
};
</script>

<style>
.fl {
  float: left;
  
}
.fr {
  float: right;
  
}
</style>