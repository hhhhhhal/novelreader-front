import { createRouter, createWebHistory } from 'vue-router';

// 导入页面组件
import Home from '@/views/Home.vue';
import searchPage from '@/views/searchPage.vue';
import BookDetail from '@/views/BookDetail.vue';
import Books from '@/views/Books.vue'

import LoginVue from '@/views/Login.vue'; // 假设组件文件名为 Login.vue
import SignUp from '@/views/Signup.vue';  

// 定义路由
const routes = [
  {
    path: '/Main',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search',
    name: 'searchPage',
    component: searchPage,
  },
  {
    path: '/book/:id',
    component: BookDetail
  },
  {
    path:'/books',
    component: Books,
  },
  
  
  { path: "/User/login",
     component: LoginVue },
  {
    path: "/User/signup",
    component: SignUp,
  },
];

// 创建并导出路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
