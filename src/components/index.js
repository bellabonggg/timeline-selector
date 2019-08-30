import Vue from "vue";
import FlockBanner from "./Banner.vue";

const Components = {
  FlockBanner,
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;