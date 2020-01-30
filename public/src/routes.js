import Manager from './Components/Manager.vue'
import Home from './Components/Home.vue'
import Waiters from './Components/Waiters.vue'

export const routes = [
    {path: '', component: Home},
    {path: '/manager', component: Manager},
    {path: '/waiters', component: Waiters}
];