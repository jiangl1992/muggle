<template>
  <a-layout class="container">
    <!-- <a-layout-header>Header</a-layout-header> -->
    <router-view name="header" />
    <a-layout>
      <router-view name="sider" />
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
