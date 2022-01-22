import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contacts from '../views/Contacts.vue'
import Jobs from '../views/jobs/Jobs.vue'
import NotFound from '../views/NotFound.vue'
import JobDetails from '../views/jobs/JobDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path:'/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/jobs',
    name : 'Jobs',
    component : Jobs
  },
  {
    path: '/jobs/:id',
    name : 'JobDetails',
    component : JobDetails,
    props:true
  },
  {
    path:'/all-jobs',
    redirect : '/jobs'
  },
  //Catch all when the page is not found 
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component : NotFound
  }
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
