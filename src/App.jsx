import React from "react";
import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
//import { createBrowserRouter, Route } from 'react-router'
import Sidebar from "./components/Sidebar";
//import { Link } from "react-router-dom";
import Addblock from "./pages/Addblock";
import Addflat from "./pages/Addflat";
import Navbar from "./components/Navbar";
//import  BrowserRouter from 'react-router-dom';
//mport { Router } from 'express'
import {
  BrowserRouter as Router,
  Routes, // instead of "Switch"
  Route,
  Link,
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Sidebar />
    </div>
  );
}
