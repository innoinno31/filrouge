import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import PageCart from "./views/Cart.vue";
import ClientPictures from "./views/ClientPictures.vue";
import ContactPage from "./views/Contact.vue";
import WeddingPage from "./views/Wedding.vue";
import ProductPage from "./views/Product.vue";
import AboutPage from "./views/About.vue";
import ProductsPage from "./views/Products.vue";
import PortfolioPage from "./views/Portfolio.vue";

import AdminPage from "./backoffice/views/Admin.vue";
import CalendarPage from "./backoffice/views/Calendar.vue";
import PortfolioAdminPage from "./backoffice/views/PortfolioAdmin.vue";
import ReservationPage from "./backoffice/views/Reservation.vue";
import AlbumPage from "./backoffice/views/Album.vue";
import ProductOrder from "./backoffice/views/ProductOrder.vue";

Vue.use(Router);

const mainRouter = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/cart",
      name: "cart",
      component: PageCart,
    },
    {
      path: "/photos-client",
      name: "clientPictures",
      component: ClientPictures,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactPage,
    },
    {
      path: "/mariage",
      name: "wedding",
      component: WeddingPage,
    },
    {
      path: "/product/:itemID",
      name: "product",
      props: true,
      component: ProductPage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/products",
      name: "products",
      component: ProductsPage,
    },
    {
      path: "/portofolio",
      name: "portofolio",
      component: PortfolioPage,
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminPage,
      meta: {
        hideNavAndFooter: true,
      },
    },
    {
      path: "/calendar",
      name: "calendar",
      component: CalendarPage,
      meta: {
        hideNavAndFooter: true,
      },
    },
    {
      path: "/portfolioAdmin",
      name: "portfolioAdmin",
      component: PortfolioAdminPage,
      meta: {
        hideNavAndFooter: true,
      },
    },
    {
      path: "/reservation",
      name: "reservation",
      component: ReservationPage,
      meta: {
        hideNavAndFooter: true,
      },
    },
    {
      path: "/album",
      name: "album",
      component: AlbumPage,
      meta: {
        hideNavAndFooter: true,
      },
    },
    {
      path: "/productOrder",
      name: "productOrder",
      component: ProductOrder,
      meta: {
        hideNavAndFooter: true,
      },
    },
  ],
});

export default mainRouter;
