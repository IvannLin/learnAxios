import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// import axios from 'axios'
// axios({
//   url:'https://localhost:9999/student/student'
// }).then(res=>{
//   console.log(res);
// })

//第一种封装方式
// import {request} from "./network/request";
// request('https://localhost:9999/student/student',res=>{
//   console.log(res);
// },err=>{
//   console.log(err);
// })


//第二种方式
import {request} from "./network/request";

// import {request} from "./network/request";
// request({
//   url:'getAllStudent',
//   success:res=>{
//     console.log(res);
//   },
//   fail:err=>{
//     console.log(err);
//   }
// })

//第三种
//   import {request} from "./network/request";
//   request({
//     url:'getAllStudent',
//   }).then(res=>{
//     console.log(res);
//   }).catch(err=>{
//     console.log(res);
//   })

//第四种
import {request} from "./network/request";
request({
  url: 'getAllStudent',
}).then(res=>{
  console.log(res);
})