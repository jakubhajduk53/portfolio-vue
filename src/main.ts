import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "boxicons/css/boxicons.min.css";
import "element-plus/dist/index.css";

const app = createApp(App);

app.use(ElementPlus);

app.mount("#app");
