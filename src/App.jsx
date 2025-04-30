import React from "react";
import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
//import { createBrowserRouter, Route } from 'react-router'
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
//import { Link } from "react-router-dom";
import Addblock from "./routes/Addblock";
import Addflat from "./routes/Addflat";
import Navbar from "./components/Navbar";
import ReactJsAlert from "reactjs-alert";
import Fruits from "./components/Fruits";
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
  const [title, setTitle] = useState("This is a success alert")
  return (
    <div>
     {/* <div className="App"> <Sidebar /></div>*/}
      <div><Fruits /></div>
      </div>
  );
}
