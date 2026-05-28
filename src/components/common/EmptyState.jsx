import { CalendarDays } from "lucide-react";

export default function EmptyState({ title, text, icon: Icon = CalendarDays }) {
  return (
    <div className="emptyState">
      <div>
        <div className="emptyIcon">
          <Icon size={28} />
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
