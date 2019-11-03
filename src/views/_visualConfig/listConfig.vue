<template>
  <div class="content">
    <div class="panel">
      <div class="panelHeader">
        <a-button type="primary" @click="showDrawer">新增列表页</a-button>
      </div>
      <a-divider />
      <div class="panelBody">
        <a-table :columns="columns" :dataSource="data">
          <span slot="opt">
            <router-link target="_blank" to="listConfigForm">查看</router-link>
          </span>
        </a-table>
      </div>
    </div>
    <a-drawer
      title="新增列表页"
      :width="360"
      @close="onClose"
      :visible="visible"
      :wrapStyle="{
        height: 'calc(100% - 108px)',
        overflow: 'auto',
        paddingBottom: '108px'
      }"
    >
      <a-form :form="form" layout="vertical" hideRequiredMark>
        <a-row :gutter="16">
          <a-col :span="24">
            <a-form-item label="列表页名称">
              <a-input
                v-decorator="[
                  'name',
                  {
                    rules: [{ required: true, message: '请输入列表页名称' }]
                  }
                ]"
                placeholder="请输入列表页名称"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24">
            <a-form-item label="列表页路由">
              <a-input
                v-decorator="[
                  'url',
                  {
                    rules: [{ required: true, message: '请输入列表页路由' }]
                  }
                ]"
                placeholder="请输入列表页路由"
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <div
        :style="{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right'
        }"
      >
        <a-button :style="{ marginRight: '8px' }" @click="onClose"
          >Cancel</a-button
        >
        <a-button @click="onClose" type="primary">Submit</a-button>
      </div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  name: "listConfig",
  data() {
    return {
      columns: [
        {
          title: "序号",
          dataIndex: "order"
        },
        {
          title: "所属模块",
          dataIndex: "module"
        },
        {
          title: "页面名称",
          dataIndex: "pageName"
        },
        {
          title: "路由",
          dataIndex: "url"
        },
        {
          title: "操作",
          dataIndex: "opt",
          scopedSlots: { customRender: "opt" }
        }
      ],
      data: [
        {
          order: 1,
          module: "appAdmin",
          pageName: "评分模块管理-评分中心",
          url: "/list/gradeModelList"
        }
      ],
      ModalText: "",
      visible: false
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    handleOk() {},
    onClose() {
      this.visible = false;
    }
  }
};
</script>
