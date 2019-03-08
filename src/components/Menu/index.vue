<template>
  <div class="menu-wrap">
    <div class="menu-item" v-for= "(item, index) in datas" :key="index">
      <div class="menu-sub-item" :class="subitem.actived ? 'actived' : ''" v-for="(subitem, subindex) in item.datas" :key="subindex" @click="handleClick(index, subindex)">
        <div class="name" v-text="subitem.subtitle"></div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style src="./index.less" lang="less"></style>
