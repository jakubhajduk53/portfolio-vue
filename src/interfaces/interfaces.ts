import type { DefineComponent } from "vue";

export interface Project {
  href?: string;
  name?: string;
  description?: string;
  icon?: DefineComponent<{}, {}, any>;
  customStyle?: string;
}
