import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home";
import GridPage from '../components/GridPage';
import ChartPage from '../components/ChartPage';
import FormsPage from '../components/FormsPage';
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    }
  ]
});
