<script>
   export default {
  props: {
    setCrypto: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      current: ''
    };
  },
  methods: {
    selectItem(val) {
      this.setCrypto(val);
      this.current = val;
    }
  }
};
</script>

<template>

 <ul>
    <li @click="setCrypto('BTC')"  :className="current == 'BTC' ? 'active' : '' ">Bitcoin</li>
    <li @click="setCrypto('ETH')"  :className="current == 'ETH' ? 'active' : '' ">ETH</li>
    <li @click="setCrypto('USDT')" :className="current == 'USDT'? 'active'  : '' ">USDT</li>


 </ul>
 
</template>
  
<style scoped>
ul {
    list-style: none;
    width: 200px;
    padding: 0;
    border-radius: 3px;
    border: 3px solid #000;
}
li {
    display: block;
    background: #1A032D;
    color: #fff;
    padding: 20px 0;
}
li:hover, li :active {
    background: #82629d;
    cursor: pointer;
}

</style>