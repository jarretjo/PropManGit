import React from "react"
import "../App.css"
import {SidebarData} from "./SidebarData"
import { Navigate } from "react-router";


function Sidebar() {
    return  (
        <div className="Sidebar">
          <ul className="SidebarList">
            {SidebarData.map((val,key) => {
              return (
                <li 
                    key={key} 
                    className="row"
                    if={window.location.pathname == val.link ? "active" : ""}
                    onClick={() => {
                       window.location.pathname = val.link;
                    }} 
                  
                 /* onClick={() => {console.log('I worked!!')}} */
                >
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
                </li>
              );
            })};
          </ul>
        </div>
    );
}

export default Sidebar