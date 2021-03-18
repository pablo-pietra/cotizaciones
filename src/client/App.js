import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Blog from './pages/blog';
import Post from './pages/post';
import Investments from './pages/investments';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/blog/:slug" component={Post} />
        <Route path="/blog" component={Blog} />
        <Route path="/inversiones" component={Investments} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
