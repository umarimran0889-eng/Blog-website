import React from "react";
import AuthGuard from "./Authguard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ScrollToTop from "./ScrollToTop";

import HomePage from "./Homepage";
import Newspage from "./Newspage";
import Resourcepage from "./Resourcespage";
import Login from './LoginPages/Login';
import Signup from './LoginPages/Signup';
import Contactpage from "./Contactpage";
import PodcastPage from "./Podcastpage/Index";
import AdminDashboard from './Admin/AdminDashboard';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>

        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        <Route element={<Layout />}>

          <Route path="/" element={<HomePage />} />

          <Route element={<AuthGuard type="private" />}>
            <Route path="/news-page" element={<Newspage />} />
          </Route>

          <Route element={<AuthGuard type="private" />}>
            <Route path="/hero-res" element={<Resourcepage />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={<AuthGuard type="private" />}>
            <Route path="/contact-page" element={<Contactpage />} />
          </Route>

          <Route element={<AuthGuard type="private" />}>
            <Route path="/podcast-page" element={<PodcastPage />} />
          </Route>

        </Route>

      </Routes>

    </BrowserRouter>
  );
};

export default App;