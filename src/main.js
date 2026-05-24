import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import { COUPLE_NAMES } from "./config/site";
import "./styles/main.scss";

document.title = `Nåtofts bröllop`;

const app = createApp(App);

app.use(router);
app.use(i18n);
app.mount("#app");
