<template>
    <div class="container">
        <h1>Container:{{counter}}</h1>
        <button @click="onIncriment" class="btn btn-success">Add</button>
        <button @click="onDecriment" class="btn btn-danger">Delite</button>
    </div>
</template>

<script>
  export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        onIncriment() {
            this.counter += 1
        },
        onDecriment() {
            this.counter -= 1
        }
    },
  }
</script>

<style>
</style>