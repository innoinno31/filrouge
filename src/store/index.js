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
      // localStorage.setItem("phone", JSON.stringify(product));
      state.reservationList = reservation.clients;
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
      console.log("ok");
      state.productsCart.splice(index, 1);
      console.log(state.productsCart);
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
      return fetch("http://localhost:8080/products/products.js")
        .then((response) => response.json())
        .then((data) => {
          context.commit("fetchPhonesData", data);
        })
        .catch((err) => console.error(err));
    },
    getComments(context) {
      return fetch("http://localhost:8080/comment/comments.js")
        .then((response) => response.json())
        .then((data) => {
          context.commit("fetchComments", data);
        })
        .catch((err) => console.error(err));
    },
    getSlidePictures(context) {
      return fetch("http://localhost:8080/images/portfolio/portfolio.js")
        .then((response) => response.json())
        .then((data) => {
          context.commit("fetchSlidePictures", data);
        })
        .catch((err) => console.error(err));
    },

    getReservation(context) {
      return fetch("http://localhost:8080/reservation/reservation.json")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          context.commit("fetchReservation", data);
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
