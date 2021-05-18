import VueRouter from "vue-router"
import Vue from "vue"
import Home from "../views/home"
import Test from "../components/Accueil/Test"
import Details from "../components/Accueil/Details"
import Politique from "../views/Politique"
import People from "../views/People"
import Societe from "../views/Societe"
import Videos from "../views/Videos"
import Culture from "../views/Culture"

Vue.use(VueRouter);

const router = new VueRouter({
    mode:"history",
    routes:[
        {name:"home",path:'/',component:Home},
        {name:"test",path:'/test',component:Test},
        {name:"politique",path:'/politique',component:Politique},
        {name:"Details",path:'/detail/:id',component:Details,props:true},
        {name:"People",path:'/people',component:People,props:true},
        {name:"Societe",path:'/societe',component:Societe,props:true},
        {name:"Video",path:'/videos',component:Videos,props:true},
        {name:"Culture",path:'/culture',component:Culture,props:true}
    ]
})


export default router