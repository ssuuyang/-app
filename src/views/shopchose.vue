
<template>

  <div style="padding: 10px;box-sizing: border-box;" id="box" v-if="hotlist.length&&recommend.length&&middle.length&&girl.length&&boy.length&&booklist.length&&logolist.length  != 0 ">
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
    <!-- 热门书籍 -->
    <div style="height: 410px; width: 100%">
      <div
        style="height: 25px; width: 100%; margin-top: 10px; margin-bottom: 15px"
      >
        <span class="fl" style="font-size: 20px"
          ><strong>热门书籍</strong></span
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
    <!-- 店长推荐 -->
    <div style="height: 410px; width: 100%">
      <div style="height: 25px; width: 100%; margin-top: 10px; margin-bottom: 15px"
      >
        <span class="fl" style="font-size: 20px"
          ><strong>店长推荐</strong></span
        >
        <span class="fr" style="color: #cecece; margin-top: 5px">更多></span>
      </div>

      <div>
        <div @click="showPopup(recommend[0])" style="height: 100px; width: 100%">
          <!-- 封面 -->
          <img
            :src="recommend[0].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <p style="font-size: 15px">{{ recommend[0].title }}</p>
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
            {{ recommend[0].shortIntro }}
          </div>
          <!-- 作者 -->
          <div style="font-size: 12px;margin-top:8px;#919398" class="fl">
            {{ recommend[0].author }}
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
            {{ recommend[0].rating.score }}分
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
            {{ recommend[0].minorCate }}
          </div>
        </div>
        <div @click="showPopup(recommend[1])" style="height: 100px; width: 50%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="recommend[1].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ recommend[1].title }}</div>
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
            {{ recommend[0].minorCate }}
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
            {{ recommend[1].rating.score }}分
          </div>
        </div>
        <div @click="showPopup(recommend[2])" style="height: 100px; width: 50%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="recommend[2].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ recommend[2].title }}</div>
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
            {{ recommend[2].minorCate }}
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
            {{ recommend[2].rating.score }}分
          </div>
        </div>
        <div @click="showPopup(recommend[3])" style="height: 100px; width: 50%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="recommend[3].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ recommend[3].title }}</div>
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
            {{ recommend[3].minorCate }}
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
            {{ recommend[3].rating.score }}分
          </div>
        </div>
        <div @click="showPopup(recommend[4])" style="height: 100px; width: 50%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="recommend[4].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ recommend[4].title }}</div>
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
            {{ recommend[4].minorCate }}
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
            {{ recommend[4].rating.score }}分
          </div>
        </div>
      </div>
    </div>
    <!-- 边框线 -->
    <div class="van-hairline--surround"></div>
    <!-- 极品爽文、甜宠言情 -->
    <div  style="height: 170px; width: 100%;">
        <div style="height: 150px; width: 50%;float:left">
            <h2>{{middle[0].title}}</h2>
            <div style="color: #919398;margin-top:-10px;margin-bottom:5px">{{middle[0].simpleDes}}</div>
            <img :src="middle[0].img" alt="" style="height: 70px; width: 90%">
        </div>
        <div style="height: 150px; width: 50%;float:left">
            <h2>{{middle[1].title}}</h2>
            <div style="color: #919398;margin-top:-10px;margin-bottom:5px">{{middle[1].simpleDes}}</div>
            <img :src="middle[1].img" alt="" style="height: 70px; width: 90%">
        </div>
    </div>
    <!-- 边框线 -->
    <div class="van-hairline--surround"></div>
    <!-- 女频畅销 -->
    <div style="height: 410px; width: 100%">
      <div 
        style="height: 25px; width: 100%; margin-top: 10px; margin-bottom: 15px"
      >
        <span class="fl" style="font-size: 20px"
          ><strong>女频畅销</strong></span
        >
        <span class="fr" style="color: #cecece; margin-top: 5px">更多></span>
      </div>

      <div>
        <div @click="showPopup(girl[0])" style="height: 100px; width: 100%">
          <!-- 封面 -->
          <img
            :src="girl[0].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <p style="font-size: 15px">{{ girl[0].title }}</p>
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
        <div @click="showPopup(girl[1])" style="height: 100px; width: 50%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="girl[1].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ girl[1].title }}</div>
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
            {{ girl[0].minorCate }}
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
            {{ girl[1].rating.score }}分
          </div>
        </div>
        <div @click="showPopup(girl[2])" style="height: 100px; width: 50%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="girl[2].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ girl[2].title }}</div>
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
            {{ girl[2].minorCate }}
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
            {{ girl[2].rating.score }}分
          </div>
        </div>
        <div @click="showPopup(girl[3])" style="height: 100px; width: 50%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="girl[3].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ girl[3].title }}</div>
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
            {{ girl[3].minorCate }}
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
            {{ girl[3].rating.score }}分
          </div>
        </div>
        <div @click="showPopup(girl[4])" style="height: 100px; width: 50%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="girl[4].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ girl[4].title }}</div>
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
            {{ girl[4].minorCate }}
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
            {{ girl[4].rating.score }}分
          </div>
        </div>
      </div>
    </div>
    <!-- 边框线 -->
    <div class="van-hairline--surround"></div>
    <!-- 男频畅销 -->
    <div style="height: 410px; width: 100%">
      <div
        style="height: 25px; width: 100%; margin-top: 10px; margin-bottom: 15px"
      >
        <span class="fl" style="font-size: 20px"
          ><strong>男频畅销</strong></span
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
          <p style="font-size: 15px">{{ boy[0].title }}</p>
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
        <div @click="showPopup(boy[1])" style="height: 100px; width: 50%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="boy[1].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ boy[1].title }}</div>
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
            {{ boy[0].minorCate }}
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
            {{ boy[1].rating.score }}分
          </div>
        </div>
        <div @click="showPopup(boy[2])" style="height: 100px; width: 50%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="boy[2].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ boy[2].title }}</div>
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
            {{ boy[2].minorCate }}
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
            {{ boy[2].rating.score }}分
          </div>
        </div>
        <div @click="showPopup(boy[3])" style="height: 100px; width: 50%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="boy[3].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ boy[3].title }}</div>
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
            {{ boy[3].minorCate }}
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
            {{ boy[3].rating.score }}分
          </div>
        </div>
        <div @click="showPopup(boy[4])" style="height: 100px; width: 50%; margin-top: 25px" class="fl">
          <!-- 封面 -->
          <img
            :src="boy[4].cover"
            alt=""
            style="height: 100px; width: 70px; margin-right: 10px"
            class="fl"
          />
          <!-- 标题 -->
          <div style="font-size: 15px;overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ boy[4].title }}</div>
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
            {{ boy[4].minorCate }}
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
            {{ boy[4].rating.score }}分
          </div>
        </div>
      </div>
    </div>
    <!-- 边框线 -->
    <div class="van-hairline--surround"></div>
    <!-- 完结爆款 头部-->
    <div
        style="height: 25px; width: 100%; margin-top: 10px; margin-bottom: 15px"
      >
        <span class="fl" style="font-size: 20px"
          ><strong>爆款完结</strong></span
        >
        <span class="fr" style="color: #cecece; margin-top: 5px">更多></span>
      </div>
      <!-- 完结爆款 内容-->
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

    <van-popup v-model="show" round closeable position="bottom" :style="{ height: '90%' }" style="padding:10px;box-sizing: border-box;" >
  
      <div class="vimg" v-html="img"></div>
      <div class="vtitle" v-html="title"></div>
      
      <div class="vauthor" v-html="author"></div>
      
      <div class="vtag" v-html="tag"></div>
      <van-button type="primary" block @click="directory">查看目录</van-button>
      <div class="vintro" v-html="intro"></div>
      <!-- v-for="obj in booklist" -->
      <div v-for="(item ,index) in directorylist" :key="index" style="font-size: 20px;margin-top: 2px;padding: 20px;box-sizing: border-box;" @click="text">{{item.title}}</div>
    </van-popup>


    </div>

  
