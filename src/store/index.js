import { createStore } from "vuex";
import { shopModule } from "@/store/shopModule";

export default createStore({
  modules: {
    shop: shopModule,
  }
})