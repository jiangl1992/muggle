import HSLayout from "../layout/HSLayout";
import HLayout from "../layout/HLayout";
import visualConfig from "../../views/_visualConfig/visualConfig.vue";
import listConfig from "../../views/_visualConfig/listConfig.vue";
import listConfigForm from "../../views/_visualConfig/listConfigForm.vue";
import formConfig from "../../views/_visualConfig/formConfig.vue";
import chartConfig from "../../views/_visualConfig/chartConfig.vue";
import mixinConfig from "../../views/_visualConfig/mixinConfig.vue";
import errorConfig from "../../views/_visualConfig/errorConfig.vue";
export default [
  {
    path: "/visualConfig",
    name: "visualConfig",
    components: {
      ...HSLayout,
      default: visualConfig
    },
    meta: {
      module: "visualConfig"
    }
  },
  {
    path: "/listConfig",
    name: "listConfig",
    components: {
      ...HSLayout,
      default: listConfig
    },
    meta: {
      module: "visualConfig"
    }
  },
  {
    path: "/listConfigForm",
    name: "listConfigForm",
    components: {
      ...HLayout,
      default: listConfigForm
    },
    meta: {
      module: "visualConfig"
    }
  },
  {
    path: "/formConfig",
    name: "formConfig",
    components: {
      ...HSLayout,
      default: formConfig
    },
    meta: {
      module: "visualConfig",
      siderModule: "pageConfig"
    }
  },
  {
    path: "/chartConfig",
    name: "chartConfig",
    components: {
      ...HSLayout,
      default: chartConfig
    },
    meta: {
      module: "visualConfig",
      siderModule: "pageConfig"
    }
  },
  {
    path: "/mixinConfig",
    name: "mixinConfig",
    components: {
      ...HSLayout,
      default: mixinConfig
    },
    meta: {
      module: "visualConfig",
      siderModule: "pageConfig"
    }
  },
  {
    path: "/errorConfig",
    name: "errorConfig",
    components: {
      ...HSLayout,
      default: errorConfig
    },
    meta: {
      module: "visualConfig",
      siderModule: "pageConfig"
    }
  }
];
