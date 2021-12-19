import React from 'react'

export const Header: React.FC = () => {
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
            <a href="/" className="menu-item_link">
              Главная
            </a>
          </li>

          <li className="menu-item">
            <a href="/" className="menu-item_link">
              Файлы
            </a>
          </li>
        </ul>
      </nav>
      <div className="header-profile">
        <a href="/profile" className={'header-profile_link'}>
          <div className="profile-photo" />
          Nooo
        </a>
      </div>
    </header>
  )
}
