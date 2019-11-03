<template>
  <div class="content">
    <a-tabs @change="callback" type="card">
      <a-tab-pane tab="页面效果" key="1"> </a-tab-pane>
      <a-tab-pane tab="可视化配置" key="2">
        1、筛选区域模块 2、表格模块
      </a-tab-pane>
      <a-tab-pane tab="JSON配置" key="3">{{ jsonObj }}</a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      jsonObj: {}
    };
  },
  methods: {
    callback() {}
  }
};
</script>
