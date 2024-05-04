<template>
  <div class="movie-add-form">
      <h3>Yangi kino qo'shish</h3>
      <form class="add-form d-flex" action="" @submit.prevent>
          <input type="text" class="form-control new-movie-labal" placeholder="Qanday kino?" 
          :value="name" @input ="name = $event.target.value">
          <input type="text" class="form-control new-movie-labal" placeholder="Nechi martaba ko'rilgan?" 
          :value="viewers" @input ="viewers = $event.target.value">
          
          <PrimeryButton class="btn-outline-dark" type="submit" @click="addMovie">Qo'shish</PrimeryButton>
      </form>
  </div>
</template>

<script>
  import PrimeryButton from '../ui-components/PrimeryButton.vue'

export default {
    data() {
      return {
        name: '',
        viewers: ''
      }
    },
    components: {
      PrimeryButton,
    },
    methods : {
      addMovie() {
        if(!this.name || !this.viewers) return
        const newMovie = {
          name : this.name,
          viewers: this.viewers,
          favourite: false,
          like: false,
          id: Date.now(),
        }
        this.$emit('createMovie', newMovie);
        this.name = ''
        this.viewers = ''
      }
    }
}
</script>
<style scoped>
  .movie-add-form {
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    padding: 1.5rem;
    background: #fcfaf5;
    border-radius: 4px;
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
  }  
</style>