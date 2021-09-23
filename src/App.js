import "./App.css";
import PostsPage from "./components/Pages/PostsPage";
import { BrowserRouter, Route } from "react-router-dom";
import PostPage from "./components/Pages/PostPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Route exact path="/">
          <PostsPage />
        </Route>
        <Route exact path="/:id">
          <PostPage />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
