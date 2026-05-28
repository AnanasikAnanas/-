import { BadgeCheck, CalendarDays, MessageSquareText, Plus } from "lucide-react";
import EmptyState from "../common/EmptyState.jsx";
import MiniStat from "./MiniStat.jsx";

export default function AppointmentsPanel() {
  return (
    <div>
      <div className="panelHeader">
        <h2>Мои записи</h2>
        <button className="primaryButton"><Plus size={16} /> Новая запись</button>
      </div>

      <div className="tabs">
        {["Предстоящие", "Завершенные", "Отмененные", "Все записи"].map((tab, index) => (
          <button key={tab} className={index === 0 ? "active" : ""}>{tab}</button>
        ))}
      </div>

      <EmptyState title="Записей пока нет" text="Запишитесь к мастеру, чтобы увидеть их здесь." />

      <div className="miniStatsGrid">
        <MiniStat value="0" label="Предстоящих записей" icon={CalendarDays} tone="blue" />
        <MiniStat value="0" label="Завершенных записей" icon={BadgeCheck} tone="green" />
        <MiniStat value="0" label="Оставленных отзывов" icon={MessageSquareText} tone="pink" />
      </div>
    </div>
  );
}
