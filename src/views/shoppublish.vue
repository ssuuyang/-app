<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-12-06 16:47:17
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-12-10 14:26:40
 * @FilePath: \粤嵌上课记录\阅读app\bookapp\src\views\shoppublish.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <!-- 轮播图 -->
      <van-swipe :autoplay="3000" style="width: 100%; height: 150px;margin-bottom:10px">
           <van-swipe-item >
             <img :src="banner" alt="" style="width: 100%; height: 150px">
           </van-swipe-item>
      </van-swipe>
      <!-- 好书尝鲜 头部-->
    <div
        style="height: 25px; width: 100%; margin-top: 30px; margin-bottom: 15px"
      >
        <span class="fl" style="font-size: 20px"
          ><strong>{{onetitle.title}}</strong></span>
        <span class="fr" style="color: #cecece; margin-top: 5px">更多></span>
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
      <!-- 边框线 -->
      <div class="van-hairline--surround"></div>
      <!-- 好书尝鲜 头部-->
    <div
        style="height: 25px; width: 100%; margin-top: 30px; margin-bottom: 15px"
      >
        <span class="fl" style="font-size: 20px"
          ><strong>{{twotitle.title}}</strong></span
        >
        <span class="fr" style="color: #cecece; margin-top: 5px">更多></span>
      </div>
      <!-- 好书尝鲜 内容-->
    <div @click="showPopup(obj)" v-for="obj in two"
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
      <!-- 边框线 -->
      <div class="van-hairline--surround"></div>
      <!-- 好书尝鲜 头部-->
    <div
        style="height: 25px; width: 100%; margin-top: 30px; margin-bottom: 15px"
      >
        <span class="fl" style="font-size: 20px"
          ><strong>{{threetitle.title}}</strong></span
        >
        <span class="fr" style="color: #cecece; margin-top: 5px">更多></span>
      </div>
      <!-- 好书尝鲜 内容-->
    <div @click="showPopup(obj)" v-for="obj in three"
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
      <!-- 边框线 -->
      <div class="van-hairline--surround"></div>
      <!-- 好书尝鲜 头部-->
    <div
        style="height: 25px; width: 100%; margin-top: 30px; margin-bottom: 15px"
      >
        <span class="fl" style="font-size: 20px"
          ><strong>{{fourtitle.title}}</strong></span
        >
        <span class="fr" style="color: #cecece; margin-top: 5px">更多></span>
      </div>
      <!-- 好书尝鲜 内容-->
    <div @click="showPopup(obj)" v-for="obj in four"
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
      <!-- 边框线 -->
      <div class="van-hairline--surround"></div>
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
      
      banner: [],
      one:[],
      onetitle:[],
      two:[],
      twotitle:[],
      three:[],
      threetitle:[],
      four:[],
      fourtitle:[],
      show: false,
      img:'',
      title:'',
      author:'',
      tag:'',
      intro:'',
      id:'',
      directorylist:''
    };
  },
  created() {
    this.axios({
      method: "GET",
      url: "https://b.zhuishushenqi.com/category/minlist?node=86f8e5840e434f2ea69284359b7c46c0&sex=male&token=faYPP8McRevTQ1R3456b98ea43196be4dd25cd6b028131be739f0aedb6ea123e6b0477f4cddf55e9cc1e8c0ece8485567c5737d4ca991439ae739eac48fafa2e4295f600382f5156086f37aa49d9e0ea563359e3a89eed8c&userId=638dd3eb5a3077210093d0aa&groupid=0,-1,-1&cv=&pl=ios&type=main_free&packageName=com.ifmoc.DouKouYueDu",
    })
      .then((res) => {
        console.log(res.data.data);

        this.banner = res.data.data.spread[0].advs[0].img;
        this.onetitle = res.data.data.nodes[1];
        this.one = res.data.data.nodes[1].books;
        this.twotitle = res.data.data.nodes[2];
        this.two = res.data.data.nodes[2].books;
        this.threetitle = res.data.data.nodes[3];
        this.three = res.data.data.nodes[3].books;
        this.fourtitle = res.data.data.nodes[4];
        this.four = res.data.data.nodes[4].books;

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
}
</script>