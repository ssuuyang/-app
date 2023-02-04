<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-12-04 17:36:09
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-12-10 17:18:10
 * @FilePath: \粤嵌上课记录\阅读app\bookapp\src\views\classify.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
<!-- v-if="boy.length&&girl.length&&public.length " -->
  <div >
    <van-tabs v-model="active" animated style="margin-top:15px;">
      <!-- 男频 -->
      <van-tab :title="'男频'" >
          <!-- 标题 -->
          <van-divider >按{{boy[0].secondTagName}}分类</van-divider>
          <!-- 内容 -->
          <van-grid  direction="horizontal" :column-num="3" :gutter="20"  >
            <!-----------------------------------------------------------------------用索引index循环内容（多少个分类）里面的内容（书多少本）传进去点击事件数据---------- -->
            <van-grid-item  :text="obj.name"  style="float:left;"  v-for="(obj,index) in boy[0].thirdTags" :key="index"  @click="showPopup(boy[0].thirdTags[index])"/>
          </van-grid>
          <!-- 标题 -->
          <van-divider>按{{boy[1].secondTagName}}分类</van-divider>
          <!-- 内容 -->
          <van-grid direction="horizontal" :column-num="3" :gutter="20" >
            <van-grid-item :text="obj.name"  style="float:left;" v-for="(obj,index) in boy[1].thirdTags" :key="index"  @click="showPopup(boy[1].thirdTags[index])"/>
          </van-grid>
          <!-- 标题 -->
          <van-divider>按{{boy[2].secondTagName}}分类</van-divider>
          <!-- 内容 -->
          <van-grid direction="horizontal" :column-num="3" :gutter="20" >
            <van-grid-item :text="obj.name"  style="float:left;" v-for="(obj,index) in boy[2].thirdTags" :key="index"  @click="showPopup(boy[2].thirdTags[index])"/>
          </van-grid>
          <!-- 标题 -->
          <van-divider>按{{boy[3].secondTagName}}分类</van-divider>
          <!-- 内容 -->
          <van-grid direction="horizontal" :column-num="3" :gutter="20" >
            <van-grid-item :text="obj.name"  style="float:left;" v-for="(obj,index) in boy[3].thirdTags" :key="index"  @click="showPopup(boy[3].thirdTags[index])"/>
          </van-grid>
      </van-tab>
      <!-- 女频 -->
      <van-tab :title="'女频'">
          <!-- 标题 -->
          <van-divider>按{{girl[0].secondTagName}}分类</van-divider>
          <!-- 内容 -->
          <van-grid direction="horizontal" :column-num="3" :gutter="20" >
            <van-grid-item  :text="obj.name"  style="float:left;"   v-for="(obj,index) in girl[0].thirdTags" :key="index"  @click="showPopup(girl[0].thirdTags[index])"/>
          </van-grid>
          <!-- 标题 -->
          <van-divider>按{{girl[1].secondTagName}}分类</van-divider>
          <!-- 内容 -->
          <van-grid direction="horizontal" :column-num="3" :gutter="20" >
            <van-grid-item  :text="obj.name"  style="float:left;"  v-for="(obj,index) in girl[1].thirdTags" :key="index"  @click="showPopup(girl[0].thirdTags[index])"/>
          </van-grid>
          <!-- 标题 -->
          <van-divider>按{{girl[2].secondTagName}}分类</van-divider>
          <!-- 内容 -->
          <van-grid direction="horizontal" :column-num="3" :gutter="20" >
            <van-grid-item  :text="obj.name"  style="float:left;"  v-for="(obj,index) in girl[2].thirdTags" :key="index"  @click="showPopup(girl[0].thirdTags[index])"/>
          </van-grid>
          <!-- 标题 -->
          <van-divider>按{{girl[3].secondTagName}}分类</van-divider>
          <!-- 内容 -->
          <van-grid direction="horizontal" :column-num="3" :gutter="20" >
            <van-grid-item  :text="obj.name"  style="float:left;" v-for="(obj,index) in girl[3].thirdTags" :key="index"  @click="showPopup(girl[0].thirdTags[index])"/>
          </van-grid>
      
      </van-tab>
      <!-- 出版 -->
      <van-tab :title="'出版'">
          <!-- 标题 -->
          <van-divider>按{{public[0].secondTagName}}分类</van-divider>
          <!-- 内容 -->
          <van-grid direction="horizontal" :column-num="2" :gutter="20" >
            <van-grid-item  :text="obj.name"  style="float:left;"  v-for="(obj,index) in public[0].thirdTags" :key="index"  @click="showPopup(public[0].thirdTags[index])"/>
          </van-grid>
      </van-tab>
    </van-tabs>
    <van-popup  v-model="show" round closeable position="bottom" :style="{ height: '98%' }" style="padding:10px;box-sizing: border-box;" >
      <p style="text-align: center;font-size: 20px;">{{titlename}}</p>
      <!-- 循环加载搜索内容-->
      <div @click="bookimage(obj)" v-for="obj in booklist"
        :key="obj.id"
        style="height: 100px; width: 100%;margin-bottom:30px">
          <!-- 封面 -->
          <img
            :src="'http://statics.zhuishushenqi.com'+obj.cover"
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
      
      <div class="vimg" v-html="img"></div>
      <div class="vtitle" v-html="title"></div>
      
      <div class="vauthor" v-html="author"></div>
      
      <div class="vtag" v-html="tag"></div>
      <van-button type="primary" block @click="directory">查看目录</van-button>
      <div class="vintro" v-html="intro"></div>
      
      <!-- 获取的目录列表 -->
      <div v-for="(item ,index) in directorylist" :key="index" style="font-size: 20px;margin-top: 2px;padding: 20px;box-sizing: border-box;" @click="text">{{item.title}}</div>


    </van-popup>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2,
      boy:[],
      girl:[],
      public:[],
      show: false,
      img:'',
      title:'',
      author:'',
      tag:'',
      intro:'',
      id:'',
      directorylist:'',
      titlelist:'',
      booklist:[],
      titlename:''
    };
  },
  created() {
    this.axios({
      method: "GET",
      url: "http://b.zhuishushenqi.com/tag/statics?packageName=com.ifmoc.DouKouYueDu2&sex=",
    })
      .then((res) => {
        console.log(res.data.firstTags);
        this.boy = res.data.firstTags[0].secondTags
        this.girl = res.data.firstTags[1].secondTags
        this.public = res.data.firstTags[2].secondTags
        console.log(this.public);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    // 弹窗列表
    showPopup(e) {
      this.show = true;
      this.axios({
      method: "GET",
      url: "https://b.zhuishushenqi.com/books/fuzzy-search?",
      
      params: {query:e.name}
       })
      .then((res) => {
        console.log(res.data.books);

        this.booklist = res.data.books;
      })
      .catch((err) => {
        console.log(err);
      });
      //点击传过来的标题名
      this.titlename = e.name
      
      

      // this.id = e._id
    },
    //获取书本数据
    bookimage(image){
      //让书本数据隐藏
      console.log(image);
      this.booklist = []
      this.titlename = ''
      // 点击传过来的数据
      this.img = '<img  style="height: 150px; width: 100px; margin-right: 10px;float:left;margin-right:10px" src="http://statics.zhuishushenqi.com'+image.cover+'" alt="">'
      this.title = '<p><strong>'+image.title+'</strong></p>'
      this.author = '<p style="margin-top:40px;color:grey">作者:'+image.author+'</p>'
      this.tag = '<span style="color:grey">'+image.tags[0]+'·'+image.tags[1]+'·'+image.tags[2]+'·</span><span style="color:red">'+image.rating.score+'分</span>'
      this.intro = '<div style="margin-top:40px;font-size:25px;margin-left:20px;margin-bottom:15px;"><strong>简介</strong></div><div style="line-height: 35px;">'+image.shortIntro+'</div>'

      this.id = image._id
    },
    //利用传过来的id去用接口搜索书本目录信息
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
  }
};
</script>

<style>

</style>