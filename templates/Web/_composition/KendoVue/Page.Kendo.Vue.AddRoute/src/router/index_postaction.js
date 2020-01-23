export default new Router({
  mode: "history",
  routes: [
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
  ]
});
