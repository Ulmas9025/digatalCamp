<template >
    <ul class="movies-list list-group">
       <MovieListItem v-for="movie in movies" :movie="movie" />
    </ul>
</template>

<script>
import MovieListItem from '@/components/movie-list-item/MovieListItem.vue';
export default {
    components: {MovieListItem},
    data() {
      return {
        movies : [
          {
            name : 'Omar',
            viewers: 811,
            favourite: false,
            like: true
          },
          {
            name : 'Empire of osman',
            viewers: 411,
            favourite: false,
            like: false
          },
          {
            name : 'Ertugrul',
            viewers: 711,
            favourite: true,
            like: false
          }
        ]
      }
    }
}
</script>

<style scoped>
    
</style>