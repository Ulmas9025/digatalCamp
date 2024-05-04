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
    },
  }
</script>

<template>
  <Box class="box">
    <p class="fs-3 text-uppercase">Barcha kinolar soni: {{allMoviesCount}}</p>
    <p class="fs-4 text-uppercase">Ko'rilgan kinolar soni: {{favouriteMovesCount}}</p>
  </Box>
</template>

<style scoped>
 
</style>
