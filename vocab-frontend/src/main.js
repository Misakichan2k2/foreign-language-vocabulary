import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import ConfirmationService from "primevue/confirmationservice";

import "/node_modules/primeflex/primeflex.css";
import "primevue/resources/themes/aura-light-green/theme.css";

import "primeicons/primeicons.css";

import AppWrapper from "./AppWrapper.vue";
import router from "./services/router";

import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Calendar from "primevue/calendar";
import ProgressSpinner from "primevue/progressspinner";
import RadioButton from "primevue/radiobutton";
import Textarea from "primevue/textarea";
import Toast from "primevue/toast";
import Avatar from "primevue/avatar";
import InputOtp from "primevue/inputotp";
import Checkbox from "primevue/checkbox";
import ConfirmDialog from "primevue/confirmdialog";
import Tooltip from "primevue/tooltip";
import { plugin as VueTippy } from "vue-tippy";

const app = createApp(AppWrapper);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.use(ConfirmationService);

app.use(
  VueTippy,
  // optional
  {
    directive: "tippy", // => v-tippy
    component: "tippy", // => <tippy/>
  }
);

app.directive("tooltip", Tooltip);

app.component("Button", Button);
app.component("Dialog", Dialog);
app.component("InputText", InputText);
app.component("Password", Password);
app.component("Calendar", Calendar);
app.component("ProgressSpinner", ProgressSpinner);
app.component("RadioButton", RadioButton);
app.component("Textarea", Textarea);
app.component("Toast", Toast);
app.component("Avatar", Avatar);
app.component("InputOtp", InputOtp);
app.component("Checkbox", Checkbox);
app.component("ConfirmDialog", ConfirmDialog);

app.mount("#app");
