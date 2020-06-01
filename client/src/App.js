import React, { useState, useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Articles from "./components/Articles";
import AddArticle from "./components/AddArticle";
import Article from "./components/Article";
import EditArticle from "./components/EditArticle";
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://tech-blog1.herokuapp.com/articles")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className='App'>
      <Header />
      <Navbar />
      <Route exact path='/' render={() => <Articles posts={posts} />} />
      <Route
        exact
        path='/articles/:id'
        render={(props) => <Article {...props} />}
      />
      <Route
        exact
        path='/edit-article/:id'
        render={(props) => <EditArticle {...props} />}
      />
      <Route exact path='/add-article' component={AddArticle} />
      <Footer />
    </div>
  );
}

export default App;
