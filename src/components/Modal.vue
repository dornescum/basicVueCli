<template>
<!--?  declar aici functia pe care o folosesc in alt component-->
  <div class="backdrop" @click.self="closeModal">
<!-- ?   actiunea este lansata doar dc apas in afara-->
<!--    a 2 a clasa este dinamica(pot adauga mai multe)-->
<!--!    props are optional-->
    <div class="modal" :class="{sale: theme ==='sale'}">
     <p>{{title}}</p>
     <p>{{subTitle}}</p>
      <slot></slot>
      <div class="actions">
<!--!        numele trebuie sa fie acc cu cel declarat in template unde il folosesc-->
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  // declar aici props si il folosesc unde am nevoie
  props:['title', 'subTitle', 'theme'],
  methods: {
    closeModal(){
      //! emit un event de aici . from parrent to child
      this.$emit('close') //! si ii dau ce nume vreau eu pe care il folosesc in Home (in cazul asta)
    }
  }
};
</script>

<style scoped lang="scss">
  .modal{
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 15px 0;
      p{
        font-style: italic;
      }
  }
  .sale {
    background: lightpink;
    color: #fff;
  }
  .backdrop{
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
  }
  .actions{
    background: lightsteelblue;

  }
</style>
