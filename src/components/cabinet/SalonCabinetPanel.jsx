import { BarChart3, BriefcaseBusiness, CalendarDays, Star } from "lucide-react";
import EmptyState from "../common/EmptyState.jsx";
import MiniStat from "./MiniStat.jsx";

export default function SalonCabinetPanel() {
  return (
    <div>
      <div className="panelHeader">
        <h2>Кабинет салона</h2>
        <button className="blueButton">Добавить сотрудника</button>
      </div>

      <div className="miniStatsGrid four">
        <MiniStat value="0" label="записей сегодня" icon={CalendarDays} tone="green" />
        <MiniStat value="0 ₽" label="записей на сумму" icon={BriefcaseBusiness} tone="violet" />
        <MiniStat value="0.0" label="средний рейтинг" icon={Star} tone="blue" />
        <MiniStat value="0%" label="конверсия" icon={BarChart3} tone="pink" />
      </div>

      <div className="salonDashboardGrid">
        <div className="softPanel">
          <h3>Записи сегодня</h3>
          <EmptyState title="На сегодня записей нет" text="Ожидайте актуальных записей клиентов." />
        </div>
        <div className="softPanel">
          <h3>Ближайшие записи</h3>
          <EmptyState title="Записей нет" text="После бронирования они появятся здесь." />
        </div>
      </div>

      <div className="softPanel">
        <h3>Добавить сотрудника</h3>
        <div className="formGrid two">
          {["Email", "Имя", "Фамилия", "Телефон", "Должность", "Ставка", "Пароль", "Повторите пароль"].map((field) => (
            <input key={field} placeholder={field} />
          ))}
        </div>
        <button className="blueButton">Добавить сотрудника</button>
      </div>
    </div>
  );
}
