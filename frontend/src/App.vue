<template>
  <transition
    name="slide"
    appear
    enter-active-class="animate__animated animate__bounceInRight"
  >
    <AppLayout>
      <Suspense>
        <router-view />
      </Suspense>
    </AppLayout>
  </transition>
</template>

<script setup>
import { AppLayout } from "@/layouts";
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
</style>

<style></style>
