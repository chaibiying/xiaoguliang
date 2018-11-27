import Vue from 'vue'
import Router from 'vue-router'
const _import = require("./import.js");
debugger;

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
     {
      path: "/login",
      name: "login",
      component: _import("login/index")
    },
    {
      path: "/register",
      name: "register",
      component: _import("register/index")
    },
  ]
})
