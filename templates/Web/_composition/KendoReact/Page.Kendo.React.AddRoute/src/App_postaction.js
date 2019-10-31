function App() {
  return (
    <Router>
        <div className="content">
          <Header projectName={'Project Name'} />
          <Route exact path="/" component={Home} />
          //^^
          //{[{
          <Route path = "/wts.ItemName" component={wts.ItemName} />
          //}]}
        </div>
        <div className="footer">
          <Footer />
        </div>
    </Router>
  );
}