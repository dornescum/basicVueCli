<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-if="showModal">
      <Modal  theme="sale" @close="toggleModal">
        <h1>slots</h1>
        <p>unnamed slots</p>
        <template v-slot:links>
          <p>named slot</p>
          <a href="#">sign up</a>
          <a href="">sign in</a>
        </template>
      </Modal>

    </div>
    <button @click="toggleModal">show modal</button>
  </div>
</template>

<script>

import Modal from "@/components/Modal";

export default {
  name: 'About',
  components: {
    Modal
  },
  data(){
    return {

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
<style lang="scss" scoped>
a {
  padding: 0 1rem;
  color: #42b983;
  background: cornsilk;
}
</style>
