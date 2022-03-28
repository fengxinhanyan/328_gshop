import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/msite',
            component:Msite,
            meta:{
                showFootInfo:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFootInfo:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                showFootInfo:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showFootInfo:true
            }
        },
        {
            path:'/',
            redirect:'/msite'
        },
        {
            path:'/login',
            component:Login
        }
    ]
})