import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  name: "mainStore",
  state: {
    products: {},
    itemID: Number,
    productsCart: [],
    phone: {},
    errorAddProduct: false,
    fetchComments: {},
    slidePictures: {},
    imgPortfolioFullscreen: Boolean,
    reservationList: {},
    orderList: {},
  },

  mutations: {
    fetchPhonesData(state, products) {
      localStorage.setItem("products", JSON.stringify(products));
      state.products = products.phones;
    },
    itemID(state, itemID) {
      localStorage.setItem("itemID", itemID);
      state.itemID = itemID;
    },
    getPhoneDetail(state, product) {
      localStorage.setItem("phone", JSON.stringify(product));
      state.phone = product;
    },

    fetchReservation(state, reservation) {
      state.reservationList = reservation.clients;
    },
    fetchOrderList(state, orders) {
      state.orderList = orders.orders;
    },

    initialiseStore(state) {
      if (localStorage.getItem("itemID")) {
        state.itemID = localStorage.getItem("itemID");
      }
      if (localStorage.getItem("phone")) {
        state.phone = JSON.parse(localStorage.getItem("phone"));
      }
      if (localStorage.getItem("products")) {
        let parse = JSON.parse(localStorage.getItem("products"));
        state.products = parse.phones;
      }
      if (localStorage.getItem("productsInCart")) {
        state.productsCart = JSON.parse(localStorage.getItem("productsInCart"));
      }
    },
    addProductToCart(state, product) {
      state.productsCart.push(product);
      localStorage.setItem(
        "productsInCart",
        JSON.stringify(state.productsCart)
      );
    },
    errorProductCart(state, bool) {
      if (bool == true) {
        state.errorAddProduct = true;
      }
      if (bool == false) {
        state.errorAddProduct = false;
      }
    },
    removeCartProduct(state, index) {
      state.productsCart.splice(index, 1);
      localStorage.setItem(
        "productsInCart",
        JSON.stringify(state.productsCart)
      );
    },
    fetchComments(state, data) {
      state.fetchComments = data.comments;
    },
    fetchSlidePictures(state, data) {
      state.slidePictures = data.images;
    },
    imgPortfolioFullscreen(state, bool) {
      state.imgPortfolioFullscreen = bool;
    },
  },

  actions: {
    getProducts(context) {
      return fetch("/products/products.json")
        .then((response) => response.json())
        .then((data) => {
          context.commit("fetchPhonesData", data);
        })
        .catch((err) => console.error(err));
    },
    getComments(context) {
      return fetch("/clients/comments.json")
        .then((response) => response.json())
        .then((data) => {
          context.commit("fetchComments", data);
        })
        .catch((err) => console.error(err));
    },
    getSlidePictures(context) {
      return fetch("/images/portfolio.json")
        .then((response) => response.json())
        .then((data) => {
          context.commit("fetchSlidePictures", data);
        })
        .catch((err) => console.error(err));
    },

    getReservation(context) {
      return fetch("/clients/clients.json")
        .then((response) => response.json())
        .then((data) => {
          context.commit("fetchReservation", data);
        })
        .catch((err) => console.error(err));
    },

    getOrderList(context) {
      return fetch("/products/orders.json")
        .then((response) => response.json())
        .then((data) => {
          context.commit("fetchOrderList", data);
        })
        .catch((err) => console.error(err));
    },

    addProductCart(context, product) {
      if (!context.state.productsCart.find((id) => id.id == product.id)) {
        context.commit("addProductToCart", product);
      } else {
        context.commit("errorProductCart", true);

        setTimeout(() => {
          context.commit("errorProductCart", false);
        }, 5000);
      }
    },
    isPortfolioFullscreen(context, bool) {
      context.commit("imgPortfolioFullscreen", bool);
    },
  },
  getters: {
    choiceAlbumDone: (state) => {
      if (Object.keys(state.reservationList).length != 0) {
        return state.reservationList.filter((client) => client.albumChoiceDone);
      }
    },
  },
});
