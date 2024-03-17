import React from "react"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Introduce from "./component/Introduce.js";
import Members from "./component/Members.js";
import Activities from "./component/Activities.js";
import Test from "./component/test.js";

import Header from './Header.js';
import Footer from './Footer.js';

import data from "./base.json"
const pages = data["page"];
const members = data["member"];
const activities = data["activity"];

const Pages=[
  {
    page: <Introduce></Introduce>,
    path: pages["Introduce"].link
  },
  {
    page: <Members members={members}></Members>,
    path: pages["Members"].link
  },
  {
    page: <Activities></Activities>,
    path: pages["Activities"].link
  }
]

function Controller(){
    return(
      <Router>
        <Header pages={Object.values(pages)}></Header>
        <div id="web-body">
          <Routes>
            {Pages.map((p) => (
              <Route key={p.path} path={p.path} element={p.page} />
            ))}
          </Routes>
        </div>
        <Footer/>
      </Router>
    )
}

export default Controller;