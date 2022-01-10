<template>
  <li>
    <div>
      <h1>{{name}}</h1>
      <p>{{text}}</p>
      <p> test</p>
    </div>

  </li>
</template>

<script>
export default {
  name: "PropsContact",
  props: ['name', 'text'],

};
</script>

<style scoped>

</style>
