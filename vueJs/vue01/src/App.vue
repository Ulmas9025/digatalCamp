
<template>
    <input type="text" v-model="userName" placeholder=" имя">
    <input type="password" v-model="userPass" placeholder="пароль">
    <input type="email" v-model="userEmail" placeholder="email">
    <p className="error">{{error}}</p>
   <button @click="sendDate()">Отправит</button>
   
   <div v-if="users.length == 0" className="user">
       у нас нет пользователей 
   </div>

   <div v-for="(el, index) in users" :key="index" className="user">
      <h3>{{el.name}}</h3>
      <p>{{el.email}} - <b>{{el.pass}}</b></p>
   </div>
</template>

<script>
  export default{

    data() {

      return{
        users: [],
        error:'',
        userName:'',
        userPass:'',
        userEmail:''
      }
    },
    methods: {
      sendDate() {
        if(this.userName == '' ){
          this.error = 'Имя не введено'
          return;
        }else if (this.userPass == '' ){
          this.error = 'Пароль не введено'
          return;
        }else if (this.userEmail == '' ){
          this.error = 'Email не введено'
          return;
        }
         
        this.error = '';  

        this.users.push({
          name: this.userName,
          pass: this.userPass,
          email:this.userEmail
        })
      }
    }

  }
</script>


<style>
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
    background: #6cd670;
    color: #167f3d;
    font-weight: bold;
    cursor: pointer;
    transition: transform 500ms ease;
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
