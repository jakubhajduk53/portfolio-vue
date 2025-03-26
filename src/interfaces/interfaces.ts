import type { DefineComponent } from "vue";

export interface Project {
  href?: string;
  name?: string;
  shortDescription?: string;
  description?: string;
  features?: string;
  icon?: DefineComponent<{}, {}, any>;
  customStyle?: string;
}
