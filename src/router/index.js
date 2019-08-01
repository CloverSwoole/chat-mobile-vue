import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Chat from '@/components/Chat'
import MsgLists from '@/components/MsgLists'
import Friends from '@/components/Friends'
import Find from '@/components/Find'
import My from '@/components/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/MsgLists',
      name:"MsgLists",
      component:MsgLists
    },
    {
      path:'/Friends',
      name:"Friends",
      component:Friends
    },
    {
      path:'/Find',
      name:"Find",
      component:Find
    },
    {
      path:'/My',
      name:"My",
      component:My
    },
    {
      path:'/Chat',
      name:"Chat",
      component:Chat
    }

  ]
})
