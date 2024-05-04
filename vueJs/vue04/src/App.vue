<script>
import InputNumber from './components/InputNumber.vue'
import SelectorCon from './components/SelectorCon.vue'
import CryptoConvert from 'crypto-convert';
const convert = new CryptoConvert(/*options?*/);

 export default {
    components: {InputNumber, SelectorCon},
    data() {
        return {
            amount: 0,
            criptoFirst : '',
            criptoSecond : '',
            error : '',
            result: 0
        }
    },
    methods: {
        changeAmaunt(val){
            this.amount = val
        },
        setcriptoFirst(val){
            this.criptoFirst = val
        },
        setcriptoSecond(val){
            this.criptoSecond = val
        },
        async convert() {
            if(this.amount <= 0) {
                 this.error = 'Ведите число больше за ноль';
                 return;
            } else if(this.criptoFirst == this.criptoSecond) {
                 this.error = 'Выберите другую валюту';
                 return;
            }else if(this.criptoFirst == '' || this.criptoSecond == '') {
                 this.error = 'Выберите валюту';
                 return;
            }
            this.error = '';

            await convert.ready();
            if(this.criptoFirst == 'BTC' && this.criptoSecond == 'ETH' )
            this.result = convert.BTC.ETH(this.amount);
            else if (this.criptoFirst == 'BTC' && this.criptoSecond == 'USDT' )
            this.result = convert.BTC.USDT(this.amount);
            else if (this.criptoFirst == 'ETH' && this.criptoSecond == 'BTC' )
            this.result = convert.ETH.BTC(this.amount);
            else if (this.criptoFirst == 'ETH' && this.criptoSecond == 'USDT' )
            this.result = convert.ETH.USDT(this.amount);
            else if (this.criptoFirst == 'USDT' && this.criptoSecond == 'BTC' )
            this.result = convert.USDT.BTC(this.amount);
            else if (this.criptoFirst == 'USDT' && this.criptoSecond == 'ETH' )
            this.result = convert.USDT.BTC(this.amount);
        }
    } 
 } 


</script>



<template>
 <h1>CRIPTO</h1>

 <InputNumber :changeAmaunt="changeAmaunt" :convert="convert"/>
 <p v-if="error != ''">{{error}}</p>
 <div clasName="result" ><p  v-if="result != 0">{{result}}</p></div>
 <div className="selectors">
    <SelectorCon :setCrypto="setcriptoFirst" />
    <SelectorCon :setCrypto="setcriptoSecond"/>  
 </div>   
</template>
  
<style scoped>
 .selectors {
    display: flex;
    justify-content: space-around;
    width: 700px;
    margin: 0 auto;

 }
 p{
    color: red;
    font-size: 20px;
 }
 
 div p {
    color: rgb(228, 220, 220);
    font-size: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 }
</style>
