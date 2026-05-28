import { useState } from "react";
import { X } from "lucide-react";

export default function AuthModal({ onClose }) {
  const [tab, setTab] = useState("login");
  const [role, setRole] = useState("client");

  return (
    <div className="modalOverlay">
      <div className="authModal">
        <div className="modalHeader">
          <div>
            <h2>Вход в Косметос</h2>
            <p>Авторизация и регистрация через модальное окно</p>
          </div>
          <button onClick={onClose}><X /></button>
        </div>

        <div className="authTabs">
          <button className={tab === "login" ? "active" : ""} onClick={() => setTab("login")}>Вход</button>
          <button className={tab === "register" ? "active" : ""} onClick={() => setTab("register")}>Регистрация</button>
          <button className={tab === "restore" ? "active" : ""} onClick={() => setTab("restore")}>Восстановить</button>
        </div>

        {tab === "login" && (
          <div className="formGrid one">
            <input placeholder="Email" />
            <input placeholder="Пароль" type="password" />
            <label className="checkboxLine">
              <span><input type="checkbox" /> Запомнить меня</span>
              <button>Забыли пароль?</button>
            </label>
            <button className="primaryButton">Войти</button>
          </div>
        )}

        {tab === "register" && (
          <div className="formGrid one">
            <div>
              <div className="formLabel">Вы регистрируетесь как:</div>
              <div className="roleGrid">
                <button className={role === "client" ? "active" : ""} onClick={() => setRole("client")}>Клиент</button>
                <button className={role === "ip" ? "active" : ""} onClick={() => setRole("ip")}>ИП</button>
                <button className={role === "ooo" ? "active" : ""} onClick={() => setRole("ooo")}>ООО</button>
              </div>
            </div>

            <div className="formGrid two">
              <input placeholder="ФИО" />
              <input placeholder="Email" />
              <input placeholder="+7 999 999-99-99" />
              <input placeholder="Пароль" type="password" />
              {role !== "client" && <input placeholder="ИНН" />}
              {role !== "client" && <input placeholder="ОГРН / ОГРНИП" />}
            </div>

            {role !== "client" && <textarea placeholder="Название компании и краткое описание для модерации" />}
            <label className="checkboxLine single"><input type="checkbox" /> Я согласен с условиями сервиса и политикой конфиденциальности</label>
            <button className="primaryButton">Далее</button>
          </div>
        )}

        {tab === "restore" && (
          <div className="formGrid one">
            <input placeholder="Email для восстановления" />
            <button className="primaryButton">Отправить ссылку</button>
          </div>
        )}
      </div>
    </div>
  );
}
