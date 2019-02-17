declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module '*.svg' {
  import { VNode } from 'vue';
  type Svg = string;
  const content: Svg;
  export default content;
}
