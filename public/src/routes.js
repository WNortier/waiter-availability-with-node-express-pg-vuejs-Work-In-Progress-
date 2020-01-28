import Manager from './Components/Manager.vue'
import Home from './Components/Home.vue'

export const routes = [
    {path: '', component: Home},
    {path: '/manager', component: Manager},
];