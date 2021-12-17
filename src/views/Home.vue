<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>testing vue</p>
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div v-if="showModal">
<!-- ?     nume eventului declarat in Modal => close-->
      <Modal :title="title" :sub-title="subTitle" theme="sale" @close="toggleModal"/>
    </div>
    <button @click="toggleModal">show modal</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Modal from "@/components/Modal";

export default {

  name: 'Home',
  components: {
    // HelloWorld
    Modal
  },
  data(){
    return {
      title: 'modal in vue',
      subTitle: 'subtitle in vue',
      showModal: false
    }
  },
  methods: {
    toggleModal(){
      this.showModal = !this.showModal
    }
  }
}
</script>
