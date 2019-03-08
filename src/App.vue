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

<script></script>

<style></style>
