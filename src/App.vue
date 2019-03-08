<template>
  <div id="app">
    <div v-if="!isLoginPage">
      <Header></Header>
      <Menu></Menu>
    </div>
    <div :class="isLoginPage ? '' : 'page-content'">
      <router-view/>
    </div>
  </div>
</template>

<script src="@/js/app.js"></script>

<style src="@/styles/app.less"></style>
