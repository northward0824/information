<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  color:#333333;
  width:100%;
  height:100%;
}
body{
  overflow: hidden;
}
</style>
