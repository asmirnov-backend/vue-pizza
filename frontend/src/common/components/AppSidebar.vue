<template>
  <div class="layout__sidebar sidebar">
    <a href="index.html" class="logo layout__logo">
      <img
        src="@/assets/img/logo.svg"
        alt="V!U!E! Pizza logo"
        width="90"
        height="40"
      />
    </a>

    <router-link
      class="layout__link"
      :class="{ 'layout__link--active': $route.path === '/orders' }"
      to="/orders"
      >История заказов</router-link
    >
    <router-link
      class="layout__link"
      :class="{ 'layout__link--active': $route.path === '/user' }"
      to="/user"
      >Мои данные</router-link
    >
  </div>
</template>

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

.layout__logo {
  display: block;

  margin-bottom: 30px;
  padding-top: 10px;
  padding-bottom: 10px;

  background-color: $green-500;

  img {
    display: block;

    margin: 0 auto;
  }
}

.sidebar {
  flex-grow: 1;

  background-color: rgba($green-500, 0.05);
}

.layout__sidebar {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;

  width: 180px;
  height: 100%;

  background-color: rgba($green-500, 0.05);
}
</style>
