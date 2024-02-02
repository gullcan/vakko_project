import "./assets/css/style.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faUser,
  faMagnifyingGlass,
  faBasketShopping,
  faArrowLeft,
  faXmark,
  faGlobe,
  faShieldHalved,
  faTruck,
  faRotateRight,
  faLocationDot,
  faArrowUpRightFromSquare
} from "@fortawesome/free-solid-svg-icons";

import {
  faCircleQuestion,
  faCreditCard,
} from "@fortawesome/free-regular-svg-icons";
import {
    faFacebookF,faYoutube,faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);
const pinia = createPinia()

library.add(
  faCircleQuestion,faInstagram,
  faArrowUpRightFromSquare,faFacebookF,
  faCreditCard,
  faLocationDot,
  faYoutube,
  faBars,
  faUser,
  faMagnifyingGlass,
  faBasketShopping,
  faArrowLeft,
  faXmark,
  faGlobe,
  faShieldHalved,
  faTruck,
  faRotateRight
);

app.use(router);

app.mount("#app");

app.use(pinia)
