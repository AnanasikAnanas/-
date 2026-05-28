import { BarChart3, BriefcaseBusiness, Megaphone, Percent, Users } from "lucide-react";
import EmptyState from "../common/EmptyState.jsx";
import MiniStat from "./MiniStat.jsx";

export default function AdsPanel() {
  return (
    <div>
      <div className="panelHeader">
        <h2>Реклама</h2>
        <button className="primaryButton">Создать рекламу</button>
      </div>

      <div className="miniStatsGrid four">
        <MiniStat value="0" label="активных кампаний" icon={BarChart3} tone="blue" />
        <MiniStat value="0 ₽" label="бюджет" icon={BriefcaseBusiness} tone="green" />
        <MiniStat value="0" label="кликов" icon={Users} tone="cyan" />
        <MiniStat value="0%" label="CTR" icon={Percent} tone="yellow" />
      </div>

      <div className="twoColumn">
        <EmptyState title="Реклама салона" text="У вас пока нет рекламных кампаний для салона." icon={Megaphone} />
        <EmptyState title="Реклама мастеров" text="У вас пока нет рекламных кампаний для мастеров." icon={Megaphone} />
      </div>
    </div>
  );
}
