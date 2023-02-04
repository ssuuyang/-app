<template>
    <div style="padding: 10px;box-sizing: border-box;" v-if="logolist.length&&images.length&&hotlist.length&&boy.length&&girl.length&&booklist.length != 0">
      <!-- 轮播图 -->
      <van-swipe :autoplay="3000" style="width: 100%; height: 150px;margin-bottom:10px">
           <van-swipe-item >
             <img :src="images[0].img" alt="" style="width: 100%; height: 150px">
           </van-swipe-item>
           <van-swipe-item >
             <img :src="images[1].img" alt="" style="width: 100%; height: 150px">
           </van-swipe-item>
      </van-swipe>
      <!-- 分类、排行、私人定制、书单 -->
      <div style="width: 100%; height: 90px">
          <div
            v-for="obj in logolist"
            :key="obj.order"
            class="fl"
            style="width: 25%; text-align: center"
          >
            <img :src="obj.img" alt="" style="height: 50px" />
            <p style="margin-top: 0px; color: #919398">{{ obj.title }}</p>
          </div>
      </div>
      <!-- 热搜好书 -->
      <div style="height: 410px; width: 100%">
      <div
        style="height: 25px; width: 100%; margin-top: 10px; margin-bottom: 15px"
      >
        <span class="fl" style="font-size: 20px"
          ><strong>热搜好书</strong></span
        >
        <span class="fr" style="color: #cecece; margin-top: 5px">更多></span>
      </div>

      <div>
        <div @click="showPopup(hotlist[0])" style="height: 100px; width: 100%">
          <!-- 封面 -->
          <img
            :src="hotlist[0].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <p style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ hotlist[0].title }}</p>
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
            {{ hotlist[0].shortIntro }}
          </div>
          <!-- 作者 -->
          <div style="font-size: 12px;margin-top:8px;#919398" class="fl">
            {{ hotlist[0].author }}
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
            {{ hotlist[0].rating.score }}分
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
            {{ hotlist[0].minorCate }}
          </div>
        </div>
        <div @click="showPopup(hotlist[1])" style="height: 100px; width: 50%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="hotlist[1].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ hotlist[1].title }}</div>
          <!-- 类型 -->
          <div
            class="fl"
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
            {{ hotlist[0].minorCate }}
          </div>
          <!-- 评分 -->
          <div
            class="fl"
            style="
              height: 17px;
              width: 50px;
              font-size: 14px;
              color: red;
              margin-top: 15px;
              text-align: center;
              font-weight: bolder;
            "
          >
            {{ hotlist[1].rating.score }}分
          </div>
        </div>
        <div @click="showPopup(hotlist[2])" style="height: 100px; width: 50%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="hotlist[2].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ hotlist[2].title }}</div>
          <!-- 类型 -->
          <div
            class="fl"
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
            {{ hotlist[2].minorCate }}
          </div>
          <!-- 评分 -->
          <div
            class="fl"
            style="
              height: 17px;
              width: 50px;
              font-size: 14px;
              color: red;
              margin-top: 15px;
              text-align: center;
              font-weight: bolder;
            "
          >
            {{ hotlist[2].rating.score }}分
          </div>
        </div>
        <div @click="showPopup(hotlist[3])" style="height: 100px; width: 50%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="hotlist[3].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ hotlist[3].title }}</div>
          <!-- 类型 -->
          <div
            class="fl"
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
            {{ hotlist[3].minorCate }}
          </div>
          <!-- 评分 -->
          <div
            class="fl"
            style="
              height: 17px;
              width: 50px;
              font-size: 14px;
              color: red;
              margin-top: 15px;
              text-align: center;
              font-weight: bolder;
            "
          >
            {{ hotlist[3].rating.score }}分
          </div>
        </div>
        <div @click="showPopup(hotlist[4])" style="height: 100px; width: 50%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="hotlist[4].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ hotlist[4].title }}</div>
          <!-- 类型 -->
          <div
            class="fl"
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
            {{ hotlist[4].minorCate }}
          </div>
          <!-- 评分 -->
          <div
            class="fl"
            style="
              height: 17px;
              width: 50px;
              font-size: 14px;
              color: red;
              margin-top: 15px;
              text-align: center;
              font-weight: bolder;
            "
          >
            {{ hotlist[4].rating.score }}分
          </div>
        </div>
      </div>
      </div>
      <!-- 边框线 -->
      <div class="van-hairline--surround"></div>
      <!-- 男频佳作 -->
      <div style="height: 335px; width: 100%">
      <div
        style="height: 25px; width: 100%; margin-top: 10px; margin-bottom: 15px"
      >
        <span class="fl" style="font-size: 20px"
          ><strong>男频佳作</strong></span
        >
        <span class="fr" style="color: #cecece; margin-top: 5px">更多></span>
      </div>

      <div>
        <div @click="showPopup(boy[0])" style="height: 100px; width: 100%">
          <!-- 封面 -->
          <img
            :src="boy[0].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <p style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ boy[0].title }}</p>
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
            {{ boy[0].shortIntro }}
          </div>
          <!-- 作者 -->
          <div style="font-size: 12px;margin-top:8px;#919398" class="fl">
            {{ boy[0].author }}
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
            {{ boy[0].rating.score }}分
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
            {{ boy[0].minorCate }}
          </div>
        </div>

        <!-- 分支 -->

        <div @click="showPopup(boy[1])" style="height: 100px; width: 25%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="boy[1].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ boy[1].title }}</div>
          
        </div>
        <div @click="showPopup(boy[2])" style="height: 100px; width: 25%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="boy[2].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ boy[2].title }}</div>
          
        </div>
        <div @click="showPopup(boy[3])" style="height: 100px; width: 25%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="boy[3].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ boy[3].title }}</div>
          
        </div>
        <div @click="showPopup(boy[4])" style="height: 100px; width: 25%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="boy[4].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ boy[4].title }}</div>
        </div>
      </div>
      </div>
      <!-- 边框线 -->
      <div class="van-hairline--surround"></div>
      <!-- 女频佳作 -->
      <div style="height: 335px; width: 100%">
      <div
        style="height: 25px; width: 100%; margin-top: 10px; margin-bottom: 15px"
      >
        <span class="fl" style="font-size: 20px"
          ><strong>女频佳作</strong></span
        >
        <span class="fr" style="color: #cecece; margin-top: 5px">更多></span>
      </div>

      <div>
        <div @click="showPopup(girl[0])"  style="height: 100px; width: 100%">
          <!-- 封面 -->
          <img
            :src="girl[0].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <p style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ girl[0].title }}</p>
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
            {{ girl[0].shortIntro }}
          </div>
          <!-- 作者 -->
          <div style="font-size: 12px;margin-top:8px;#919398" class="fl">
            {{ girl[0].author }}
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
            {{ girl[0].rating.score }}分
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
            {{ girl[0].minorCate }}
          </div>
        </div>

        <!-- 分支 -->

        <div @click="showPopup(girl[1])" style="height: 100px; width: 25%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="girl[1].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ girl[1].title }}</div>
          
        </div>
        <div @click="showPopup(girl[2])" style="height: 100px; width: 25%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="girl[2].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ girl[2].title }}</div>
          
        </div>
        <div @click="showPopup(girl[3])" style="height: 100px; width: 25%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="girl[3].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ girl[3].title }}</div>
          
        </div>
        <div @click="showPopup(girl[4])" style="height: 100px; width: 25%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="girl[4].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ girl[4].title }}</div>
        </div>
      </div>
      </div>
      <!-- 边框线 -->
      <div class="van-hairline--surround"></div>
      <!-- 好书尝鲜 头部-->
    <div
        style="height: 25px; width: 100%; margin-top: 10px; margin-bottom: 15px"
      >
        <span class="fl" style="font-size: 20px"
          ><strong>好书尝鲜</strong></span
        >
        <span class="fr" style="color: #cecece; margin-top: 5px">更多></span>
      </div>
      <!-- 好书尝鲜 内容-->
    <div  @click="showPopup(obj)" v-for="obj in booklist"
        :key="obj.id"
        style="height: 100px; width: 100%">
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
      
      logolist: [],
      images: [],
      hotlist:[],
      boy:[],
      girl:[],
      booklist:[],
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
      url: "https://b.zhuishushenqi.com/category/minlist?node=9783d34b96b44dd2bb31f9001a0702b3&sex=male&token=faYPP8McRevTQ1R3456b98ea43196be4dd25cd6b028131be739f0aedb6ea123e6b0477f4cddf55e9cc1e8c0ece8485567c5737d4ca991439ae739eac48fafa2e4295f600382f5156086f37aa49d9e0ea563359e3a89eed8c&userId=638dd3eb5a3077210093d0aa&groupid=0,-1,-1&cv=&pl=ios&type=main_free&packageName=com.ifmoc.DouKouYueDu",
    })
      .then((res) => {
        // console.log(res.data.data);
        this.logolist = res.data.data.spread[1].advs;
        this.images = res.data.data.spread[0].advs;
        this.hotlist = res.data.data.nodes[2].books;
        this.boy = res.data.data.nodes[3].books;
        this.girl = res.data.data.nodes[4].books;
      })
      .catch((err) => {
        console.log(err);
      });

    // 好书尝鲜
    this.axios({
      method: "GET",
      url: "https://b.zhuishushenqi.com/category/recommends?groupid=0,-1,-1&cv=&st=1&size=10&token=faYPP8McRevTQ1R3456b98ea43196be4dd25cd6b028131be739f0aedb6ea123e6b0477f4cddf55e9cc1e8c0ece8485567c5737d4ca991439ae739eac48fafa2e4295f600382f5156086f37aa49d9e0ea563359e3a89eed8c&type=main_free&packageName=com.ifmoc.DouKouYueDu",
    })
      .then((res) => {
        console.log(res.data.data);
        this.booklist = res.data.data
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
