<template>
  <a-layout-sider>
    <a-menu
      :defaultSelectedKeys="current"
      :defaultOpenKeys="currentOpen"
      mode="inline"
      theme="dark"
    >
      <template v-for="item of list">
        <template v-if="item.list">
          <a-sub-menu :key="item.id">
            <span slot="title">
              <a-icon :type="item.icon" />
              <span>{{ item.name }}</span>
            </span>
            <template v-for="itm of item.list">
              <a-menu-item :key="itm.id" @click="handleClick(itm)">{{
                itm.name
              }}</a-menu-item>
            </template>
          </a-sub-menu>
        </template>
        <template v-else>
          <a-menu-item :key="item.id" @click="handleClick(item)">
            <a-icon :type="item.icon" />
            <span>{{ item.name }}</span>
          </a-menu-item>
        </template>
      </template>
    </a-menu>
  </a-layout-sider>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "sider",
  data() {
    return {
      current: [],
      currentOpen: []
    };
  },
  computed: {
    ...mapState(["sider"]),
    list() {
      return this.sider[this.$route.meta.module + "Sider"].list;
    }
  },
  methods: {
    handleClick(item) {
      if (this.currentOpen.includes(item.id)) {
        return;
      }
      this.$router.push(item.href);
    }
  },
  mounted() {
    this.current = [this.$route.name];
    this.currentOpen = this.$route.meta.siderModule
      ? [this.$route.meta.siderModule]
      : [];
  }
};
</script>
