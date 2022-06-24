import Header from "./components/Header";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import BlogDetail from "./components/BlogDetail";
import UserBlogs from "./components/UserBlogs";
import AddBlog from "./components/AddBlog";
import Blogs from "./components/Blogs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authActions } from "./store";
import Frontpage from "./components/Frontpage";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(authActions.login())
    }
  }, [dispatch]);
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
        <Route path="/" element ={ <Frontpage/> }/>

          {!isLoggedIn ? (
            <Route path="/auth" element={<Auth />} />

          ) : (
            <>
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/myBlogs" element={<UserBlogs />} />
              <Route path="/myBlogs/:id" element={<BlogDetail />} />
              <Route path="blogs/add" element={<AddBlog />} />
              
            </>
          )}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
