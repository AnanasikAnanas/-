import { CalendarDays, Clock, Settings, ShieldCheck } from "lucide-react";
import MiniStat from "./MiniStat.jsx";

const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

export default function SchedulePanel() {
  return (
    <div>
      <div className="panelHeader">
        <h2>Управление расписанием</h2>
        <button className="blueButton">Быстрая настройка</button>
      </div>

      <div className="miniStatsGrid four">
        <MiniStat value="5" label="рабочих дней" icon={CalendarDays} tone="blue" />
        <MiniStat value="40" label="часов в неделю" icon={Clock} tone="green" />
        <MiniStat value="0" label="перерывов" icon={ShieldCheck} tone="yellow" />
        <MiniStat value="30" label="минутный шаг" icon={Settings} tone="cyan" />
      </div>

      <div className="scheduleGrid">
        {days.map((day, index) => (
          <div key={day} className="dayCard">
            <div className="dayHeader">
              <h3>{day}</h3>
              <span className={index === 5 ? "dayBadge off" : "dayBadge"}>{index === 5 ? "Выходной" : "Рабочий"}</span>
            </div>
            <div className="timeGrid">
              <label>Начало работы<input type="time" defaultValue="09:00" /></label>
              <label>Конец работы<input type="time" defaultValue="18:00" /></label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
