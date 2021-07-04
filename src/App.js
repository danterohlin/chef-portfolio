import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import Contact from "./components/Contact";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/About" />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Post} path="/post" />
        <Route component={Project} path="/project" />
        <Route component={Contact} path="/Contact" />
        <Route component={SearchBar} path="/searchBar" />
        <Route component={SearchResult} path="/searchResult" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
