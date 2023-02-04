
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import {Search,Popup,Image as VanImage,Sticky,ActionSheet,Divider,Tab, Tabs ,PullRefresh,Tabbar, TabbarItem,NavBar,Empty,Button,Grid, GridItem,Col, Row,Swipe, SwipeItem,Lazyload } from 'vant';

Vue.use(Search);
Vue.use(Popup);
Vue.use(VanImage);
Vue.use(Sticky);
Vue.use(ActionSheet);
Vue.use(Divider);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(PullRefresh);
Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Button);
Vue.use(Search);
Vue.use(Empty);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Vant);
Vue.config.productionTip = false

import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios,axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
