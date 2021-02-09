const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  }
  //^^
  //{[{
  ,{
    path: "/Param_SourceName_Pascal",
    name: "Param_SourceName_Pascal",
    component: Param_SourceName_Pascal
  }
  //}]}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
