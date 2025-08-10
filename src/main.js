import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarkerAlt,
  faEnvelope,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEnvelope, faMapMarkerAlt, faGithub, faLinkedin, faLink)

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount("#app")