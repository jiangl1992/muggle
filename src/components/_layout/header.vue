<template>
  <a-layout-header class="layout-header">
    <div class="logo" />
    <a-dropdown class="dropdown" v-model="visible">
      <a-avatar class="ant-dropdown-link" icon="user" />
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item key="1">可视化配置</a-menu-item>
        <a-menu-item key="2">管理后台</a-menu-item>
        <a-menu-item key="3">退出</a-menu-item>
      </a-menu>
    </a-dropdown>
  </a-layout-header>
</template>
<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    handleMenuClick(e) {
      if (e.key === "3") {
        this.visible = false;
      }
    }
  }
};
</script>
