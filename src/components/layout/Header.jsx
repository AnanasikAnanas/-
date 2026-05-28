import { useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";
import { navItems } from "../../data.js";

export default function Header({ page, setPage, openAuth }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (nextPage) => {
    setPage(nextPage);
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="headerInner">
        <button className="logo" onClick={() => handleNavigate("home")}>
          <span className="logoIcon">
            <Sparkles size={20} />
          </span>
          <span>Косметос</span>
        </button>

        <nav className="nav">
          {navItems.map((item) => (
            <button key={item.id} className={page === item.id ? "navLink active" : "navLink"} onClick={() => handleNavigate(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="headerActions">
          <button className="outlineButton" onClick={openAuth}>Личный кабинет</button>
          <button className="primaryButton" onClick={openAuth}>Кабинет салона</button>
        </div>

        <button className="mobileMenuButton" onClick={() => setIsOpen((value) => !value)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="mobileMenu">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => handleNavigate(item.id)}>{item.label}</button>
          ))}
          <button className="primaryButton" onClick={openAuth}>Войти</button>
        </div>
      )}
    </header>
  );
}
