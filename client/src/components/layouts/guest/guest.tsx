import React from "react";
import { Outlet } from "react-router-dom";
import "../../../assets/styles/layouts/guest.scss";

export const Guest: React.FC = React.memo(({}) => {
  return (
    <div className="guest-container">
      <div className="header"></div>
      <Outlet />
    </div>
  );
});
