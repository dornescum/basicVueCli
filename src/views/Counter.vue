<template>
  <div class="counter" :style="{color: $store.state.colorCode}">
    <!--    {{counter}}-->
    {{ $store.state.counter }}
  </div>
  <div class="buttons">
    <!--!    dc actiunea vine din mutations => commit-->
    <button @click="$store.commit('decreaseCounter')">-</button>
    <button @click="$store.commit('increaseCounter')">+</button>
    <button @click="$store.dispatch('showName')">async test</button>
    <!--    <button @click="decreaseCounter">-</button>-->
    <!--    <button @click="increaseCounter">+</button>-->
  </div>


  <p>{{ $store.state.name }}</p>
  <!--?  NU este recomandat sa schimbi direct valorile, trebuie sa fol mutations in vuex-->
  <!--  v-model='$store.state.colorCode'-->
  <input type="text"
         placeholder="change counter color"
         v-model="colorCode"
  >


</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      // counter: 0
      // isVisible: false
    };
  },
  methods: {
    // increaseCounter(){
    //   this.counter++
    // },
    // decreaseCounter(){
    //   this.counter--
    // }
  },
  computed: {
    // nu este o metoda!
    colorCode: {
      // are un get si un set
      get() {
        // iau valoarea din store
        return this.$store.state.colorCode;
      },
      set(newValue) {
        console.log('set');
        //! creez o mutatie in store si de aici trimit cu commit
        this.$store.commit('setColorCode', newValue);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.buttons {
  margin: 10px;

  button {
    margin: 10px;
    padding: 10px;
  }
}

.counter {
  font-size: 80px;
}
</style>
