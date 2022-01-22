<template>
<div>
     <div v-for="job in jobs" :key="job.id">
         <router-link :to="{ name : 'JobDetails', params : { id:job.id}}"><p>{{ job.title }}</p></router-link>
        
     </div>
</div>
 
</template>

<script>
export default {
    
    data (){
        return {
            jobs : [
                {title : 'Ninja ux Designers', id : 1, details: 'lorem'},
                {title : 'Ninja Web Designers', id : 2, details: 'lorem'},
                {title : 'Ninja vue Developers', id : 3, details: 'lorem'}
            ]
        }
    }
}
</script>

<style>

</style>