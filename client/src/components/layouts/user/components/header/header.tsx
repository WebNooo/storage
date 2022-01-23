import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = React.memo(() => {
  return (
    <header className="header">
      <div className="header-logo">
        <a href="/" className="header-logo_link">
          iManager
        </a>
      </div>
      <nav className="header-menu">
        <ul className="header-menu_list">
          <li className="menu-item">
            <Link to="/" className="menu-item_link">
              Главная
            </Link>
          </li>

          <li className="menu-item">
            <Link to="/files" className="menu-item_link">
              Файлы
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header-profile">
        <Link to="/profile" className={"header-profile_link"}>
          <div className="profile-photo" />
          Nooo
        </Link>
      </div>
    </header>
  );
});
