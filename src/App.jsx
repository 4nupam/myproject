import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Nav from "./Component/Nav";
import Footer from "./Component/Footer";

const Login = lazy(() => import("./Component/Login"));
const Signup = lazy(() => import("./Component/Signup"));
const AboutMe = lazy(() => import("./Component/AboutMe"));
const Blog = lazy(() => import("./Component/Blog"));
const Tech = lazy(() => import("./Component/Categories/Tech"));
const Story = lazy(() => import("./Component/Categories/Story"));
const Travel = lazy(() => import("./Component/Categories/Travel"));
const Contact = lazy(() => import("./Component/Contact"));
const Dashboard = lazy(() => import("./Component/Dashboard"));
const Cart = lazy(() => import("./Component/Cart"));
const MyAccount = lazy(() => import("./Component/MyAccount"));
function App() {


  return (
    <>
      <Router>
        <Nav />
        <Suspense fallback={<div>Loading Page ....</div>}></Suspense>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Mywork" element={<Blog />} />
          <Route path="/Tech" element={<Tech />} />
          <Route path="/Story" element={<Story />} />
          <Route path="/Travel" element={<Travel />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/MyAccount" element={<MyAccount />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
