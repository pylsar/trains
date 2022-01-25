<template>
    <div>
        1
    </div>
</template>
<script>
import PostService from '../PostService.js';
export default{
    name: 'WikiTrains',
    data(){
        return {
            posts: [],
            error: '',
            text: ''
        }
    },
    async created(){
        try{
            this.posts = awaite PostService.getPosts();
        }catch(err){
            this.error = err;
        }
    }
}
</script>