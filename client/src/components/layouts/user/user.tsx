import React from "react";
import { FileManager } from "../../ui";
import { Header, Footer } from "./components";

import "../../../assets/styles/layouts/user.scss";
import { Outlet } from "react-router-dom";

export const User: React.FC<{ title?: string }> = React.memo(
  ({ title = "Файлы" }) => {
    return (
      <div className="container">
        <Header />
        <main className="content">
          {/* <div className="content_title">{title}</div> */}
          <div className="content_body">
            {/* <FileManager /> */}
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
);
