//import React, { Component, useEffect, useState } from "react";
import "reset-css";
import NavbarScroller from "./components/Navbar";
import {
  BrowserRouter as Router,
  //Navigate,
  Route,
  Routes,
  //useNavigate,
} from "react-router-dom";
import Claims from "./components/claims/Claims";
import { Profile } from "./components/profile/Profile";
import { Discussions } from "./components/discussion-board/discussion-home/Discussions";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { User } from "./redux/actions";
import { StoreState } from "./redux/reducers";
import { connect, useSelector } from "react-redux";
import { Logout } from "./components/login/Logout";
import { CommentThread } from "./components/discussion-board/discussion-home/comments-subject";
import './colors.scss';

const navigationLogged = {
  brandLogged: { name: "HealthCache", to: "/" },
  linksLogged: [
    { name: "Profile", to: "/Profile" },
    { name: "File Claim", to: "/FileClaim" },
    { name: "Discussion Board", to: "/Discussion" },
    { name: "Logout", to: "/Logout" },
  ],
};

const navigationNotLogged = {
  brand: { name: "HealthCache", to: "/" },
  links: [
    { name: "Login", to: "/Login" },
    { name: "Register", to: "/Register" },
    { name: "FileClaim", to: "/FileClaim" },
    { name: "Discussion Board", to: "/Discussion" },
  ],
};

const _App: React.FC<any> = (props) => {
  const { brandLogged, linksLogged } = navigationLogged;
  const { brand, links } = navigationNotLogged;
  const appState = useSelector<any, any>((state) => state);

  return (
    <div className="App">
      <Router>
        {appState.userLogin.user_id === 0 ? (
          <NavbarScroller brand={brand} links={links} />
        ) : (
          <NavbarScroller brand={brandLogged} links={linksLogged} />
        )}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/FileClaim" element={<Claims />} />
          <Route path="/Discussion" element={<Discussions />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path = "/DiscussionView" element={<CommentThread />} />
          <Route path="/Recent" element={<Discussions />} />
        </Routes>
      </Router>
    </div>
  );
};

const mapStateToProps = ({ userLogin }: StoreState): { userLogin: User } => {
  return { userLogin };
};

export const App = connect(mapStateToProps, {})(_App);
