<script >
  export default {
    props: {
      allMoviesCount : {
        type: Number,
        requred: true        
      },
      favouriteMovesCount : {
        type: Number,
        requred: true
      }
    }
  }
</script>

<template>
  <div class="app-info">
    <p class="fs-3 text-uppercase">Barcha kinolar soni: {{allMoviesCount}}</p>
    <p class="fs-4 text-uppercase">Ko'rilgan kinolar soni: {{favouriteMovesCount}}</p>
  </div>
</template>

<style scoped>
  .app-info{
    padding: 1.5rem;
    border-radius: 4px;
    background: #fcfaf5;
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
  }
</style>