</template>
<style>
#box {
  padding: 10px;
  box-sizing: border-box;
  
  
}
.fl {
  float: left;
  
}
.fr {
  float: right;
  
  
}
</style>
<script>
export default {
  data() {
    return {
      hotlist: [],
      recommend: [],
      middle:[],
      girl:[],
      boy:[],
      booklist:[],
      logolist: [],
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
  //创建节点渲染之前加载此页面的数据并且渲染
  created() {
    this.axios({
      method: "GET",
      url: "https://b.zhuishushenqi.com/category/minlist?node=2b1d0dc5324245bba6cd60fc3a55740e&sex=male&token=faYPP8McRevTQ1R3456b98ea43196be4dd25cd6b028131be739f0aedb6ea123e6b0477f4cddf55e9cc1e8c0ece8485567c5737d4ca991439ae739eac48fafa2e4295f600382f5156086f37aa49d9e0ea563359e3a89eed8c&userId=638dd3eb5a3077210093d0aa&groupid=0,-1,-1&cv=&pl=ios&type=main_free&packageName=com.ifmoc.DouKouYueDu",
    })
      .then((res) => {
        // console.log(res.data.data.spread[4].advs);
        // 热门书籍
        this.hotlist = res.data.data.nodes[3].books;
        // 店长推荐
        this.recommend = res.data.data.nodes[4].books;
        // 极品爽文、甜宠言情
        this.middle = res.data.data.spread[4].advs
      })
      .catch((err) => {
        console.log(err);
      });
    this.axios({
      method: "GET",
      url: "https://b.zhuishushenqi.com/category/info?node=1bb439936b2d4fe2855424faf0feb9ed&userId=638dd3eb5a3077210093d0aa&cv=&groupid=0,-1,-1&token=faYPP8McRevTQ1R3456b98ea43196be4dd25cd6b028131be739f0aedb6ea123e6b0477f4cddf55e9cc1e8c0ece8485567c5737d4ca991439ae739eac48fafa2e4295f600382f5156086f37aa49d9e0ea563359e3a89eed8c&type=&packageName=com.ifmoc.DouKouYueDu",
    })
      .then((res) => {
        // console.log(res.data.data.books);
        this.girl = res.data.data.books
      })
      .catch((err) => {
        console.log(err);
      });
    this.axios({
      method: "GET",
      url: "https://b.zhuishushenqi.com/category/info?node=3d2478d5f03147b38fdd5069e15646dc&userId=638dd3eb5a3077210093d0aa&cv=&groupid=0,-1,-1&token=faYPP8McRevTQ1R3456b98ea43196be4dd25cd6b028131be739f0aedb6ea123e6b0477f4cddf55e9cc1e8c0ece8485567c5737d4ca991439ae739eac48fafa2e4295f600382f5156086f37aa49d9e0ea563359e3a89eed8c&type=&packageName=com.ifmoc.DouKouYueDu",
    })
      .then((res) => {
        // console.log(res.data.data.books);
        this.boy = res.data.data.books
      })
      .catch((err) => {
        console.log(err);
      });
    this.axios({
      method: "GET",
      url: "https://b.zhuishushenqi.com/category/recommends?groupid=0,-1,-1&cv=&st=1&size=10&token=faYPP8McRevTQ1R3456b98ea43196be4dd25cd6b028131be739f0aedb6ea123e6b0477f4cddf55e9cc1e8c0ece8485567c5737d4ca991439ae739eac48fafa2e4295f600382f5156086f37aa49d9e0ea563359e3a89eed8c&type=main_free&packageName=com.ifmoc.DouKouYueDu",
    })
      .then((res) => {
        // console.log(res.data.data);
        this.booklist = res.data.data
      })
      .catch((err) => {
        console.log(err);
      });
      this.axios({
      method: "GET",
      url: "https://b.zhuishushenqi.com/category/minlist?node=2b1d0dc5324245bba6cd60fc3a55740e&sex=male&token=faYPP8McRevTQ1R3456b98ea43196be4dd25cd6b028131be739f0aedb6ea123e6b0477f4cddf55e9cc1e8c0ece8485567c5737d4ca991439ae739eac48fafa2e4295f600382f5156086f37aa49d9e0ea563359e3a89eed8c&userId=638dd3eb5a3077210093d0aa&groupid=0,-1,-1&cv=&pl=ios&type=main_free&packageName=com.ifmoc.DouKouYueDu",
    })
      .then((res) => {
        // console.log(res.data.data);

        this.logolist = res.data.data.spread[1].advs;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    showPopup(e) {
      this.show = true;
      // var img = document.getElementsByClassName("vimg")[0]
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