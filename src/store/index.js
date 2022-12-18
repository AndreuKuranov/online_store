import { createStore } from "vuex";
import { shopModule } from "@/store/shopModule";
import { authModule } from "@/store/authModule";
import { modalModule } from "@/store/modalModule"

export default createStore({
  modules: {
    shop: shopModule,
    auth: authModule,
    modal: modalModule,
  }
})