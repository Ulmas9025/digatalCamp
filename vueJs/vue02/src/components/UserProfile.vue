
<template>
   <div  className="user">
    <button @click="deliteUsers(index)">Удалить</button>
      <h3>{{userProfile.name}}</h3>
      <p>{{userProfile.email}} - <b>{{userProfile.pass}}</b></p>
   </div>
</template>

<script>
  export default{
    props: {
      userProfile: {
          type: Object,
          required: true
       },
       index: {
         type: Number,
         required: true
       },
       deliteUsers : {
         type: Function,
         required: true
       }
    }

   }
</script>


<style scoped>
  input {
    display: block;
    margin-bottom: 10px;
    border-radius: 3px;
    outline: none;
    padding: 10px 15px;
    background: #fafafa;
    color: #333;
  }

  button {
    border: 0;
    border-radius: 5px;
    outline: none;
    padding: 10px 15px;
    background: #d66c75;
    color: #7f1629;
    font-weight: bold;
    cursor: pointer;
    transition: transform 500ms ease;
    float: right;
  }

  button:hover {
    transform: translateY(-5px);
  }

  .user{
    width: 500px;
    margin-top: 20px;
    border: 1px solid silver;
    background: #e3e3e3;
    color: #222;
    padding: 20px;
    border-radius: 5px;
  }
</style>
