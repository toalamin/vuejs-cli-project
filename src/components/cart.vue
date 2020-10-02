<template>
       <ul class="list-group">
            <li class="list-group-item" v-for="(item,index) in carts" :key="index">
              <button class="btn btn-xs btn-danger" @click="removeItem">-</button>
              <span class="item-name">{{item.title}}</span>
              <span class="item-price float-right">{{item.price}}</span>

            </li>
            
            <li class="list-group-item">
              <span class="item-name">Total: </span>
              <span class="item-price float-right">{{totalPrice}}</span>

            </li>



          </ul>   
</template>
<script>
export default {
props:["carts"],

methods:{
  removeItem(item){
    this.$emit('removeItem',item)
  }
},

computed:{
    totalPrice(){
        var total = 0
        this.carts.forEach(item => {
          console.log(item)
          console.log("alamin");
          total +=parseFloat(item.price)
        })
        return total
      }
    }
   
}
</script>

<style>

</style>
