<template >
    <ul class="movies-list list-group">
       <MovieListItem 
       v-for="movie in movies" 
       :movie="movie"  
       :key="movie.id" 
       @onToggle='$emit("onToggle", $event)'
       @onRemove='$emit("onRemove", movie.id)'
       
    />
    </ul>
</template>

<script>
import MovieListItem from '@/components/movie-list-item/MovieListItem.vue';
export default {
    components: {MovieListItem},
    props:{
      movies : {
        type: Array,
        requared: true,
      },
    },
   
}
</script>

<style scoped>
    
</style>