<template>
  <div class="layout__sidebar sidebar">
    <router-link
      class="layout__link mt"
      :class="{ 'layout__link--active': routeName === 'orders' }"
      :to="{ name: 'orders' }"
      >История заказов</router-link
    >
    <router-link
      class="layout__link"
      :class="{ 'layout__link--active': routeName === 'profile' }"
      :to="{ name: 'profile' }"
      >Мои данные</router-link
    >
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const routeName = computed(() => route.name);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

.layout__link {
  @include b-s14-h16;

  display: block;

  padding: 8px 14px;

  transition: 0.3s;

  color: $black;

  &--active {
    background-color: rgba($green-500, 0.1);
  }

  &:hover {
    background-color: rgba($green-500, 0.2);
  }

  &:active {
    color: rgba($black, 0.5);
  }
}

.sidebar {
  flex-grow: 1;

  background-color: rgba($green-500, 0.05);
}

.mt {
  margin-top: 30px;
}

.layout__sidebar {
  position: absolute;
  z-index: 2;
  top: 60px;
  left: 0;

  width: 180px;
  height: 100%;

  background-color: rgba($green-500, 0.05);
}
</style>
