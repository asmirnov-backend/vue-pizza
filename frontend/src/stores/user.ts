import { defineStore } from "pinia";
import AuthService from "../services/AuthService";
import { removeToken, setToken } from "../services/token-manager";
import AddressService from "../services/AddressService";
import OrderService from "../services/OrderService.ts";

interface WhoAmI {
  id: string;
  name: string;
  email: string;
  avatar: string;
  phone: string;
}

interface Address {
  id: number;
  name: string;
  street: string;
  building: string;
  flat: string;
  comment: string;
  userId: string;
}

interface OrderIngredient {
  id: number;
  pizzaId: number;
  ingredientId: number;
  quantity: number;
}

interface OrderPizza {
  id: number;
  name: string;
  sauceId: number;
  doughId: number;
  sizeId: number;
  quantity: number;
  orderId: number;
  ingredients: OrderIngredient[];
}

interface OrderMisc {
  id: number;
  orderId: number;
  miscId: number;
  quantity: number;
}

interface OrderAddress {
  id: number;
  name: string;
  street: string;
  building: string;
  flat: string;
  comment: string;
  userId: string;
}

export interface Order {
  id: number;
  userId: string;
  addressId: number | null;
  orderPizzas?: OrderPizza[];
  orderMisc?: OrderMisc[];
  orderAddress?: OrderAddress;
  phone: string;
}

interface UserState {
  whoAmI: WhoAmI | null;
  addresses: Address[];
  orders: Order[];
}

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    whoAmI: null,
    addresses: [],
    orders: [],
  }),
  getters: {
    getWhoAmI: (state) => state.whoAmI,
    getAddresses: (state) =>
      state.addresses.map((addr) => ({
        ...addr,
        fullAddress: [addr.street, addr.building, addr.flat].join(", "),
      })),
    getOrders: (state) => state.orders,
    isAuthenticated: (state) => Boolean(state.whoAmI?.email),
  },
  actions: {
    async fetchAddresses() {
      this.addresses = await AddressService.fetch();
    },
    async fetchOrders() {
      this.orders = await OrderService.fetch();
    },
    async deleteOrder(id: number) {
      const indexInStore = this.orders.findIndex((order) => order.id == id);
      this.orders.splice(indexInStore, 1);
      await OrderService.deleteOrder(id);
    },

    setWhoAmI(whoAmI: WhoAmI) {
      this.whoAmI = whoAmI;
    },
    setAddresses(addresses: Address[]) {
      this.addresses = addresses;
    },
    setOrders(orders: Order[]) {
      this.orders = orders;
    },

    async login(email: string, password: string) {
      try {
        const data = await AuthService.login(email, password);
        setToken(data.token);
        return "ok";
      } catch (e) {
        return e.message;
      }
    },
    async getMe() {
      this.whoAmI = await AuthService.whoAmI();
    },
    async logout(sendRequest = true) {
      await AuthService.logout();
      this.whoAmI = {};
      removeToken();
    },
  },
});
