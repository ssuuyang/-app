
<template>
    <div style="padding: 10px;box-sizing: border-box;" v-if="logolist.length&&images.length&&one.length&&two.length&&three.length&&booklist.length != 0">
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
        <!-- 女神她又开挂虐渣了！ -->
    <div style="height: 410px; width: 100%">
      <div
        style="height: 25px; width: 100%; margin-top: 10px; margin-bottom: 15px"
      >
        <span class="fl" style="font-size: 20px"
          ><strong>女神她又开挂虐渣了！</strong></span
        >
        <span class="fr" style="color: #cecece; margin-top: 5px">更多></span>
      </div>

      <div>
        <div @click="showPopup(one[0])" style="height: 100px; width: 100%">
          <!-- 封面 -->
          <img
            :src="one[0].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <p style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ one[0].title }}</p>
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
            {{ one[0].shortIntro }}
          </div>
          <!-- 作者 -->
          <div style="font-size: 12px;margin-top:8px;#919398" class="fl">
            {{ one[0].author }}
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
            {{ one[0].rating.score }}分
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
            {{ one[0].minorCate }}
          </div>
        </div>
        <div @click="showPopup(one[1])" style="height: 100px; width: 50%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="one[1].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ one[1].title }}</div>
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
            {{ one[0].minorCate }}
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
            {{ one[1].rating.score }}分
          </div>
        </div>
        <div @click="showPopup(one[2])" style="height: 100px; width: 50%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="one[2].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ one[2].title }}</div>
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
            {{ one[2].minorCate }}
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
            {{ one[2].rating.score }}分
          </div>
        </div>
        <div @click="showPopup(one[3])" style="height: 100px; width: 50%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="one[3].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ one[3].title }}</div>
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
            {{ one[3].minorCate }}
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
            {{ one[3].rating.score }}分
          </div>
        </div>
        <div @click="showPopup(one[4])" style="height: 100px; width: 50%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="one[4].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ one[4].title }}</div>
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
            {{ one[4].minorCate }}
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
            {{ one[4].rating.score }}分
          </div>
        </div>
      </div>
    </div>
    <!-- 边框线 -->
    <div class="van-hairline--surround"></div>
    <!-- 全网爆款TOP10 -->
    <div style="height: 410px; width: 100%">
      <div
        style="height: 25px; width: 100%; margin-top: 10px; margin-bottom: 15px"
      >
        <span class="fl" style="font-size: 20px"
          ><strong>全网爆款TOP10</strong></span
        >
        <span class="fr" style="color: #cecece; margin-top: 5px">更多></span>
      </div>

      <div>
        <div @click="showPopup(two[0])" style="height: 100px; width: 100%">
          <!-- 封面 -->
          <img
            :src="two[0].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <p style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ two[0].title }}</p>
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
            {{ two[0].shortIntro }}
          </div>
          <!-- 作者 -->
          <div style="font-size: 12px;margin-top:8px;#919398" class="fl">
            {{ two[0].author }}
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
            {{ two[0].rating.score }}分
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
            {{ two[0].minorCate }}
          </div>
        </div>
        <div @click="showPopup(two[1])" style="height: 100px; width: 50%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="two[1].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ two[1].title }}</div>
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
            {{ two[0].minorCate }}
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
            {{ two[1].rating.score }}分
          </div>
        </div>
        <div @click="showPopup(two[2])" style="height: 100px; width: 50%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="two[2].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ two[2].title }}</div>
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
            {{ two[2].minorCate }}
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
            {{ two[2].rating.score }}分
          </div>
        </div>
        <div @click="showPopup(two[3])" style="height: 100px; width: 50%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="two[3].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ two[3].title }}</div>
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
            {{ two[3].minorCate }}
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
            {{ two[3].rating.score }}分
          </div>
        </div>
        <div @click="showPopup(two[4])" style="height: 100px; width: 50%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="two[4].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ two[4].title }}</div>
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
            {{ two[4].minorCate }}
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
            {{ two[4].rating.score }}分
          </div>
        </div>
      </div>
    </div>
    <!-- 边框线 -->
    <div class="van-hairline--surround"></div>
    <!-- 想娶我的十几万，嫁谁？ -->
      <div style="height: 335px; width: 100%">
      <div
        style="height: 25px; width: 100%; margin-top: 10px; margin-bottom: 15px"
      >
        <span class="fl" style="font-size: 20px"
          ><strong>想娶我的十几万，嫁谁？</strong></span
        >
        <span class="fr" style="color: #cecece; margin-top: 5px">更多></span>
      </div>

      <div>
        <div  @click="showPopup(three[0])" style="height: 100px; width: 100%">
          <!-- 封面 -->
          <img
            :src="three[0].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <p style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ three[0].title }}</p>
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
            {{ three[0].shortIntro }}
          </div>
          <!-- 作者 -->
          <div style="font-size: 12px;margin-top:8px;#919398" class="fl">
            {{ three[0].author }}
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
            {{ three[0].rating.score }}分
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
            {{ three[0].minorCate }}
          </div>
        </div>

        <!-- 分支 -->

        <div  @click="showPopup(three[1])" style="height: 100px; width: 25%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="three[1].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ three[1].title }}</div>
          
        </div>
        <div  @click="showPopup(three[2])" style="height: 100px; width: 25%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="three[2].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ three[2].title }}</div>
          
        </div>
        <div  @click="showPopup(three[3])" style="height: 100px; width: 25%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="three[3].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ three[3].title }}</div>
          
        </div>
        <div  @click="showPopup(three[4])" style="height: 100px; width: 25%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="three[4].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ three[4].title }}</div>
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
    <div @click="showPopup(obj)" v-for="obj in booklist"
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
      one:[],
      two:[],
      three:[],
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
      url: "https://b.zhuishushenqi.com/category/minlist?node=6f620313800c4654b11a28178c75a0ab&sex=male&token=faYPP8McRevTQ1R3456b98ea43196be4dd25cd6b028131be739f0aedb6ea123e6b0477f4cddf55e9cc1e8c0ece8485567c5737d4ca991439ae739eac48fafa2e4295f600382f5156086f37aa49d9e0ea563359e3a89eed8c&userId=638dd3eb5a3077210093d0aa&groupid=0,-1,-1&cv=&pl=ios&type=main_free&packageName=com.ifmoc.DouKouYueDu",
    })
      .then((res) => {
        console.log(res.data.data);

        this.logolist = res.data.data.spread[1].advs;
        this.images = res.data.data.spread[0].advs;
        this.one = res.data.data.nodes[2].books;
        this.two = res.data.data.nodes[3].books;
        this.three = res.data.data.nodes[4].books;
      })
      .catch((err) => {
        console.log(err);
      });
    this.axios({
      method: "GET",
      url: "https://b.zhuishushenqi.com/category/recommends?groupid=0,-1,-1&cv=&st=11&size=10&token=faYPP8McRevTQ1R3456b98ea43196be4dd25cd6b028131be739f0aedb6ea123e6b0477f4cddf55e9cc1e8c0ece8485567c5737d4ca991439ae739eac48fafa2e4295f600382f5156086f37aa49d9e0ea563359e3a89eed8c&type=main_free&packageName=com.ifmoc.DouKouYueDu",
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
