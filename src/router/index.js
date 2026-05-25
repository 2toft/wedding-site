import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WeddingInfoView from "../views/WeddingInfoView.vue";
import TransportationView from "../views/TransportationView.vue";
import AccommodationView from "../views/AccommodationView.vue";
import GiftView from "../views/GiftView.vue";
import RsvpView from "../views/RsvpView.vue";
import ContactView from "../views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/info",
      name: "info",
      component: WeddingInfoView,
    },
    {
      path: "/transportation",
      name: "transportation",
      component: TransportationView,
    },
    {
      path: "/accommodation",
      name: "accommodation",
      component: AccommodationView,
    },
    {
      path: "/gifts",
      name: "gifts",
      component: GiftView,
    },
    {
      path: "/rsvp",
      name: "rsvp",
      component: RsvpView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
