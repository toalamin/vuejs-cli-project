<template>
       <div class="row">
         
          <div v-for="(item,index) in items" :key="index" class="col-md-3">
            <div class="card">
                <img :src="item.photo" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">{{item.title}}</h5>
                  <p class="card-text">{{ item.price}}</p>
                  <a href="#" @click="addToCart(item)" class="btn btn-primary">Add</a>
                </div>
            </div>
          </div>

        </div> 
</template>
<script>
import axios from 'axios'
export default {
 data(){
   return {
     items:[]
   }
 },
 mounted(){
   this.fetchInventory()

 },
methods:{
  addToCart(item){
    this.$emit('newItemAdded',item)
  },
  fetchInventory(){
    var self = this
    axios.get('http://localhost:3000/items').then(response => {
    // console.log(response);
    setTimeout(function(){
      self.items = response.data
    },300)
   
    })
  }
}

}
</script>

<style>

</style>