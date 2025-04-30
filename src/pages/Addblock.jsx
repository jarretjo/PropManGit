import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Addblock() {
  return (
    <div className="flex gap-2">
      <div className="flex felx-col gap-2">
        <h1>ADD A BLOCKssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</h1>
        <Outlet />
      </div>
    </div>
  );
}
