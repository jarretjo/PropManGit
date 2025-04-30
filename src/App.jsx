import React from "react";
import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
//import { createBrowserRouter, Route } from 'react-router'
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
//import { Link } from "react-router-dom";
import Addblock from "./pages/Addblock";
import Addflat from "./pages/Addflat";
import Navbar from "./components/Navbar";
import ReactJsAlert from "reactjs-alert";
//import  BrowserRouter from 'react-router-dom';
//mport { Router } from 'express'
import {
  BrowserRouter as Router,
  Routes, // instead of "Switch"
  Route,
  Link,
} from "react-router-dom";

export default function App() {
  const [status, setStatus] = useState(false);
  const [type, setType] = useState("success");
  const [title, setTitle] = useState("This is a success alert");
  return (
    <div className="App">
    {/*  <Topbar /> */}
    <button
        onClick={() => {
          setStatus(true);
          setType("success");
          setTitle("This is a success alert");
        }}
      >
        Show Alert
      </button>
      <ReactJsAlert
        status={status}
        type={type}
        title={title}
        Close={() => setStatus(false)}
      />
      <Sidebar />
    </div>
  );
}
