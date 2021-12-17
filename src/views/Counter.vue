<template>
  <div class="counter">
<!--    {{counter}}-->
    {{$store.state.counter}}
  </div>
  <div class="buttons">
<!--!    dc actiunea vine din mutations => commit-->
    <button @click="$store.commit('decreaseCounter')">-</button>
    <button @click="$store.commit('increaseCounter')">+</button>
    <button @click="$store.dispatch('showName')">async test</button>
<!--    <button @click="decreaseCounter">-</button>-->
<!--    <button @click="increaseCounter">+</button>-->
  </div>


    <p >{{$store.state.name}}</p>


</template>

<script>
export default {
  name: "Counter",
  data(){
    return {
      // counter: 0
      // isVisible: false
    }
  },
  methods: {
    // increaseCounter(){
    //   this.counter++
    // },
    // decreaseCounter(){
    //   this.counter--
    // }
  }
};
</script>

<style scoped lang="scss">
  .buttons{
    margin: 10px;
    button {
      margin: 10px;
      padding: 10px;
    }
  }
  .counter{
    font-size: 80px;
  }
</style>
