import Home from "../pages/Home.vue";
import Second from "../pages/Second.vue";
import Login from "../pages/Login.vue";
import Chars from "../pages/Chars.vue";
import CharsHou from "../pages/CharsHou.vue";

export default[
  {
      path: '/home',
      component: Home
  },
  {
    path: '/second',
    component: Second
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/chars',
    component: Chars
  },
  {
    path: '/charshou',
    component: CharsHou
  },
  {
    path: '/',
    redirect:'/home'
  }

]