<template>
  <div class="app_layout">
    <AppHeader />
    <AppSidebar />
    <div class="layout__content">
      <div class="layout__title">
        <h1 class="title title--big">{{ title }}</h1>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import AppHeader from "../common/components/AppHeader.vue";
import AppSidebar from "../common/components/AppSidebar.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const title = route.meta.title ?? "";
</script>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

.title {
  box-sizing: border-box;
  width: 100%;
  margin: 0;

  color: $black;

  &--big {
    @include b-s36-h42;
  }

  &--small {
    @include b-s18-h21;
  }
}

.layout__content {
  padding-top: 22px;
  padding-right: 2.12%;
  padding-left: 200px;
}

.layout__title {
  margin-bottom: 27px;
}
</style>
