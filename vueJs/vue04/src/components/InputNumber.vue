<template>
    <input min="0" type="number" @input="changeAmaunt($event.target.value)" placeholder="Введите число"> <br>
    <button @click="convert()">Конвертировать</button>
  </template>
  
  <script>
  export default {
    props: {
      changeAmaunt: {
        type: Function,
        required: true
      },
      convert: {
        type: Function,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  input {
    border-radius: 3px;
    padding: 10px 15px;
    border: 0;
    background: #fafafa;
    color: #333;
    outline: none;
    width: 525px;
    margin-top: -50px;
    font-size: 1.2em;
  }
  button{
    position: relative;
    margin: 40px auto;
    padding: 15px 20px;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    background: #1a032d;
    border-radius: 10px;
    border: 0;
  }
  </style>
  