<template>
  <div class="app font-monosace">
    <div class="content">
      <AppInfo :allMoviesCount="movies.length" :favouriteMovesCount="movies.filter(c => c.favourite).length"/>

      <div class="search-panel">
        <SearchPanel :updateTermHandler="updateTermHandler"/>
        <AppFilter :updateFilterHandlar="updateFilterHandlar" :filterName="filter"/>
      </div>

      <div>
        <MovieList 
        :movies="onFilterHandlar(onSearchHandlar(movies , term), filter)" 
        @onToggle="onToggleHandler" 
        @onRemove="onRemoveHandler"
        />
        <MovieAddForm @createMovie="createMovie"/>
      </div>
    </div>
  </div>
</template>

<script>
import AppInfo from '@/components/app-info/AppInfo.vue';
import SearchPanel from '@/components/search-panel/SearchPanel.vue';
import AppFilter from '@/components/app-filter/AppFilter.vue';
import MovieList from '@/components/movie-list/MovieList.vue';
import MovieAddForm from '@/components/movie-add-form/MovieAddForm.vue';

export default {
  components: {
    AppInfo,
    SearchPanel,
    AppFilter,
    MovieList,
    MovieAddForm
  },
  data() {
    return {
      movies : [
        {
          name : 'Omar',
          viewers: 811,
          favourite: false,
          like: false,
          id: 1
        },
        {
          name : 'Empire of osman',
          viewers: 411,
          favourite: false,
          like: false,
          id: 2
        },
        {
          name : 'Ertugrul',
          viewers: 711,
          favourite: false,
          like: false,
          id: 3
        }
      ],
      term: '',
      filter: 'all'
    }
  },
  methods: {
    createMovie(item) {
      this.movies.push(item)
    },
    onToggleHandler({id , prop}) {
      this.movies = this.movies.map(item =>{
        if (item.id == id){
          return{...item, [prop]: !item[prop]}
        }
        return item
      })
    },
    onRemoveHandler(id) {
      this.movies = this.movies.filter(c => c.id != id)
    },
    onSearchHandlar(arr , term) {
      if(term.length == 0){
        return arr
      }

      return arr.filter(c => c.name.toLowerCase().indexOf(term) > -1)
    },
    onFilterHandlar(arr , filter) {
      switch (filter) {
        case 'popular':
          return arr.filter(c => c.like)
          break;
        case 'mostViewers':
          return arr.filter(c => c.viewers > 500)
          break;
        default:
          return arr;
      }
    },
    updateTermHandler(term){
      this.term = term
    },
    updateFilterHandlar(filter){
      this.filter = filter
    }
  }
}
</script>

<style scoped>
.app{
  height: 100vh;
  color: #000;
}
.content {
  width: 1000px;
  min-height: 700px;
  background-color: #fff;
  margin: 0 auto;
  padding: 5rem 0;
}
.search-panel {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>
