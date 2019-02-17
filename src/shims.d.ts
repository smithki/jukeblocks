declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module '*.svg' {
  type Svg = string;
  const content: Svg;
  export default content;
}

declare module '*.jpg' {
  type Jpg = string;
  const content: Jpg;
  export default content;
}

declare module '*.mp3' {
  type Mp3 = string;
  const content: Mp3;
  export default content;
}
