/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-12-04 17:31:24
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-12-10 16:55:09
 * @FilePath: \粤嵌上课记录\阅读app\bookapp\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import books from '@/views/books'
import shop from '@/views/shop'
import classify from '@/views/classify'
import my from '@/views/my'
import mylogin from '@/views/mylogin'
import shopchose from '@/views/shopchose'
import shopboy from '@/views/shopboy'
import shopgirl from '@/views/shopgirl'
import shopplay from '@/views/shopplay'
import shopmonth from '@/views/shopmonth'
import shoppublish from '@/views/shoppublish'


const routes = [
  
  
  {
    path: '/',
    name:books,
    component: books,
    
  },
  {
    path: '/shop',
    name:shop,
    component: shop,
    children:[
      {
        path:'',
        name:shopchose,
        component:shopchose
      },
      {
        path:"shopboy",
        name:shopboy,
        component:shopboy
      },
      {
        path:"shopgirl",
        name:shopgirl,
        component:shopgirl
      },
      {
        path:"shopplay",
        name:shopplay,
        component:shopplay
      },
      {
        path:"shopmonth",
        name:shopmonth,
        component:shopmonth
      },
      {
        path:"shoppublish",
        name:shoppublish,
        component:shoppublish
      }
    ]
  },
  {
    path: '/classify',
    name:classify,
    component: classify,
  },
  {
    path: '/my',
    name:my,
    component: my,
    
  },
  {
    path:'/mylogin',
    name:mylogin,
    component:mylogin
  },]
  
  // {path:"*",
  // redirect:
  //   {path:"/"}
  // }


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
