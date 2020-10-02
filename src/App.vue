<template>
  <div id="app">
    <!-- <router-link :to="{path : '/'}">Home</router-link>
    <router-link :to="{path : '/test/1'}">Test 1 </router-link>
    <router-link :to="{path : '/test/2'}">Test 2</router-link>
    <router-link :to="{path : '/test/3'}">Test 3</router-link> -->

    

  <navbar @search="search"></navbar>
  <div class="container" style="padding-top:50px;"> 
    <div class="row">
      <div class="col-md-9">
       <router-view></router-view>

        <!-- <inventory @newItemAdded="addItem" :items="itemes" :iteme2="iteme2"></inventory> -->
      </div>
      <div class="col-md-3">
        <cart @removeItem="removeItem" :carts="carts"></cart>
      </div>
     </div>
  </div>
  </div>
</template>

<script>
// import inventory from './components/inventory'
import cart from './components/cart'
import navbar from './components/navbar'
import data from './data.js'

export default {
  name: 'App',
  components: {
    // inventory,
    cart,
    navbar
  },
  data(){
    return {
      itemes: [],
      iteme2: [],
      carts:[{
        id: 1,
        title:"test",
        price: 100,
        photo:'https://robohash.org/sedestdolorem.png?size=50x50&set=set1'
      }]
    }
  },
  mounted () {
    this.itemes = data
  },
  methods:{
    search(keyword){
      this.itemes = data.filter(item => {
       return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      })
    },
    addItem(index){
      this.carts.push(index)
    },
    removeItem(index){
        this.carts.splice(index,1)
    }
  }
  
}
</script>

<style>

</style>
