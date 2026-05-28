import { LogIn } from "lucide-react";
import { cabinetMenu } from "../../data.js";

export default function CabinetSidebar({ active, setActive, openAuth }) {
  return (
    <aside className="cabinetSidebar">
      <div className="profileCard">
        <div className="avatar">А</div>
        <div>
          <div className="profileName">Админ админов</div>
          <div className="profileRole">индивидуальный кабинет</div>
        </div>
      </div>

      <nav className="cabinetNav">
        {cabinetMenu.map((item) => {
          const Icon = item.icon;

          return (
            <button key={item.id} className={active === item.id ? "active" : ""} onClick={() => setActive(item.id)}>
              <Icon size={17} />
              {item.label}
            </button>
          );
        })}
        <button className="logoutButton" onClick={openAuth}>
          <LogIn size={17} />
          Выйти
        </button>
      </nav>
    </aside>
  );
}
