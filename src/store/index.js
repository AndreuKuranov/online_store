import { createStore } from "vuex";
import { shopModule } from "@/store/shopModule";
import { authModule } from "@/store/authModule";

export default createStore({
  modules: {
    shop: shopModule,
    auth: authModule,
  }
})